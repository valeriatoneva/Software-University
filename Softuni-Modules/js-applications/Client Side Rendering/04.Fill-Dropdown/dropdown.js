import { html, render } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown'


async function getOptions(){ // get request
    const response = await fetch(url);
    return data = await response.json()
}
 
const selectTemplate = (data) => html`
<select id="menu">
 ${data.map(el => html`
 <option value = ${el._id}>${el.text}</option>
 `)}
</select>
`

const options = Object.values(await getOptions());
const main = document.querySelector('div');

update(options)
function update(options){
    const selectTemplateRes = selectTemplate(options)
    render(selectTemplateRes, main)
}

document.querySelector('form').addEventListener('submit', addItem)
function addItem(e) {
  e.preventDefault();
  const text = document.getElementById('itemText').value;

  const response = await fetch(url, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({text})
  })

  options.push(await response.json())
  update(options)
}