// [] improve HTML structure
// [] create app.js module (central dispatcher)
// [] create router.js containing hide nd display of view
// [] placeholders for all views
// [] implement views
// [] - create request logic 
// [] - dom manipulation

// [] catalog
// [] login
// [] register
// [] create
// [] details
// [] like
// [] edit
// [] delete


// showView('#home-page')

let navigationBar = document.querySelector('nav');

navigationBar.addEventListener('click', (e) =>{
    e.preventDefault();
    if(e.target.tagName == 'A' && e.target.href){
        const url = new URL(e.target.href) // geting the clicks 
        console.log(url.pathname)
    }
})