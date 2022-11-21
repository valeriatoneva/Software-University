import page from '../node_modules/page/page.mjs';
import { updateNav } from './middlewares/navbar.js';
import { decorateContext } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';

page(addSession)
page(updateNav)
page(decorateContext)

page.start();