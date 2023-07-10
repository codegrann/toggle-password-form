let form = document.querySelector("body");
let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");
// form.style.color='red';

togglePassword.addEventListener("click", show);

function show() {
//   let passwordText = password.value;
  let type = password.getAttribute("type");
  let newAttribute = type == "password" ? "text" : "password";
  togglePassword.classList.toggle("bi-eye");
  
  password.setAttribute("type", newAttribute);
}
