import * as React from "react";
import "./Login.css";
import { LoginSocialButton } from "./LoginSocialButton";
import { LoginForm } from "./LoginFormField";

interface LoginProps {}

export const Login: React.FunctionComponent<LoginProps> = (props) => {
  const {} = props;

  return (
    <div className="login">
      <div className="login__component">
        <div className="login__auth-container">
          <h2 className="login__auth-title">Log in to your Udemy account</h2>

          <LoginSocialButton />

          <LoginForm />

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
