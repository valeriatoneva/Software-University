function search() {
   let townList = Array.from(document.querySelectorAll("ul li")); // turns it into a js list 
   let searchText = document.getElementById('searchText').value; // the input has value
   let count = 0;

   for(let el of townList){
      let text = el.textContent; // to return readble text

      if(text.includes(searchText)){
         el.style.textDecoration = "underline";
         el.style.fontWeight = "bold";
         count++
   } else {
      el.style.textDecoration = "none"
      el.style.fontWeight = "none"
   }
}
document.getElementById('result').textContent = `${count} matches found`
}
