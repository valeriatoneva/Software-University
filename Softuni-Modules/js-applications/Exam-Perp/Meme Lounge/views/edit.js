import { updateMeme } from '../api/memes.js';
import {getMemeById } from '../api/memes.js';
import {html} from '../lib.js'; 
import { notify } from '../src/notify.js';


const editTemplate = (onSubmit) => html`
<section id="edit-meme">
<form @submit=${onSubmit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" .value=${meme.title}>
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" .value=${meme.descirption}>
                Programming is often touted as a smart and lucrative career path.
                It's a job that (sometimes) offers flexibility and great benefits.
                But it's far from sunshine and Nyan Cat rainbows. The hours are long.
                The mistakes are frustrating. And your eyesight is almost guaranteed to suffer.
                These memes cover most of the frustration (and funny moments) of programming.
                At least we can laugh through the pain. 
            </textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" .value=${meme.imageUrl}">
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>
`;

export async function editView(ctx) {
    const meme = await getMemeById(ctx.params.id)
    ctx.render(editTemplate(meme, onSubmit));
  
    async function onSubmit(e) {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      
      const meme = {
        title: formData.get('title'),
        descirption: formData.get('decription'),
        imageUrl: formData.get('imageUrl'),
      }
  
      if (meme.title == "" || descirption.title == "" || descirption.imageUrl == "") {
        return notify("All fields are required!");
      }
  
      await updateMeme(ctx.params.id, meme);
      e.target.reset();
      ctx.page.redirect("/memes/" + ctx.params.id);
    }
  }
  