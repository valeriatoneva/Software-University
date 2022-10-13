
class List{
    constructor(){
     this.result = [];
     this.size = this.result.length;
    }

    add(element){
     this.result.push(element);
     this.size = this.result.length;
     this.result.sort((a, b) => a-b)
    }

    remove(index){
    if (index > -1) { // only splice array when item is found
    this.result.splice(index, 1); 
    this.size = this.result.length;
    }
}
    get(index){
     if (index > -1) {
     return this.result[index]
     }
    }
}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));