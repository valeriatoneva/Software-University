import { html, redner } from '.node_modules'; // fix 
import page from './node_modules/page/page.mjs' // fix

import { catalogView } from '../views/catalog.js';
import { createView } from '../views/create.js';
import { homeView } from '../views/home.js';
import { loginView } from '../views/login.js';
import { registerView } from '../views/register.js';
import { editView } from '../views/edit.js';
import { detailsView } from '../views/details.js';
import { logout } from './api/users.js'

const main = document.querySelector('main-content')
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView) 
page('/catalog', catalogView) 
page('/login', loginView)
page('/register', registerView)
page('/create', catalogView)
page('/details/:id', detailsView) 
page('/edit/:id', editView)  
page('/logout', onLogout)  

updateNav()
page.start()

// middleware
function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next()
}

function renderMain(templateRes){
render(templateRes, main)
}

// navigation
function updateNav() {
    const userData = getUserData();
    if(userData){
     document.querySelector('.user').style.display = 'block';
     document.querySelector('.guest').style.display = 'none';
     document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;
    } else {
     document.querySelector('.user').style.display = 'none';
     document.querySelector('.guest').style.display = 'block';
    }
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/')
}