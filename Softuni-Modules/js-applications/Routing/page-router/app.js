import page from './node_modules/page/page.mjs'

import { homeView } from './views/home.js';
import { articlesView } from './views/articles.js';
import { aboutView } from './views/about.js';
import { articleDetailsView } from './views/articleDetailsView.js';
import { createView } from './views/create.js';

page('/home', homeView); // when the path is /home start homeView func
page('/about', aboutView); // routing 
page('/articles', articlesView);
page('/articles/:articleId', articleDetailsView);
page('/create', createView);

page.start(); // !! preventing reloading !! 


