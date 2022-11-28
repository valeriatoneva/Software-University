import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../api/data.js';


const dashboardTemplate = (job) => html`
        <section id="dashboard">
          <h2>Job Offers</h2>
          ${job.length === 0? html`<h2>No offers yet.</h2>` : job.map(offersCard)}
        </section>
`;

const offersCard = (offer) => html`
   <div class="offer">
            <img src="${offer.imageUrl}" alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/details/${offer._id}">Details</a>
          </div>
`;

export async function dashboardPage(ctx) {
  const offersList = await getAllOffers();
  console.log(offersList)
  ctx.render(dashboardTemplate(offersList));
}

