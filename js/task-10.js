function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


// 1. витягаємо дів№боксес
// 2. витягаємо інпут
// витягаємо кнопку креат
// 3. витягаємо кнопку дестрой
// 3.1 кнопці добавляємо очиститись при кліці

// 4. створ ф - ію критБоксес(амонт - це число)
// 4.1 створити елемент дів, кількість яких дорівнює амонту 
// 4.1.1 створюємо колбек 
// 4.1.2 розмір першого діва має бути 30х30
// 4.1.3 наступний елемент має бути ширшим і вищим на 10пкс
// 4.2 створені діви додати до дів№боксес
// 4.3 створ змінну для одного кольору з ф - її рандомколор
// 4.3.1 присвоїти кожному діву окремо різний колір
// 5. створити ф-ію , що очистить створені діви.

const divContainer = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

function destroyBoxes() {
	removeChildren.bind(btnDestroy, divContainer)
};



const createBoxes = amount => {
	const divToAdd = [];
	for (let i = 0; i < amount; i++) {
		document.createElement('div');
		div.sytle.high = '30';
		div.style.width = '30';
		div.style.background = getRandomHexColor();
		divToAdd.push(div);
	}
	return divtoAdd;
	
}



// const inputNum = document.querySelector('#controls>input')
// const btnCreate = document.querySelector('button[data-create]')
// const btnDestroy = document.querySelector('button[data-destroy]')
// const boxes = document.querySelector('#boxes')

// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
// }

// const createBoxes = amount => {
// 	const elementsToAdd = []
// 	for (let i = 0; i < amount; i++) {
// 		const div = document.createElement('div')
// 		div.style.height = `${30 + 10 * i}px`
// 		div.style.width = `${30 + 10 * i}px`
// 		div.style.background = getRandomHexColor()
// 		elementsToAdd.push(div)
// 	}
// 	return elementsToAdd
// }

// const destroyBoxes = () => {
// 	boxes.innerHTML = ''
// }

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputNum.value)
	boxes.append(...boxesToAdd)
})

console.log(inputNum.value)

btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})