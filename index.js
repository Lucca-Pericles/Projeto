const http = require('http');

http.createServer(function(req, res) {
res.end('ola mundo')
}).listen(3000);

console.log('server listening on');