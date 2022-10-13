class Stringer{
    constructor(innerString, innerLength){
     this.innerString = innerString;
     this.innerLength = innerLength;
    }

    increase(length){
    if(this.innerLength >= 0){
    this.innerLength += Number(length);
    } else{
    this.innerLength = 0;
    }
}

    decrease(length){
    if(this.innerLength >= 0){
      this.innerLength -= Number(length);      
    } else {
      this.innerLength = 0;
    }
    }

    toString(){
      if(this.innerLength === 0){
        return "...";
      } else if(this.innerString.length > this.innerLength){
        return this.innerString.substring(0, this.innerLength) + '...'
      }else{
        return this.innerString;
      }
    }
  }  


