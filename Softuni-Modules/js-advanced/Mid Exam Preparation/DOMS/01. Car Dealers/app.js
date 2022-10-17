window.addEventListener("load", solve);

function solve() {
  let makeField = document.getElementById('make');
  let modelField = document.getElementById('model')
  let yearField = document.getElementById('year');
  let fuelField = document.getElementById('fuel');
  let orgCostField = document.getElementById('original-cost');
  let sellingPriceField = document.getElementById('selling-price');

  let make = makeField.value;
  let model = modelField.value;
  let year = yearField.value;
  let fuel = fuelField.value;
  let orgCost = Number(orgCostField.value);
  let sellingPrice = Number(sellingPriceField.value);

  // buttons
  let publishBtn = document.getElementById('publish');
  let editBtn = document.createElement('button');
  let sellBtn = document.createElement('button');
  editBtn.className = 'action-btn edit';
  sellBtn.className = 'action-btn sell';


  // functions

  publishBtn.addEventListener('click', publishing)
   function publishing(e){
    ev.preventDefault();
    if (!make || !model || !year || !fuel || !orgCost || !input.originalCost.value) {
      return
    }

    if (Number(input.originalCost.value) < Number(input.sellingPrice.value)) {
      return
    }

    let tbody = document.getElementById('table-body');

    let tr = document.createElement('tr');
    tr.setAttribute("class", "row");
    let td1 = document.getElementById('td')
    let td2 = document.getElementById('td')
    let td3 = document.getElementById('td')
    let td4 = document.getElementById('td')
    let td5 = document.getElementById('td')
    let td6 = document.getElementById('td')
    let tdMain = document.getElementById('td') // attach buttons here
    td1.textContent = `${make}`
    td2.textContent = `${model}`
    td3.textContent = `${year}`
    td4.textContent = `${fuel}`
    td5.textContent = `${orgCost}`
    td6.textContent = `${sellingPrice}`
   
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(tdMain)
    tdMain.appendChild(editBtn)
    tdMain.appendChild(sellBtn)
    tbody.appendChild(tr)
    ;
  }

  editBtn.addEventListener('click', (ev) => {
   let parrentRowOfEditClicked = ev.target.parentElement.parentElement;
   parrentRowOfEditClicked.remove();
  })
}
