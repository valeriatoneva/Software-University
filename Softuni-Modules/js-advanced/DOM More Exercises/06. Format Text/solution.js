function solve() {
  const input = document.getElementById('input').value; // sudurjanieto v text area 
  const output = document.getElementById('output').value; // sudur
  output.innerHTML = "";
  const arrayText = input.split(".").filter(x=>x.length > 0);

  for(let i = 0; i < arrayText.length; i+=3){
    let res = []
     for(let x =0; x<3; x++){
       if(arrayText[i+x]){
        res.push(arrayText[i+x]); 
       }
    }
     let resText = res.join(". ") + "."
     output.innerHTML += `<p>${resText}</p>`
  }
}   