import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { updateInfo } from '../app.js';

let registerTemplate = () => html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Register New User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onSubmitForm}>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="rePass">Repeat</label>
            <input class="form-control" id="rePass" type="password" name="rePass">
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
    </div>
</div>
</form>
</div> 
`

function onSubmitForm(e) {
    e.preventDefault();
    const formData = new formData(e.currentTarget) // e.currentTarget = form tag, gives me the form;
    const email = formData.get('email');
    const password = formData.get('password');
    let repeatPassword = formData.get('rePass');

    if(password != repeatPassword){
        alert('Passwords mismatch');
        return;
    }

    fetch('http://localhost:3030/users/register', {
        method: 'POST',
        body: JSON.stringify({email, password}) // gives me the data 
    })
    .then(res => res.json()) // gives me the body 
    .then(data => {
        localStorage.setItem('token', data.accessToken); // keyName, keyValue, sets them to local storage
        localStorage.setItem('ownerId', data._id);
        updateInfo();
        page.redirect('/catalog')
    })
    .catch(error => alert(error.message))
}
export const registerTemplate = (ctx) => render(registerTemplate(), document.querySelector(".container"))