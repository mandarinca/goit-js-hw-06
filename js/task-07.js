

const inputMove = document.querySelector('#font-size-control');
const abraCadabra = document.querySelector('#text');

inputMove.addEventListener('change', (event) => {
    abraCadabra.style.fontSize = `${event.target.value}px`;
});

