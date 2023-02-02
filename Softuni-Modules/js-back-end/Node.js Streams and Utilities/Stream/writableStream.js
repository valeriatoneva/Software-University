const fs = require('fs');

const writeStream = fs.createWriteStream('.output.txt', {encoding: 'utf-8'});
const chuck1 = 'Pesho'
const chuck2 = 'Gosho'
const chuck3 = 'Stamat'

writeStream.write(chunk1 +'\n')
writeStream.write(chunk2 + '\n')
writeStream.write(chunk3 + '\n')

writeStream.on('close', () => {
    'Spiram krancheto'
})

writeStream.end(chunk1)