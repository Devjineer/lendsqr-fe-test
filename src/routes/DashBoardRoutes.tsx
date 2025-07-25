import "../styles/dashboard_routes.scss";
import MainLayout from "../components/template/MainLayout";
import { Route, Routes } from "react-router";
import { Dashboard, UserDetail, Users } from "../pages";
import SideBar from "../components/SideBar";

const DashBoardRoutes = () => {
  return (
    <MainLayout>
      <section className="dashboard">
        <SideBar
          sidebar="sidebar"
          section="nav__section"
          sectionTitle="nav__section-title"
          link="nav__ul-link"
          linksWrapper="nav__ul"
          linkContainer="link__container"
          addedBtnClass="sidebar__btn"
          logoutWrap="logout__wrap"
        />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user-detail" element={<UserDetail />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </section>
    </MainLayout>
  );
};

export default DashBoardRoutes;
