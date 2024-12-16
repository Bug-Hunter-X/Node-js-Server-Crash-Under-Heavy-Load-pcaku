const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const server = http.createServer((req, res) => {
  // Logic to handle incoming requests
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
});

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const PORT = 3000 + cluster.worker.id;
  server.listen(PORT, () => {
    console.log(`Worker ${process.pid} started on port ${PORT}`);
  });
}

//Simulate a large number of requests
//This section remains the same for testing
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