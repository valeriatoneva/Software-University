import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllGames } from '../api/data.js';

const catalogueTemplate = (games) => html`
<section id="catalogue-page">
<h1>All Games</h1>
${games.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : games.map(cardTemplate)}
</section>
`;


const cardTemplate = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
</div>
`;
export async function cataloguePage(ctx){ // make it async so we can get the data from data.js 
const gamesList = await getAllGames()
ctx.render(catalogueTemplate(gamesList))
}