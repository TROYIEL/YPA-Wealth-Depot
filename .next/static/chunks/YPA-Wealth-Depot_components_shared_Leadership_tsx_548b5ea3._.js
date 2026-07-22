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
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const leaders = [
    {
        name: "Obed Ben",
        role: "Managing Director",
        image: "/MD.webp",
        bio: "\n    Obed Ben is the visionary Managing Director of Youth Platform Africa (YPA).\n    He has over 18 years of leadership experience in agribusiness,\n    financial inclusion and social enterprise.\n    \n    His leadership has helped build sustainable financial solutions\n    that empower communities and create opportunities.\n    ",
        experience: "18+ years in leadership, agribusiness and financial management.",
        email: "obed@ypawealthdepot.com"
    },
    {
        name: "JB Magezi",
        role: "Executive Director",
        image: "/ED.webp",
        bio: "\n    JB Magezi provides strategic direction and ensures effective\n    implementation of organizational goals.\n    ",
        experience: "12+ years in management and organizational development.",
        email: "jb@ypawealthdepot.com"
    },
    {
        name: "Namatovu Mable",
        role: "General Manager",
        image: "/EGM.webp",
        bio: "\n    Namatovu oversees operations and ensures excellent service delivery\n    to members.\n    ",
        experience: "10+ years in financial operations and administration.",
        email: "mable@ypawealthdepot.com"
    }
];
const staff = [
    {
        name: "Favia ",
        role: "Operations Manager",
        image: "/FAVIA.webp",
        bio: "Sarah manages daily operations and ensures smooth service delivery.",
        experience: "8+ years in operations management.",
        email: "sarah@ypawealthdepot.com"
    },
    {
        name: "AHEREZA GERALD",
        role: "Credit Officer",
        image: "/AHEREZA.webp",
        bio: "David helps members access responsible financial solutions.",
        experience: "6 years in SACCO operations.",
        email: "david@ypawealthdepot.com"
    },
    {
        name: "Najuna Troy",
        role: "Customer Relations Officer",
        image: "/troy.webp",
        bio: "Grace ensures members receive excellent support.",
        experience: "5 years in customer relations.",
        email: "grace@ypawealthdepot.com"
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
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: index * 0.15
            },
            onClick: ()=>setSelectedPerson(person),
            className: " group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xl ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " relative h-87.5 overflow-hidden ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: person.image,
                        alt: person.name,
                        fill: true,
                        sizes: " (max-width:768px) 100vw, 33vw ",
                        className: " object-cover transition duration-500 group-hover:scale-110 "
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 140,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " absolute inset-0 bg-linear-to-t from-black/70 via-transparent "
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 163,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " absolute bottom-5 left-5 text-white ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: " text-2xl font-bold ",
                                children: person.name
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 180,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: " text-sm text-slate-200 ",
                                children: person.role
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 190,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 174,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 133,
                columnNumber: 1
            }, this)
        }, person.name, false, {
            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
            lineNumber: 102,
            columnNumber: 1
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " bg-white py-20 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mx-auto mb-14 max-w-3xl px-6 text-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: " text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 ",
                        children: "Our Leadership"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 233,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " mt-4 text-4xl font-bold text-slate-900 ",
                        children: "Meet The People Driving Our Vision"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 246,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: " mt-4 text-slate-600 ",
                        children: "Experienced leaders committed to financial growth, innovation and serving our members."
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 258,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 224,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3 ",
                children: leaders.map((leader, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        person: leader,
                        index: index
                    }, leader.name, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 290,
                        columnNumber: 1
                    }, this))
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 277,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mx-auto mt-24 max-w-6xl px-6 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " mb-12 text-center ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: " text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 "
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 324,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: " mt-4 text-4xl font-bold text-sky-400 ",
                                children: "Staff Members"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 336,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: " mt-4 text-red-600 ",
                                children: "Dedicated professionals committed to serving our members."
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 348,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 318,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " grid gap-10 md:grid-cols-3 ",
                        children: staff.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                person: member,
                                index: index
                            }, member.name, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 374,
                                columnNumber: 1
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 364,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 310,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: " fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 ",
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
                        className: " relative max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPerson(null),
                                className: " absolute right-5 top-5 z-10 rounded-full bg-white p-2 shadow ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                    lineNumber: 488,
                                    columnNumber: 1
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 471,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " grid md:grid-cols-2 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " relative h-[450px] ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: selectedPerson.image,
                                            alt: selectedPerson.name,
                                            fill: true,
                                            className: " object-cover "
                                        }, void 0, false, {
                                            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                            lineNumber: 508,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                        lineNumber: 502,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " p-8 overflow-y-auto max-h-[450px] ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: " text-3xl font-bold text-slate-900 ",
                                                children: selectedPerson.name
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 537,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: " mt-2 font-semibold text-sky-600 ",
                                                children: selectedPerson.role
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 548,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: " mt-6 leading-relaxed text-slate-600 ",
                                                children: selectedPerson.bio
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 560,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " mt-5 rounded-xl bg-slate-100 p-4 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: "Experience"
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: selectedPerson.experience
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 572,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " mt-6 flex gap-4 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:".concat(selectedPerson.email),
                                                        className: " rounded-full bg-sky-500 p-3 text-white ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 1
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: " rounded-full bg-slate-900 p-3 text-white ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Linkedin, {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 1
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                                lineNumber: 599,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                        lineNumber: 530,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                                lineNumber: 496,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                        lineNumber: 442,
                        columnNumber: 1
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                    lineNumber: 411,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
                lineNumber: 404,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/YPA-Wealth-Depot/components/shared/Leadership.tsx",
        lineNumber: 216,
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