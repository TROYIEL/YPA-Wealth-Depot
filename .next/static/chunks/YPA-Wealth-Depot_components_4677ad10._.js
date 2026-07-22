(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/YPA-Wealth-Depot/components/ui/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Container(param) {
    let { children, className = "" } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-6 lg:px-8 ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/YPA-Wealth-Depot/components/ui/Container.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaccoLoanCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/components/ui/Container.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const UGX_FORMATTER = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    maximumFractionDigits: 0
});
function toNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
}
function formatDate(date) {
    return date.toLocaleDateString("en-UG", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}
function addMonths(base, months) {
    const dueDate = new Date(base);
    dueDate.setMonth(dueDate.getMonth() + months);
    return dueDate;
}
function createSchedule(amount, annualRate, termMonths, method) {
    const monthlyRate = annualRate / 100 / 12;
    let openingBalance = amount;
    const startDate = new Date();
    const schedule = [];
    if (termMonths <= 0 || amount <= 0) {
        return schedule;
    }
    if (method === "flat") {
        const principalPerMonth = amount / termMonths;
        const monthlyInterest = amount * monthlyRate;
        for(let installment = 1; installment <= termMonths; installment += 1){
            const principal = installment === termMonths ? openingBalance : principalPerMonth;
            const payment = principal + monthlyInterest;
            const closingBalance = Math.max(0, openingBalance - principal);
            schedule.push({
                installment,
                dueDate: formatDate(addMonths(startDate, installment)),
                openingBalance,
                principal,
                interest: monthlyInterest,
                payment,
                closingBalance
            });
            openingBalance = closingBalance;
        }
        return schedule;
    }
    const monthlyPayment = monthlyRate === 0 ? amount / termMonths : amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -termMonths));
    for(let installment = 1; installment <= termMonths; installment += 1){
        const interest = openingBalance * monthlyRate;
        const principal = installment === termMonths ? openingBalance : Math.min(openingBalance, monthlyPayment - interest);
        const payment = principal + interest;
        const closingBalance = Math.max(0, openingBalance - principal);
        schedule.push({
            installment,
            dueDate: formatDate(addMonths(startDate, installment)),
            openingBalance,
            principal,
            interest,
            payment,
            closingBalance
        });
        openingBalance = closingBalance;
    }
    return schedule;
}
function createScheduleTableHtml(schedule) {
    const rows = schedule.map((item)=>"\n      <tr>\n        <td>".concat(item.installment, "</td>\n        <td>").concat(item.dueDate, "</td>\n        <td>").concat(UGX_FORMATTER.format(item.openingBalance), "</td>\n        <td>").concat(UGX_FORMATTER.format(item.principal), "</td>\n        <td>").concat(UGX_FORMATTER.format(item.interest), "</td>\n        <td>").concat(UGX_FORMATTER.format(item.payment), "</td>\n        <td>").concat(UGX_FORMATTER.format(item.closingBalance), "</td>\n      </tr>")).join("");
    return '\n    <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">\n      <thead>\n        <tr>\n          <th>Installment</th>\n          <th>Due Date</th>\n          <th>Opening Balance</th>\n          <th>Principal</th>\n          <th>Interest</th>\n          <th>Payment</th>\n          <th>Closing Balance</th>\n        </tr>\n      </thead>\n      <tbody>'.concat(rows, "</tbody>\n    </table>\n  ");
}
function SaccoLoanCalculator() {
    _s();
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("5000000");
    const [interestRate, setInterestRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("16");
    const [loanTermMonths, setLoanTermMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("24");
    const [repaymentMethod, setRepaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("reducing");
    const amount = toNumber(loanAmount);
    const annualRate = toNumber(interestRate);
    const termMonths = Math.floor(toNumber(loanTermMonths));
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SaccoLoanCalculator.useMemo[errors]": ()=>{
            const messages = [];
            if (amount <= 0) {
                messages.push("Loan amount must be greater than zero.");
            }
            if (annualRate < 0 || annualRate > 100) {
                messages.push("Interest rate must be between 0% and 100%.");
            }
            if (termMonths <= 0 || termMonths > 600) {
                messages.push("Loan term must be between 1 and 600 months.");
            }
            return messages;
        }
    }["SaccoLoanCalculator.useMemo[errors]"], [
        amount,
        annualRate,
        termMonths
    ]);
    const schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SaccoLoanCalculator.useMemo[schedule]": ()=>{
            if (errors.length > 0) {
                return [];
            }
            return createSchedule(amount, annualRate, termMonths, repaymentMethod);
        }
    }["SaccoLoanCalculator.useMemo[schedule]"], [
        amount,
        annualRate,
        termMonths,
        repaymentMethod,
        errors
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SaccoLoanCalculator.useMemo[totals]": ()=>{
            var _schedule_, _schedule_1, _schedule_2;
            const totalInterest = schedule.reduce({
                "SaccoLoanCalculator.useMemo[totals].totalInterest": (sum, item)=>sum + item.interest
            }["SaccoLoanCalculator.useMemo[totals].totalInterest"], 0);
            const totalRepayment = schedule.reduce({
                "SaccoLoanCalculator.useMemo[totals].totalRepayment": (sum, item)=>sum + item.payment
            }["SaccoLoanCalculator.useMemo[totals].totalRepayment"], 0);
            var _schedule__payment;
            const monthlyPayment = (_schedule__payment = (_schedule_ = schedule[0]) === null || _schedule_ === void 0 ? void 0 : _schedule_.payment) !== null && _schedule__payment !== void 0 ? _schedule__payment : 0;
            var _schedule__interest;
            const monthlyInterest = (_schedule__interest = (_schedule_1 = schedule[0]) === null || _schedule_1 === void 0 ? void 0 : _schedule_1.interest) !== null && _schedule__interest !== void 0 ? _schedule__interest : 0;
            var _schedule__dueDate;
            return {
                principal: amount,
                monthlyPayment,
                monthlyInterest,
                totalInterest,
                totalRepayment,
                dueDate: (_schedule__dueDate = (_schedule_2 = schedule[0]) === null || _schedule_2 === void 0 ? void 0 : _schedule_2.dueDate) !== null && _schedule__dueDate !== void 0 ? _schedule__dueDate : "-"
            };
        }
    }["SaccoLoanCalculator.useMemo[totals]"], [
        amount,
        schedule
    ]);
    const exportPdf = ()=>{
        if (schedule.length === 0) {
            return;
        }
        const printWindow = window.open("", "_blank", "width=1024,height=768");
        if (!printWindow) {
            return;
        }
        printWindow.document.write('\n      <html>\n        <head>\n          <title>SACCO Loan Repayment Schedule</title>\n        </head>\n        <body style="font-family: Arial, sans-serif; padding: 24px;">\n          <h1>SACCO Loan Repayment Schedule</h1>\n          '.concat(createScheduleTableHtml(schedule), "\n        </body>\n      </html>\n    "));
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };
    const downloadExcel = ()=>{
        if (schedule.length === 0) {
            return;
        }
        const tableHtml = createScheduleTableHtml(schedule);
        const blob = new Blob([
            tableHtml
        ], {
            type: "application/vnd.ms-excel"
        });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "sacco-loan-schedule.xls";
        anchor.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-slate-50 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl bg-white shadow-lg border border-slate-200 p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sky-600 font-semibold uppercase tracking-widest text-sm",
                                children: "Loan Tools"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-black text-slate-900",
                                children: "SACCO Loan Calculator"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600",
                                children: "Estimate repayments in real-time for flat rate and reducing balance loans."
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-2 text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Loan Amount (UGX)"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        value: loanAmount,
                                        onChange: (event)=>setLoanAmount(event.target.value),
                                        className: "rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-2 text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Interest Rate (%)"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0",
                                        max: "100",
                                        step: "0.01",
                                        value: interestRate,
                                        onChange: (event)=>setInterestRate(event.target.value),
                                        className: "rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-2 text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Loan Term (Months)"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        max: "600",
                                        value: loanTermMonths,
                                        onChange: (event)=>setLoanTermMonths(event.target.value),
                                        className: "rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-2 text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Repayment Method"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: repaymentMethod,
                                        onChange: (event)=>setRepaymentMethod(event.target.value),
                                        className: "rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "flat",
                                                children: "Flat Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "reducing",
                                                children: "Reducing Balance"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700",
                        role: "alert",
                        "aria-live": "polite",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc list-inside space-y-1",
                            children: errors.map((error)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: error
                                }, error, false, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                    lineNumber: 313,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                            lineNumber: 311,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                        lineNumber: 310,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8",
                        children: [
                            [
                                [
                                    "Monthly Payment",
                                    totals.monthlyPayment
                                ],
                                [
                                    "Principal",
                                    totals.principal
                                ],
                                [
                                    "Interest",
                                    totals.monthlyInterest
                                ],
                                [
                                    "Total Interest",
                                    totals.totalInterest
                                ],
                                [
                                    "Total Repayment",
                                    totals.totalRepayment
                                ]
                            ].map((param)=>{
                                let [label, value] = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-slate-200 p-4 bg-slate-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-900 text-2xl font-bold mt-2",
                                            children: UGX_FORMATTER.format(Number(value))
                                        }, void 0, false, {
                                            fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, String(label), true, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-slate-200 p-4 bg-slate-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm",
                                        children: "Payment Due Date"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-900 text-2xl font-bold mt-2",
                                        children: totals.dueDate
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.print(),
                                className: "rounded-full bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-700 transition",
                                children: "Print Schedule"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: exportPdf,
                                className: "rounded-full bg-sky-600 text-white px-5 py-2.5 font-semibold hover:bg-sky-700 transition",
                                children: "Export PDF"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: downloadExcel,
                                className: "rounded-full bg-emerald-600 text-white px-5 py-2.5 font-semibold hover:bg-emerald-700 transition",
                                children: "Download Excel"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 overflow-auto rounded-xl border border-slate-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                    className: "sr-only",
                                    children: "Loan amortization schedule"
                                }, void 0, false, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-100 text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-4 py-3 text-left",
                                                children: "Installment"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-4 py-3 text-left",
                                                children: "Due Date"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-4 py-3 text-left",
                                                children: "Opening"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-4 py-3 text-left",
                                                children: "Principal"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-4 py-3 text-left",
                                                children: "Interest"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-4 py-3 text-left",
                                                children: "Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "px-4 py-3 text-left",
                                                children: "Closing"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: schedule.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-t border-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3",
                                                    children: item.installment
                                                }, void 0, false, {
                                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3",
                                                    children: item.dueDate
                                                }, void 0, false, {
                                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3",
                                                    children: UGX_FORMATTER.format(item.openingBalance)
                                                }, void 0, false, {
                                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3",
                                                    children: UGX_FORMATTER.format(item.principal)
                                                }, void 0, false, {
                                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3",
                                                    children: UGX_FORMATTER.format(item.interest)
                                                }, void 0, false, {
                                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 font-semibold",
                                                    children: UGX_FORMATTER.format(item.payment)
                                                }, void 0, false, {
                                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3",
                                                    children: UGX_FORMATTER.format(item.closingBalance)
                                                }, void 0, false, {
                                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.installment, true, {
                                            fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                            lineNumber: 378,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/YPA-Wealth-Depot/components/products/SaccoLoanCalculator.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_s(SaccoLoanCalculator, "BewfE2vvz3hAPO4CIlP8j/qD5kc=");
_c = SaccoLoanCalculator;
var _c;
__turbopack_context__.k.register(_c, "SaccoLoanCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=YPA-Wealth-Depot_components_4677ad10._.js.map