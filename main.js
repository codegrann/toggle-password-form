let form=document.querySelector('form');
let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", showPassword);
form.addEventListener('submit', preventSubmit)

function preventSubmit(e){
    e.preventDefault();
}
function showPassword() {
  let type = password.getAttribute("type");
  let newAttribute = type == "password" ? "text" : "password";

  togglePassword.classList.toggle("bi-eye");
  password.setAttribute("type", newAttribute);
}
