import * as React from "react";
import { Svgs } from "../../assets/svgs";
import "./Login.css";
import { Button } from "../../common/Button/Button";

interface LoginSocialButtonProps {}

const socialButtons = [
  {
    id: "google",
    content: "Continue with Google",
    icon: <Svgs.GoogleIcon className="google-auth-icon" />,
  },
  {
    id: "facebook",
    content: "Continue with Facebook",
    icon: <Svgs.FacebookIcon className="google-auth-icon" />,
  },
  {
    id: "apple",
    content: "Continue with Apple",
    icon: <Svgs.AppleIcon className="google-auth-icon" />,
  },
];

export const LoginSocialButton: React.FunctionComponent<
  LoginSocialButtonProps
> = (props) => {
  const {} = props;

  const handleClick = () => {};

  return (
    <>
      <Button
        content="Continue with Google"
        className="login__auth-social-button"
        size="large"
        variant="primary"
        onClick={handleClick}
        icon={<Svgs.GoogleIcon className="login__social--icon" />}
      />

      <Button
        content="Continue with Facebook"
        className="login__auth-social-button"
        size="large"
        variant="primary"
        onClick={handleClick}
        icon={<Svgs.FacebookIcon className="login__social--icon" />}
      />

      <Button
        content="Continue with Apple"
        className="login__auth-social-button"
        size="large"
        variant="primary"
        onClick={handleClick}
        icon={<Svgs.AppleIcon className="login__social--icon" />}
      />
    </>
  );
};
