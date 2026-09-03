module.exports = [
"[project]/.next-internal/server/app/api/withdrawal/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/withdrawal/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
function generateRequestId() {
    const now = new Date();
    const date = now.toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
    const random = Math.floor(1000 + Math.random() * 9000);
    return `YPA-WD-${date}-${random}`;
}
async function POST(request) {
    try {
        /*
     * Get Google Apps Script URL
     */ const googleSheetsUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;
        if (!googleSheetsUrl) {
            console.error("GOOGLE_SHEETS_WEB_APP_URL is missing.");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Withdrawal service is not configured. Please contact YPA Wealth Depot."
            }, {
                status: 500
            });
        }
        /*
     * Read submitted data
     */ const data = await request.json();
        /*
     * Validate basic member information
     */ if (!data.firstName || !data.lastName || !data.phone || !data.amount || !data.withdrawalMethod) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Please complete all required withdrawal information."
            }, {
                status: 400
            });
        }
        /*
     * Validate amount
     */ const amount = Number(data.amount);
        if (!Number.isFinite(amount) || amount <= 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Please enter a valid withdrawal amount."
            }, {
                status: 400
            });
        }
        /*
     * Validate confirmation
     */ if (!data.confirmation) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Please confirm that the information provided is correct."
            }, {
                status: 400
            });
        }
        /*
     * Validate Mobile Money
     */ if (data.withdrawalMethod === "mobile") {
            if (!data.network || !data.mobileNumber || !data.mobileName) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Please complete all Mobile Money payment details."
                }, {
                    status: 400
                });
            }
        }
        /*
     * Validate Bank
     */ if (data.withdrawalMethod === "bank") {
            if (!data.bankName || !data.accountName || !data.accountNumber) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Please complete all bank account details."
                }, {
                    status: 400
                });
            }
        }
        /*
     * Generate unique request ID
     */ const requestId = generateRequestId();
        /*
     * Combine first and last name
     */ const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`;
        /*
     * Prepare data for Google Sheets
     */ const sheetData = {
            requestId,
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim(),
            fullName,
            phone: data.phone.trim(),
            amount,
            withdrawalMethod: data.withdrawalMethod,
            network: data.withdrawalMethod === "mobile" ? data.network?.trim() || "" : "",
            mobileNumber: data.withdrawalMethod === "mobile" ? data.mobileNumber?.trim() || "" : "",
            mobileName: data.withdrawalMethod === "mobile" ? data.mobileName?.trim() || "" : "",
            bankName: data.withdrawalMethod === "bank" ? data.bankName?.trim() || "" : "",
            accountName: data.withdrawalMethod === "bank" ? data.accountName?.trim() || "" : "",
            accountNumber: data.withdrawalMethod === "bank" ? data.accountNumber?.trim() || "" : "",
            reason: data.reason?.trim() || "",
            status: "Pending",
            submittedAt: new Date().toISOString()
        };
        /*
     * Send information to Google Sheets
     */ const googleResponse = await fetch(googleSheetsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sheetData),
            cache: "no-store"
        });
        /*
     * Read Google response
     */ let googleResult = {};
        try {
            googleResult = await googleResponse.json();
        } catch  {
            googleResult = {};
        }
        /*
     * Google Sheets failed
     */ if (!googleResponse.ok || googleResult.success === false) {
            console.error("Google Sheets error:", googleResult);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: googleResult.message || "Your withdrawal request could not be submitted. Please try again."
            }, {
                status: 502
            });
        }
        /*
     * Successful submission
     */ return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Withdrawal request submitted successfully.",
            requestId
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Withdrawal API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "An unexpected error occurred while submitting your withdrawal request."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d55cb731._.js.map