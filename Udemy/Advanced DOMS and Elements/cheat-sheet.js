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
document.querySelector(`.check`).addEventListener(`click`, onClick) // returns an element to which we add a method 

function onClick(){
    console.log(document.querySelector('.guess').value)
}
//.addEventLister(), .removeEventLister()

//DOM Manipulation - removing, adding, 
const message = document.createElement('p');
message.innerHTML = `<h1> Hello </h1>`;
document.body.appendChild(p) // can be changed 

// .appendChild(p) - zakachi kum body element p
// .removeChild(p)
// .replaceChild(p)
// innerHTML - vkarva texta dirketno kato html, suobrazqva tagovete
// innerText - text-a se escapeva i tagovete se pishat kato text 
// textContent - pravi sushtoto kato innerText, no textContent vzima teksta, a innerText se suobrazqca sus CSS

// Another method for manipulation
let p = document.createElement('p');
let text = document.createTextNode('<h1> Hello </h1>');
p.appendChild(text)
