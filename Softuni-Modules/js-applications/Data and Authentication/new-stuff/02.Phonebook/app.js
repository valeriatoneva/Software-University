function attachEvents() {
  let loadBtn = document.querySelector(`button#btnLoad`);
  let createBtn = document.querySelector(`button#btnCreate`);
  let personField = document.querySelector(`input#person`);
  let phoneField = document.querySelector(`input#phone`);
  let phoneBookUl = document.querySelector(`ul#phonebook`);
  let temUrl = `http://localhost:8000/phonebook`;

  loadBtn.addEventListener(`click`, function () {
    phoneBookUl.innerHTML = ``;
    fetch(temUrl)
      .then((responsive) => responsive.json())
      .then((data) => {
        Object.entries(data).forEach((el) => {
          let li = document.createElement(`li`);
          let delBtn = document.createElement(`button`);

          delBtn.textContent = `Delete`;
          li.id = el[0];
          let delUrl = `http://localhost:8000/phonebook/${li.id}`;
          li.textContent = `${el[1].person}:${el[1].phone}`;
          li.appendChild(delBtn);

          delBtn.addEventListener(`click`, function () {
            fetch(delUrl, { method: `DELETE` });
            phoneBookUl.innerHTML = ``;
          });

          phoneBookUl.appendChild(li);
        });
      });
  });

  createBtn.addEventListener(`click`, function () {
    let personInfo = personField.value;
    let phoneInfo = phoneField.value;
    if (personInfo === `` || phoneInfo === ``) {
      return;
    }
    fetch(temUrl, {
      method: `POST`,
      body: JSON.stringify({ person: personInfo, phone: phoneInfo }),
    });

    personField.value = ``;
    phoneField.value = ``;
  });
}

attachEvents();
