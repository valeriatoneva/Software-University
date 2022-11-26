import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

import { logout } from "./api/api.js";
import { getUserData } from "./utility.js";
import { loginPage, registerPage } from "./view/auth.js";
import { homePage } from "./view/home.js";
import { dashboardPage } from "./view/dashboard.js";
import { detailsPage } from "./view/details.js";
import { editPage } from "./view/edit.js";
import { createPage } from "./view/create.js";

const main = document.querySelector("#root");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/dashboard", dashboardPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/create-offer", createPage);

updateNav();
page.start();


function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next()
}

function renderMain(templateRes){
render(templateRes, main)
}

function updateNav() {
    const userData = getUserData();
    if(userData){
        //loged in 
     document.querySelector('.user').style.display = 'block';
     document.querySelector('.guest').style.display = 'none';
     document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;
    } else {
        // logged out 
     document.querySelector('.user').style.display = 'none';
     document.querySelector('.guest').style.display = 'block';
    }
}

async function onLogout() {
  logout();
  updateNav();
  page.redirect("/");
}
