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

  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    emailError: "",
    emailTouched: false,
    passwordError: "",
    passwordTouched: false,
  });

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const MIN_PASSWORD_LENGTH = 6;

  const validatePassword = (password: string): boolean => {
    const re = new RegExp(`^[a-zA-Z0-9]{${MIN_PASSWORD_LENGTH},100}$`);
    return re.test(password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value, "willochs input value");

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });

    if (name === "email") {
      setErrors({
        ...errors,
        emailError: !validateEmail(value)
          ? "Please enter a valid email address"
          : "",
        emailTouched: true,
      });
    } else if (name === "password") {
      const passwordLength = value.length;
      const passwordError =
        passwordLength === 1 || !validatePassword(value)
          ? `Please lengthen this text to ${MIN_PASSWORD_LENGTH} characters or more (you are currently using ${passwordLength} ${
              passwordLength === 1 ? "character" : "characters"
            })`
          : "";

      setErrors({
        ...errors,
        passwordError,
        passwordTouched: true,
      });

      setIsPasswordTyped(e.target.value.length > 0);
    }
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      validateEmail(loginInfo.email) &&
      validatePassword(loginInfo.password)
    ) {
      console.log("Valid form submitted: ", loginInfo);
      // Do something with the valid form data here
    } else {
      console.log("Invalid form submitted: ", errors);
    }
  };

  return (
    <form className="login__form-container" onSubmit={handleSubmit}>
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
            value={loginInfo.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            required
          />
        </div>

        {errors.emailError && errors.emailTouched && (
          <div className="login__error-message">{errors.emailError}</div>
        )}
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
            id="form-group--password"
            type={showPassword ? "text" : "password"}
            className="login__input-field"
            value={loginInfo.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            required
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

        {errors.passwordError && errors.passwordTouched && (
          <div className="login__error-message">{errors.passwordError}</div>
        )}
      </div>

      <button className="login__submit-button">
        <span>Log in</span>
      </button>
    </form>
  );
};
