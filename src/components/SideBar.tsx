import { Link, useLocation } from "react-router";
import {
  business_navigations,
  customers_navigation,
  icons,
  settings_navigations,
} from "../constants";
import { PlainBtn } from "./common/Btn";

const SideBar = ({
  sidebar,
  section,
  sectionTitle,
  link,
  linkContainer,
  linksWrapper,
  logoutWrap,
  closeSideBar,
}: SideBarProps) => {
  const { pathname } = useLocation();

  return (
    <aside className={sidebar}>
      {/* Dashboard Section */}
      <nav className={section}>
        <ul className={linksWrapper}>
          <li
            className={`${linkContainer}`}
            onClick={closeSideBar && closeSideBar}
          >
            <Link
              className={`${link} ${
                pathname == "/dashboard" && "active"
              }`.trim()}
              to="/dashboard"
            >
              <img src={icons.dashboard} /> <span>Dashboard</span>
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
              <li
                key={navigation.title}
                className={`${linkContainer}`}
                onClick={closeSideBar && closeSideBar}
              >
                <Link
                  className={`${link} ${
                    pathname == navigation.href && "active"
                  }`.trim()}
                  to={navigation.href}
                >
                  <img src={navigation.icons} />
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
          {business_navigations.map((navigation) => {
            return (
              <li
                key={navigation.title}
                className={`${linkContainer}`}
                onClick={closeSideBar && closeSideBar}
              >
                <Link
                  className={`${link} ${
                    pathname == navigation.href && "active"
                  }`.trim()}
                  to={navigation.href}
                >
                  <img src={navigation.icons} />
                  <span>{navigation.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Settings Section */}
      <nav className={section}>
        <span className={sectionTitle}>Settings</span>
        <ul className={linksWrapper}>
          {settings_navigations.map((navigation) => {
            return (
              <li
                key={navigation.title}
                className={`${linkContainer}`}
                onClick={closeSideBar && closeSideBar}
              >
                <Link
                  className={`${link} ${
                    pathname == navigation.href && "active"
                  }`.trim()}
                  to={navigation.href}
                >
                  <img src={navigation.icons} />
                  <span>{navigation.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className={logoutWrap}>
        <ul className={linksWrapper}>
          <li
            className={`${linkContainer}`}
            onClick={closeSideBar && closeSideBar}
          >
            <PlainBtn
              icon={<img src={icons.logout} />}
              className={link}
              title="Logout"
              onBtnClick={() => console.log("logging out")}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
