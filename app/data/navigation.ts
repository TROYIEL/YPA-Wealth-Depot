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
      href: "/",
      children: [
        {
          label: "Loans",
          href: "/loan",
        },
        {
          label: "Savings",
          href: "/products/savings",
        },
        {
          label: "Shares",
          href: "/products/shares",
        },
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