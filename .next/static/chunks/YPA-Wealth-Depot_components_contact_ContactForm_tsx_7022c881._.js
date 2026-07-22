(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const initialData = {
    name: "",
    email: "",
    message: ""
};
function ContactForm() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (formData.name.trim().length < 2) {
            setStatus({
                type: "error",
                message: "Please provide your full name."
            });
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: "error",
                message: "Please provide a valid email address."
            });
            return;
        }
        if (formData.message.trim().length < 10) {
            setStatus({
                type: "error",
                message: "Message should be at least 10 characters."
            });
            return;
        }
        setStatus({
            type: "success",
            message: "Your message has been received. We will contact you soon."
        });
        setFormData(initialData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "name",
                        className: "block text-sm font-medium text-slate-700 mb-1",
                        children: "Full Name"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "name",
                        type: "text",
                        value: formData.name,
                        onChange: (event)=>setFormData((previous)=>({
                                    ...previous,
                                    name: event.target.value
                                })),
                        className: "w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium text-slate-700 mb-1",
                        children: "Email Address"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "email",
                        type: "email",
                        value: formData.email,
                        onChange: (event)=>setFormData((previous)=>({
                                    ...previous,
                                    email: event.target.value
                                })),
                        className: "w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "block text-sm font-medium text-slate-700 mb-1",
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "message",
                        value: formData.message,
                        onChange: (event)=>setFormData((previous)=>({
                                    ...previous,
                                    message: event.target.value
                                })),
                        rows: 5,
                        className: "w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "rounded-full bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition",
                children: "Send Message"
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                "aria-live": "polite",
                className: "rounded-lg px-4 py-3 text-sm ".concat(status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"),
                children: status.message
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/YPA-Wealth-Depot/components/contact/ContactForm.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "/W6xmyDhoJuMXSjDGrhY/ArFNzE=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=YPA-Wealth-Depot_components_contact_ContactForm_tsx_7022c881._.js.map