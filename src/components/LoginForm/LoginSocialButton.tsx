import * as React from "react";
import { Svgs } from "../../assets/svgs";
import "./Login.css";
import { ButtonWithIcon } from "../../common/Button/Button";

interface LoginSocialButtonProps {}

export const LoginSocialButton: React.FunctionComponent<
  LoginSocialButtonProps
> = (props) => {
  const {} = props;

  const handleClick = () => {};

  return (
    <>
      <ButtonWithIcon
        content="Continue with Google"
        className="login__auth-social-button"
        size="large"
        variant="primary"
        onClick={handleClick}
        icon={<Svgs.GoogleIcon className="login__social--icon" />}
      />

      <ButtonWithIcon
        content="Continue with Facebook"
        className="login__auth-social-button"
        size="large"
        variant="primary"
        onClick={handleClick}
        icon={<Svgs.FacebookIcon className="login__social--icon" />}
      />

      <ButtonWithIcon
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
