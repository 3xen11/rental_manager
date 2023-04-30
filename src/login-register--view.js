const loginSide = document.querySelector(".login__container");
const registerSide = document.querySelector(".register__container");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginSwitch = document.querySelector(".login-switch");
const loginSwitchMobile = document.querySelector(".login-switch--mobile");
const registerSwitch = document.querySelector(".register-switch");
const registerSwitchMobile = document.querySelector(".register-switch--mobile");
const loginSticker = document.querySelector(".login-sticker");
const registerSticker = document.querySelector(".register-sticker");
const loginSwtichContainer = document.querySelector(".login-switch__container");
const registerSwtichContainer = document.querySelector(
  ".register-switch__container"
);
const registerSwtichMobileContainer = document.querySelector(
  ".register-switch__mobile-container"
);
const loginSwtichMobileContainer = document.querySelector(
  ".login-switch__mobile-container"
);

// const viewportWidth = window.innerWidth;

class SignView {
  viewportWidth = window.innerWidth;

  constructor() {
    this.bigImageMediumWidth();

    loginSwitch.addEventListener("click", this.viewLoginSwitch.bind(this));
    registerSwitch.addEventListener(
      "click",
      this.viewRegisterSwitch.bind(this)
    );
    loginSwitchMobile.addEventListener(
      "click",
      this.viewLoginSwitch.bind(this)
    );
    registerSwitchMobile.addEventListener(
      "click",
      this.viewRegisterSwitch.bind(this)
    );
  }

  bigImageMediumWidth() {
    if (this.viewportWidth >= 768 && !loginForm.classList.contains("hidden")) {
      loginSticker.classList.remove("img-big");
      registerSticker.classList.add("img-big");
    }

    if (this.viewportWidth >= 768 && loginForm.classList.contains("hidden")) {
      loginSticker.classList.add("img-big");
      registerSticker.classList.remove("img-big");
    }
  }

  viewLoginSwitch() {
    registerSide.classList.add("max-md:hidden");
    registerForm.classList.add("hidden");
    registerSwtichContainer.classList.remove("hidden");
    loginSwtichContainer.classList.add("hidden");
    loginForm.classList.add("flex");
    loginForm.classList.remove("hidden");
    loginSwtichMobileContainer.classList.remove("md:hidden");
    loginSwtichMobileContainer.classList.add("md:flex");
    loginSide.classList.remove("hidden");
    loginSide.classList.add("flex");
    this.bigImageMediumWidth();
  }

  viewRegisterSwitch() {
    registerSide.classList.remove("max-md:hidden");
    registerForm.classList.remove("hidden");
    registerSwtichContainer.classList.add("hidden");
    loginSwtichContainer.classList.remove("hidden");
    loginForm.classList.remove("flex");
    loginForm.classList.add("hidden");
    loginSwtichMobileContainer.classList.add("md:hidden");
    loginSwtichMobileContainer.classList.remove("md:flex");
    loginSide.classList.add("hidden");
    loginSide.classList.remove("flex");
    this.bigImageMediumWidth();
  }
}

const signView = new SignView();
