async function solve() {
  const url = `http://localhost:3030/jsonstore/collections/students`;

  let table = document.getElementById("result");
  const submitBtn = document.getElementById("submit");
  const response = await fetch(url);
  const data = await response.json();
  let array = Obj.values(data);

  array.forEach((entry) => {
    const firstName = entry.firstName;
    const lastName = entry.lastName;
    const facultyNumber = entry.facultyNumber;
    const grade = Number(entry.grade);
    const id = entry._id;

    const tr = document.createElement("tr");
    const firstNameTd = document.createElement("td");
    const lastNameTd = document.createElement("td");
    const facultyNumberTd = document.createElement("td");
    const gradeTd = document.createElement("td");
    const tdId = document.createElement("td");

    idTd.innerHTML = id;
    firstNameTd.innerHTML = firstName;
    lastNameTd.innerHTML = lastName;
    facultyNumberTd.innerHTML = facultyNumber;
    gradeTd.innerHTML = grade.toFixed(2);

    tr.appendChild(firstNameTd);
    tr.appendChild(lastNameTd);
    tr.appendChild(facultyNumberTd);
    tr.appendChild(gradeTd);
    tr.appendChild(idTd);
    const firstNameInput = document.getElementsByName("firstName")[0];

    table.appendChild(tr);
  });

  submitBtn.addEventListener("click", onClickSubmit);
  async function onClickSubmit(e) {
    e.preventDefault();

    const firstNameInput = document.getElementsByName("firstName")[0];
    const lastNameInput = document.getElementsByName("lastName")[0];
    const facultyNumberInput = document.getElementsByName("facultyNumber")[0];
    const gradeInput = document.getElementsByName("grade")[0];

    if (
      firstNameInput.value !== "" &&
      lastNameInput.value !== "" &&
      facultyNumberTd.value !== "" &&
      grade.value !== ""
    ) {
      const response = await fetch(url, {
        method: `POST`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: firstNameInput.value,
          facultyNumber: Number(facultyNumberInput.value),
          grade: Number(gradeInput.value),
        }),
      });
      const tr = document.createElement("tr");

      const firstNameTd = document.createElement("td");
      const lastNameTd = document.createElement("td");
      const facultyNumberTd = document.createElement("td");
      const gradeTd = document.createElement("td");

      firstNameTd.innerText = firstNameInput.value;
      lastNameTd.innerText = lastNameInput.value;
      facultyNumberTd.innerText = facultyNumberInput.value;
      gradeTd.innerText = gradeInput.value;

      table.appendChild(tr);
    }

    firstNameInput.value = "";
    lastNameInput.value = "";
    facultyNumberTd.value = "";
    gradeTd.value = "";
  }
}

// "students": {
//     "54e6d099-6e00-4613-97b7-bc2b6bdc1db5": {
//         "firstName": "Isaac",
//         "lastName": "Netero",
//         "facultyNumber": "90000587896",
//         "grade": 4.99,
//         "_id": "54e6d099-6e00-4613-97b7-bc2b6bdc1db5"
//     },
//     "f94698f3-e4c0-45b2-b391-34e555ed702d": {
//         "firstName": "Nvy",
//         "lastName": "Ose",
//         "facultyNumber": "90000123456",
//         "grade": 6,
//         "_id": "f94698f3-e4c0-45b2-b391-34e555ed702d"
//     },
//     "a8ab018a-5a00-4652-ab3b-036bc91bd21f": {
//         "firstName": "Sunny",
//         "lastName": "Jackson",
//         "facultyNumber": "90000334562",
//         "grade": 4.4,
//         "_id": "a8ab018a-5a00-4652-ab3b-036bc91bd21f"
//     },
//     "a9d1a18d-c617-4f05-b322-05aab720fe19": {
//         "firstName": "Aina",
//         "lastName": "Haward",
//         "facultyNumber": "90000451254",
//         "grade": 5.56,
//         "_id": "a9d1a18d-c617-4f05-b322-05aab720fe19"
//     }
// },
