import { html, render } from "../../node_modules/lit-html/lit-html.js";

import { login, register } from "../api/api.js";
import { setUserNav} from "../app.js"


const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
<form @submit="${onSubmit}"id="login">
    <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password">
        <input type="submit" class="btn submit" value="Login">
        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </div>
</form>
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
    e.target.reset();
    setUserNav();
    ctx.page.redirect("/");
  }
}


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
<form @submit=${onSubmit}id="register">
    <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com">

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password">

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password">

        <input class="btn submit" type="submit" value="Register">

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </div>
</form>
</section>
`;

export function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const repass = formData.get("confirm-password").trim();

    if (!password || !email) {
      return alert("All fields are required!");
    } else if (password != repeatPass) {
      return alert("Password don't match");
    }

    await register(email, password);
    event.target.reset();
    setUserNav();
    ctx.page.redirect("/");
  }
}
