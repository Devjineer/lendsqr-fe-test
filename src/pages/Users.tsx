import UserTabs from "../components/users/UserTabs";
import "../styles/users.scss";

const Users = () => {
  return (
    <section className="users">
      <h2>Users</h2>
      <UserTabs />
    </section>
  );
};

export default Users;
