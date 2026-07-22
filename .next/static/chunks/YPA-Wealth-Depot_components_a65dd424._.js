(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/YPA-Wealth-Depot/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/utils/cn.ts [app-client] (ecmascript)");
;
;
function Button(param) {
    let { variant = "primary", className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-6 py-3 transition-all duration-300 font-semibold", variant === "primary" && "bg-sky-500 text-white hover:scale-105 hover:bg-sky-600", variant === "secondary" && "bg-red-600 text-white hover:bg-red-700", variant === "outline" && "border border-slate-300 hover:bg-slate-100", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/YPA-Wealth-Depot/components/ui/Button.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/YPA-Wealth-Depot/components/hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const slides = [
    {
        image: "/4.jpg",
        tag: "Build. Grow. Prosper.",
        title: "Your Wealth, Our Priority.",
        desc: "Secure savings, smart loans, and investment tools designed to grow your financial future."
    },
    {
        image: "/1.jpg",
        tag: "Secure Today",
        title: "Save for a Better Tomorrow",
        desc: "Reliable savings solutions that protect and grow your money."
    },
    {
        image: "/2.jpg",
        tag: "Invest for Growth",
        title: "Build Wealth That Lasts",
        desc: "Smart investment options for long-term financial success."
    }
];
function Hero() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextSlide = ()=>setIndex((prev)=>(prev + 1) % slides.length);
    // ===== CINEMATIC TRANSITION =====
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            tl.fromTo(bgRef.current, {
                scale: 1.08,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1.4,
                ease: "power3.out"
            });
            tl.fromTo(textRef.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power3.out"
            }, "-=0.8");
        }
    }["Hero.useEffect"], [
        index
    ]);
    // ===== SLOWER AUTO SLIDE (PREMIUM FEEL) =====
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    nextSlide();
                }
            }["Hero.useEffect.interval"], 9000); // ⬅️ slower (was 6500)
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bgRef,
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: slides[index].image,
                    alt: "hero",
                    fill: true,
                    priority: true,
                    className: "object-cover object-center",
                    sizes: "100vw"
                }, void 0, false, {
                    fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60"
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex items-center justify-center h-full px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: textRef,
                    className: "max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sky-400 font-semibold text-xl md:text-2xl tracking-widest uppercase",
                            children: slides[index].tag
                        }, void 0, false, {
                            fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-6 text-5xl md:text-7xl font-white text-white leading-tight",
                            children: slides[index].title
                        }, void 0, false, {
                            fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-white/85 text-lg md:text-2xl max-w-2xl mx-auto",
                            children: slides[index].desc
                        }, void 0, false, {
                            fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-center gap-4 mt-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: "Become a Member"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30",
                children: slides.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-3 rounded-full transition-all duration-500 ".concat(i === index ? "w-10 bg-blue-600" : "w-3 bg-white/40")
                    }, i, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/YPA-Wealth-Depot/components/hero/Hero.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Hero, "TXVWbqiMkuZOxszRty5gsoxPTJg=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfoCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
"use client";
;
;
;
;
function InfoCards() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-2xl shadow-lg group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/EGM.webp",
                                    alt: "Leadership",
                                    fill: true,
                                    className: "object-cover group-hover:scale-105 transition duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-sky-600 text-white p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-8 h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-bold",
                                                children: "Our Leadership"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/90 leading-7",
                                        children: "Driven by expertise, led by integrity. Meet the team steering YPA Wealth Depot toward sustainable growth and delivering excellence in every service we provide."
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "inline-flex items-center gap-2 mt-6 font-semibold hover:gap-4 transition-all",
                                        children: [
                                            "Learn More",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-64 rounded-2xl overflow-hidden shadow-lg group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/mission.webp",
                                        alt: "",
                                        fill: true,
                                        className: "object-cover group-hover:scale-105 transition duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/60"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-8 left-8 max-w-sm text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1 h-24 bg-lime-400 absolute -left-5 top-0 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-4xl font-bold mb-3",
                                                children: "Our Mission"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-light text-white/90 leading-5",
                                                children: "To empower members to achieve financial  stability through innovation, client-focused Savings and credit solutions while promoting a culture of financial discipline and investment."
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-64 rounded-2xl overflow-hidden shadow-lg group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/mission.webp",
                                        alt: "",
                                        fill: true,
                                        className: "object-cover group-hover:scale-105 transition duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/60"
                                    }, void 0, false, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-8 left-8 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-4xl font-bold mb-3",
                                                children: "Vision"
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-light text-white/90 leading-5",
                                                children: "To create sustainable Wealth and financial freedom for all members."
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl bg-sky-600 text-white p-10 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xl font-semibold text-white/80",
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl font-bold mt-2 mb-8",
                                children: "Resources"
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    "Annual Reports",
                                    "Financial Statements",
                                    "Membership Guide",
                                    "Loan Application Forms",
                                    "Savings Products",
                                    "Resource Centre"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "flex items-center justify-between border-b border-white/20 pb-3 hover:translate-x-2 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/YPA-Wealth-Depot/components/home/InfoCards.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = InfoCards;
var _c;
__turbopack_context__.k.register(_c, "InfoCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransferCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$MotionPathPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/YPA-Wealth-Depot/node_modules/gsap/MotionPathPlugin.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$MotionPathPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionPathPlugin"]);
function TransferCard() {
    _s();
    const section = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TransferCard.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "TransferCard.useLayoutEffect.ctx": ()=>{
                    // Idle floating animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card.current, {
                        y: 8,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: section.current,
                            start: "top top",
                            end: "+=2200",
                            scrub: 1,
                            pin: true,
                            invalidateOnRefresh: true
                        }
                    });
                    tl.to(bg.current, {
                        scale: 1.1,
                        ease: "none",
                        duration: 1
                    }, 0).to(card.current, {
                        motionPath: {
                            path: [
                                {
                                    x: 0,
                                    y: 0
                                },
                                {
                                    x: 180,
                                    y: -110
                                },
                                {
                                    x: 430,
                                    y: -50
                                },
                                {
                                    x: 650,
                                    y: 15
                                }
                            ],
                            curviness: 1.8
                        },
                        rotation: 18,
                        scale: 0.96,
                        ease: "none",
                        duration: 1
                    }, 0).fromTo(content.current, {
                        autoAlpha: 0,
                        y: 60
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.35
                    }, 0.75);
                }
            }["TransferCard.useLayoutEffect.ctx"], section);
            return ({
                "TransferCard.useLayoutEffect": ()=>ctx.revert()
            })["TransferCard.useLayoutEffect"];
        }
    }["TransferCard.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: section,
        className: "relative h-screen overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bg,
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/members-bg.webp",
                        alt: "",
                        fill: true,
                        priority: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: content,
                className: "absolute inset-x-0 bottom-24 z-30 flex flex-col items-center text-center text-white px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sky-300 tracking-[0.35em] uppercase",
                        children: "Join Today"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-5xl font-bold md:text-6xl",
                        children: "Become a Member"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 max-w-2xl text-lg leading-8 text-gray-200",
                        children: "Start your financial journey with YPA Wealth Depot. Save confidently, access affordable loans, and invest in your future with a trusted SACCO."
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$YPA$2d$Wealth$2d$Depot$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mt-10 rounded-full bg-sky-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-sky-600",
                        children: "Join Us"
                    }, void 0, false, {
                        fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/YPA-Wealth-Depot/components/shared/MembershipJourney.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(TransferCard, "NAl5jsTM6Did566fCi4JTuS9/Pc=");
_c = TransferCard;
var _c;
__turbopack_context__.k.register(_c, "TransferCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=YPA-Wealth-Depot_components_a65dd424._.js.map