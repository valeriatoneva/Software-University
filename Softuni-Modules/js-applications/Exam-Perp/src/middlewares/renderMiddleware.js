import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigation-view.js';

const headerElement = document.querySelector('header-navigation');

export const renderNavigation = (ctx, next) => {
    // render navigation 
    render(navigationView(ctx), headerElement)
    next();

}