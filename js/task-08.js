


const form = document.querySelector('form');

form.addEventListener('submit', allActions);


function allActions(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        return alert('Будь ласка, заповніть усі поля!');
    };
    const userDetalis = { email: email.value, password: password.value };

    console.log(userDetalis);
    event.currentTarget.reset();
};
