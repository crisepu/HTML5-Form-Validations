let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let flag = true 
    let inputCard = document.querySelector("#inputCard");
    let inputCVC = document.querySelector("#inputCVC");
    let inputAmount = document.querySelector("#inputAmount");
    let inputFirstName = document.querySelector("#inputFirstName");
    let inputLastName = document.querySelector("#inputLastName");
    let inputCity = document.querySelector("#inputCity");
    let inputState = document.querySelector("#inputState");
    let inputPostalCode = document.querySelector("#inputPostalCode");
    let inputMessage = document.querySelector("#inputMessage");
    
    let patternCard = /5[1-5][0-9]{14}$/; // expresion regular mastercard
    let patternCVC = /^[0-9]{3,4}$/;
    let patternAmount = /^[0-9]{1,7}$/;
    let patternNameCity = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/; //para first name, last name y city
    let patternPostalCode = /^[0-9]{5,7}$/;


    //console.log(inputCreditCard.value);
    //Validacion Card
    

    
    
    if(flag) {
        e.target.submit();
    }

});

/*
    let errors = false;
    let form = e.target;
    let { login_username, login_password } = form;

    let onlyText = /^[a-zA-Z0-9]+$/;
    let minLenght =  /^[a-zA-Z\s]{4,12}$/;

    if(login_username.value === ""){
        console.log("El campo username es obligatorio");
        errors = true;
    }else if(!onlyText.test(login_username.value)){
        console.log("El campo username solo puede contener letras.");
        errors = true;
    }else if(!minLenght.test(login_username.value)){
        console.log("username solo puede contener minimo 4 caracteres y maximo 12 caracteres.");
        errors = true;
    }

    if(login_password.value === ""){
        console.log("El campo password es obligatorio");
        errors = true;
    }



    if(!errors){ // true => false false => true
        form.submit();
    }
*/