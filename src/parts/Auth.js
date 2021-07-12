import React from "react";
import { Link } from "react-router-dom";

import FormGroup from "../components/module/FormGroup";
import Button from "../components/module/Button";

import Close from "../assets/icon/close.svg";

export default function Auth() {
  return (
    <div className="modal auth">
      <div className="wrapper content-auth">
        <section className="login active">
          <div className="login-header">
            <p className="font-semi-bold">Welcome Back</p>
            <button
              type="button"
              className="btn-close hover-opacity-primary"
              id="btnCloseLogin"
            >
              <img
                src={Close}
                alt="Close"
                className="img-block"
                id="imgCloseLogin"
              />
            </button>
          </div>
          <div className="login-body">
            <p>Sign in with your email and password.</p>
            <form className="form-wrapper">
              <FormGroup
                name="email-login"
                label="Email / Username"
                type="text"
                placeholder="ex: johndoe@email.com"
              />
              <FormGroup
                name="password-login"
                label="Password"
                type="password"
                placeholder="ex: *****"
                classInput="password-login"
                classBtn="btn-eye-login hover-opacity-primary"
                isPassword
              />
              <Link
                to="#"
                className="hover-color-secondary"
                title="Forgot Password"
              >
                Forgot Password
              </Link>
              <div className="form-footer-login">
                <Button
                  type="submit"
                  className="btn-auth hover-opacity-tertiary"
                  isPrimary
                >
                  Login
                </Button>
                <p>
                  New Customer?{" "}
                  <Link
                    to="#"
                    className="font-semi-bold hover-color-tertiary"
                    title="Sign Up"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
        <section className="register">
          <div className="register-header">
            <p className="font-semi-bold">Create an Account</p>
            <button
              type="button"
              className="btn-close hover-opacity-primary"
              id="btnCloseRegister"
            >
              <img
                src={Close}
                alt="Close"
                className="img-block"
                id="imgCloseRegister"
              />
            </button>
          </div>
          <div className="register-body">
            <p>Save your information to check out faster</p>
            <form className="form-wrapper form-register">
              <div className="form-group form-row">
                <div className="form-item">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="ex: john"
                  />
                  {/* <small>First Name cannot contain numbers</small> */}
                  <small>Required</small>
                </div>
                <div className="form-item">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="ex: doe"
                  />
                  <small>Required</small>
                </div>
              </div>
              <FormGroup
                name="email-register"
                label="Email / Username"
                type="text"
                placeholder="ex: johndoe@email.com"
              />
              <FormGroup
                name="contact"
                label="Contact Number"
                type="text"
                placeholder="ex: +62812 3456 7890"
              />
              <div className="form-group">
                <label htmlFor="birthday">Date of Birth</label>
                <div className="input-date">
                  <input type="date" name="birthday" id="birthday" />
                </div>
              </div>
              <div className="form-group form-radio">
                <div className="form-item-radio">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    defaultChecked
                  />
                  <label htmlFor="female" className="radio-label">
                    Female
                  </label>
                </div>
                <div className="form-item-radio">
                  <input type="radio" name="gender" id="male" />
                  <label htmlFor="male" className="radio-label">
                    Male
                  </label>
                </div>
              </div>
              <FormGroup
                name="password-register"
                label="Password"
                type="password"
                placeholder="ex: *****"
                classInput="password-register"
                classBtn="btn-eye-register-one hover-opacity-primary"
                isPassword
              />
              <FormGroup
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="ex: *****"
                classInput="confirm-password-register"
                classBtn="btn-eye-register-two hover-opacity-primary"
                isPassword
              />
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    name="arrival"
                    id="arrival"
                  />
                  <label
                    htmlFor="arrival"
                    className="label-check label-check-auth"
                  ></label>
                  <label htmlFor="arrival" className="arrival-label">
                    Send me Artsy Collective new arrival updates, offers, and
                    more.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="custom-check"
                    type="checkbox"
                    name="terms"
                    id="terms"
                  />
                  <label
                    htmlFor="terms"
                    className="label-check label-check-auth"
                  ></label>
                  <label htmlFor="terms" className="terms-label">
                    I agree to Artsy Collective{" "}
                    <Link
                      to="#"
                      className="hover-color-primary"
                      title="Terms & Conditions"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="#"
                      className="hover-color-primary"
                      title="Privacy Policy"
                    >
                      Privacy Policy.
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-footer-register">
                <Button
                  type="submit"
                  className="btn-auth hover-opacity-tertiary"
                  isPrimary
                >
                  Create Account
                </Button>
                <p>
                  Already have account?{" "}
                  <Link
                    to="#"
                    className="font-semi-bold hover-color-tertiary"
                    title="Sign In"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
