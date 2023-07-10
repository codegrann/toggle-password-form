let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", show);

function show() {
  let type = password.getAttribute("type");
  let newAttribute = type == "password" ? "text" : "password";

  togglePassword.classList.toggle("bi-eye");
  password.setAttribute("type", newAttribute);
}
