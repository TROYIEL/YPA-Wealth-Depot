import { NextResponse } from "next/server";

type WithdrawalData = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  amount?: number | string;

  withdrawalMethod?: "mobile" | "bank";

  network?: string;
  mobileNumber?: string;
  mobileName?: string;

  bankName?: string;
  accountName?: string;
  accountNumber?: string;

  reason?: string;
  confirmation?: boolean;
};

function generateRequestId() {
  const now = new Date();

  const date = now
    .toISOString()
    .replace(/[-:TZ.]/g, "")
    .slice(0, 14);

  const random = Math.floor(1000 + Math.random() * 9000);

  return `YPA-WD-${date}-${random}`;
}

export async function POST(request: Request) {
  try {
    /*
     * Get Google Apps Script URL
     */
    const googleSheetsUrl =
      process.env.GOOGLE_SHEETS_WEB_APP_URL;

    if (!googleSheetsUrl) {
      console.error(
        "GOOGLE_SHEETS_WEB_APP_URL is missing."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Withdrawal service is not configured. Please contact YPA Wealth Depot.",
        },
        { status: 500 }
      );
    }

    /*
     * Read submitted data
     */
    const data: WithdrawalData = await request.json();

    /*
     * Validate basic member information
     */
    if (
      !data.firstName ||
      !data.lastName ||
      !data.phone ||
      !data.amount ||
      !data.withdrawalMethod
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required withdrawal information.",
        },
        { status: 400 }
      );
    }

    /*
     * Validate amount
     */
    const amount = Number(data.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid withdrawal amount.",
        },
        { status: 400 }
      );
    }

    /*
     * Validate confirmation
     */
    if (!data.confirmation) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please confirm that the information provided is correct.",
        },
        { status: 400 }
      );
    }

    /*
     * Validate Mobile Money
     */
    if (data.withdrawalMethod === "mobile") {
      if (
        !data.network ||
        !data.mobileNumber ||
        !data.mobileName
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Please complete all Mobile Money payment details.",
          },
          { status: 400 }
        );
      }
    }

    /*
     * Validate Bank
     */
    if (data.withdrawalMethod === "bank") {
      if (
        !data.bankName ||
        !data.accountName ||
        !data.accountNumber
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Please complete all bank account details.",
          },
          { status: 400 }
        );
      }
    }

    /*
     * Generate unique request ID
     */
    const requestId = generateRequestId();

    /*
     * Combine first and last name
     */
    const fullName =
      `${data.firstName.trim()} ${data.lastName.trim()}`;

    /*
     * Prepare data for Google Sheets
     */
    const sheetData = {
      requestId,

      firstName: data.firstName.trim(),

      lastName: data.lastName.trim(),

      fullName,

      phone: data.phone.trim(),

      amount,

      withdrawalMethod:
        data.withdrawalMethod,

      network:
        data.withdrawalMethod === "mobile"
          ? data.network?.trim() || ""
          : "",

      mobileNumber:
        data.withdrawalMethod === "mobile"
          ? data.mobileNumber?.trim() || ""
          : "",

      mobileName:
        data.withdrawalMethod === "mobile"
          ? data.mobileName?.trim() || ""
          : "",

      bankName:
        data.withdrawalMethod === "bank"
          ? data.bankName?.trim() || ""
          : "",

      accountName:
        data.withdrawalMethod === "bank"
          ? data.accountName?.trim() || ""
          : "",

      accountNumber:
        data.withdrawalMethod === "bank"
          ? data.accountNumber?.trim() || ""
          : "",

      reason: data.reason?.trim() || "",

      status: "Pending",

      submittedAt: new Date().toISOString(),
    };

    /*
     * Send information to Google Sheets
     */
    const googleResponse = await fetch(
      googleSheetsUrl,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(sheetData),

        cache: "no-store",
      }
    );

    /*
     * Read Google response
     */
    let googleResult: {
      success?: boolean;
      message?: string;
    } = {};

    try {
      googleResult =
        await googleResponse.json();
    } catch {
      googleResult = {};
    }

    /*
     * Google Sheets failed
     */
    if (
      !googleResponse.ok ||
      googleResult.success === false
    ) {
      console.error(
        "Google Sheets error:",
        googleResult
      );

      return NextResponse.json(
        {
          success: false,
          message:
            googleResult.message ||
            "Your withdrawal request could not be submitted. Please try again.",
        },
        { status: 502 }
      );
    }

    /*
     * Successful submission
     */
    return NextResponse.json(
      {
        success: true,

        message:
          "Withdrawal request submitted successfully.",

        requestId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Withdrawal API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred while submitting your withdrawal request.",
      },
      { status: 500 }
    );
  }
}