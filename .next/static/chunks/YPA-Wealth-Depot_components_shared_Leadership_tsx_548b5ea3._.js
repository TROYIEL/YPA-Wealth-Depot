(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Leadership
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const leaders = [
    {
        name: "Obed Ben",
        role: "Managing Director",
        image: "/MD.webp",
        bio: "\n    Obed Ben is the visionary Managing Director of Youth Platform Africa (YPA).\n    He has over 18 years of leadership experience in agribusiness,\n    financial inclusion and social enterprise.\n    ",
        experience: "18+ years in leadership, agribusiness and financial management.",
        email: "obed@ypawealthdepot.com",
        twitter: "#"
    },
    {
        name: "JB Magezi",
        role: "Executive Director",
        image: "/ED.webp",
        bio: "JB Magezi provides strategic direction and ensures effective implementation of organizational goals.",
        experience: "12+ years in management and organizational development.",
        email: "jb@ypawealthdepot.com",
        twitter: "#"
    },
    {
        name: "Namatovu Mable",
        role: "General Manager",
        image: "/EGM.webp",
        bio: "Namatovu oversees operations and ensures excellent service delivery to members.",
        experience: "10+ years in financial operations and administration.",
        email: "mable@ypawealthdepot.com",
        twitter: "#"
    }
];
const staff = [
    {
        name: "Favia",
        role: "Operations Manager",
        image: "/FAVIA.webp",
        bio: "Favia manages daily operations and ensures smooth service delivery.",
        experience: "8+ years in operations management.",
        email: "favia@ypawealthdepot.com",
        twitter: "#"
    },
    {
        name: "AHEREZA GERALD",
        role: "Credit Officer",
        image: "/AHEREZA.webp",
        bio: "Gerald helps members access responsible financial solutions.",
        experience: "6 years in SACCO operations.",
        email: "gerald@ypawealthdepot.com",
        twitter: "#"
    },
    {
        name: "Najuna Troy",
        role: "Customer Relations Officer",
        image: "/troy.webp",
        bio: "Troy ensures members receive excellent support.",
        experience: "5 years in customer relations.",
        email: "troy@ypawealthdepot.com",
        twitter: "#"
    }
];
function Leadership() {
    _s();
    const [selectedPerson, setSelectedPerson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const Card = (param)=>{
        let { person, index } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 40
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: index * .15
            },
            onClick: ()=>setSelectedPerson(person),
            className: " group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " relative h-87.5 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: person.image,
                        alt: person.name,
                        fill: true,
                        className: " object-cover transition duration-500 group-hover:scale-110 "
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 169,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " absolute inset-0 bg-linear-to-t from-black/70 to-transparent "
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 188,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " absolute bottom-6 left-6 text-white ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: " text-2xl font-bold ",
                                children: person.name
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 205,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80",
                                children: person.role
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 215,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 197,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 163,
                columnNumber: 1
            }, this)
        }, void 0, false, {
            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
            lineNumber: 133,
            columnNumber: 1
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mx-auto max-w-6xl px-6 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: " text-sky-500 uppercase tracking-[.3em] text-sm font-semibold ",
                                children: "Leadership"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 250,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: " mt-4 text-4xl font-bold text-slate-900 ",
                                children: "Meet Our Leadership Team"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 263,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 247,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " grid gap-10 md:grid-cols-3 ",
                        children: leaders.map((person, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                person: person,
                                index: index
                            }, person.name, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 289,
                                columnNumber: 1
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 280,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " mt-24 mb-12 text-center text-4xl font-bold text-sky-500 ",
                        children: "Staff Members"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 304,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " grid gap-10 md:grid-cols-3 ",
                        children: staff.map((person, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                person: person,
                                index: index
                            }, person.name, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 329,
                                columnNumber: 1
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 320,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 240,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: " fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 ",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setSelectedPerson(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: .8
                        },
                        animate: {
                            scale: 1
                        },
                        exit: {
                            scale: .8
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: " relative max-w-4xl overflow-hidden rounded-3xl bg-white ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPerson(null),
                                className: " absolute right-5 top-5 z-10 rounded-full bg-white p-2 shadow ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"], {}, void 0, false, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                    lineNumber: 427,
                                    columnNumber: 1
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 412,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " grid md:grid-cols-2 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " relative h-112.5 ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: selectedPerson.image,
                                            alt: selectedPerson.name,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                            lineNumber: 444,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                        lineNumber: 439,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: " text-3xl font-bold ",
                                                children: selectedPerson.name
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 464,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: " text-sky-600 font-semibold ",
                                                children: selectedPerson.role
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 474,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: " mt-5 text-slate-600 leading-8 ",
                                                children: selectedPerson.bio
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 485,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " mt-6 bg-slate-100 rounded-xl p-4 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Experience"
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: selectedPerson.experience
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 497,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " mt-6 flex gap-3 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:".concat(selectedPerson.email),
                                                        className: " rounded-full bg-sky-500 p-3 text-white hover:scale-110 transition ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                            lineNumber: 538,
                                                            columnNumber: 1
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: selectedPerson.FaXTwitter,
                                                        className: " rounded-full bg-blue-700 p-3 text-white hover:scale-110 transition "
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: selectedPerson.facebook,
                                                        className: " rounded-full bg-blue-600 p-3 text-white hover:scale-110 transition ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebook"], {}, void 0, false, {
                                                            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 1
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: selectedPerson.twitter,
                                                        className: " rounded-full bg-black p-3 text-white hover:scale-110 transition ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaXTwitter"], {}, void 0, false, {
                                                            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 1
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 520,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                        lineNumber: 461,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 433,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 385,
                        columnNumber: 1
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                    lineNumber: 355,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 350,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
        lineNumber: 237,
        columnNumber: 1
    }, this);
}
_s(Leadership, "5Z+zB95yovBPiLxY9cesrS2peUo=");
_c = Leadership;
var _c;
__turbopack_context__.k.register(_c, "Leadership");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=YPA-Wealth-Depot_components_shared_Leadership_tsx_548b5ea3._.js.map