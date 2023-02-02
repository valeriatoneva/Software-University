const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip()

const readStream = fs.createReadStream('./data.txt');
const writeStream = fs.createWriteStream('./data-copy.txt');

readStream.pipe(gzip).pipe(writeStream); // all that shit can be done with pipe