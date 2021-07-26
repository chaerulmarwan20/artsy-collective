import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./auth.scss";

import { handleTypePassword, handleWindow } from "./helpers";

import Input from "../../components/Form/Input";
import InputPassword from "../../components/Form/InputPassword";
import InputDate from "../../components/Form/InputDate";
import InputRadio from "../../components/Form/InputRadio";
import InputCheckbox from "../../components/Form/InputCheckbox";
import Button from "../../components/Button/Button";
import ButtonClose from "../../components/Button/ButtonClose";
import Modal from "../../components/Modal/Modal";

export default function Auth() {
  const { type } = useParams();

  const signInValues = {
    email: "",
    password: "",
  };

  const signUpValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    birthday: "",
    gender: "female",
    password: "",
    confirmPassword: "",
    subscription: false,
    acceptTerms: false,
  };

  const signInSchema = Yup.object({
    email: Yup.string().trim().email("Invalid email").required("Required"),
    password: Yup.string()
      .trim()
      .required("Required")
      .min(8, "Too short")
      .matches(/\w*[a-z]\w*/, "Must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Must have a capital letter")
      .matches(/\d/, "Must have a number")
      .matches(
        /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/,
        "Must have a special character"
      ),
  });

  const signUpSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .required("Required")
      .matches(/^[a-z A-Z]*$/, "Must be alphabet")
      .min(3, "Too short"),
    lastName: Yup.string()
      .trim()
      .required("Required")
      .matches(/^[a-z A-Z]*$/, "Must be alphabet")
      .min(3, "Too short"),
    email: Yup.string().trim().email("Invalid email").required("Required"),
    contactNumber: Yup.string()
      .trim()
      .required("Required")
      .min(10, "Too short")
      .matches(/^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g, "Invalid number"),
    birthday: Yup.date().required("Required").max(new Date(), "Invalid date"),
    gender: Yup.string().required("Required"),
    password: Yup.string()
      .trim()
      .required("Required")
      .min(8, "Too short")
      .matches(/\w*[a-z]\w*/, "Must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Must have a capital letter")
      .matches(/\d/, "Must have a number")
      .matches(
        /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/,
        "Must have a special character"
      ),
    confirmPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("password")], "Password's not match")
      .required("Required"),
    subscription: Yup.bool(),
    acceptTerms: Yup.bool().oneOf([true]),
  });

  const formikSignIn = useFormik({
    initialValues: signInValues,
    validationSchema: signInSchema,
    onSubmit: (values) => {
      for (const v in values) {
        if (typeof values[v] === "string") values[v] = values[v].trim();
      }
      alert(JSON.stringify(values, null, 2));
      formikSignIn.resetForm();
    },
  });

  const formikSignUp = useFormik({
    initialValues: signUpValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      for (const v in values) {
        if (typeof values[v] === "string") values[v] = values[v].trim();
      }
      alert(JSON.stringify(values, null, 2));
      formikSignUp.resetForm();
    },
  });

  useEffect(() => {
    document.body.classList.add("overflow-modal");
    handleWindow();
  }, []);

  return (
    <Modal className="auth">
      <div className="wrapper content-auth">
        <section className={`login ${type === "signin" && "active"}`}>
          <div className="login-header">
            <p className="font-semi-bold">Welcome Back</p>
            <ButtonClose
              className="btn-close hover-opacity-primary"
              idImg="btnCloseLogin"
            />
          </div>
          <div className="login-body">
            <p>Sign in with your email and password.</p>
            <form className="form-wrapper" onSubmit={formikSignIn.handleSubmit}>
              <Input
                name="email"
                label="Email / Username"
                type="text"
                placeholder="ex: johndoe@email.com"
                classInput={`${
                  formikSignIn.errors.email &&
                  formikSignIn.touched.email &&
                  "error"
                }`}
                value={formikSignIn.values.email}
                onChange={formikSignIn.handleChange}
                onBlur={formikSignIn.handleBlur}
                error={
                  formikSignIn.errors.email &&
                  formikSignIn.touched.email &&
                  formikSignIn.errors.email
                }
              />
              <InputPassword
                name="password"
                label="Password"
                placeholder="ex: *****"
                classInput={`password-login ${
                  formikSignIn.errors.password &&
                  formikSignIn.touched.password &&
                  "error"
                }`}
                classButton="btn-eye-login hover-opacity-primary"
                value={formikSignIn.values.password}
                onChange={formikSignIn.handleChange}
                onBlur={formikSignIn.handleBlur}
                error={
                  formikSignIn.errors.password &&
                  formikSignIn.touched.password &&
                  formikSignIn.errors.password
                }
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
                <Button
                  type="submit"
                  className={`btn-auth ${
                    !formikSignIn.dirty || !formikSignIn.isValid
                      ? "btn-disabled"
                      : ""
                  }`}
                  isDisabled={
                    !formikSignIn.dirty || !formikSignIn.isValid ? true : false
                  }
                  isPrimary
                >
                  Login
                </Button>
                <p>
                  New Customer?{" "}
                  <Link
                    to="/account/signup"
                    className="font-semi-bold hover-color-tertiary"
                    title="Sign Up"
                    onClick={() => formikSignIn.resetForm()}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
        <section className={`register ${type === "signup" && "active"}`}>
          <div className="register-header">
            <p className="font-semi-bold">Create an Account</p>
            <ButtonClose
              className="btn-close hover-opacity-primary"
              idImg="btnCloseRegister"
            />
          </div>
          <div className="register-body">
            <p>Save your information to check out faster</p>
            <form
              className="form-wrapper form-register"
              onSubmit={formikSignUp.handleSubmit}
            >
              <div className="form-group form-row">
                <Input
                  name="firstName"
                  label="First Name"
                  type="text"
                  placeholder="ex: john"
                  classInput={`${
                    formikSignUp.errors.firstName &&
                    formikSignUp.touched.firstName &&
                    "error"
                  }`}
                  value={formikSignUp.values.firstName}
                  onChange={formikSignUp.handleChange}
                  onBlur={formikSignUp.handleBlur}
                  error={
                    formikSignUp.errors.firstName &&
                    formikSignUp.touched.firstName &&
                    formikSignUp.errors.firstName
                  }
                  isRow
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="ex: doe"
                  classInput={`${
                    formikSignUp.errors.lastName &&
                    formikSignUp.touched.lastName &&
                    "error"
                  }`}
                  value={formikSignUp.values.lastName}
                  onChange={formikSignUp.handleChange}
                  onBlur={formikSignUp.handleBlur}
                  error={
                    formikSignUp.errors.lastName &&
                    formikSignUp.touched.lastName &&
                    formikSignUp.errors.lastName
                  }
                  isRow
                />
              </div>
              <Input
                name="email"
                id="emailSignUp"
                label="Email / Username"
                type="text"
                placeholder="ex: johndoe@email.com"
                classInput={`${
                  formikSignUp.errors.email &&
                  formikSignUp.touched.email &&
                  "error"
                }`}
                value={formikSignUp.values.email}
                onChange={formikSignUp.handleChange}
                onBlur={formikSignUp.handleBlur}
                error={
                  formikSignUp.errors.email &&
                  formikSignUp.touched.email &&
                  formikSignUp.errors.email
                }
              />
              <Input
                name="contactNumber"
                label="Contact Number"
                type="text"
                placeholder="ex: +62812 3456 7890"
                classInput={`${
                  formikSignUp.errors.contactNumber &&
                  formikSignUp.touched.contactNumber &&
                  "error"
                }`}
                value={formikSignUp.values.contactNumber}
                onChange={formikSignUp.handleChange}
                onBlur={formikSignUp.handleBlur}
                error={
                  formikSignUp.errors.contactNumber &&
                  formikSignUp.touched.contactNumber &&
                  formikSignUp.errors.contactNumber
                }
              />
              <InputDate
                name="birthday"
                label="Date of Birth"
                classInput={`${
                  formikSignUp.errors.birthday &&
                  formikSignUp.touched.birthday &&
                  "error"
                }`}
                value={formikSignUp.values.birthday}
                onChange={formikSignUp.handleChange}
                onBlur={formikSignUp.handleBlur}
                error={
                  formikSignUp.errors.birthday &&
                  formikSignUp.touched.birthday &&
                  formikSignUp.errors.birthday
                }
              />
              <div className="form-group form-radio">
                <InputRadio
                  classRadio="form-item-radio"
                  name="gender"
                  id="female"
                  label="Female"
                  classLabel={`radio-label ${
                    formikSignUp.errors.gender &&
                    formikSignUp.touched.gender &&
                    "error"
                  }`}
                  value="female"
                  onChange={formikSignUp.handleChange}
                  isChecked={formikSignUp.values.gender === "female"}
                  isSingle
                />
                <InputRadio
                  classRadio="form-item-radio"
                  name="gender"
                  id="male"
                  label="Male"
                  classLabel={`radio-label ${
                    formikSignUp.errors.gender &&
                    formikSignUp.touched.gender &&
                    "error"
                  }`}
                  value="male"
                  onChange={formikSignUp.handleChange}
                  isChecked={formikSignUp.values.gender === "male"}
                  isSingle
                />
              </div>
              <InputPassword
                name="password"
                id="passwordSignUp"
                label="Password"
                placeholder="ex: *****"
                classInput={`password-register ${
                  formikSignUp.errors.password &&
                  formikSignUp.touched.password &&
                  "error"
                }`}
                classButton="btn-eye-register-one hover-opacity-primary"
                value={formikSignUp.values.password}
                onChange={formikSignUp.handleChange}
                onBlur={formikSignUp.handleBlur}
                error={
                  formikSignUp.errors.password &&
                  formikSignUp.touched.password &&
                  formikSignUp.errors.password
                }
                onClick={() => handleTypePassword("registerPass")}
              />
              <InputPassword
                name="confirmPassword"
                label="Confirm Password"
                placeholder="ex: *****"
                classInput={`confirm-password-register ${
                  formikSignUp.errors.confirmPassword &&
                  formikSignUp.touched.confirmPassword &&
                  "error"
                }`}
                classButton="btn-eye-register-two hover-opacity-primary"
                value={formikSignUp.values.confirmPassword}
                onChange={formikSignUp.handleChange}
                onBlur={formikSignUp.handleBlur}
                error={
                  formikSignUp.errors.confirmPassword &&
                  formikSignUp.touched.confirmPassword &&
                  formikSignUp.errors.confirmPassword
                }
                onClick={() => handleTypePassword("registerConfirm")}
              />
              <div className="form-group">
                <InputCheckbox
                  classCheckbox="form-check"
                  classLabel="label-check-auth"
                  name="subscription"
                  classDesc="arrival-label"
                  label="Send me Artsy Collective new arrival updates, offers, and more."
                  onChange={formikSignUp.handleChange}
                  isChecked={formikSignUp.values.subscription}
                  isAuth
                />
                <InputCheckbox
                  classCheckbox="form-check"
                  classLabel="label-check-auth"
                  name="acceptTerms"
                  classDesc="terms-label"
                  label="I agree to Artsy Collective <a href='#' class='hover-color-primary'title='Terms & Conditions'>Terms & Conditions </a> and <a href='#' class='hover-color-primary' title='Privacy Policy'>Privacy Policy.</a>"
                  onChange={formikSignUp.handleChange}
                  isChecked={formikSignUp.values.acceptTerms}
                  isAuth
                />
              </div>
              <div className="form-footer-register">
                <Button
                  type="submit"
                  className={`btn-auth ${
                    !formikSignUp.dirty || !formikSignUp.isValid
                      ? "btn-disabled"
                      : ""
                  }`}
                  isDisabled={
                    !formikSignUp.dirty || !formikSignUp.isValid ? true : false
                  }
                  isPrimary
                >
                  Create Account
                </Button>
                <p>
                  Already have account?{" "}
                  <Link
                    to="/account/signin"
                    className="font-semi-bold hover-color-tertiary"
                    title="Sign In"
                    onClick={() => formikSignUp.resetForm()}
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
