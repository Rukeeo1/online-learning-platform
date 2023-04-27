import * as React from "react";
import "./Login.css";
import { Svgs } from "../../assets/svgs";

interface LoginFormProps {}

export const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
  const {} = props;

  const [isPasswordTyped, setIsPasswordTyped] = React.useState(false);
  const [isEmailLabelFocused, setIsEmailLabelFocused] = React.useState(false);
  const [isPasswordLabelFocused, setIsPasswordLabelFocused] =
    React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPasswordTyped(e.target.value.length > 0);
  };

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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            type={showPassword ? "text" : "password"}
            className="login__input-field"
            required
            onChange={handlePasswordChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
          />

          {isPasswordTyped && (
            <button
              type="button"
              className="login__password-form-group--svg-icon"
            >
              {!showPassword ? (
                <Svgs.EyeIcon
                  className="login__showpassword-icon"
                  onClick={toggleShowPassword}
                />
              ) : (
                <Svgs.EyeOffIcon
                  className="login__showpassword-icon"
                  onClick={toggleShowPassword}
                />
              )}
            </button>
          )}
        </div>
      </div>

      <button className="login__submit-button">
        <span>Log in</span>
      </button>
    </form>
  );
};
