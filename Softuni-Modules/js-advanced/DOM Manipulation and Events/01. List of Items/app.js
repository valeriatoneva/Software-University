let list = document.getElementById('items')

function addItem() {
let input = document.getElementById("newItemText").value;

let liItem = document.createElement('li');
liItem.textContent = input;
list.appendChild(liItem)
}