var express = require('express');
var nodeMailer = require('nodemailer');
bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/portfolio', function(req, res){
res.sendFile(__dirname + '/views/index.html');
});

app.get('/hello', function(req, res){
    res.send('Hello World');
   }); 
   
app.use(express.static(__dirname + '/public')); //Serves resources from public folder
//form start below
app.post('/send-email', function (req, res) {
    var transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: 'itsmynode@gmail.com',
            pass: '12345veronika!'
        }
    });
    var mailOptions = {
        // should be replaced with real recipient's account
        to: 'itsmynode@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.writeHead(301, { Location: '/portfolio' });
    res.end();
  });
//form ended
   app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
    });
    app.listen(8000, function(){
        console.log('listen on port 8000')
    });
