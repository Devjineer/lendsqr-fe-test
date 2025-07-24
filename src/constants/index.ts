import icons from "./icons";
import images from "./images";

const users = [
  { title: "Users", count: 2453, icon: icons.usertabicon1 },
  { title: "Active Users", count: 2453, icon: icons.usertabicon2 },
  { title: "Users With Loans", count: 2453, icon: icons.usertabicon3 },
  { title: "Users With Savings", count: 2453, icon: icons.usertabicon4 },
];

const customers_navigation = [
  {
    title: "Users",
    icons: icons.users,
    href: "/dashboard/users",
  },
  {
    title: "Guarantors",
    icons: icons.users,
    href: "/",
  },
  {
    title: "Loans",
    icons: icons.users,
    href: "/",
  },
  {
    title: "Decision Models",
    icons: icons.users,
    href: "/",
  },
  {
    title: "Savings",
    icons: icons.users,
    href: "/",
  },
  {
    title: "Loan Request",
    icons: icons.users,
    href: "/",
  },
  {
    title: "Whitelist",
    icons: icons.users,
    href: "/",
  },
  {
    title: "Karma",
    icons: icons.users,
    href: "/",
  },
];

export { icons, images, users, customers_navigation };
