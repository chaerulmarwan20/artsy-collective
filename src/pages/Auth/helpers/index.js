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

export { handleTypePassword, handleWindow };
