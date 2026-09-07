
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const googleSheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!googleSheetsUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Google Sheets connection is not configured.",
        },
        { status: 500 }
      );
    }

    // Staff validation
    if (!body.staffId) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a staff member.",
        },
        { status: 400 }
      );
    }

    if (!body.staffName) {
      return NextResponse.json(
        {
          success: false,
          message: "Staff name is required.",
        },
        { status: 400 }
      );
    }

    // Amount validation
    const amount = Number(
      String(body.amount || "").replace(/,/g, "")
    );

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid payment amount.",
        },
        { status: 400 }
      );
    }

    // Payment method validation
    if (
      body.paymentMethod !== "mobile" &&
      body.paymentMethod !== "bank"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment method.",
        },
        { status: 400 }
      );
    }

    // Mobile Money validation
    if (body.paymentMethod === "mobile") {
      if (
        !body.mobileNetwork ||
        !body.mobileNumber ||
        !body.mobileName
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Complete the Mobile Money details.",
          },
          { status: 400 }
        );
      }
    }

    // Bank validation
    if (body.paymentMethod === "bank") {
      if (
        !body.bankName ||
        !body.accountNumber ||
        !body.accountName
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Complete the bank details.",
          },
          { status: 400 }
        );
      }
    }

    // Confirmation validation
    if (!body.confirmation) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please confirm that the information is correct.",
        },
        { status: 400 }
      );
    }

    // Data sent to Google Sheets
    const googleData = {
      staffId: body.staffId,
      staffName: body.staffName,
      position: body.position || "",
      phone: body.phone || "",
      email: body.email || "",
      amount: amount,

      paymentMethod: body.paymentMethod,

      mobileNetwork: body.mobileNetwork || "",
      mobileNumber: body.mobileNumber || "",
      mobileName: body.mobileName || "",

      bankName: body.bankName || "",
      accountNumber: body.accountNumber || "",
      accountName: body.accountName || "",
    };

    const googleResponse = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(googleData),
      cache: "no-store",
    });

    const responseText = await googleResponse.text();

    let googleResult;

    try {
      googleResult = JSON.parse(responseText);
    } catch {
      console.error(
        "Invalid Google response:",
        responseText
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Google Sheets returned an invalid response.",
        },
        { status: 500 }
      );
    }

    if (!googleResponse.ok || !googleResult.success) {
      console.error(
        "Google Sheets error:",
        googleResult
      );

      return NextResponse.json(
        {
          success: false,
          message:
            googleResult.message ||
            "Unable to save the payment request.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Payment request submitted successfully.",
        requestId: googleResult.requestId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Staff payment error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
