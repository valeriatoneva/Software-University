import page from '../node_modules/page/page.mjs'
import { html, render } from '../node_modules/lit-html/lit-html.js'
import { loginTemplate } from '.views/login.js'
import { catalogTemplate } from '.views/catalog.js'
import { registerTemplate } from '.views/register.js'
import { logoutTemplate } from '.views/register.js'
import { createTemplate } from '.views/create.js'
import { myPublicationsTemplate } from './views/my-publications.js'
import { detailsTemplate } from './view/details.js'


page('/login', loginTemplate)
page('/logout', logoutTemplate)
page('/catalog', catalogTemplate)
page('/register', registerTemplate)
page('/create', createTemplate)
page('/my-publications', myPublicationsTemplate)
page('/details/:detailsId', detailsTemplate)
// page('/edit', editTemplate)
// page('/delete', deleteTemplate)

page.start()

document.getElementById('logoutBtn').addEventListener('click', logoutTemplate)

export const updateInfo = () => {
    const userDiv = document.getElementById('user');
    const guestDiv = document.getElementById('guest');

    if(localStorage.length == 0){ // broq na key-value dvoikite
        // not logged in
        userDiv.style.display = 'none';
        guestDiv.style.display = 'inline'
    } else {
        //logged in
        userDiv.style.display = 'inline';
        guestDiv.style.display = 'none'
    }
}



updateInfo()