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

  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const homepage = document.querySelector(".homepage");
    const auth = document.querySelector(".auth");
    const login = document.querySelector(".login");
    const register = document.querySelector(".register");
    const btnCloseLogin = document.getElementById("btnCloseLogin");
    const imgCloseLogin = document.getElementById("imgCloseLogin");
    const btnCloseRegister = document.getElementById("btnCloseRegister");
    const imgCloseRegister = document.getElementById("imgCloseRegister");
    const btnEyeLogin = document.querySelector(".btn-eye-login");
    const btnEyeRegisterOne = document.querySelector(".btn-eye-register-one");
    const btnEyeRegisterTwo = document.querySelector(".btn-eye-register-two");
    const passLogin = document.querySelector(".password-login");
    const passRegister = document.querySelector(".password-register");
    const passConfirmRegister = document.querySelector(
      ".confirm-password-register"
    );
    const linkSignUp = document.querySelector(".form-footer-login a");
    const linkSignIn = document.querySelector(".form-footer-register a");

    document.body.classList.add("overflow-modal");

    window.addEventListener("click", (e) => {
      if (
        e.target === btnCloseLogin ||
        e.target === imgCloseLogin ||
        e.target === btnCloseRegister ||
        e.target === imgCloseRegister ||
        e.target === auth
      ) {
        auth.style.display = "none";
        header.style.display = "block";
        homepage.style.display = "block";
        footer.style.display = "block";
        document.body.classList.remove("overflow-modal");
      }
    });

    btnEyeLogin.addEventListener("click", () => {
      passLogin.type === "password"
        ? (passLogin.type = "text")
        : (passLogin.type = "password");
    });

    btnEyeRegisterOne.addEventListener("click", () => {
      passRegister.type === "password"
        ? (passRegister.type = "text")
        : (passRegister.type = "password");
    });

    btnEyeRegisterTwo.addEventListener("click", () => {
      passConfirmRegister.type === "password"
        ? (passConfirmRegister.type = "text")
        : (passConfirmRegister.type = "password");
    });

    linkSignUp.addEventListener("click", () => {
      login.classList.remove("active");
      register.classList.add("active");
    });

    linkSignIn.addEventListener("click", () => {
      register.classList.remove("active");
      login.classList.add("active");
    });
  }, []);

  return (
    <div className="modal auth">
      <div className="wrapper content-auth">
        <section className="login active">
          <div className="login-header">
            <p className="font-semi-bold">Welcome Back</p>
            <ButtonClose
              className="btn-close hover-opacity-primary"
              idBtn="btnCloseLogin"
              idImg="imgCloseLogin"
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
              idBtn="btnCloseRegister"
              idImg="imgCloseRegister"
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
              />
              <InputPassword
                name="confirmPassword"
                label="Confirm Password"
                placeholder="ex: *****"
                classInput="confirm-password-register"
                classButton="btn-eye-register-two hover-opacity-primary"
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
