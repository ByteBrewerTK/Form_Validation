const form = document.querySelector('form'),
    emailField = form.querySelector('.email-box'),
    emailInput = emailField.querySelector('.email'),
    passField = form.querySelector('.create-box'),
    passInput = passField.querySelector('.password'),
    cPassField = form.querySelector('.confirm-box'),
    cPassInput = cPassField.querySelector('.cPassword');


function checkEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)) 
        return emailField.classList.add("invalid");
    
        emailField.classList.remove("invalid");
}

const eyeIcons = document.querySelectorAll('.show-hide');
eyeIcons.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        const pInput = eyeIcon.parentElement.querySelector("input");

        if(pInput.type === "password"){
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text")
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    } );
});

function confirmPass(){
    if(passInput.value !== cPassInput.value || passInput.value === "")
        return cPassField.classList.add("invalid");
    cPassField.classList.remove("invalid");
}

function createPass(){

    const passPattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    console.log("Create Enter")
    if(!passInput.value.match(passPattern)){
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");

}

form.addEventListener("submit", (e) =>{
    
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass()

    emailInput.addEventListener('keyup', checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if(
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid") 
    ){
        location.href = form.getAttribute("action");
    }


})