const fs = require('fs');
const readStream = fs.createReadStream('file.txt', { encoding: 'utf-8'});

// task 1
  readStream.on('data', (chunk) => {
    console.log(chunk);
  });
  readStream.on('end', () => {
    console.log('file reading is complete');
  });

// task 2
    readStream.on('data', (chunk) =>{
    const count = chunk.toString().split(" ").length
        console.log ('words in the file:', count)
     })

// task *
let buffer = '';
let wordCount = 0;
readStream.on('data', chunk => {
    buffer += chunk;
    const words = buffer.toString().split(' ');
    buffer = words.pop();
    console.log(`words: ${chunk.length}`);
})








