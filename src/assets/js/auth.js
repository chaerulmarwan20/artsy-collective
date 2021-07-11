const homepage = document.querySelector(".homepage-wrapper");
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
    homepage.style.display = "block";
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

const loginFunc = () => {
  const email = document.querySelector(".login input[name='email']");
  const password = document.querySelector(".login input[name='password']");

  if (!email.value || !password.value) {
    return alert("Email dan password harus diisi!");
  }

  return alert(`Email: ${email.value} & password: ${password.value}`);
};

const registerFunc = () => {
  const firstName = document.querySelector(".register input[name='firstName']");
  const lastName = document.querySelector(".register input[name='lastName']");
  const email = document.querySelector(".register input[name='email']");
  const contact = document.querySelector(".register input[name='contact']");
  const birthday = document.querySelector(".register input[name='birthday']");
  const password = document.querySelector(".register input[name='password']");
  const confirmPassword = document.querySelector(
    ".register input[name='confirmPassword']"
  );
  const small = document.querySelectorAll("small");

  firstName.classList.add("error");

  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !contact.value ||
    !birthday.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    firstName.classList.add("error");
    lastName.classList.add("error");
    email.classList.add("error");
    contact.classList.add("error");
    birthday.classList.add("error");
    password.classList.add("error");
    confirmPassword.classList.add("error");
    small.forEach((item) => {
      item.style.display = "inline-block";
    });
  } else {
    return alert(
      `First name: ${firstName.value}, last name: ${lastName.value}, email: ${email.value}, contact: ${contact.value}, date of birth: ${birthday.value}, password: ${password.value} & confirm password: ${confirmPassword.value}`
    );
  }
};
