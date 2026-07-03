export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white text-sm overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Left static info */}
        <p className="whitespace-nowrap">
          📞 Call us: +256 700 000 000
        </p>

        {/* Right scrolling announcement */}
        <div className="flex-1 overflow-hidden ml-6">
          <div className="animate-scroll whitespace-nowrap font-medium text-sky-200">
            🔔 Welcome to YPA Wealth Depot • Secure Savings • Low Interest Loans •
            Invest Smart • Grow Your Wealth Together •
          </div>
        </div>
      </div>
    </div>
  );
}