import { TextField } from "@mui/material";
import * as React from "react";
import { Svgs } from "../../assets/svgs";
import "./loginForm.css";
import {
  AccountSignUp,
  AuthFormFieldGroup,
  Div,
  ForgotPassword,
  FormField,
  FormFieldContainer,
  FormInputContainer,
  LoginComponent,
  LoginFormContainer,
  LoginFormFooter,
  LoginFormGroup,
  LoginMainContainer,
  OrganizationAccount,
} from "./loginForm.styled";

interface loginProps {}

export const LoginForm: React.FunctionComponent<loginProps> = (props) => {
  return (
    <LoginMainContainer>
      <LoginComponent>
        <LoginFormContainer>
          <h2 className="login-form--greeting">Log in to your Udemy account</h2>

          <Div>
            <button
              type="button"
              className="auth-google--social-btn"
              data-purpose="google-login"
            >
              <Svgs.googleIcon className="googleIcon" />
              <span>Continue with Google</span>
            </button>
            <button
              type="button"
              className="auth-google--social-btn"
              data-purpose="facebook-login"
            >
              <Svgs.facebookIcon className="googleIcon" />
              <span>Continue with Facebook</span>
            </button>
            <button
              type="button"
              className="auth-google--social-btn"
              data-purpose="apple-login"
            >
              <Svgs.appleIcon className="googleIcon" />
              <span>Continue with Apple</span>
            </button>

            <LoginFormGroup>
              <FormField>
                <AuthFormFieldGroup>
                  <FormFieldContainer>
                    <FormInputContainer>
                      <input
                        aria-invalid="false"
                        name="email"
                        min-length="7"
                        max-length="64"
                        id="form-group--1"
                        type="email"
                        className="form-input-control"
                      />
                      <label
                        htmlFor="form-group--1"
                        className="input-form-label"
                      >
                        <span className="form-label-content">
                          <span className="ud-compact-form-label-text">
                            Email
                          </span>
                        </span>
                      </label>
                    </FormInputContainer>
                  </FormFieldContainer>
                </AuthFormFieldGroup>

                <AuthFormFieldGroup>
                  <FormFieldContainer>
                    <FormInputContainer>
                      <input
                        aria-invalid="false"
                        name="password"
                        min-length="7"
                        max-length="64"
                        id="form-group--1"
                        type="password"
                        className="form-input-control"
                      />
                      <label
                        htmlFor="form-group--1"
                        className="input-form-label"
                      >
                        <span className="form-label-content">
                          <span className="ud-compact-form-label-text">
                            Password
                          </span>
                        </span>
                      </label>
                    </FormInputContainer>
                  </FormFieldContainer>
                </AuthFormFieldGroup>
                <button type="submit" className="login-submit-button">
                  <span>Log In</span>
                </button>
              </FormField>
            </LoginFormGroup>
          </Div>

          <LoginFormFooter>
            <ForgotPassword>
              <span>
                or{" "}
                <a className="link-underline" href="/user/forgot-password/">
                  Forgot Password
                </a>
              </span>
            </ForgotPassword>

            <AccountSignUp>
              <span>
                Don't have an account?{" "}
                <a className="signup-text-bold" href="/join/signup-popup/">
                  Sign up
                </a>
              </span>
            </AccountSignUp>

            <OrganizationAccount>
              <a
                className="organization-text-bold"
                href="/organization/global-login/"
              >
                Log in with your organization.
              </a>
            </OrganizationAccount>
          </LoginFormFooter>
        </LoginFormContainer>
      </LoginComponent>
    </LoginMainContainer>
  );
};
