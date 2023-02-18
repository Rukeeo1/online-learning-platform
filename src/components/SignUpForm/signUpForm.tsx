import { TextField } from "@mui/material";
import * as React from "react";

import { CommonText } from "../../common/CustomText";
import "./signUpForm.css";
import {
  AuthFormFieldGroup,
  Div,
  FormField,
  FormFieldContainer,
  FormInputContainer,
  SignUpComponent,
  SignUpFormContainer,
  LoginFormGroup,
  SignUpMainContainer,
  SignupFormFieldGroup,
  SignUpFormFooter,
  SignUpFormLogAccount,
  SignUpFormTermsPolicy,
  SignUpLabel,
  SignUpSpan,
  SignUpTextContainer,
} from "./signUpForm.styled";

interface signUpProps {}

export const SignUpForm: React.FunctionComponent<signUpProps> = (props) => {
  return (
    <SignUpMainContainer>
      <SignUpComponent>
        <SignUpFormContainer>
          <h2 className="login-form--greeting">Sign up and start learning</h2>

          <Div>
            <LoginFormGroup>
              <FormField>
                <AuthFormFieldGroup>
                  <FormFieldContainer>
                    <FormInputContainer>
                      <input
                        aria-invalid="false"
                        name="name"
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
                            Fullname
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
                        name="email"
                        min-length="7"
                        max-length="64"
                        id="form-group--2"
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
                        id="form-group--3"
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

                <SignupFormFieldGroup>
                  <SignUpLabel>
                    <input
                      name="subscribeToEmails"
                      className="toggle-input"
                      id="checkbox--7"
                      type="checkbox"
                    />
                    <CommonText
                      content="Send me special offers, personalized recommendations, and
                    learning tips."
                      className={""}
                    />
                  </SignUpLabel>
                </SignupFormFieldGroup>

                <button type="submit" className="login-submit-button">
                  <span>Sign Up</span>
                </button>
              </FormField>
            </LoginFormGroup>
          </Div>

          <SignUpFormFooter>
            <SignUpFormTermsPolicy>
              <SignUpTextContainer>
                <SignUpSpan>
                  <CommonText
                    content="By signing up, you agree to our"
                    className={"signing-up--text"}
                  />
                  <a
                    target="_blank"
                    className="signup-link--terms-and-privacy"
                    href="/terms/privacy/"
                    rel="noopener noreferrer"
                  >
                    <CommonText
                      content="Terms of Use"
                      className={"signing-up--text"}
                    />
                  </a>
                  <CommonText content="and" className={"signing-up--text"} />

                  <a
                    target="_blank"
                    className="signup-link--terms-and-privacy"
                    href="/terms/"
                    rel="noopener noreferrer"
                  >
                    <CommonText
                      content="Privacy Policy.."
                      className={"signing-up--text"}
                    />
                  </a>
                </SignUpSpan>
              </SignUpTextContainer>
            </SignUpFormTermsPolicy>

            <div className="signup-form--separator-container"></div>

            <SignUpFormLogAccount>
              <span>
                Already have an account?{" "}
                <a
                  className="sign-login-link-underline"
                  href="/join/login-popup/?locale=en_US&amp;next=https%3A%2F%2Fwww.udemy.com%2F&amp;response_type=html"
                >
                  Log in
                </a>
              </span>
            </SignUpFormLogAccount>
          </SignUpFormFooter>
        </SignUpFormContainer>
      </SignUpComponent>
    </SignUpMainContainer>
  );
};
