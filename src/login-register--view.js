const loginSide = document.querySelector(".login--container");
const registerSide = document.querySelector(".register--container");

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

const loginSwitch = document.querySelector(".login-switch");
const loginSwitchSmall = document.querySelector(".login-switch__small");
const registerSwitchSmall = document.querySelector(".register-switch__small");
const registerSwitch = document.querySelector(".register-switch");

const loginSticker = document.querySelector(".login-sticker");
const registerSticker = document.querySelector(".register-sticker");

const loginSwtichContainer = document.querySelector(".login-switch--container");
const registerSwtichContainer = document.querySelector(
  ".register-switch--container"
);

const viewLoginSwitch = () => {
  loginSide.classList.add("login-background--gradient");
  loginSticker.classList.remove("image-big");
  loginSwtichContainer.classList.add("hide");
  loginForm.classList.remove("hide");
  registerSide.classList.remove("register-background--gradient");
  registerSticker.classList.add("image-big");
  registerSwtichContainer.classList.remove("hide");
  registerForm.classList.add("hide");
};

loginSwitch.addEventListener("click", viewLoginSwitch);

const viewRegisterSwitch = () => {
  loginSide.classList.remove("login-background--gradient");
  loginSticker.classList.add("image-big");
  loginSwtichContainer.classList.remove("hide");
  loginForm.classList.add("hide");
  registerSide.classList.add("register-background--gradient");
  registerSticker.classList.remove("image-big");
  registerSwtichContainer.classList.add("hide");
  registerForm.classList.remove("hide");
};

registerSwitch.addEventListener("click", viewRegisterSwitch);

const viewLoginSwitchSmall = () => {
  loginSide.classList.remove("d-none");
  registerSide.classList.add("d-none");
  loginSide.classList.add("login-background--gradient");
  loginSticker.classList.remove("image-big");
  loginSwtichContainer.classList.add("hide");
  loginForm.classList.remove("hide");
};

loginSwitchSmall.addEventListener("click", viewLoginSwitchSmall);

const viewRegisterSwitchSmall = () => {
  loginSide.classList.add("d-none");
  registerSide.classList.remove("d-none");
  loginSide.classList.remove("login-background--gradient");
  loginSticker.classList.add("image-big");
  loginSwtichContainer.classList.remove("hide");
  loginForm.classList.add("hide");
};

registerSwitchSmall.addEventListener("click", viewRegisterSwitchSmall);
