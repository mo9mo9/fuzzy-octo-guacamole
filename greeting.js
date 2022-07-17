const form = document.querySelector(".js-form"),
  greeting = document.querySelector(".js-greeting"),
  input = form.querySelector("input"),
  edit = document.querySelector(".js-edit");

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  FA_EDIT = "fa-edit"; //CN : className, LS : Local Storage

function reName() {
  localStorage.removeItem(USER_LS);
  greeting.classList.remove(SHOWING_CN);
  askForName();
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  edit.classList.remove(FA_EDIT);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  edit.classList.add(FA_EDIT);
  greeting.innerText = `Hello ${text}`;
  edit.addEventListener("click", reName);
}

function localName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // user is not
    askForName();
  } else {
    // user is
    paintGreeting(currentUser);
  }
}

function init() {
  localName();
}

init();
