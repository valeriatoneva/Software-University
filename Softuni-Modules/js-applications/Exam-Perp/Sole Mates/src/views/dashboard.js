import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getShoes } from '../api/data.js';
import { getUserData } from '../src/util.js';

const dashboardTemplate = (shoes) => html`
<section id="dashboard">
  <h2>Collectibles</h2>
  <ul class="card-wrapper">
${shoes.length == 0 ?  <h2>There are no items added yet.</h2> : shoes.map(shoeCard)}
</ul>
</section>
`;

const shoeCard = (shoe) => html`
<li class="card">
  <img src="${shoes.imageUrl}" alt="travis" />
  <p>
    <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
  </p>
  <p>
    <strong>Model: </strong
    ><span class="model">${shoe.model}</span>
  </p>
  <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
  <a class="details-btn" href="/details">Details</a>
</li>
`;


export async function dashboardPage(ctx) {
  const userId = localStorage.getItem('userId');
  const shoesList = await getShoes();
  ctx.render(dashboardTemplate(shoesList, userId));
}