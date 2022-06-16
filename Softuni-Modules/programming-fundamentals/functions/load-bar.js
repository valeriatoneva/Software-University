function main(percent){
    let emptyArr = []
    let completed = `%`.repeat(percent/10);
    let incompleted =`.`.repeat(10-completed.length)
    let done = completed+incompleted
    
if(incompleted.length === 0){
  console.log(`100% Complete!`)
} else {
     console.log(`${percent}% [${done}]`)
    console.log(`Still loading...`)
}

     }
     main(30)