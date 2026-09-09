
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {

    const googleSheetsUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!googleSheetsUrl) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Google Sheets connection is not configured.",
        },
        { status: 500 }
      );
    }


    const body =
      await request.json();


    // -----------------------------------------
    // BASIC VALIDATION
    // -----------------------------------------

    if (!body.staffId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Staff ID is required.",
        },
        { status: 400 }
      );
    }


    if (!body.staffName) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Staff name is required.",
        },
        { status: 400 }
      );
    }


    const amount =
      Number(body.amount);


    if (
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "A valid payment amount is required.",
        },
        { status: 400 }
      );
    }


    if (!body.paymentMethod) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Payment method is required.",
        },
        { status: 400 }
      );
    }


    // -----------------------------------------
    // SEND TO GOOGLE APPS SCRIPT
    // -----------------------------------------

    const googleResponse =
      await fetch(
        googleSheetsUrl,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(body),

          cache: "no-store",

          redirect: "follow",
        }
      );


    const responseText =
      await googleResponse.text();


    // -----------------------------------------
    // PARSE GOOGLE RESPONSE
    // -----------------------------------------

    let googleResult: {
      success?: boolean;
      alreadySubmitted?: boolean;
      message?: string;
      requestId?: string;
    };


    try {

      googleResult =
        JSON.parse(
          responseText
        );

    } catch {

      console.error(
        "Google Sheets returned:",
        responseText
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Google Sheets returned an invalid response.",
        },
        { status: 502 }
      );

    }


    // -----------------------------------------
    // ALREADY SUBMITTED
    // -----------------------------------------

    if (
      googleResult.alreadySubmitted
    ) {

      return NextResponse.json(
        {
          success: false,

          alreadySubmitted:
            true,

          message:
            googleResult.message ||
            "You already submitted a payment request that is still pending approval.",

        },
        { status: 409 }
      );

    }


    // -----------------------------------------
    // GOOGLE ERROR
    // -----------------------------------------

    if (
      !googleResponse.ok ||
      !googleResult.success
    ) {

      return NextResponse.json(
        {
          success: false,

          message:
            googleResult.message ||
            "Unable to submit payment request.",

        },
        {
          status:
            googleResponse.status >= 400
              ? googleResponse.status
              : 500,
        }
      );

    }


    // -----------------------------------------
    // SUCCESS
    // -----------------------------------------

    return NextResponse.json(
      {
        success: true,

        message:
          googleResult.message ||
          "Payment request submitted successfully.",

        requestId:
          googleResult.requestId ||
          "",

      },
      { status: 200 }
    );


  } catch (error) {

    console.error(
      "STAFF PAYMENT ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error instanceof Error
            ? error.message
            : "Unable to submit payment request.",

      },
      { status: 500 }
    );

  }
}
