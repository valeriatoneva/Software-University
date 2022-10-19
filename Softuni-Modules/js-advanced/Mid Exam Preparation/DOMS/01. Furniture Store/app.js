window.addEventListener("load", solve);
// 44/100
function solve() {
  let modelField = document.getElementById("model");
  let yearField = document.getElementById("year");
  let descriptionField = document.getElementById("description");
  let priceField = document.getElementById("price");

  let addButton = document.getElementById("add");
  let moreInfoBtn = document.createElement("button");
  let buyBtn = document.createElement("button");

  let furnitureListTBody = document.getElementById("furniture-list");
  let totalPrice = document.querySelector(".total-price");
  let aditionalInfoLine = document.createElement("tr");
  let tr = document.createElement("tr");

  addButton.addEventListener("click", (e) => {
    event.preventDefault();

    let model = modelField.value;
    let year = yearField.value;
    let description = descriptionField.value;
    let price = Number(priceField.value);

    if (model === "" || description === "") {
      return;
    }

    if (Number(year) <= 0 || Number(price) <= 0) {
      return;
    }

    let tr = document.createElement("tr");
    tr.className = "info";
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td"); // attach buttons here
    td1.textContent = model;
    td2.textContent = price.toFixed(2);

    moreInfoBtn.classList.add("moreBtn");
    buyBtn.classList.add("buyBtn");
    moreInfoBtn.textContent = "More Info";
    buyBtn.textContent = "Buy it";
    
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td3.appendChild(moreInfoBtn)
    td3.appendChild(buyBtn)
    furnitureListTBody.appendChild(tr)
    
    modelField.value = "";
    yearField.value = "";
    descriptionField.value = "";
    priceField.value = "";
  });
  
  let aditionalInfoTr = document.createElement("tr");
  aditionalInfoTr.classList.add(`hide`);
  aditionalInfoTr.style.display = "none";
  let aditionalInfoTd1 = document.createElement("td");
  aditionalInfoTd1.textContent = `Year: ${year.value}`;
  let aditionalInfoTd2 = document.createElement("td");
  aditionalInfoTd2.setAttribute("colspan", 3);
  aditionalInfoTd2.textContent = `Description: ${description.value}`;

  aditionalInfoTr.appendChild(aditionalInfoTd1);
  aditionalInfoTr.appendChild(aditionalInfoTd2);
  furnitureListTBody.appendChild(aditionalInfoTr);
  
  moreInfoBtn.addEventListener("click", (e) => {
      if (e.currentTarget.textContent == "More Info") {
      // gives me the button's text content
      aditionalInfoTr.style.display = "contents";
      e.currentTarget.textContent = "Less Info";
    } else {
      e.currentTarget.textContent = "More Info";
      aditionalInfoTr.style.display = "none";
    }
    
  });

  buyBtn.addEventListener("click", (e) => {
    let currPriceTotal = Number(totalPrice.textContent);
    totalPrice.textContent = (currPriceTotal + price).toFixed(2);
    rowElement.remove();
    aditionalInfoLine.remove();
  });

}
