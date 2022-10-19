function solve() {
  // 100/100
  let typeOfProduct = document.getElementById('type-product');
  let description = document.getElementById('description');
  let clientName = document.getElementById('client-name');
  let phoneNum = document.getElementById('client-phone');
  let submitButton = document.querySelector('form button');

  submitButton.addEventListener('click', (e) => {
      e.preventDefault()
      if (description.value.length == 0 || clientName.value.length == 0 || phoneNum.value.length == 0) {
          return;
      }
      let appendingSection = document.getElementById('received-orders');

      let divElement = document.createElement('div');
      divElement.classList.add('container');
      console.log(divElement)

      let productH2 = document.createElement('h2');
      productH2.textContent = `Product type for repair: ${typeOfProduct.value}`;

      let clientH3 = document.createElement('h3');
      clientH3.textContent = `Client information: ${clientName.value}, ${phoneNum.value}`;
      console.log(clientH3)
      let descriptionH4 = document.createElement('h4');
      descriptionH4.textContent = `Description of the problem: ${description.value}`;

      let startButton = document.createElement('button');
      startButton.classList.add('start-btn');
      startButton.textContent = 'Start repair';

      let finishButton = document.createElement('button');
      finishButton.classList.add('finish-btn')
      finishButton.textContent = 'Finish repair'
      finishButton.disabled = true;

      divElement.appendChild(productH2)
      divElement.appendChild(clientH3)
      divElement.appendChild(descriptionH4)
      divElement.appendChild(startButton)
      divElement.appendChild(finishButton)
      appendingSection.appendChild(divElement)
      console.log(appendingSection)

      clientName.value = '';
      description.value = '';
      phoneNum.value = '';

      startButton.addEventListener('click', () => {
          startButton.disabled = true;
          finishButton.disabled = false;
      });

      let completedOrdersSection = document.getElementById('completed-orders');
      finishButton.addEventListener('click', () => {
          divElement.removeChild(finishButton);
          divElement.removeChild(startButton)
          completedOrdersSection.appendChild(divElement)
      })
  })
  let clearButton = document.querySelector('.clear-btn')
  clearButton.addEventListener('click', (e) => {
      let arrFromClasses = Array.from(document.querySelectorAll('#completed-orders .container'))
      console.log(arrFromClasses)
      for (const line of arrFromClasses) {
          line.remove()
      }
  })
}