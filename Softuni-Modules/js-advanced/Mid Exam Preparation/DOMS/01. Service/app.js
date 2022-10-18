window.addEventListener("load", solve);
// 60/100
function solve() {
  let productTypeField = document.getElementById("type-product");
  let descriptionField = document.getElementById("description");
  let clientNameField = document.getElementById("client-name");
  let clientPhoneField = document.getElementById("client-phone");
  let receivedOrders = document.getElementById("received-orders");
  let compleatedOrders = document.getElementById("completed-orders");
  let sendFormBtn = document.querySelector("button[type='submit']");
  let clearBtn = document.querySelector(".clear-btn");
  let startBtn = document.createElement("button");
  let finishBtn = document.createElement("button");

  let container = document.createElement("div");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");

  sendFormBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let productType = productTypeField.value;
    let description = descriptionField.value;
    let clientName = clientNameField.value;
    let clientPhone = clientPhoneField.value;

    if (description === "" || clientName === "" || clientPhone === "") {
      return;
    }

    container.className = "container";
    h2.textContent = `Product type for repair: ${productType}`;
    h3.textContent = `Client information: ${clientName}, ${clientPhone}`;
    h4.textContent = `Description of the problem: ${description}`;

    startBtn.className = "start-btn";
    finishBtn.className = "finish-btn";
    finishBtn.disabled = true;
    startBtn.textContent = "Start repair";
    finishBtn.textContent = "Finish repair";

    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(h4);
    container.appendChild(startBtn);
    container.appendChild(finishBtn);
    receivedOrders.appendChild(container);

    productTypeField.value = "";
    descriptionField.value = "";
    clientNameField.value = "";
    clientPhoneField.value = "";
  });

  startBtn.addEventListener("click", (e) => {
    e.target.disabled = true;
    finishBtn.disabled = false;
  });

  finishBtn.addEventListener("click", (e) => {
    startBtn.remove()
    finishBtn.remove()
    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(h4);
    compleatedOrders.appendChild(container);
  });

  clearBtn.addEventListener('click', (e) => {
    compleatedOrders.innerHTML = ""
    h2.textContent = 'Completed orders:'
    let img = document.createElement('img');
    img.src = "./style/img/completed-order.png";
    let newClearBtn = document.createElement('button');
    newClearBtn.className = 'clear-btn';
    newClearBtn.textContent = 'Clear'

    compleatedOrders.appendChild(h2);
    compleatedOrders.appendChild(img);
    compleatedOrders.appendChild(newClearBtn)

  })
}
