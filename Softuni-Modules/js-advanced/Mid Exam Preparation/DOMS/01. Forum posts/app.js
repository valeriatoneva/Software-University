window.addEventListener("load", solve);

function solve() {
  let titleField = document.getElementById('post-title')
  let categoryField = document.getElementById('post-category')
  let contentField = document.getElementById('post-content')
  const reviewUlEl = document.getElementById("review-list");
  const publishedUlEl = document.getElementById("published-list");
  const reviewMessage = document.getElementById("reviewed-msg");

  let title = titleField.value;
  let category = categoryField.value;
  let content = contentField.value;

  if(title === "" || category === "" || content === ""){
    return;
  }

  const publishButton = document.getElementById('publish-btn');
  publishButton.addEventListener('click', publishing);

  function publishing(event){
    event.preventDefault()
    const ul = document.getElementById('review-list');

    const li = document.createElement('li');
    li.className = 'rpost';
    const article = document.createElement("ARTICLE")
    const h4 = document.createElement('h4');
    h4.textContent = `Question for DOM method`;
    const p1 = document.createElement('p');
    p1.textContent = `Category: Coding exercies`;
    const p2 = document.createElement('p');
    p2.textContent = `${content}: Is there anyone that can help me understand what does 'preventDefault' method do?`;
    const editButton = document.createElement("BUTTON");
    editButton.className = 'action-btn edit';
    editButton.textContent = 'Edit'
    const approveButton = document.createElement("BUTTON");
    approveButton.className = 'approve-btn edit';
    approveButton.textContent = 'Approve'
    
    ul.appendChild(li);
    ul.appendChild(h4);
    ul.appendChild(p1);
    ul.appendChild(p2);
    ul.appendChild(editButton);
    ul.appendChild(approveButton);

    let titleField = "";
    let categoryField = "";
    let contentField = "";
  
  }

  editButton.addEventListener('click', editing);

  function editing(event){
    title.innerText = `Question for DOM method`;
    category.innerText = `Category: Coding exercies`;
    content.innerText = `Content: Is there anyone that can help me understand what does (event.preventDefault) method do?`;
    ul.innerHTML = ""
    ul.appendChild(title.innerText)
    ul.appendChild(category.innerText)
    ul.appendChild(content.innerText)

  }

  approveButton.addEventListener('click', approving);

  function approving(event){
    ul.textContent.remove()
    let publishedList = document.getElementById('published-list');
    publishedList.appendChild(title.innerText)
    publishedList.appendChild(category.innerText)
    publishedList.appendChild(content.innerText)
    editButton.remove()
    approveButton.remove()

  }
  
}
