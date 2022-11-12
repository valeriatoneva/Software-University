const homeTemplate = () => `
<h1>Home</h1> 
<p>Home info</p> 
`;

const articlesTemplate = () => `
<h1>Articles</h1> 
<p>Articles info</p> 
`

const aboutTemplate = () => `
<h1>About</h1> 
<p>About info</p> 
`

const routes = {
    '#home': homeTemplate, // gives me mapping between the path and the template 
    '#articles': articlesTemplate,
    '#about': aboutTemplate,
}

const root = document.getElementById('root');

// window.addEventListener('popstate', (e) => {
//     location.pathname
// })

document.body.addEventListener('click', (e) => {
if(e.target.tagName == 'A'){
    e.preventDefault();

    let url = new URL(e.target.href); // gives an obj

    history.pushState({}, '', url.pathname);
    let template = routes[url.pathname];

    root.innerHTML = template(); 
}
})