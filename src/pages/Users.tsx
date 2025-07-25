import { useEffect, useState } from "react";
import { PlainBtn } from "../components/common/Btn";
import UserTabs from "../components/users/UserTabs";
import { icons } from "../constants";
import "../styles/users.scss";

const USERS_API = "https://68823e7e66a7eb81224df7e7.mockapi.io/api/v1/users";

const status_theme ={
  active: "active",
  inactive: "inactive",
  pending: "pending",
  blacklisted: "blocked",
}

const Users = () => {
  const [users, setUsers] = useState([]);

  async function fetchAllUsers() {
    const res = await fetch(`${USERS_API}`);
    const users = await res.json();
    return users;
  }

  useEffect(() => {
    fetchAllUsers()
      .then((res) => {
        setUsers(res);
        console.log(res, "users fetched");
      })
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  return (
    <section className="users">
      <h2>Users</h2>
      <UserTabs />

      <div className="result__table">
        <div className="result__table-head">
          <div>Organization</div>
          <div>Username</div>
          <div>Email</div>
          <div>Phone Number</div>
          <div>Date Joined</div>
          <div>Status</div>
          {/* <div>Actions</div> */}
        </div>
        {users.slice(0, 10).map((user) => (
          <div className="result__table-body" key={user.id}>
            <div>{user?.organisation.slice(0, 12)}...</div>
            <div>{user.username.slice(0, 25)}...</div>
            <div>{user.email.slice(0, 15)}...</div>
            <div>{user.phoneNumber.slice(0, 15)}...</div>
            <div>{new Date(user.dateJoined).toLocaleDateString()}</div>
            <div>
              <span className={status_theme[user.status.toLowerCase()]}>{user.status}</span>
            </div>
            <div>
              <PlainBtn
                className="action__btn"
                icon={<img src={icons.action} alt="action" />}
              />
            </div>
          </div>
        ))}

        {/* Example static row for demonstration */}
        {/* <div className="result__table-body">
          <div>Acme Corp</div>
          <div>johndoe</div>
          <div>johndoe@example.com</div>
          <div>+1234567890</div>
          <div>2025-01-01</div>
          <div>Active</div>
          <div>
            <PlainBtn icon={<img src={icons.action} alt="action" />} />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Users;
