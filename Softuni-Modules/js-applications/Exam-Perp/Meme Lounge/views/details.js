import { getMemeById } from "../api/memes.js";
import { deleteMeme } from "../api/memes.js";
import { getAllMemes } from "../api/memes.js";
import { html } from "../lib.js";

const detailsTemplate = (memes) => html`
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
      ${memes.length == 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : memes.map(memeCard)}
    </div>
  </section>
`;

const memeCard = (meme, isOwner, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>
          ${meme.description}
          ${isOwner
            ? html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
                <button @click=${onDelete} class="button danger">
                  Delete
                </button>`
            : ""}
        </p>
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  // make it async so we can get the data from memes.js
  const meme = await getMemeById(ctx.params.id);
  const userData = getUserData();
  const isOwner = userData?.id == meme._ownerId;
  ctx.render(detailsTemplate(meme, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this meme?");

    if (choice) {
      await deleteMeme(ctx.params.id);
      ctx.page.redirect("/memes");
    }
  }
}
