const http = require('http');
const fs = require('fs');

// // whenever request is made, it consolelogs that fraze
// const server = http.createServer((req, res) => {
//   console.log('request made');
// });

// // whenever request is made, it shows whole request object
// const server = http.createServer((req, res) => {
//   console.log(req);
// });

// url doesn't contain 'localhost:3000', that's the part after
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // // set header content type
  // res.setHeader('Content-Type', 'text/plain');

  // res.write('hello, raveners');

  // // send html element as response
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<p>hello raveners!</p>');
  // res.write('<p>hello again</p>');

  // res.end();

  // if we add html elements, it will add <head> tag automatically. We can of course replace that with our own one, and it won't be shown on the page

// all in all it is not the best way to send html elements - it takes too long and it is too complicated. till this point ofc.

  

res.setHeader('Content-Type', 'text/html');

// send an html file
fs.readFile('./views/index.html', (err, data) => {
  if (err) {
    console.log(err);
    res.end();
  } else {
    // line below can be skipped, but only if we send only one thing. In that case, we can just go with 
    // res.end(data)
    res.write(data);
    res.end();
  }
})


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});