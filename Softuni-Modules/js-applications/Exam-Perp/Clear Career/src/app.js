import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { logout as apiLogout } from "./api/api.js"
import { getUserData } from "./util.js";
import { loginPage, registerPage } from "./views/auth.js";
import { homePage } from "./views/home.js";
import { dashboardPage } from "./views/dashboard.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

const main = document.querySelector("#content");

setUserNav();

document.getElementById("logoutBtn").addEventListener("click", onLogout);

page("/", decorateContext, homePage);
page("/login", decorateContext, loginPage);
page("/register", decorateContext, registerPage);
page("/dashboard", decorateContext, dashboardPage);
page("/create-offer", decorateContext, createPage);
page("/details/:id", decorateContext, detailsPage);
page("/edit/:id", decorateContext, editPage);


page.start();

function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.setsetUserNav =setUserNav;
    next()
}

function renderMain(templateRes){
render(templateRes, main)
}

export function setUserNav() {
    const userData = getUserData();
    if(userData){
     document.querySelector('.user').style.display = 'block';
     document.querySelector('.guest').style.display = 'none';
    } else {
     document.querySelector('.user').style.display = 'none';
     document.querySelector('.guest').style.display = 'block';
    }
}

async function onLogout() {
  await apiLogout();
  setUserNav();
  page.redirect("/");
}
