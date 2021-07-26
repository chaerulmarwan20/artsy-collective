import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./auth.scss";

import { handleTypePassword, handleWindow } from "./helpers";

import Modal from "../../components/Modal/Modal";
import SigIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export default function Auth() {
  const { type } = useParams();

  useEffect(() => {
    document.body.classList.add("overflow-modal");
    handleWindow();
  }, []);

  return (
    <Modal className="auth">
      <div className="wrapper content-auth">
        <SigIn type={type} handleTypePassword={handleTypePassword} />
        <SignUp type={type} handleTypePassword={handleTypePassword} />
      </div>
    </Modal>
  );
}
