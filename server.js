const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Привет из my-first-project!</h1><p>Это главная страница.</p>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>О проекте</h1><p>Мой первый Node.js сервер на Mac mini.</p>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Страница не найдена');
  }
});

server.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});


