import { useEffect, useRef, useState } from "react";
import UserTabs from "../users/UserTabs";
import { PlainBtn } from "../common/Btn";
import { icons } from "../../constants";
import "./../../styles/dashboard_user.scss";
import useToggle from "../../contexts/useToggle";
import { Link } from "react-router";

const USERS_API = "https://68823e7e66a7eb81224df7e7.mockapi.io/api/v1/users";

const status_theme: { [key: string]: string } = {
  active: "active__user",
  inactive: "inactive__user",
  pending: "pending__user",
  blacklisted: "blocked__user",
};

const DashBoardUserLayout = ({ sectionTitle }: { sectionTitle: string }) => {
  const [users, setUsers] = useState([]);
  const { toggle, toggleOn, toggleOff } = useToggle();
  const actionBoard = useRef(null);

  const openActionBoard = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await toggleOn();
    const element: HTMLDivElement = actionBoard.current;
    const { clientX, clientY } = e;
    const { scrollY, scrollX } = window;
    const screenX = clientX + scrollX;
    const screenY = clientY + scrollY;

    if (element) {
      element.style.left = `${screenX - 100}px`;
      element.style.top = `${screenY - 50}px`;
    }
  };

  async function fetchAllUsers() {
    const res = await fetch(`${USERS_API}`);
    const users = await res.json();
    return users;
  }

  useEffect(() => {
    fetchAllUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleOff);
    return () => {
      window.removeEventListener("scroll", toggleOff);
    };
  }, [toggleOff]);

  return (
    <section className="section__wrap" onClick={toggleOff}>
      {toggle && (
        <div className="call__action" ref={actionBoard}>
          <div>
            <Link to="" className="call__action-link">
              <img src={icons.eye} alt="eye" />
              <span>View Details</span>
            </Link>
            <PlainBtn
              icon={<img src={icons.block} alt="block" />}
              className="call__action-link"
              title="Blacklist User"
            />
            <PlainBtn
              icon={<img src={icons.activate} alt="block" />}
              className="call__action-link"
              title="Activate User"
            />
          </div>
        </div>
      )}
      <h2>{sectionTitle}</h2>

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

        {/* <div className="result__table-body">
          <div>{"joseela"}...</div>
          <div>{"lakdlakd"}...</div>
          <div>{"lakdlakda"}...</div>
          <div>{"jlakdlakeal"}...</div>
          <div>{new Date(166667666766).toLocaleDateString()}</div>
          <div>
            <span className={status_theme["active"]}>{"active"}</span>
          </div>
          <div>
            <PlainBtn
              className="action__btn"
              icon={<img src={icons.action} alt="action" />}
              onBtnClick={openActionBoard}
            />
          </div>
        </div>

        <div className="result__table-body">
          <div>{"joseela"}...</div>
          <div>{"lakdlakd"}...</div>
          <div>{"lakdlakda"}...</div>
          <div>{"jlakdlakeal"}...</div>
          <div>{new Date(1666676667668883).toLocaleDateString()}</div>
          <div>
            <span className={status_theme["pending"]}>{"pending"}</span>
          </div>
          <div>
            <PlainBtn
              className="action__btn"
              icon={<img src={icons.action} alt="action" />}
            />
          </div>
        </div> */}
        {users.slice(0, 10).map((user: User) => (
          <div className="result__table-body" key={user.id}>
            <div>{user?.organisation.slice(0, 12)}...</div>
            <div>{user.username.slice(0, 25)}...</div>
            <div>{user.email.slice(0, 15)}...</div>
            <div>{user.phoneNumber.slice(0, 15)}...</div>
            <div>{new Date(user.dateJoined).toLocaleDateString()}</div>
            <div>
              <span className={status_theme[user.status.toLowerCase()]}>
                {user.status}
              </span>
            </div>
            <div>
              <PlainBtn
                className="action__btn"
                icon={<img src={icons.action} alt="action" />}
                onBtnClick={openActionBoard}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashBoardUserLayout;
