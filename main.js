let form=document.querySelector('body');
let password=document.querySelector('#password');
let togglePassword=document.querySelector('#togglePassword');
// form.style.color='red';

togglePassword.addEventListener('click', show)

function show(){
    let passwordText=password.value;
    let type=password.getAttribute('type');
    console.log(type)
    console.log(passwordText)
    // password.textContent=password.textContent
    form.style.color='red';
    togglePassword.classList.toggle('bi-eye')
    let newAttribute=type=='password'? 'text': 'password';
    password.setAttribute('newAttribute')
}
