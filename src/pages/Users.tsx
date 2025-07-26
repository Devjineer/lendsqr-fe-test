import "../styles/users.scss";
import DashBoardUserLayout from "../components/template/DashBoardUserLayout";
import useTitle from "@/contexts/useTitle";

const Users = () => {
  useTitle("Users - Lendsqr");

  return <DashBoardUserLayout sectionTitle="User" />;
};

export default Users;
