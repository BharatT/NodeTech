var http = require("http");
var module1 = require("./module1");
var module2 = require("./module2");
/*
function onRequeest(request,response){
    response.writeHead(200,{"content-type":"text/plain"});
    response.write("Welcome test module");
    response.write(module1.myString);
    module1.myFunction();

    response.write(module2.myVar);
    module2.myFunction();

    response.end();

}*/
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/plain"});
    response.write("Welcome test module");
    response.write(module1.myString);
    module1.myFunction();

    response.write(module2.myVar);
    module2.myFunction();

    response.end();

}).listen(3000);