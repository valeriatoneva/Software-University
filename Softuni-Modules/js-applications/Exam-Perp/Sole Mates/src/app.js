import { html, render } from '../node_modules/lit-html/lit-html.js';
import * as api from './api/data.js';
import page from '../node_modules/page/page.mjs';

import { createPage } from './views/create.js'
import { dashboardPage } from './views/dashboard.js'
import { detailsPage } from './views/details.js'
import { registerPage } from './views/register.js'
import { loginPage } from './views/login.js'
import { homePage } from './views/home.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';

window.api = api;

page('/', homePage);
page('/dashboard', dashboardPage);
page('/register', registerPage);
page('/login', loginPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage)
page.start();

//nav

setupNavbar();

// logout
async function logout() {
  await api.logout();
  page.redirect('/');
  setupNavbar();
}