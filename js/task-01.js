
const totalCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${totalCategories.length}`);



totalCategories.forEach((element) => {

console.log(`Category: ${element.children[0].textContent}`);
console.log(`Elements: ${element.children[1].children.length}`);

});
