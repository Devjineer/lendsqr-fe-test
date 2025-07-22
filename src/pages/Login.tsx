import { Link } from "react-router";
import { PlainBtn } from "../components/common/Btn";
import "../styles/login.scss";
import Logo from "../components/common/Logo";
import { images } from "../constants";

const Login = () => {
  return (
    <section className="login">
      <div className="login__image-section">
        <div className="login__logo-wrapper">
          <Logo className="login__logo" imgClassName="login__logo-img" />
        </div>
        <div className="login__img-wrapper">
          <img src={images.login_bg} alt="login background" />
        </div>
      </div>

      <div className="login__form-section">
        <div className="login__content">
          <div className="login__header">
            <h1 className="login__title">Welcome!</h1>
            <p className="login__subtitle">Enter details to login</p>
          </div>

          <form action="" className="login__form">
            <div className="login__input-group">
              <div className="login__input-wrapper">
                <input type="email" placeholder="Email" required />
              </div>

              <div className="login__input-wrapper login__input-wrapper--spaced">
                <input type="password" placeholder="Password" />
                <button className="login__toggle-password">show</button>
              </div>
            </div>

            <Link to="/dashboard" className="login__forgot-password">
              Forgot Password
            </Link>

            <PlainBtn
              title="LOG IN"
              className="login__btn"
              onBtnClick={() => console.log("logging in")}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
