import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoes, getShoesById, getApplicationById, getApplications, postApplication } from '../api/data.js';
import { setupNavbar } from '../app.js';

// const detailsTemplate = (shoe, likes, hasLiked, ctx) => html`
//     <!--Details Page-->
//     <section id="detailsPage">
//       <div id="detailsBox">
//         <div class="detailsInfo">
//           <h1>Title: ${shoe.title}</h1>
//           <div>
//             <img src="${shoe.imageUrl}" />
//           </div>
//         </div>

//         <div class="details">
//           <h3>Shoes Description</h3>
//           <p>${shoe.description}</p>
//           <h4>Date: ${shoe.date}</h4>
//           <h4>Author: ${shoe.author}</h4>

//           ${checkForOwner(shoe, hasLiked, likes, ctx)}
//           <p class="likes">Likes: ${likes}</p>
//         </div>
//       </div>
//     </section>
// `;


export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const shoe = await getShoesById(id);

  // const applications = await getApplications(id);
  // const hasApplied = await getApplicationById(id, userId) ? true : false;

  render(detailsTemplate(shoe, ctx), document.querySelector('main'));
}

async function applyToShoes(shoe, hasApplied, ctx) {
  await postApplication(shoe._id);
  detailsPage(ctx);
}


async function onDelete(event, ctx) {
  event.preventDefault();

  const id = ctx.params.id;

  const confirmed = confirm('Are you sure you want to delete this shoe?');

  if (confirmed) {
    await deleteShoes(id);
    ctx.page.redirect('/dashboard');
    setupNavbar();
  }
}