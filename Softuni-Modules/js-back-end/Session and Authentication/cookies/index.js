const express = require("express");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser"); // func

const dataService = require('./dataService')
const app = express();
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.get('/', (req, res) => { // creating a route
    res.send(`
    <h1> Hello </h1>
    <p><a href="/login">Login</a></p>
    <p><a href="/register">Register</a></p>
    <p><a href="/profile">Profile</a></p>
    <p><a href="/logout">Logout</a></p>
    `
    )
})

app.get("/login", (req, res) => {
  res.send(`
    <h1> Login </h1>
    <form method="POST">
    <label for="username">Username</label>
    <input type="text" id="username" name="username"/>

    <label for="password">password</label>
    <input type="password" id="password" name="password"/>

    <input type="submit" value="login"/>
</form>
    `);
});

app.post('/login', (req, res) => {
const { username, password } = req.body

try{
   const user = await dataService.loginUser(username, password)
   const authData = {
    username: user.username,
}

res.cookie('auth', JSON.stringify(authData))
req.session.username = user.username;
req.session.privateInfo = user.password; // the hash
return res.redirect('/')

} catch(err){
    console.log(err)
    res.status(401).end()
}
})

app.get('/register', async (req, res) => {
res.send(`
<h1> Register </h1>
<form method="POST">
<label for="username">Username</label>
<input type="text" id="username" name="username"/>

<label for="password">password</label>
<input type="password" id="password" name="password"/>

<input type="submit" value="register"/>
</form>
`)
})

// doing smth with that get response
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    await dataService.registerUser(username, password);
    res.redirect('/login')
})

app.get('/profile', (req, res) => {
    const authData = req.cookies['auth'];

    if(!authData){ // if the user in unauthenticated
        return res.status(401).end() // ends the response
    }

    const {username} = JSON.parse(authData); // extracting the username from the cookie
    console.log(username);

    res.send(`
    <h2> Hello - ${username}</h2>
    `)
})

app.get('/logout', (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})

app.listen(5000, ()=> console.log('Server is listening on port 5000...'))