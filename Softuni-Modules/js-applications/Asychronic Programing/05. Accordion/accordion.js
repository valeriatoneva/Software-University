async function solution() {
//   const moreBtn = document.getElementById("ee9823ab-c3e8-4a14-b998-8c22ec246bd3");
  const main = document.getElementById('main')
  const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
  const response = await fetch(url);
  const data = response.json();

  const main = document.getElementById('main');

  let divMain = document.createElement('div');
  divMain.setAttribute("class", "accordion");
  let divHead = document.createElement('div');
  divHead.setAttribute("class", "head");
  let span = document.createElement('span');
  let moreBtn =  document.createElement('button');
  let divExtra = document.createElement('div');
  divExtra.setAttribute("class", "extra");
  let p = document.createElement('p');

  data.forEach((el) => {
    span.textContent = el.title
    p.textContent = el.title
  })
  
  main.appendChild(divMain)
  main.appendChild(divHead)
  main.appendChild(divExtra);
  divMain.appendChild(divHead);
  divHead.appendChild(span);
  divHead.appendChild(button)

//<div class="accordion">
//   <div class="head">
//       <span>Scalable Vector Graphics</span>
//       <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
//   </div>
//   <div class="extra">
//       <p>Scalable Vector Graphics .....</p>
//   </div>
// </div> -->

}
solution()