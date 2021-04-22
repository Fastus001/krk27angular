const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-type', 'text/plain');
  res.setHeader('Content-type', 'application/json');
  console.log(req.method, req.url)
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Methods','PUT, GET, POST, DELETE');
  if(req.method ==='OPTIONS'){
    res.end('');
  }
  let price = ()=>Math.round(Math.random()*300)+10;
  if(req.method === 'GET' && req.url === '/api'){
  res.end(`
  [
  {
  "id": 1,
  "name": "Pfizer",
  "details":{
  "price": ${price()},"country": "us"
  }
  },
  {
  "id": 2,
  "name": "NovaVax",
  "details":{
  "price": ${price()},"country": "gb"
  }
  },
    {
  "id": 3,
  "name": "Johnson",
  "details":{
  "price": ${price()},"country": "gb-en"
  }
  },
    {
  "id": 4,
  "name": "AstraZeneca",
  "details":{
  "price": ${price()},"country": "gb"
  }
  }
  ]`);
}else if(req.method === 'PUT' && req.url.startsWith('/api/czlowiek')){
    res.end('');
  }else if(req.method === 'POST' && req.url.startsWith('/api/czlowiek')){
    res.end('');
  }else if(req.method === 'GET' && req.url.startsWith('/api/czlowiek')){
    res.end(`
    {
  "imie": "Andrzej",
  "nazwisko": "Nowak",
  "plec": "m",
  "zyczenia": {
    "a": true,
    "b": true
  },
  "typ": 2,
  "komentarze": "chciałbym aby..."
}
`);
  }
}
);

server.listen(port, '127.0.0.1', () => {
  console.log('Serwer wystartowal na porcie' + port);
});
