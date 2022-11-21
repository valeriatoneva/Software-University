import { catalogView } from '../views/catalog.js';
import { createView } from '../views/create.js';
import { homeView } from '../views/home.js';
import { logout } from './api/users.js'
import { loginView } from '../views/login.js';
import { registerView } from '../views/register.js';
import { page, redner } from './lib.js';
import { editView } from '../views/edit.js';
import { detailsView } from '../views/details.js';
import { profileView } from '../views/profile.js';

const main = document.querySelector('main')
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homeView) // static page 
page('/memes', catalogView) // catalog - static page
page('/memes/:id', detailsView) // details
page('/edit/:id', editView) // edint 
page('/login', loginView)
page('/register', registerView)
page('/create', catalogView)
page('/profile', profileView)

updateNav()
page.start()


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