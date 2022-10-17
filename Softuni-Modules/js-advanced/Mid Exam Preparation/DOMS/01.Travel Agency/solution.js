window.addEventListener('load', solution);
// 100/100
function solution() {
  //buttons 
  let submitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');
  let block = document.getElementById('block');
  let previewFieldUl = document.getElementById('infoPreview');


  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  let nameField = document.getElementById('fname')
  let emailField = document.getElementById('email')
  let phoneField = document.getElementById('phone')
  let addressField = document.getElementById('address')
  let postalCodeField = document.getElementById('code')
  let liOfPreview1 = document.createElement('li')
  let liOfPreview2 = document.createElement('li')
  let liOfPreview3 = document.createElement('li')
  let liOfPreview4 = document.createElement('li')
  let liOfPreview5 = document.createElement('li')
  

  

  let labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
   

  submitBtn.addEventListener('click', (e) =>{ // his target is submitBtn#
    e.preventDefault()
  let name = nameField.value;
  let email = emailField.value;
  let phone = phoneField.value;
  let address = addressField.value;
  let postalCode = postalCodeField.value;
    
   if(name === "" || email === "" || phone === ""|| address === ""|| postalCode === ""){
    return;
   }

   liOfPreview1.textContent = `Full Name: ${name}`;
   liOfPreview2.textContent = `Email: ${email}`;
   liOfPreview3.textContent = `Phone Number: ${phone}`;
   liOfPreview4.textContent = `Address: ${address}`;
   liOfPreview5.textContent = `Postal Code: ${postalCode}`;

   previewFieldUl.appendChild(liOfPreview1)
   previewFieldUl.appendChild(liOfPreview2)
   previewFieldUl.appendChild(liOfPreview3)
   previewFieldUl.appendChild(liOfPreview4)
   previewFieldUl.appendChild(liOfPreview5)
   
   e.target.disabled = true;
   editBtn.disabled = false;
   continueBtn.disabled = false;

   nameField.value = "";
   emailField.value = "";
   phoneField.value = "";
   addressField.value = "";
   postalCodeField.value = "";
  })

  editBtn.addEventListener('click', (e) =>{ 
    nameField.value = liOfPreview1.textContent.split(": ")[1]
    emailField.value = liOfPreview2.textContent.split(": ")[1]
    phoneField.value = liOfPreview3.textContent.split(": ")[1]
    addressField.value = liOfPreview4.textContent.split(": ")[1]
    postalCodeField.value = liOfPreview5.textContent.split(": ")[1]
    liOfPreview1.remove()
    liOfPreview2.remove()
    liOfPreview3.remove()
    liOfPreview4.remove()
    liOfPreview5.remove()
   submitBtn.disabled = false;
   e.target.disabled = true;
   continueBtn.disabled = true;
  })

  continueBtn.addEventListener('click', (e) =>{ 
    block.innerHTML = "";

    let h3 = document.createElement('h3');
    h3.textContent = `Thank you for your reservation!`
    block.appendChild(h3)
})

}
