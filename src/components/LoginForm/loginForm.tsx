import * as React from "react";
import { Svgs } from "../../assets/svgs";
import "./LoginForm.css";

interface LoginFormProps {}

export const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
  const {} = props;

  return (
    <div className="login">
      <div className="login__component">
        <div className="login__auth-container">
          <h2 className="login__auth-title">Log in to your Udemy account</h2>

          <button
            type="button"
            className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md auth-social--social-btn--google"
            data-purpose="google-login"
          >
            <Svgs.GoogleIcon className="google-auth-icon" />
            <span className="btn-title">Continue with Google</span>
          </button>

          <button
            type="button"
            className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md auth-social--social-btn--google"
            data-purpose="google-login"
          >
            <Svgs.FacebookIcon className="google-auth-icon" />
            <span className="btn-title">Continue with Facebook</span>
          </button>

          <button
            type="button"
            className="ud-btn ud-btn-large ud-btn-secondary ud-heading-md auth-social--social-btn--google"
            data-purpose="google-login"
          >
            <Svgs.AppleIcon className="google-auth-icon" />
            <span className="btn-title">Continue with Apple</span>
          </button>

          <form className="login__form-container">
            <div className="login__email-container">
              <div className="login__form-content">
                <label
                  htmlFor="form-group--email"
                  className="ud-form-label ud-heading-sm"
                >
                  <span className="ud-compact-form-label-content">
                    <span className="ud-compact-form-label-text">Email</span>
                  </span>
                </label>

                <input
                  name="email"
                  id="form-group--email"
                  type="email"
                  className="login__input-field"
                  required
                />
              </div>
            </div>

            <div className="login__password-container">
              <div className="login__form-content">
                <label
                  htmlFor="form-group--email"
                  className="ud-form-label ud-heading-sm"
                >
                  <span className="ud-compact-form-label-content">
                    <span className="ud-compact-form-label-text">Password</span>
                  </span>
                </label>

                <input
                  name="password"
                  id="form-group--password"
                  type="password"
                  className="login__input-field"
                  required
                />
              </div>
            </div>

            <button className="login__submit-button">
              <span>Log in</span>
            </button>
          </form>

          <div className="login__auth-footer">
            <div className="login__forgot-password-container">
              <span>
                or{" "}
                <a
                  className="ud-text-bold ud-link-underline"
                  href="/user/forgot-password/"
                >
                  Forgot Password
                </a>
              </span>
            </div>

            <div className="login__auth-line-separator"></div>

            <div className="login__signup-for-account">
              <span>
                Don't have an account?{" "}
                <a
                  className="ud-text-bold ud-link-underline"
                  href="/join/signup-popup/?locale=en_US&amp;next=https%3A%2F%2Fwww.udemy.com%2F&amp;response_type=html"
                  style={{ fontSize: "14px" }}
                >
                  Sign up
                </a>
              </span>
            </div>

            <div className="login__organization">
              <a
                className="ud-text-bold ud-link-underline"
                href="/organization/global-login/"
                data-disable-loader="true"
                style={{ fontSize: "14px" }}
              >
                Log in with your organization
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
