export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white text-sm overflow-hidden">
      
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
        
        {/* Left static info */}
        <p className="whitespace-nowrap">
          📞 Call us: +256 700 000 000
        </p>

        {/* Right scrolling announcement */}
        <div className="flex-1 overflow-hidden ml-6">
          <div className="whitespace-nowrap animate-scroll text-sky-200 font-medium">
            🔔 Welcome to YPA Wealth Depot • Secure Savings • Low Interest Loans • Invest Smart • Grow Your Wealth Together • 
          </div>
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        .animate-scroll {
          display: inline-block;
          animation: scroll 18s linear infinite;
          padding-left: 100%;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}