// import { useEffect, useState } from "react";
// import { PlainBtn } from "../components/common/Btn";
// import UserTabs from "../components/users/UserTabs";
// import { icons } from "../constants";
import "../styles/users.scss";
import DashBoardUserLayout from "../components/template/DashBoardUserLayout";

// const USERS_API = "https://68823e7e66a7eb81224df7e7.mockapi.io/api/v1/users";

// const status_theme: { [key: string]: string } = {
//   active: "active__user",
//   inactive: "inactive__user",
//   pending: "pending__user",
//   blacklisted: "blocked__user",
// };

const Users = () => {
  // const [users, setUsers] = useState([]);

  // async function fetchAllUsers() {
  //   const res = await fetch(`${USERS_API}`);
  //   const users = await res.json();
  //   return users;
  // }

  // useEffect(() => {
  //   fetchAllUsers()
  //     .then((res) => {
  //       setUsers(res);
  //     })
  //     .catch((err) => console.log("Error fetching users:", err));
  // }, []);

  // return (
  //   <section className="users">
  //     <h2>Users</h2>

  //     <UserTabs />

  //     <div className="result__table">
  //       <div className="result__table-head">
  //         <div>Organization</div>
  //         <div>Username</div>
  //         <div>Email</div>
  //         <div>Phone Number</div>
  //         <div>Date Joined</div>
  //         <div>Status</div>
  //         {/* <div>Actions</div> */}
  //       </div>

  //       <div className="result__table-body">
  //         <div>{"joseela"}...</div>
  //         <div>{"lakdlakd"}...</div>
  //         <div>{"lakdlakda"}...</div>
  //         <div>{"jlakdlakeal"}...</div>
  //         <div>{new Date(166667666766).toLocaleDateString()}</div>
  //         <div>
  //           <span className={status_theme["active"]}>{"active"}</span>
  //         </div>
  //         <div>
  //           <PlainBtn
  //             className="action__btn"
  //             icon={<img src={icons.action} alt="action" />}
  //           />
  //         </div>
  //       </div>

  //       <div className="result__table-body">
  //         <div>{"joseela"}...</div>
  //         <div>{"lakdlakd"}...</div>
  //         <div>{"lakdlakda"}...</div>
  //         <div>{"jlakdlakeal"}...</div>
  //         <div>{new Date(1666676667668883).toLocaleDateString()}</div>
  //         <div>
  //           <span className={status_theme["pending"]}>{"pending"}</span>
  //         </div>
  //         <div>
  //           <PlainBtn
  //             className="action__btn"
  //             icon={<img src={icons.action} alt="action" />}
  //           />
  //         </div>
  //       </div>
  //       {users.slice(0, 10).map((user: User) => (
  //         <div className="result__table-body" key={user.id}>
  //           <div>{user?.organisation.slice(0, 12)}...</div>
  //           <div>{user.username.slice(0, 25)}...</div>
  //           <div>{user.email.slice(0, 15)}...</div>
  //           <div>{user.phoneNumber.slice(0, 15)}...</div>
  //           <div>{new Date(user.dateJoined).toLocaleDateString()}</div>
  //           <div>
  //             <span className={status_theme[user.status.toLowerCase()]}>
  //               {user.status}
  //             </span>
  //           </div>
  //           <div>
  //             <PlainBtn
  //               className="action__btn"
  //               icon={<img src={icons.action} alt="action" />}
  //             />
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
  return <DashBoardUserLayout sectionTitle="User" />
};

export default Users;
