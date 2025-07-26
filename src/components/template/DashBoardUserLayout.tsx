import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { fetchAllUsers } from "@/services/fetchAllUsers";
import useToggle from "@/contexts/useToggle";
import useResource from "@/contexts/useResource";
import getItemFromLocalStore, {
  addItemToLocalStore,
} from "@/utils/local-store";
import { icons } from "@/constants";
import UserTabs from "../users/UserTabs";
import Loader from "../loaders/Loader";
import "@/styles/dashboard_user.scss";
import { PlainBtn } from "../common/Btn";
import FilterForm from "../FilterForm";

const status_theme: { [key: string]: string } = {
  active: "active__user",
  inactive: "inactive__user",
  pending: "pending__user",
  blacklisted: "blocked__user",
};

const DashBoardUserLayout = ({ sectionTitle }: { sectionTitle: string }) => {
  const { toggle, toggleOn, toggleOff } = useToggle();
  const {
    toggle: formToggle,
    toggleOn: formToggleOn,
    toggleOff: formToggleOff,
  } = useToggle();

  const actionBoard = useRef<HTMLDivElement | null>(null);

  const fetchUsers = useCallback(async () => fetchAllUsers(), []);
  const { data: users, loading } = useResource<User>(fetchUsers);

  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(
    getItemFromLocalStore("currentPage") ?? 1
  );

  useEffect(() => {
    const pagesArray = new Array(Math.ceil(users.length / 10))
      .fill(null)
      .map((_, i) => i + 1);
    setPages(pagesArray);
  }, [users]);

  useEffect(() => {
    window.addEventListener("scroll", toggleOff);
    return () => {
      window.removeEventListener("scroll", toggleOff);
    };
  }, [toggleOff]);

  // Function to add the current user to local storage
  const addItemLocally = (username: string) => {
    const currentItem = users.filter((user) => user.username == username)[0];
    console.log(currentItem);
    addItemToLocalStore("user", currentItem);
  };

  const openActionBoard = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    await toggleOn();
    const element: HTMLDivElement | null = actionBoard.current;
    const { clientX, clientY } = e;
    const { scrollY, scrollX } = window;
    const screenX = clientX + scrollX;
    const screenY = clientY + scrollY;

    if (element) {
      element.style.left = `${screenX - 150}px`;
      element.style.top = `${screenY - 50}px`;
    }
  };

  return (
    <section className="section__wrap" onClick={toggleOff}>
      {toggle && (
        <div className="call__action" ref={actionBoard}>
          <div>
            <Link
              to="/dashboard/user-detail"
              className="call__action-link"
              onClick={toggleOff}
            >
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

      <h2 className="section__wrap-title">{sectionTitle}</h2>

      <UserTabs />

      <div className="result__table">
        <div className="result__table-head">
          <div>
            Organization
            <PlainBtn
              onBtnClick={formToggleOn}
              icon={<img src={icons.filter} />}
              className="filter__btn"
            />
          </div>
          <div>
            Username
            <PlainBtn
              onBtnClick={formToggleOn}
              icon={<img src={icons.filter} />}
              className="filter__btn"
            />
          </div>
          <div>
            Email
            <PlainBtn
              onBtnClick={formToggleOn}
              icon={<img src={icons.filter} />}
              className="filter__btn"
            />
          </div>
          <div>
            Phone Number
            <PlainBtn
              onBtnClick={formToggleOn}
              icon={<img src={icons.filter} />}
              className="filter__btn"
            />
          </div>
          <div>
            Date Joined
            <PlainBtn
              onBtnClick={formToggleOn}
              icon={<img src={icons.filter} />}
              className="filter__btn"
            />
          </div>
          <div>
            Status
            <PlainBtn
              onBtnClick={formToggleOn}
              icon={<img src={icons.filter} />}
              className="filter__btn"
            />
          </div>
        </div>

        {/* fiter form */}
        {formToggle && <FilterForm closeForm={formToggleOff} />}

        {/* the data of users into table */}
        {loading ? (
          <Loader />
        ) : (
          <>
            {users
              .slice((currentPage - 1) * 10, 10 * currentPage)
              .map((user: User) => (
                <div className="result__table-body" key={user.id}>
                  <div>{user?.organisation.slice(0, 12)}...</div>
                  <div>{user.username.slice(0, 25)}...</div>
                  <div>{user.personal_info.email.slice(0, 15)}...</div>
                  <div>{user.personal_info.phone.slice(0, 15)}...</div>
                  <div>{new Date(user.date_joined).toLocaleDateString()}</div>
                  <div>
                    <span className={status_theme[user.status.toLowerCase()]}>
                      {user.status}
                    </span>
                  </div>
                  <div>
                    <PlainBtn
                      className="action__btn"
                      icon={<img src={icons.action} alt="action" />}
                      onBtnClick={(e) => {
                        openActionBoard(e);
                        addItemLocally(user.username);
                      }}
                    />
                  </div>
                </div>
              ))}
          </>
        )}
      </div>

      <div className="doc__tracker">
        <p className="doc__text">
          Showing{" "}
          {currentPage * 10 > users.length ? users.length : currentPage * 10}{" "}
          out of {users.length}
        </p>

        <div className="pagination">
          <PlainBtn
            icon={<img src={icons.prev} className="pagination__btn" />}
            onBtnClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);

                // Update local storage with the new current page to persist state
                addItemToLocalStore("currentPage", currentPage - 1);
              }
            }}
          />

          <div className="pagination__main">
            {pages.slice(currentPage - 1, currentPage + 2).map((page) => {
              return (
                <span
                  key={page}
                  className={`${currentPage == page ? "active__span" : ""}`}
                >
                  {page}
                </span>
              );
            })}
            ...
          </div>

          <PlainBtn
            icon={<img src={icons.next} className="pagination__btn" />}
            onBtnClick={() => {
              if (currentPage < pages.length) {
                setCurrentPage(currentPage + 1);

                // Update local storage with the new current page to persist state
                addItemToLocalStore("currentPage", currentPage + 1);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DashBoardUserLayout;
