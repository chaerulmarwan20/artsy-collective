import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import propTypes from "prop-types";

import Input from "../Form/Input";
import InputPassword from "../Form/InputPassword";
import Button from "../Button/Button";
import ButtonClose from "../Button/ButtonClose";

export default function SigIn({ type, handleTypePassword }) {
  const signInValues = {
    email: "",
    password: "",
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

  return (
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
              formikSignIn.errors.email && formikSignIn.touched.email && "error"
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
  );
}

SigIn.propTypes = {
  type: propTypes.string,
  handleTypePassword: propTypes.func,
};
