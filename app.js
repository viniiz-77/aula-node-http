let http = require("http")

//1. abrindo servidor http (protocolo de comunicação entre cliente e máquina)

//2. a função createServer abre um servidor

//2.1 a função createServer tem a função de CALLBACK que recebe os parâmetros (req, res)

//2.2 REQ (request) - contém todas as informações sobre requisção do cliente
//    RES (response)- resposta que o servidor envia de volta ao cliente

//3. a função listen informa em qual porta da rede você quer abrir o seu servidor

http.createServer(function(req, res){
    res.end('Hello World!')
}).listen(9090)
//o servidor está criado

console.log('o servidor prestou')