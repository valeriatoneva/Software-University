// window.addEventListener("load", solve);
// // 69/100
// function solve() {
//   let makeField = document.getElementById("make");
//   let modelField = document.getElementById("model");
//   let yearField = document.getElementById("year");
//   let fuelField = document.getElementById("fuel");
//   let orgCostField = document.getElementById("original-cost");
//   let sellingPriceField = document.getElementById("selling-price");
//   let tbody = document.getElementById("table-body");
//   let ulCarsList = document.getElementById("cars-list");
//   let tr = document.createElement("tr");
//   let td1 = document.createElement("td");
//   let td2 = document.createElement("td");
//   let td3 = document.createElement("td");
//   let td4 = document.createElement("td");
//   let td5 = document.createElement("td");
//   let td6 = document.createElement("td");
//   let tdMain = document.createElement("td");
//   let totalProfitEl = document.getElementById('profit');

//   // buttons
//   let publishBtn = document.getElementById("publish");
//   let editBtn = document.createElement("button");
//   let sellBtn = document.createElement("button");

  
//   // functions

//   publishBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     let make = makeField.value;
//     let model = modelField.value;
//     let year = yearField.value;
//     let fuel = fuelField.value;
//     let orgCost = Number(orgCostField.value);
//     let sellingPrice = Number(sellingPriceField.value);

//     if (!make || !model || !year || !fuel || !orgCost) {
//       return;
//     }

//     if (orgCost > sellingPrice) {
//       return;
//     }

//     tr.setAttribute("class", "row");
//     td1.textContent = make;
//     td2.textContent = model;
//     td3.textContent = year;
//     td4.textContent = fuel;
//     td5.textContent = orgCost;
//     td6.textContent = sellingPrice;

//     editBtn.setAttribute("class", "action-btn edit");
//     sellBtn.setAttribute("class", "action-btn sell");
//     editBtn.textContent = "Edit";
//     sellBtn.textContent = "Sell";

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);
//     tr.appendChild(td6);
//     tdMain.appendChild(editBtn);
//     tdMain.appendChild(sellBtn);
//     tr.appendChild(tdMain);
//     tbody.appendChild(tr);

//     makeField.value = "";
//     modelField.value = "";
//     yearField.value = "";
//     fuelField.value = "";
//     orgCostField.value = "";
//     sellingPriceField.value = "";

//     editBtn.addEventListener("click", (e) => {
//       let parrentRowOfEditClicked = e.target.parentElement.parentElement;
//       console.log(parrentRowOfEditClicked);
//       parrentRowOfEditClicked.remove();
  
//       makeField.value = td1.textContent;
//       modelField.value = td2.textContent;
//       yearField.value = td3.textContent;
//       fuelField.value = td4.textContent;
//       orgCostField.value = td5.textContent;
//       sellingPriceField.value = td6.textContent;
//     });

//     sellBtn.addEventListener("click", (e) => {
//       let li = document.createElement('li');
//       li.classList.add('each-list');
//       let span1 = document.createElement('span');
//       span1.textContent = `${make} ${model}`
//       let span2 = document.createElement('span');
//       span2.textContent = `${year}`;
//       let span3 = document.createElement('span');
//       span3.textContent = `${Math.abs(sellingPrice-orgCost)}`
      
//       li.appendChild(span1)
//       li.appendChild(span2)
//       li.appendChild(span3)
//       ulCarsList.appendChild(li)

//       let totalProfit = sellingPrice - orgCost;
//       totalProfitEl.textContent = Math.round(totalProfit).toFixed(2);
//       tbody.innerHTML = "";

//     })


//   });




// }
