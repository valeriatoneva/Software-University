let baseUrl = `http://localhost:3030/jsonstore/messenger`


function attachEvents() {
document.getElementById('submit').addEventListener('click', postMessage)
document.getElementById('refresh').addEventListener('click', loadMessages)
}

async function postMessage(){
    let response = await fetch(`http://localhost:3030/jsonstore/messenger`, {
        method: 'POST',
        headers: {
            'author': 'authorName',
            'content': 'msgText'
        },
        body: JSON.stringify({ "id": 78912 })
    })
    let result = await response.json();
    
}

async function loadMessages(){

let response = await fetch(baseUrl);
let data = await response.json();
let arr = Object.values(data);
arr.map(({author, content})=> (`${author}: ${content}`).join("\n"))
    
}

attachEvents();