function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const divContainer = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');


const createBoxes = amount => {
	const divToAdd = [];
	for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
	div.style.width = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor();
    divToAdd.push(div);
	};
	return divToAdd;
	
};

btnCreate.addEventListener("click", () => {
	let boxes = createBoxes(input.value);
	divContainer.append(...boxes);
});

console.log(input.value);

const destroyBoxes = () => {
	boxes.innerHTML = '';
};

btnDestroy.addEventListener('click', () => {
	destroyBoxes.call();
});