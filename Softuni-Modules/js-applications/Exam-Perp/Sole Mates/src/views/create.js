import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { createShoes } from '../api/data.js';
import { updateNav } from '../src/app.js';

const createTemplate = (onSubmit) => html`
<section id="create">
<div class="form">
  <h2>Add item</h2>
  <form @submit="${onSubmit}" class="create-form">
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
    />
    <button type="submit">post</button>
  </form>
</div>
</section>
`;

export function createView(ctx) {
    ctx.render(createTemplate(onSubmit));
  
    async function onSubmit(e) {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      
      const shoe = {
        brand: formData.get('brand').trim(),
        model: formData.get('model').trim(),
        imageUrl: formData.get('imageUrl').trim(),
        release: formData.get('release').trim(),
        designer: formData.get('designer').trim(),
        value: formData.get('value').trim()
      }
  
      if (shoe.brand == "" || shoe.model == "" || shoe.imageUrl == "" || shoe.release == "" || shoe.designer == "" || shoe.value == "") {
        return alert("All fields are required!");
      }
  
      await createShoes(shoe);
      e.target.reset();
      ctx.page.redirect("/dashboard");
      updateNav()
    }
  }
  