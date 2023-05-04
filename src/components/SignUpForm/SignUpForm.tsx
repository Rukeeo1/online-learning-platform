import * as React from "react";
import "./SignUp.css";

interface SignUpProps {}

export const SignUpForm: React.FunctionComponent<SignUpProps> = (props) => {
  const {} = props;

  const [isPasswordTyped, setIsPasswordTyped] = React.useState(false);
  const [isFullnameFocused, setIsFullnameFocused] = React.useState(false);
  const [isEmailLabelFocused, setIsEmailLabelFocused] = React.useState(false);
  const [isPasswordLabelFocused, setIsPasswordLabelFocused] =
    React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const [password, setPassword] = React.useState("");

  const [passwordStrengthLevel, setPasswordStrengthLevel] = React.useState(0);

  React.useEffect(() => {
    if (password.length < 8) {
      setPasswordStrengthLevel(0);
    } else if (password.length < 12) {
      setPasswordStrengthLevel(1);
    } else if (password.length < 16) {
      setPasswordStrengthLevel(2);
    } else {
      setPasswordStrengthLevel(3);
    }
  }, [password]);

  const passwordStrengthLevels = [
    { label: "Too weak", color: "#1C1D1F" },
    { label: "Could be stronger", color: "#1C1D1F" },
    { label: "Strong password", color: "#1C1D1F" },
    { label: "Very strong password", color: "#1C1D1F" },
  ];

  const passwordStrengthBoxes = passwordStrengthLevels.map((level, index) => (
    <div
      key={index}
      className="signup__password--strength-box"
      style={{
        backgroundColor:
          index <= passwordStrengthLevel ? level.color : "#d1d7dc",
      }}
    ></div>
  ));

  const [signUpInfo, setSignUpInfo] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    fullnameError: "",
    fullnameTouched: false,
    emailError: "",
    emailTouched: false,
    passwordError: "",
    passwordTouched: false,
  });

  const validateFullname = (fullname: string): boolean => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(fullname);
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });

    if (name === "fullname") {
      setErrors({
        ...errors,
        fullnameError: !validateFullname(value)
          ? "Fullname can only contain alphabets and spaces"
          : "",
      });
    } else if (name === "email") {
      setErrors({
        ...errors,
        emailError: !validateEmail(value)
          ? "Please enter a valid email address"
          : "",
        emailTouched: true,
      });
    }
  };

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
              <span className="signup__compact-form-label-text">Fullname</span>
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
              <span className="signup__compact-form-label-text">Email</span>
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
              <span className="signup__compact-form-label-text">Password</span>
            </span>
          </label>
          <input
            name="password"
            id="form-group--email"
            type="password"
            className="signup__input-field"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div className="signup__password-strength-indicator-container">
          <div className="signup__password-strength-indicator-content">
            {passwordStrengthBoxes}
          </div>
        </div>
        <div className="signup__form-checkbox-notification-container">
          {password &&
            `Password strength: ${passwordStrengthLevels[passwordStrengthLevel].label}`}
        </div>

        {/* <div className="signup__password-strength-indicator-container">
          <div className="signup__password-strength-indicator-content">
            <div className="signup__password--strength-box"></div>
            <div className="signup__password--strength-box"></div>
            <div className="signup__password--strength-box"></div>
            <div className="signup__password--strength-box"></div>
          </div>
        </div> */}
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
          Send me special offers, personalized recommendations, and learning
          tips.
        </label>
      </div>

      <button className="signup__submit-button">
        <span>Sign up</span>
      </button>
    </form>
  );
};
