function demo (numbers){
    let filltered = numbers.filter((el, i) => i % 2 == 1);
    let fillteredMultiplied = filltered.map(x=> x*2);
    let reversed = fillteredMultiplied.reverse()
    console.log(reversed.join(" "))
    }
    demo([3, 0, 10, 4, 7, 3])