// Node.js is single-threaded

const https = require('https');

function downloadPage(url) {
  console.log(`Starting download of ${url}`);
  https.get(url, (response) => { // making a get request that accepts url as argument 
    let data = ''; // buffer to store the data 
    response.on('data', (chunk) => { // when data is received
      data += chunk; // store it's chuncks in the bigger picture (in the buffer)
    });
    response.on('end', () => { // when the data is received and and the response is complete
      console.log(`Finished downloading ${url}`);
    });
  });
}

// Starting two downloads simultaneously
downloadPage('https://example.com/page1');
downloadPage('https://example.com/page2');
