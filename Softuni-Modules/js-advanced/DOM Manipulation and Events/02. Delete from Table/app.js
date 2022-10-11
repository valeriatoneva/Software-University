function deleteByEmail() {
    let email = document.getElementsByName(`email`)[0].value;
  let tableCells = document.getElementById('customers').getElementsByTagName('td');
  let found = false;
  
  for(let cell of tableCells){
    
    if(cell.textContent === email){
      cell.parentElement.remove()
      found = true;
    }
  }
      let res = document.getElementById('result')
      res.textContent = found ? 'Deleted.' : `Not found.`

  }
