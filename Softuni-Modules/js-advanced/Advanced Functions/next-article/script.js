function getArticleGenerator(arr) {
    let articles = arr;
    
    return ()=>{
      if(articles.length != 0){
      console.log(articles)
          let container = document.getElementById('content');
          let article = document.createElement('article')
          let currText = articles.shift();
          article.innerText = currText;
          container.appendChild(article);
      }
   }
}

  