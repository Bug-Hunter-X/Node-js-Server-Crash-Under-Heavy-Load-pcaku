const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Simulate a large number of requests
for (let i = 0; i < 100000; i++) {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        res.on('data', (d) => {
            // process.stdout.write(d);
        });
    });
    req.on('error', (error) => {
        console.error(error);
    });
    req.end();
}