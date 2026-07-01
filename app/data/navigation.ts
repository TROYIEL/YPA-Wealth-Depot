export const navigation = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Savings Accounts", href: "/products/savings" },
        { label: "Loans", href: "/products/loans" },
        { label: "Investments", href: "/products/investments" },
        { label: "Fixed Deposits", href: "/products/fixed-deposits" },
      ],
    },
    {
      label: "Membership",
      href: "/membership",
    },
    {
      label: "Branches",
      href: "/branches",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];