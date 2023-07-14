let form=document.querySelector('form');
let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");
let buttons=document.querySelectorAll('.buttons');

document.querySelector('#signup').style.opacity=0.7;

// attaching event listeners
togglePassword.addEventListener("click", showPassword);
form.addEventListener('submit', preventSubmit);
buttons.forEach((button)=>{
    button.addEventListener('click', changeForm)
})

// toggle between login  and sign up forms
function changeForm(e){
    let btnText=e.target.textContent;
    let submitBtn=document.querySelector('#btn-login');
    let forgetBtn=document.querySelector('#btn-forget');
    let confirmPassword=password.nextElementSibling;

    submitBtn.textContent=btnText=='Sign up'? 'Sign up': 'Login';
    submitBtn.onclick=function(){
            if(submitBtn.textContent=="Sign up"){
            alert("We've sent an activation link to your email");
        }
    }
    forgetBtn.style.display=btnText=='Sign up'? 'none': 'block';
    buttons[0].style.opacity=btnText=='Sign up'? 0.7: 1.0;
    buttons[1].style.opacity=btnText=='Sign up'? 1.0: 0.7;
}

// prevent form from submitting
function preventSubmit(e){
    e.preventDefault();
    document.querySelector('#btn-login')
    // if(e.target.textContent=='Sign up'){
        // alert("We've sent an activation link to your email");
    // }
    
}

// toggle visibility of password
function showPassword() {
  let type = password.getAttribute("type");
  let newAttribute = type == "password" ? "text" : "password";

  togglePassword.classList.toggle("bi-eye");
  password.setAttribute("type", newAttribute);
}


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}