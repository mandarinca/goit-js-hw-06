

const inputValid = document.querySelector("#validation-input");

inputValid.addEventListener('blur', (event) => {
    
    if (event.target.value.length == inputValid.getAttribute('data-length')) {
        inputValid.classList.add('valid');

        if (inputValid.classList.contains("invalid")) {
            inputValid.classList.remove("invalid");
        }
    }
    else {

        if (inputValid.classList.contains("valid")) {
            inputValid.classList.remove("valid");
            inputValid.classList.add("invalid");
        }
    }
});
