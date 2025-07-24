import { PlainBtn } from "../components/common/Btn";
import MoreDetailsBlock from "../components/users/MoreDetailsBlock";
import { icons } from "../constants";
import "../styles/user_detail.scss";

const UserDetail = () => {
  return (
    <section className="user__detail">
      <PlainBtn
        className="back__btn"
        icon={<img src={icons.back} className="" alt="back" />}
        title="Back to Users"
      />

      <header className="user__detail-header">
        <h2 className="user__detail-title">User Details</h2>

        <div className="user__detail-cta">
          <PlainBtn className="danger__btn" title="BLACKLIST USER" />

          <PlainBtn className="info__btn" title="ACTIVATE USER" />
        </div>
      </header>

      <div className="user__board"></div>

      <div className="more__user-detail">
        <MoreDetailsBlock title="Personal Information" className="detail__box" />
        <MoreDetailsBlock title="Education and Employment"  className="detail__box"  />
        <MoreDetailsBlock title="Socials"  className="detail__box"  />
        <MoreDetailsBlock title="Guarantors"  className="detail__box"  />
        <MoreDetailsBlock title=""  className="detail__box"  />
      </div>
    </section>
  );
};

export default UserDetail;
