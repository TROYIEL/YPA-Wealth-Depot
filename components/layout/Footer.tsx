import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="font-bold text-xl">YPA Wealth Depot</h2>
          <p className="mt-4 text-slate-400">
            FANIANCE . GROWTH . IMPACT
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li> 
            <Link href="/about">
           About
          </Link>
            </li>
            <li>
            <Link href="/membership">
           Membership
           </Link>
           </li>
            <li>
            <Link href="/branches">
          Branches
          </Link>
          </li>
          <li>
          <Link href="/news">
          News
          </Link>
          </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="/Savings">
              Savings
              </Link>
            </li>

            <li>
              <Link href="/loan">
              Loans
              </Link>
            </li>

            <li>
              <Link href="/shares">
              Shares
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-slate-400">
            Kampala, Uganda <br />
            +256 774 350727 | +256 758 041899
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-6 text-center text-slate-500">
        © {new Date().getFullYear()} YPA Wealth Depot. All rights reserved.
      </div>
    </footer>
  );
}