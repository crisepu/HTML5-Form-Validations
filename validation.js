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
    let principalAlert = document.querySelector("#bigAlert");

    let cardAlert = document.querySelector("#cardAlert");
    let cvcAlert = document.querySelector("#cvcAlert");
    let amountAlert = document.querySelector("#amountAlert");
    let firstNameAlert = document.querySelector("#firstNameAlert");
    let lastNameAlert = document.querySelector("#lastNameAlert");
    let cityAlert = document.querySelector("#cityAlert");
    let stateAlert = document.querySelector("#stateAlert");
    let postalCodeAlert = document.querySelector("#postalCodeAlert");
    let messageAlert = document.querySelector("#messageAlert");
   
    
    let patternCard = /5[1-5][0-9]{14}$/; // expresion regular mastercard
    let patternCVC = /^[0-9]{3,4}$/;
    let patternAmount = /^[0-9]{1,7}$/;
    let patternNameCity = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/; //para first name, last name y city
    let patternPostalCode = /^[0-9]{5,7}$/;
    let patternMessage = /^[a-zA-Z0-9]{10,1000}$/;

    function activePrincipalAlert() {
        principalAlert.style.display = "";
    }

    if (!patternCard.test(inputCard.value)) {
        inputCard.classList.add("alert-danger");
        activePrincipalAlert();
        cardAlert.style.display = "";
        flag = false;
    } else {
        inputCard.classList.remove("alert-danger");
        cardAlert.style.display = "none";
    }
    if (!patternCVC.test(inputCVC.value)) {
        inputCVC.classList.add("alert-danger");
        activePrincipalAlert();
        cvcAlert.style.display = "";
        flag = false;
    } else {
        inputCVC.classList.remove("alert-danger");
        cvcAlert.style.display = "none";
    }
    if (!patternAmount.test(inputAmount.value)) {
        inputAmount.classList.add("alert-danger");
        activePrincipalAlert();
        amountAlert.style.display = "";
        flag = false;
    } else {
        inputAmount.classList.remove("alert-danger");
        amountAlert.style.display = "none";
    }
    if (!patternNameCity.test(inputFirstName.value)) {
        inputFirstName.classList.add("alert-danger");
        activePrincipalAlert();
        firstNameAlert.style.display = "";
        flag = false;
    } else {
        inputFirstName.classList.remove("alert-danger");
        firstNameAlert.style.display = "none";
    }
    if (!patternNameCity.test(inputLastName.value)) {
        inputLastName.classList.add("alert-danger");
        activePrincipalAlert();
        lastNameAlert.style.display = "";
        flag = false;
    } else {
        inputLastName.classList.remove("alert-danger");
        lastNameAlert.style.display = "none";
    }
    if (!patternNameCity.test(inputCity.value)) {
        inputCity.classList.add("alert-danger");
        activePrincipalAlert();
        cityAlert.style.display = "";
        flag = false;
    } else {
        inputCity.classList.remove("alert-danger");
        cityAlert.style.display = "none";
    }
    if (!patternPostalCode.test(inputPostalCode.value)) {
        inputPostalCode.classList.add("alert-danger");
        activePrincipalAlert();
        postalCodeAlert.style.display = "";
        flag = false;
    } else {
        inputPostalCode.classList.remove("alert-danger");
        postalCodeAlert.style.display = "none";
    }
    if (inputMessage.value == "") {
        inputMessage.classList.add("alert-danger");
        activePrincipalAlert();
        messageAlert.style.display = "";
        flag = false;
    } else {
        inputMessage.classList.remove("alert-danger");
        messageAlert.style.display = "none";
    }
    if (inputState.value == "") {
        inputState.classList.add("alert-danger");
        activePrincipalAlert();
        stateAlert.style.display = "";
        flag = false;
    } else {
        inputState.classList.remove("alert-danger");
        stateAlert.style.display = "none";
    }
    //console.log(inputCreditCard.value);
    //Validacion Card
    console.log(inputMessage.value)

    
    
    if(flag) {
        e.target.submit();
    }

});

loginForm.addEventListener('reset', (e) => {
   window.location.reload();
});

