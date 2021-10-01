// ACTIVATE STRICT MODE
"use strict";

// ------------------------------

const navBar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const topBun = document.getElementById("top");
const meatBun = document.getElementById("meat");
const bottomBun = document.getElementById("bottom");

// ------------------------------

function navOpen() {
  navBar.classList.toggle("showNav");
  topBun.classList.toggle("topbun-change"); //ROTATE TOP LINE
  meatBun.classList.toggle("middle-change"); //ROTATE MIDDLE LINE
  bottomBun.classList.toggle("bottombun-change"); //ROTATE BOTTOM LINE
}

// CLICK TO SHOW NAV MENU AND ANIMATIONS ----

burger.addEventListener("click", navOpen);

// BURGER MENU MOVE ON SCROLL ----

window.addEventListener("scroll", () => {
  burger.classList.toggle("sticky", window.scrollY > 100);
});

// ------------------------------

const trackLink = document.getElementById("track-link");
const loginLink = document.getElementById("login-link");
const loginModal = document.getElementById("login-modal");
const trackModal = document.getElementById("track-modal");
const trackBox = document.getElementById("track-box");
const loginBox = document.getElementById("login-box");
const trackText = document.getElementById("trackText");
const loginText = document.getElementById("loginText");
const trackClose = document.getElementById("trackClose");
const loginClose = document.getElementById("loginClose");

loginLink.addEventListener("click", () => {
  loginModal.classList.toggle("showModal");
  loginLink.classList.toggle("btnModalEffects");
  loginLink.classList.toggle("trackLinkFixed");
  trackBox.classList.toggle("indexMove");
  loginClose.classList.toggle("showX");
  loginText.classList.toggle("textClose");
});

trackLink.addEventListener("click", () => {
  trackModal.classList.toggle("showModal");
  trackLink.classList.toggle("btnModalEffects");
  trackLink.classList.toggle("trackLinkFixed");
  loginBox.classList.toggle("indexMove");
  trackClose.classList.toggle("showX");
  trackText.classList.toggle("textClose");
});
