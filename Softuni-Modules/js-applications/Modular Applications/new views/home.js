import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from '../api/'
const homeTemplate = {recipes} => html`
r
`

export async function homePage(ctx){
let recipes = await recipeService.getRecent();
ctx.render = ctxRender;
next()
}