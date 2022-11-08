import { html } from '../../node_modules/lit-html/lit-html.js'

const nagivationTemplate = () => html`
<nav>
<img src="./images/headphones.png">
<a href="#">Home</a>
<ul>
    <!--All user-->
    <li><a href="#">Catalog</a></li>
    <li><a href="#">Search</a></li>
    <!--Only guest-->
    <li><a href="#">Login</a></li>
    <li><a href="#">Register</a></li>
    <!--Only user-->
    <li><a href="#">Create Album</a></li>
    <li><a href="#">Logout</a></li>
</ul>
</nav>
`
export const navigationView = (ctx) => {
    return navigationTemplate()

}