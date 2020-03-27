var express = require('express');
var app = express();
app.get('/hello', function(req, res){
    res.send('Hello World');
   }); 
   app.get('/portfolio', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});
app.use(express.static(__dirname + '/public')); //Serves resources from public folder

   app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
    });
    app.listen(8000, function(){
        console.log('listen on port 8000')
    });
