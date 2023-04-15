const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const elements = ingredients.map(element => {
  const liEl = document.createElement('LI');
  liEl.classList.add('item');
  liEl.textContent = element;

  return liEl;
});

const ulEl = document.querySelector('ul');
ulEl.append(...elements);

