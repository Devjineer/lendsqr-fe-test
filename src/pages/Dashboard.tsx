import useTitle from "@/contexts/useTitle";
import DashBoardUserLayout from "../components/template/DashBoardUserLayout";

const Dashboard = () => {
  useTitle("Dashboard - Lendsqr");
  
  return <DashBoardUserLayout sectionTitle="Dashboard" />;
};

export default Dashboard;
