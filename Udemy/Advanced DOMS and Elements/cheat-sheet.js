document.querySelector('.header').textContent // to get only the readable parts 
const allSections = document.querySelectorAll('.section').textContent; // this is a class (node list);
const id = document.getElementById(`section`);
const allButtons = document.getElementsByTagName('button') // all the elements with name buttons;
const clas = document.getElementsByClassName('button') // but most of the time query will be used for classes

// Creating and inserting elements
//.InserAdjacentHTML
const message = document.createElement('div'); // we can use to do smth on it 
message.classList.add(`cookie-message`)
message.textContent = `We use cookies`

// Handling Click Events 
document.querySelector(`.check`).addEventListener(`click`, function(){
    console.log(document.querySelector('.guess').value)
}) // returns and element, adding a method 
// a function is just a value