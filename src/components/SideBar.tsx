import { Link, useLocation } from "react-router";
import { customers_navigation, icons } from "../constants";



const SideBar = ({
  sidebar,
  section,
  sectionTitle,
  link,
  linkContainer,
  linksWrapper,
  active = "active",
}: SideBarProps) => {
  const { pathname } = useLocation();
  
  return (
    <aside className={sidebar}>
      {/* Dashboard Section */}
      <nav className={section}>
        <span className={sectionTitle}>Dashboard</span>

        <ul className={linksWrapper}>
          <li className={`${linkContainer}`}>
            <Link className={`${link} ${active}`.trim()} to="/">
              <img src={icons.users} /> <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Customers Section */}
      <nav className={section}>
        <span className={sectionTitle}>Customers</span>
        <ul className={linksWrapper}>
          {customers_navigation.map((navigation) => {
            return (
              <li key={navigation.title} className={`${linkContainer}`}>
                <Link
                  className={`${link} ${
                    pathname == navigation.href && "active"
                  }`.trim()}
                  to={navigation.href}
                >
                  <img src={icons.usertabicon1} />
                  <span>{navigation.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Businesses Section */}
      <nav className={section}>
        <span className={sectionTitle}>Businesses</span>
        <ul className={linksWrapper}>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/organization"
            >
              <img src={icons.usertabicon1} /> <span>Organization</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/loan-products"
            >
              <img src={icons.usertabicon2} /> <span>Loan Products</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/savings-products"
            >
              <img src={icons.usertabicon3} /> <span>Savings Products</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/fees-charges"
            >
              <img src={icons.usertabicon4} /> <span>Fees and Charges</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/transactions"
            >
              <img src={icons.arrow} /> <span>Transactions</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/services"
            >
              <img src={icons.arrow2} /> <span>Services</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/service-account"
            >
              <img src={icons.back} /> <span>Service Account</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/settlements"
            >
              <img src={icons.bell} /> <span>Settlements</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/businesses/reports"
            >
              <img src={icons.menu} /> <span>Reports</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Settings Section */}
      <nav className={section}>
        <span className={sectionTitle}>Settings</span>
        <ul className={linksWrapper}>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/settings/preferences"
            >
              <img src={icons.menu} /> <span>Preferences</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/settings/fees-pricing"
            >
              <img src={icons.arrow} /> <span>Fees and Pricing</span>
            </Link>
          </li>
          <li className={`${linkContainer}`}>
            <Link
              className={`${link} ${active}`.trim()}
              to="/settings/audit-logs"
            >
              <img src={icons.bell} /> <span>Audit Logs</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
