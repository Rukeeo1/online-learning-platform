import * as React from "react";
import "./Login.css";

interface LoginFormProps {}

export const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
  const {} = props;

  const [isEmailLabelFocused, setIsEmailLabelFocused] = React.useState(false);
  const [isPasswordLabelFocused, setIsPasswordLabelFocused] =
    React.useState(false);

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email" && !e.target.value) {
      setIsEmailLabelFocused(false);
    } else if (e.target.name === "password" && !e.target.value) {
      setIsPasswordLabelFocused(false);
    }
  };

  const handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setIsEmailLabelFocused(true);
    } else if (e.target.name === "password") {
      setIsPasswordLabelFocused(true);
    }
  };

  return (
    <form className="login__form-container">
      <div className="login__email-container">
        <div className="login__form-content">
          <label
            htmlFor="form-group--email"
            className={`login__form-label ${
              isEmailLabelFocused ? "active" : ""
            }`}
          >
            <span className="login__compact-form-label-content">
              <span className="login__compact-form-label-text">Email</span>
            </span>
          </label>
          <input
            name="email"
            id="form-group--email"
            type="email"
            className="login__input-field"
            required
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
          />
        </div>
      </div>

      <div className="login__password-container">
        <div className="login__form-content">
          <label
            htmlFor="form-group--email"
            className={`login__form-label ${
              isPasswordLabelFocused ? "active" : ""
            }`}
          >
            <span className="login__compact-form-label-content">
              <span className="login__compact-form-label-text">Password</span>
            </span>
          </label>
          <input
            name="password"
            id="form-group--email"
            type="password"
            className="login__input-field"
            required
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
          />
        </div>
      </div>

      <button className="login__submit-button">
        <span>Log in</span>
      </button>
    </form>
  );
};
