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
  let rowElement = document.createElement("tr");

  addButton.addEventListener("click", (e) => {
    event.preventDefault();

    let model = modelField.value;
    let year = yearField.value;
    let description = descriptionField.value;
    let price = Number(priceField.value);

    if (!model || !description) {
      return;
    }

    if (Number(year) <= 0 || Number(price) <= 0) {
      return;
    }

    let rowElement = document.createElement("tr");
    rowElement.className = "info";
    let modelTdEl = document.createElement("td");
    let priceTdEl = document.createElement("td");
    let actionsTdEl = document.createElement("td"); // attach buttons here
    modelTdEl.textContent = model;
    priceTdEl.textContent = price.toFixed(2);

    moreInfoBtn.classList.add("moreBtn");
    buyBtn.classList.add("buyBtn");
    moreInfoBtn.textContent = "More Info";
    buyBtn.textContent = "Buy it";

  });
  buyBtn.addEventListener("click", (e) => {
    let currPriceTotal = Number(totalPrice.textContent);
    totalPrice.textContent = (currPriceTotal + price).toFixed(2);
    rowElement.remove();
    aditionalInfoLine.remove();
  });

  moreInfoBtn.addEventListener("click", (e) => {
    if (e.currentTarget.textContent == "More Info") {
      // gives me the button's text content
      aditionalInfoLine.style.display = "contents";
      e.currentTarget.textContent = "Less Info";
    } else {
      e.currentTarget.textContent = "More Info";
      aditionalInfoLine.style.display = "none";
    }
  });

  let aditionalInfoLine = document.createElement("tr");
  aditionalInfoLine.classList.add(`hide`);
  aditionalInfoLine.style.display = "none";
  let aditionalInfoLineTd = document.createElement("td");
  aditionalInfoLineTd.textContent = `Year: ${year}`;
  let aditionalInfoLineTd2 = document.createElement("td");
  aditionalInfoLineTd2.setAttribute("colspan", 3);
  aditionalInfoLineTd2.textContent = `Description: ${description}`;

  aditionalInfoLine.appendChild(aditionalInfoLineTd);
  aditionalInfoLine.appendChild(aditionalInfoLineTd2);

  furnitureListTBody.appendChild(rowElement);
  furnitureListTBody.appendChild(aditionalInfoLine);
}
