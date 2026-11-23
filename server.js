const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Привет из my-first-project!</h1>');
});

server.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});



