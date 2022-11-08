import page from  '../node_modules/page/page.mjs';
import { renderNavigation } from './middlewares/renderMiddleware.js';

page(renderNavigation);
page('/', )
page.start()