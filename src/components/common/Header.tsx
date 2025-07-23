import "../../styles/header.scss";
import { icons, images } from "../../constants";
import { PlainBtn } from "./Btn";
import IconWrapper from "./IconWrapper";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__control">
          <PlainBtn
            className="menu__btn"
            icon={
              <img className="menu__btn-icon" alt="menu" src={icons.menu} />
            }
          />
          <Logo className="header__logo" imgClassName="header__logo-img" />
        </div>

        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for anything"
            className="searchbar__input"
          />
          <PlainBtn
            className="searchbar__btn"
            icon={
              <img
                src={icons.search}
                alt="search"
                className="searchbar__btn-img"
              />
            }
          />
        </div>

        <div className="header__right">
          <a href="#" className="header__link">
            Docs
          </a>

          <PlainBtn
            className="header__notification-btn"
            icon={
              <img
                alt="bell"
                src={icons.bell}
                className="header__notification-icon"
              />
            }
          />

          <div className="header__profile">
            <IconWrapper
              src={images.avatar}
              className="header__avatar"
              imgClassName="header__avatar-img"
              alt="avatar"
            />

            <div className="header__user-info">
              <p className="header__username">Adedeji</p>
              <PlainBtn
                className="header__dropdown-btn"
                icon={
                  <IconWrapper
                    src={icons.arrow}
                    alt="arrow"
                    className="header__dropdown-icon"
                    imgClassName="header__dropdown-img"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
