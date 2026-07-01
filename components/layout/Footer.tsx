export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="font-bold text-xl">YPA Wealth Depot</h2>
          <p className="mt-4 text-slate-400">
            Building sustainable financial growth for members across Uganda.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li>About</li>
            <li>Products</li>
            <li>Membership</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-slate-400">
            <li>Savings</li>
            <li>Loans</li>
            <li>Investments</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-slate-400">
            Kampala, Uganda <br />
            +256 700 000 000
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-6 text-center text-slate-500">
        © {new Date().getFullYear()} YPA Wealth Depot. All rights reserved.
      </div>
    </footer>
  );
}