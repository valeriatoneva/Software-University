import page from  '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderNavigationMiddleware, renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { catalogView } from './views/catalogView.js';
import { homeView } from './views/homeView.js'
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';


page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware)



page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)
page('/catalog', catalogView)
page.start()