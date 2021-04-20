const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-type', 'text/plain');
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods','PUT, GET, POST, DELETE');
  let price = ()=>Math.round(Math.random()*300)+10;
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
});

server.listen(port, '127.0.0.1', () => {
  console.log('Serwer wystartowal na porcie' + port);
});
