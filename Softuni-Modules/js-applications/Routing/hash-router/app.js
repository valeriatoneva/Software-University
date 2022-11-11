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

const root = document.getElementById('root')

window.addEventListener('hashchange', (e)=>{ // every time you change the path do this:
const template = routes[location.hash] // gives me the html of the given template 
root.innerHTML = template()
})