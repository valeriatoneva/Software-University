// 37/100
window.addEventListener("load", solve);

function solve() {
  let titleField = document.getElementById("post-title");
  let categoryField = document.getElementById("post-category");
  let contentField = document.getElementById("post-content");
  const reviewUlEl = document.getElementById("review-list");
  const publishedUlEl = document.getElementById("published-list");
  const reviewMessage = document.getElementById("reviewed-msg");
  const editButton = document.createElement("BUTTON");
  const approveButton = document.createElement("BUTTON");
  const clearButton = document.getElementById("clear-btn");
  const publishButton = document.getElementById("publish-btn");
  const li = document.createElement("li");
  const article = document.createElement("ARTICLE");
  const h4 = document.createElement("h4");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");


  publishButton.addEventListener("click", (e) => {
    let title = titleField.value;
    let category = categoryField.value;
    let content = contentField.value;

    if (title === "" || category === "" || content === "") {
      return;
    }


    li.className = "rpost";
    h4.textContent = title;
    p1.textContent = `Category: ${category}`;
    p2.textContent = `Content: ${content}`;
    editButton.className = "action-btn edit";
    editButton.textContent = "Edit";
    approveButton.className = "approve-btn edit";
    approveButton.textContent = "Approve";

    li.appendChild(article);
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(editButton);
    li.appendChild(approveButton);
    reviewUlEl.appendChild(li);

    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";
  });

    editButton.addEventListener('click', (e) => {
      titleField.value = h4.textContent.split(': ')[0]
      categoryField.value = p1.textContent.split(': ')[0]
      contentField.value = p2.textContent.split(': ')[0]
      h4.remove()
      p1.remove()
      p2.remove()
    })

    approveButton.addEventListener('click', (e) => {                               
      reviewUlEl.innerHTML = "";
      
      li.className = "rpost";                                            
      article.appendChild(h4)
      article.appendChild(p1)
      article.appendChild(p2)
      li.appendChild(article)
      publishedUlEl.appendChild(li)
    })

    clearButton.addEventListener('click', (e) => {                               
      publishedUlEl.innerHTML = "";
    })
}
