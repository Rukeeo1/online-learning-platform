import * as React from "react";
import "./SignUp.css";

interface signUpProps {}

export const SignUpForm: React.FunctionComponent<signUpProps> = (props) => {
  const {} = props;

  const [isPasswordTyped, setIsPasswordTyped] = React.useState(false);
  const [isFullnameFocused, setIsFullnameFocused] = React.useState(false);
  const [isEmailLabelFocused, setIsEmailLabelFocused] = React.useState(false);
  const [isPasswordLabelFocused, setIsPasswordLabelFocused] =
    React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "fullname" && !e.target.value) {
      setIsFullnameFocused(false);
    } else if (e.target.name === "email" && !e.target.value) {
      setIsEmailLabelFocused(false);
    } else if (e.target.name === "password" && !e.target.value) {
      setIsPasswordLabelFocused(false);
    }
  };

  const handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "fullname" && !e.target.value) {
      setIsFullnameFocused(true);
    } else if (e.target.name === "email") {
      setIsEmailLabelFocused(true);
    } else if (e.target.name === "password") {
      setIsPasswordLabelFocused(true);
    }
  };

  return (
    <div className="signup">
      <div className="signup__component">
        <div className="signup__auth-container">
          <h2 className="signup__auth-title">Sign up and start learning</h2>

          <form className="signup__form-container">
            <div className="signup__fullname-container">
              <div className="signup__form-content">
                <label
                  htmlFor="form-group--email"
                  className={`signup__form-label ${
                    isFullnameFocused ? "active" : ""
                  }`}
                >
                  <span className="signup__compact-form-label-content">
                    <span className="signup__compact-form-label-text">
                      Fullname
                    </span>
                  </span>
                </label>
                <input
                  name="fullname"
                  id="form-group--email"
                  type="name"
                  className="signup__input-field"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
            </div>

            <div className="signup__email-container">
              <div className="signup__form-content">
                <label
                  htmlFor="form-group--email"
                  className={`signup__form-label ${
                    isEmailLabelFocused ? "active" : ""
                  }`}
                >
                  <span className="signup__compact-form-label-content">
                    <span className="signup__compact-form-label-text">
                      Email
                    </span>
                  </span>
                </label>
                <input
                  name="email"
                  id="form-group--email"
                  type="email"
                  className="signup__input-field"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
            </div>

            <div className="signup__password-container">
              <div className="signup__form-content">
                <label
                  htmlFor="form-group--email"
                  className={`signup__form-label ${
                    isPasswordLabelFocused ? "active" : ""
                  }`}
                >
                  <span className="signup__compact-form-label-content">
                    <span className="signup__compact-form-label-text">
                      Password
                    </span>
                  </span>
                </label>
                <input
                  name="password"
                  id="form-group--email"
                  type="password"
                  className="signup__input-field"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  required
                />
              </div>

              <div className="signup__password-strength-indicator-container">
                <div className="signup__password-strength-indicator-content">
                  <div className="signup__password--strength-box"></div>
                  <div className="signup__password--strength-box"></div>
                  <div className="signup__password--strength-box"></div>
                  <div className="signup__password--strength-box"></div>
                </div>
              </div>
            </div>

            <div className="signup__form-checkbox-notification-container">
              <label
                className="signup__toggle-checkbox-input-container"
                htmlFor="checkbox"
              >
                <input
                  name="subscribeToEmails"
                  className="signup__toggle-checkbox-input"
                  id="checkbox"
                  type="checkbox"
                />
                Send me special offers, personalized recommendations, and
                learning tips.
              </label>
            </div>

            <button className="signup__submit-button">
              <span>Sign up</span>
            </button>
          </form>

          <div className="signup__auth-footer">
            <div className="signup__terms-of-use-container">
              <span className="signup__terms-of-use-text">
                By signing up, you agree to our{" "}
                <a
                  target="_blank"
                  className="signup__terms-of-use-underline"
                  href="/terms/"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  className="signup__terms-of-use-underline"
                  href="/terms/privacy/"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </div>

            <div className="signup__auth-line-separator"></div>

            <div className="signup__login-to-account">
              <span>
                Already have an account?{" "}
                <a className="signup__login-to-account-underline" href="/">
                  Log in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
