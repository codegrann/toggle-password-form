let form=document.querySelector('form');
let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");
let buttons=document.querySelectorAll('.buttons');

togglePassword.addEventListener("click", showPassword);
form.addEventListener('submit', preventSubmit);
buttons.forEach((button)=>{
    button.addEventListener('click', changeForm)
})

function changeForm(e){
    let btnText=e.target.textContent;
    console.log(btnText)
}

function preventSubmit(e){
    e.preventDefault();
}
function showPassword() {
  let type = password.getAttribute("type");
  let newAttribute = type == "password" ? "text" : "password";

  togglePassword.classList.toggle("bi-eye");
  password.setAttribute("type", newAttribute);
}
