import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./auth.scss";

import StaticData from "../../json/auth.json";
import { handleTypePassword, handleAuth, handleWindow } from "./helpers";

import Input from "../../components/Form/Input";
import InputPassword from "../../components/Form/InputPassword";
import InputDate from "../../components/Form/InputDate";
import InputRadio from "../../components/Form/InputRadio";
import InputCheckbox from "../../components/Form/InputCheckbox";
import Button from "../../components/Button/Button";
import ButtonClose from "../../components/Button/ButtonClose";
import Modal from "../../components/Modal/Modal";

export default function Auth() {
  useEffect(() => {
    document.body.classList.add("overflow-modal");

    handleWindow();
  }, []);

  return (
    <Modal className="auth">
      <div className="wrapper content-auth">
        <section className="login active">
          <div className="login-header">
            <p className="font-semi-bold">Welcome Back</p>
            <ButtonClose
              className="btn-close hover-opacity-primary"
              idImg="btnCloseLogin"
            />
          </div>
          <div className="login-body">
            <p>Sign in with your email and password.</p>
            <form className="form-wrapper">
              <Input
                name="email-login"
                label="Email / Username"
                type="text"
                placeholder="ex: johndoe@email.com"
              />
              <InputPassword
                name="password-login"
                label="Password"
                placeholder="ex: *****"
                classInput="password-login"
                classButton="btn-eye-login hover-opacity-primary"
                onClick={() => handleTypePassword("loginPass")}
              />
              <Link
                to="#"
                className="hover-color-secondary"
                title="Forgot Password"
              >
                Forgot Password
              </Link>
              <div className="form-footer-login">
                <Button type="submit" className="btn-auth" isPrimary>
                  Login
                </Button>
                <p>
                  New Customer?{" "}
                  <Link
                    to="#"
                    className="font-semi-bold hover-color-tertiary"
                    title="Sign Up"
                    onClick={() => handleAuth("register")}
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
            <ButtonClose
              className="btn-close hover-opacity-primary"
              idImg="btnCloseRegister"
            />
          </div>
          <div className="register-body">
            <p>Save your information to check out faster</p>
            <form className="form-wrapper form-register">
              <Input classForm="form-row" list={StaticData.listInput} isRow />
              <Input
                name="email-register"
                label="Email / Username"
                type="text"
                placeholder="ex: johndoe@email.com"
              />
              <Input
                name="contact"
                label="Contact Number"
                type="text"
                placeholder="ex: +62812 3456 7890"
              />
              <InputDate name="birthday" label="Date of Birth" />
              <InputRadio
                classForm="form-radio"
                list={StaticData.listRadio}
                classRadio="form-item-radio"
                name="gender"
                classLabel="radio-label"
              />
              <InputPassword
                name="password-register"
                label="Password"
                placeholder="ex: *****"
                classInput="password-register"
                classButton="btn-eye-register-one hover-opacity-primary"
                onClick={() => handleTypePassword("registerPass")}
              />
              <InputPassword
                name="confirmPassword"
                label="Confirm Password"
                placeholder="ex: *****"
                classInput="confirm-password-register"
                classButton="btn-eye-register-two hover-opacity-primary"
                onClick={() => handleTypePassword("registerConfirm")}
              />
              <InputCheckbox
                list={StaticData.listCheckbox}
                classCheckbox="form-check"
                classLabel="label-check-auth"
                isAuth
              />
              <div className="form-footer-register">
                <Button type="submit" className="btn-auth" isPrimary>
                  Create Account
                </Button>
                <p>
                  Already have account?{" "}
                  <Link
                    to="#"
                    className="font-semi-bold hover-color-tertiary"
                    title="Sign In"
                    onClick={() => handleAuth("login")}
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Modal>
  );
}
