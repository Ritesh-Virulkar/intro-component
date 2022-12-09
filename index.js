const userName = document.getElementById("userName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

console.log(userName.value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkValidations();
});

function checkValidations() {
  const userNameValue = userName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (userNameValue === "") {
    setError(userName, "username cannnot be blank");
  } else {
    setSucces(userName);
  }
  if (lastNameValue === "") {
    setError(lastName, "lastname cannnot be blank");
  } else {
    setSucces(lastName);
  }
  if (emailValue === "") {
    setError(email, "email cannnot be blank");
  } else if (!validateEmail(emailValue)) {
    setError(email, "please provide a valid email");
  } else {
    setSucces(email);
  }
  if (passwordValue === "") {
    setError(password, "password cannnot be blank");
  } else {
    setSucces(password);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}
function setSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
