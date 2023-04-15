// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



let counter = 0;

const screenCounter = document.querySelector('#value');
const buttonMax = document.querySelector('button[data-action="increment"]');
const buttonMin = document.querySelector('button[data-action="decrement"]');

buttonMax.addEventListener('click', () => {
	counter--;
	screenCounter.textContent = counter;
});

buttonMin.addEventListener('click', () => {
	counter++;
	screenCounter.textContent = counter;
});