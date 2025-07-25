import { useState } from "react";
import { PlainBtn } from "../components/common/Btn";
import MoreDetailsBlock from "../components/users/MoreDetailsBlock";
import { icons } from "../constants";
import "../styles/user_detail.scss";
import getItemFromLocalStore from "../utils/local-store";

const UserDetail = () => {
  const [user] = useState(getItemFromLocalStore("user") || {});
  const [docType, setDocType] = useState("General Details");

  return (
    <section className="user__detail">
      <PlainBtn
        className="back__btn"
        icon={<img src={icons.back} className="" alt="back" />}
        title="Back to Users"
        onBtnClick={() => history.back()}
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
              <h3 className="user__name">{user?.username}</h3>
              <p className="user__id">{user?.id ?? "LAKLB22KA"}</p>
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

        <div className="doc__type no-scrollbar">
          <div>
            {[
              "General Details",
              "Documents",
              "Bank Details",
              "Loans",
              "Savings",
              "Apps and System",
            ].map((item) => {
              return (
                <PlainBtn
                  key={item}
                  title={item}
                  className={`${docType == item && "btn__active"}`}
                  onBtnClick={() => setDocType(item)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="more__user-detail">
        <MoreDetailsBlock
          title="Personal Information"
          // details={user?.personal_info}
          details={{
            "Full name": user.personal_info.full_name ?? "Grace Effion",
            "Phone Number": user?.personal_info.phone.slice(0, 11),
            "Email Address": user?.personal_info.email,
            bvn: user?.personal_info.bvn.slice(0, 11),
            gender: user?.personal_info.gender ?? "male",
            "Marital Status": user?.personal_info.marital_status,
            children: user?.personal_info.children ?? 0,
            "Type of Residence":
              user?.personal_info.residence ?? "No 3 taj, Hassan",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key} className="detail__wrap">
                    <h4 className="detail__wrap-title">{key}</h4>
                    <p className="detail__wrap-subtitle">{item}</p>
                  </div>
                );
              })}
            </>
          )}
        />

        <MoreDetailsBlock
          title="Education and Employment"
          details={{
            "level of education":
              user?.education_and_employment.level ?? "Not Specified",
            "employment status":
              user?.education_and_employment.employment_status ?? "Unemployed",
            "sector of employment":
              user?.education_and_employment.sector ?? "Not specified",
            "duration of employment":
              user?.education_and_employment.duration ?? "Not Specified",
            "office email":
              user?.education_and_employment.office_email ?? "Not Specified",
            "monthly income": `${
              user?.education_and_employment.monthly_income[0] ?? 500
            } - ${user?.education_and_employment.monthly_income[1] ?? 1000}`,
            "loan repayment":
              user?.education_and_employment.loan_repayment ?? "Not Specified",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key} className="detail__wrap">
                    <h4 className="detail__wrap-title">{key}</h4>
                    <p className="detail__wrap-subtitle">{item}</p>
                  </div>
                );
              })}
            </>
          )}
        />
        <MoreDetailsBlock
          title="Socials"
          details={{
            twitter: user?.socials.twiiter ?? "Not specified",
            facebook: user?.socials.facebook ?? "Not specified",
            instagram: user?.socials.instagram ?? "Not specified",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key} className="detail__wrap">
                    <h4 className="detail__wrap-title">{key}</h4>
                    <p className="detail__wrap-subtitle">{item}</p>
                  </div>
                );
              })}
            </>
          )}
        />
        <MoreDetailsBlock
          title="Guarantors"
          details={{
            fullname: user?.guarantor.full_name ?? "Not specified",
            phone: user?.guarantor.phone ?? "Not specified",
            email: user?.guarantor.email ?? "Not specified",
            relationship: user?.guarantor.relationship ?? "Not specified",
          }}
          displayItems={(item) => (
            <>
              {Object.entries(item).map(([key, item]) => {
                return (
                  <div key={key} className="detail__wrap">
                    <h4 className="detail__wrap-title">{key}</h4>
                    <p className="detail__wrap-subtitle">{item}</p>
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
