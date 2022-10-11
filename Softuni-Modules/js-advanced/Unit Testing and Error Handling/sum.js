function solve(arr, startIndex = 0, endIndex = arr.length - 1){

    if(!Array.isArray(arr)){
        return NaN;
    }
    
    if(startIndex < 0){
        startIndex = 0;
    }
    
    if(endIndex >= arr.length - 1){
        endIndex = arr.length - 1;
    }
    
    for(let i = startIndex; i <= endIndex; i++){
        result += Number(arr[i]);
    }
    
    return result;
}
solve([10, 20, 30, 40, 50, 60], 3, 300)