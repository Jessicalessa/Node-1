//requisições
const http = require('http');

const hostname = "192.168.32.1";
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');

    res.end("Olá mundo!");
})

//com o cmd abra o arquivo e a frase estara la
server.listen(port,hostname,()=>{
    console.log("Servidor está rodando")
})
