const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';

  switch(req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html'
      break;
    default:
        path += '404.html';
        break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
    res.end();
  } else {
    res.end(data);
  }
})


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});