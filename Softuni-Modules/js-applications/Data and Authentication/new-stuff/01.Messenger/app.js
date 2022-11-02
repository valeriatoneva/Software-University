let baseUrl = `http://localhost:3030/jsonstore/messenger`


function attachEvents() {
document.getElementById('submit').addEventListener('click', postMessage)
document.getElementById('refresh').addEventListener('click', loadMessages)
}

async function postMessage(){
    const [author, content] = [document.getElementById('author'), document.getElementById('content')];

    if(author.value === "" || content.value === ""){
        alert('Fields are required!')
    }

    let response = await fetch(`http://localhost:3030/jsonstore/messenger`, {
        method: 'POST',
        headers: {
            'author': `${author.value}`,
            'content': `${content.value}`
        },
        body: JSON.stringify({ "id": 78912 })
    })
    let result = await response.json();
    
    author.value = "";
    content.value = ""; 
    
}

async function loadMessages(){

let response = await fetch(baseUrl);
let data = await response.json();
let arr = Object.values(data);
messages.value = arr.map(({author, content})=> (`${author}: ${content}`).join("\n"))
    
}

attachEvents();