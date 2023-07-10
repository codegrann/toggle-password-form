let form=document.querySelector('body');
let password=document.querySelector('#password');
let togglePassword=document.querySelector('#togglePassword');
// form.style.color='red';

togglePassword.addEventListener('click', show)

function show(){
    // password.textContent=password.textContent
    form.style.color='red';
}
