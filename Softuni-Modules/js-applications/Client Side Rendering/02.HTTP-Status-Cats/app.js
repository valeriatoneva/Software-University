import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js'
import { cats } from './catSeeder.js';


const allCats = document.getElementById('allCats');

allCats.addEventListener('click', toggle); // root

const cardTemplate = (data) => html`
<ul>
${data.forEach((e) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">${cat.info ? 'Hide': 'Show'} status code</button>
        <div class="status" style="${styleMap(cat.info ? {display:'block'} : {dipslay:'none'})}" id="${cat.id}">
            <h4>Status Code: ${car.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`
)}
</ul>
`

cats.forEach(card => card.info = false);
update();

function update(){
    const result = cardTemplate(cats);
    render(result, allCats)
}

function toggle(e){
const elementId = e.target.parentNode.querySelector('.status').id;
const cat = cats.find(card => card.info == elementId); // checking if we are curr on that card
cat.info = !cat.info;
update()
}