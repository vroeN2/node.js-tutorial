// streams allow to work on data before it is fully loaded (in case the file is big)

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// code below works similar to JS addEventListener event, but an event here is 'data'
// readStream.on('data', chunk => {
//     console.log('------NEW CHUNK------');
//     console.log(chunk);
//     writeStream.write('\n###########NEW CHUNK###########\n\n\n\n\n');
//     writeStream.write(chunk);
// })

// shorter option for do the same as above, but faster :) 
// // piping
readStream.pipe(writeStream);