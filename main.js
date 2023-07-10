let form=document.querySelector('form');
let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");
let buttons=document.querySelectorAll('.buttons');

document.querySelector('#signup').style.opacity=0.7

togglePassword.addEventListener("click", showPassword);
form.addEventListener('submit', preventSubmit);
buttons.forEach((button)=>{
    button.addEventListener('click', changeForm)
})

function changeForm(e){
    let btnText=e.target.textContent;
    let submitBtn=document.querySelector('#btn-login');
    let forgetBtn=document.querySelector('#btn-forget');

    submitBtn.textContent=btnText=='Sign up'? 'Sign up': 'Login';
    forgetBtn.style.display=btnText=='Sign up'? 'none': 'block';
    buttons[0].style.opacity=btnText=='Sign up'? 0.7: 1.0;
    buttons[1].style.opacity=btnText=='Sign up'? 1.0: 0.7;
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
