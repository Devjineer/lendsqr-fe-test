import { users } from "../../constants";
import IconWrapper from "../common/IconWrapper";
import styles from "./UserTabs.module.scss";

const UserTabs = () => {
  return (
    <div className={`${styles.container} no-scrollbar`}>
      <div className={styles.tab__container}>
        {users.map(({ icon, title, count }) => {
          return (
            <div className={styles.tab} key={title}>
              <div className={styles.tab__main}>
                <IconWrapper
                  src={icon}
                  alt={title}
                  className={styles.tab__icon}
                  imgClassName={styles.tabIcon__img}
                />

                <div className={styles.tab__info}>
                  <h3 className={styles.tab__title}>{title}</h3>
                  <p className={styles.tab__subtitle}>{count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTabs;
