import { html, render } from '../node_modules/lit-html/lit-html.js';
import * as api from './api/data.js';
import page from '../node_modules/page/page.mjs';


import { homePage } from './views/home.js';
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import { dashboardPage } from './views/dashboard.js'

import { createPage } from './views/create.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';

window.api = api;

let root = document.querySelector('main');
document.querySelector('#logoutBtn').addEventListener('click', onLogout)

page('/', homePage);
page('/dashboard', dashboardPage);
page('/register', registerPage);
page('/login', loginPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

page('/search', searchPage)
page.start();

// middleware

function decorateContext(ctx, next){
  ctx.render = renderMain;
  ctx.updateNav = updateNav;
  next()
}

function renderMain(templateRes){
render(templateRes, root)
}

//nav
function updateNav() {
  const userData = getUserData();
  if(userData){
   document.querySelector('.user').style.display = 'block';
   document.querySelector('.guest').style.display = 'none';
  } else {
   document.querySelector('.user').style.display = 'none';
   document.querySelector('.guest').style.display = 'block';
  }
}

updateNav();

// logout
function onLogout(){
  logout();
  updateNav();
  page.redirect('/')
}