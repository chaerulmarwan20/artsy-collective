import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./auth.scss";

import Input from "../../components/Form/Input";
import InputPassword from "../../components/Form/InputPassword";
import InputDate from "../../components/Form/InputDate";
import InputRadio from "../../components/Form/InputRadio";
import InputCheckbox from "../../components/Form/InputCheckbox";
import Button from "../../components/Button/Button";
import ButtonClose from "../../components/Button/ButtonClose";
import Modal from "../../components/Modal/Modal";

export default function Auth() {
  const listRadio = [
    {
      id: "female",
      label: "Female",
      isChecked: true,
    },
    {
      id: "male",
      label: "Male",
      isChecked: false,
    },
  ];

  const listCheckbox = [
    {
      name: "arrival",
      class: "arrival-label",
      label: "Send me Artsy Collective new arrival updates, offers, and more.",
    },
    {
      name: "terms",
      class: "terms-label",
      label:
        "I agree to Artsy Collective <a href='#' class='hover-color-primary'title='Terms & Conditions'>Terms & Conditions </a> and <a href='#' class='hover-color-primary' title='Privacy Policy'>Privacy Policy.</a>",
    },
  ];

  const listInput = [
    {
      name: "firstName",
      label: "FirstName",
      type: "text",
      placeholder: "ex: john",
      small: "",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "ex: doe",
      small: "",
    },
  ];

  const handleTypePassword = (type) => {
    const passLogin = document.querySelector(".password-login");
    const passRegister = document.querySelector(".password-register");
    const passConfirmRegister = document.querySelector(
      ".confirm-password-register"
    );

    if (type === "loginPass") {
      passLogin.type === "password"
        ? (passLogin.type = "text")
        : (passLogin.type = "password");
    } else if (type === "registerPass") {
      passRegister.type === "password"
        ? (passRegister.type = "text")
        : (passRegister.type = "password");
    } else {
      passConfirmRegister.type === "password"
        ? (passConfirmRegister.type = "text")
        : (passConfirmRegister.type = "password");
    }
  };

  const handleAuth = (type) => {
    const login = document.querySelector(".login");
    const register = document.querySelector(".register");

    if (type === "login") {
      register.classList.remove("active");
      login.classList.add("active");
    } else {
      login.classList.remove("active");
      register.classList.add("active");
    }
  };

  const handleWindow = () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const homepage = document.querySelector(".homepage");
    const auth = document.querySelector(".auth");

    const btnCloseLogin = document.getElementById("btnCloseLogin");
    const btnCloseRegister = document.getElementById("btnCloseRegister");

    window.addEventListener("click", (e) => {
      if (
        e.target === btnCloseLogin ||
        e.target === btnCloseRegister ||
        e.target === auth
      ) {
        auth.style.display = "none";
        header.style.display = "block";
        homepage.style.display = "block";
        footer.style.display = "block";
        document.body.classList.remove("overflow-modal");
      }
    });
  };

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
              <Input classForm="form-row" list={listInput} isRow />
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
                list={listRadio}
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
                list={listCheckbox}
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
