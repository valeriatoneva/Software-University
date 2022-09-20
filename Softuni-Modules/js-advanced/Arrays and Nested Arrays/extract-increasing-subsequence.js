function solve(arr){
    
    for(let index = 0; index < arr.length; index++){
        let currNum = arr[index]; // 1
        index++; 
        let nextNum = arr[index];// 3
        if(currNum <= nextNum){ // 1 < 3
            console.log(currNum)
        }
    }
    
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])