// import core module that we need to do all this interactions with file system
const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}); // this is asynchronous



// writing files
// fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//     console.log('file was written');
// }); // it will replace current content of @blog1 with string that was passed as second argument

// fs.writeFile('./docs/blog2.txt', 'hello again', () => {
//     console.log('file was written');
// });// if we run that again with non-existing file, it will create it - with second argument as a content

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', err => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', err => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', err => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
};