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
    icons: icons.guarantors,
    href: "/",
  },
  {
    title: "Loans",
    icons: icons.loans,
    href: "/",
  },
  {
    title: "Decision Models",
    icons: icons.decision,
    href: "/",
  },
  {
    title: "Savings",
    icons: icons.savings,
    href: "/",
  },
  {
    title: "Loan Request",
    icons: icons.loan_req,
    href: "/",
  },
  {
    title: "Whitelist",
    icons: icons.whitelist,
    href: "/",
  },
  {
    title: "Karma",
    icons: icons.karma,
    href: "/",
  },
];

const business_navigations = [
  {
    title: "Organization",
    icons: icons.organisation,
    href: "/businesses/organization",
  },
  {
    title: "Loan Products",
    icons: icons.loans,
    href: "/businesses/loan-products",
  },
  {
    title: "Savings Products",
    icons: icons.saving_prod,
    href: "/businesses/savings-products",
  },
  {
    title: "Fees and Charges",
    icons: icons.fac,
    href: "/businesses/fees-charges",
  },
  {
    title: "Transactions",
    icons: icons.transact,
    href: "/businesses/transactions",
  },
  {
    title: "Services",
    icons: icons.services,
    href: "/businesses/services",
  },
  {
    title: "Service Account",
    icons: icons.service_acc,
    href: "/businesses/service-account",
  },
  {
    title: "Settlements",
    icons: icons.settle,
    href: "/businesses/settlements",
  },
  {
    title: "Reports",
    icons: icons.reports,
    href: "/businesses/reports",
  },
];

const settings_navigations = [
  {
    title: "Preferences",
    icons: icons.pref,
    href: "/settings/preferences",
  },
  {
    title: "Fees and Pricing",
    icons: icons.fap,
    href: "/settings/fees-pricing",
  },
  {
    title: "Audit Logs",
    icons: icons.audit,
    href: "/settings/audit-logs",
  },
  {
    title: "Systems Messages",
    icons: icons.tire,
    href: "/settings/audit-logs",
  },
];

export {
  icons,
  images,
  users,
  customers_navigation,
  business_navigations,
  settings_navigations,
};
