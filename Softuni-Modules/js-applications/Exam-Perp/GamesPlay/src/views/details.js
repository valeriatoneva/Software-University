import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteGameById, getGameById } from "../api/data.js";
import { getUserData } from "../api/api.js";

const detailsTamplate = (game, isOwner, onDelete) => html`
<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">
    <div class="game-header">
        <img class="game-img" src="${game.imageUrl}" />
        <h1>${game.title}</h1>
        <span class="levels">${game.maxLevel}</span>
        <p class="type">${game.category}</p>
    </div>
    <p class="text">
    ${game.summary}
    </p>
    ${isOwner ? html`<div class="buttons">
    <a href="/edit/${game._id}" class="button">Edit</a>
    <a href="javascript:void(0)" class="button"  @click=${onDelete}>Delete</a>
    </div>` : ""}
</div>
</section>
`;

export async function detailsPage(ctx) {
  const gameId = ctx.params.id;
  const game = await getGameById(gameId);
  const userData = getUserData();
  const isOwner = userData?.id == game._ownerId;
  ctx.render(detailsTamplate(game, isOwner, onDelete))
  }

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteGameById(gameId);
      ctx.page.redirect("/");
    }
  }

