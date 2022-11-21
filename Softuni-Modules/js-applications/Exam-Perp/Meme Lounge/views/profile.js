import {html} from '../lib.js'; 

const profileTemplate = (memes) => html`
<section id="user-profile-page" class="user-profile">
<article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
    <div class="user-content">
        <p>Username: ${userData.username}</p>
        <p>Email: ${userData.email}</p>
        <p>My memes count: ${memes.length}</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">
${memes.length == 0? html `<p class="no-memes">No memes in database.</p>`
: memes.map(memeCard)}
    <!-- Display : All created memes by this user (If any) --> 
    <div class="user-meme">
        <p class="user-meme-title">Java Script joke</p>
        <img class="userProfileImage" alt="meme-img" src="/images/1.png">
        <a class="button" href="#">Details</a>
    </div>
    <div class="user-meme">
        <p class="user-meme-title">Bad code can present some problems</p>
        <img class="userProfileImage" alt="meme-img" src="/images/3.png">
        <a class="button" href="#">Details</a>
    </div>

    <!-- Display : If user doesn't have own memes  --> 
    <p class="no-memes">No memes in database.</p>
</div>
</section>
`;

const memeCard = (meme) => html`
<div class="user-meme">
<p class="user-meme-title">${meme.title}</p>
<img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
<a class="button" href="/memes/${meme._id}">Details</a>
</div>
`

export async function profileView(ctx){
const userData = getUserData();
const memes = await getMemesByUser(userData.id) // make it async so we can get the data from memes.js 
ctx.render(profileTemplate(memes, userData))
}