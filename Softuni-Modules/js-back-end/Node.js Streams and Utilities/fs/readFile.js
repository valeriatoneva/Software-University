const fs = require('fs');
// sync
const text = fs.readFileSync('./data.txt', { encoding: 'utf-8'})
console.log('Read from file')
console.log(text)

//async

const asyncText = fs.readFile('./data.txt', { encoding: 'utf-8'}, (err, data) => {
if(err){
    return;
}

console.log(data)
});

console.log('Read from file async')
console.log(asyncText)

// with promises 

const asyncText = fs.readFile('./data.txt', { encoding: 'utf-8'}, (err, data) => {
    if(err){
        return;
    }
    
    console.log(data)
    });