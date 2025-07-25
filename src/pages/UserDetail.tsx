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

      <div className="user__board">
        <div className="user__board-details">
          <div className="user__photo-name">
            {/* Placeholder for user photo */}
            <div className="user__photo">
              <img src={icons.no_photo} alt="User" />
            </div>
            <div>
              <h3 className="user__name">Devjineer</h3>
              <p className="user__id">LSQFf587g90</p>
            </div>
          </div>

          <div className="user__tier">
            <p className="user__tier-text">User's Tier</p>
            <div className="user__tier-icon">
              <img src={icons.star_filled} alt="star" />
              <img src={icons.star} alt="star" />
              <img src={icons.star} alt="star" />
            </div>
          </div>

          <div className="user__account">
            <p className="user__account-number--value">#200,000.00</p>
            <p className="user__account-number">9912345678/Providus Bank</p>
          </div>
        </div>

        <div></div>
      </div>

      <div className="more__user-detail">
        <MoreDetailsBlock
          title="Personal Information"
          details={{
            fullname: "Grace Effion",
            phone: "08167504874",
            email: "Joseybusiness@gmail.com",
            bvn: "22442788344",
            gender: "mail",
            status: "Relationship",
            children: "None",
            residence: "No 3 taj, Hassan",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key}>
                    <h4>{key}</h4>
                    <p>{item}</p>
                  </div>
                );
              })}
            </>
          )}
        />

        <MoreDetailsBlock
          title="Education and Employment"
          details={{
            'level of education': "",
            'employment status': "",
            'sector of employment': "",
            'duration of employment': "",
            'office email': "",
            'monthly income': "",
            'loan repayment': "",
            residence: "",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key}>
                    <h4>{key}</h4>
                    <p>{item}</p>
                  </div>
                );
              })}
            </>
          )}
        />
        <MoreDetailsBlock
          title="Socials"
          details={{
            fullname: "",
            phone: "",
            email: "",
            bvn: "",
            gender: "",
            status: "",
            children: "",
            residence: "",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key}>
                    <h4>{key}</h4>
                    <p>{item}</p>
                  </div>
                );
              })}
            </>
          )}
        />
        <MoreDetailsBlock
          title="Guarantors"
          details={{
            fullname: "",
            phone: "",
            email: "",
            relationship: "",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key}>
                    <h4>{key}</h4>
                    <p>{item}</p>
                  </div>
                );
              })}
            </>
          )}
        />
      </div>
    </section>
  );
};

export default UserDetail;
