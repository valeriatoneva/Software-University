window.addEventListener('load', solve);

function solve() {

  let modelField = document.getElementById('model')
  let yearField = document.getElementById('year')
  let descriptionField = document.getElementById('description')
  let priceField = document.getElementById("price");
  const furnitureListEL = document.getElementById("furniture-list");
  let totalPrice = document.querySelector('.total-price')

  let model = modelField.value;
  let year = yearField.value;
  let description = descriptionField.value;
  let price = Number(priceField.value);

  let addButton = document.getElementById('add');
  addButton.addEventListener('click', addClickHandler)

  function addClickHandler(event){
    event.preventDefault();
    if(model === "" || description === ""){
        return;
      }
    
      if(Number(year) < 0 || Number(price) < 0){
        return;
    }

    let rowElement = document.createElement('tr');
    rowElement.className = 'info'
    let modelTdEl = document.createElement('td')
    let priceTdEl  = document.createElement('td')
    let actionsTdEl = document.createElement('td');
    let moreInfoBtn = document.createElement('button');
    moreInfoBtn.classList.add('moreBtn')
    let buyBtn = document.createElement('button');
    buyBtn.classList.add('buyBtn')
    moreInfoBtn.textContent = 'More Info';
    buyBtn.textContent = 'Buy it';
    
    buyBtn.addEventListener('click', (e) => {
        let currPriceTotal = Number(totalPrice.textContent);
        totalPrice.textContent = (currPriceTotal + price).toFixed(2);
        rowElement.remove();
        hidden.remove();
    })

    moreInfoBtn.addEventListener('click', (e) => {
        if(e.currentTarget.textContent == 'More Info'){
         hidden.style.display = 'contents'
        e.currentTarget.textContent = 'Less Info'
        } else {
        e.currentTarget.textContent = 'More Info'
        hidden.style.display = 'none'
        }
    })

    
    let hidden = document.createElement('tr')
    hidden.classList.add(`hide`);
    hidden.style.display = 'none'
    let hiddenTd = document.createElement('td')
    hiddenTd.textContent = `Year: ${year}`;
    let hiddenTd2 = document.createElement('td')
    hiddenTd2.setAttribute('colspan', 3)
    hiddenTd2.textContent = `Description: ${description}`

    hidden.appendChild(hiddenTd)
    hidden.appendChild(hiddenTd2)
    actionsTdEl.appendChild(moreInfoBtn);
    actionsTdEl.appendChild(buyBtn);

    modelTdEl.textContent = model; // info from the input fields
    priceTdEl.textContent = price.toFixed(2);

    rowElement.appendChild(modelTdEl); // adding to the table 
    rowElement.appendChild(priceTdEl);
    rowElement.appendChild(actionsTdEl);

    furnitureListEL.appendChild(rowElement) // adding to the list the table 
    furnitureListEL.appendChild(hidden)
    
  }




}
