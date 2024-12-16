# Node.js Server Crash Under Heavy Load

This repository demonstrates a common issue in Node.js applications: server crashes or unresponsiveness under heavy load.  The problem arises from inefficient handling of requests, potentially leading to memory leaks or unhandled exceptions.

## Problem

The `server.js` file contains a simple HTTP server. When subjected to a large number of concurrent requests (simulated in the code), the server may crash or become unresponsive.  This is because the server doesn't handle the requests efficiently and doesn't properly manage resources.

## Solution

The `serverSolution.js` file provides a solution that addresses the performance issues. This involves using techniques like request pooling to improve request handling efficiency and prevent the server from crashing under a heavy load.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node server.js`.
4. Observe the server's behavior when handling a high volume of requests (simulated in the code).
5. Compare the results with the solution provided in `serverSolution.js`.
