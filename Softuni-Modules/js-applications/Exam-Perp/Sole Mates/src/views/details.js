import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoes, getShoesById} from '../api/data.js';
import { updateNav } from '../app.js';

const detailsTemplate = (shoe, ctx) => html`
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
          <img src="${shoe.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
          <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
          <p>
            Model: <span id="details-model">${shoe.model}</span>
          </p>
          <p>Release date: <span id="details-release">${shoe.release}</span></p>
          <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
          <p>Value: <span id="details-value">${shoe.value}</span></p>
          ${checkForOwner(shoe, ctx)}
        </div>
      </div>
    </section>
`;

function checkForOwner(shoe, ctx) {
  const userId = localStorage.getItem('userId');
  if (userId == shoe._ownerId) {
    return html`
      <div id="action-buttons">
        <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} id="delete-btn">Delete</a>
      </div>
    `
  } else {
      return html``;
  }
}

export async function detailsPage(ctx) {
  const shoe = await getShoesById(ctx.params.id);
  const userData = getUserData();
  const isOwner = userData?.id == shoe._ownerId;
  ctx.render(detailsTemplate(shoe, isOwner, onDelete));
}

// delete
async function onDelete(e, ctx) {
  e.preventDefault();
  const id = ctx.params.id;
  const confirmed = confirm('Are you sure you want to delete this shoe?');

  if (confirmed) {
    await deleteShoes(id);
    ctx.page.redirect('/dashboard');
    updateNav();
  }
}