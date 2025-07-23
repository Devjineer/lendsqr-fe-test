import "../styles/dashboard_routes.scss";
import MainLayout from "../components/template/MainLayout";
import { Route, Routes } from "react-router";
import { UserDetail, Users } from "../pages";

const DashBoardRoutes = () => {
  return (
    <MainLayout>
      <section className="dashboard">
        <aside className="sidebar">Side bar</aside>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/user-detail" element={<UserDetail />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </section>
    </MainLayout>
  );
};

export default DashBoardRoutes;
