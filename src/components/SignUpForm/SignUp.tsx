import * as React from "react";
import "./SignUp.css";
import { SignUpForm } from "./SignUpForm";

interface signUpProps {}

export const SignUp: React.FunctionComponent<signUpProps> = (props) => {
  const {} = props;

  return (
    <div className="signup">
      <div className="signup__component">
        <div className="signup__auth-container">
          <h2 className="signup__auth-title">Sign up and start learning</h2>

          <SignUpForm />

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
