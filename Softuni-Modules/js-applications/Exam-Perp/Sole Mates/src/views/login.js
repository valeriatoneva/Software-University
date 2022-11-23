import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';
import { updateNav } from '../app.js';

const loginTemplate = (onSubmit) => html`
    <section id="login">
      <div class="form">
        <h2>Login</h2>
        <form @submit=${onSubmit}class="login-form">
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </form>
      </div>
    </section>
`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    if (email == "" || password == "") {
      return alert("All fields are required!");
    }

    await login(email, password);
    ctx.updateNav();
    ctx.page.redirect("/dashboard");
  }
}


