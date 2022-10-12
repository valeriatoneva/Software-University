window.addEventListener('load', solution);

function solution() {
  let nameField = document.getElementById('fname')
  let emailField = document.getElementById('email')
  let phoneField = document.getElementById('phone')
  let addressField = document.getElementById('address')
  let postalCodeFiel = document.getElementById('code')
  let submitBtn = document.getElementById('submitBTN');
  let previewField = document.getElementsByClassName('infoPreview');

  let name = nameField.value;
  let email = emailField.value;
  let phone = phoneField.value;
  let address = addressField.value;
  let postalCode = postalCodeField.value;

  

  submitBtn.addEventListener('click', (e) =>{
   previewField.appendChild(name)
   previewField.appendChild(email)
   previewField.appendChild(phone)
   previewField.appendChild(address)
   previewField.appendChild(postalCode)
   

  })
}
