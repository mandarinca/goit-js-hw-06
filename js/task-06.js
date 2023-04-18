

const inputValid = document.querySelector("#validation-input");


inputValid.addEventListener('blur', (event) => {
    
    if (event.target.value.length == inputValid.getAttribute("data-length")) {
        inputValid.classList.remove("invalid");
        inputValid.classList.add("valid");
        
    } else {
        inputValid.classList.add("invalid");
        inputValid.classList.remove("valid");
        }
});
