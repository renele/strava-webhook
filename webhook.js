var express = require('express');
var app = express();
// get Endpoint to create subscription  on strava
//create the mapped tunnelendpoint agian you ssh reverse tunnel
//ssh -R nightstrive:80:localhost:8080 serveo.net 
// 
app.post('/', function (req, res) {
    var responds = {
        "id": 1,
        "callback_url": "https://nightstrive.serveo.net/",
        "created_at": "2015-04-29T18:11:09.400558047-07:00",
        "updated_at": "2015-04-29T18:11:09.400558047-07:00"
      }
   res.send(Status || 200);
})
//ssh -R nightstrive:80:localhost:8080 serveo.net 

app.get('/', function (req, res) {
   console.log(req.query)
    var responds = {
        "hub.challenge": req.query["hub.challenge"],
           }
           console.log(req.query)
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(responds));
   })


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Webhook-Reciever app listening at http://%s:%s", host, port)
})

// $ GET https://mycallbackurl.com?hub.verify_token=STRAVA&hub.challenge=15f7d1a91c1f40f8a748fd134752feb3&hub.mode=subscribe
//app.get('/something', (req, res) => {
//    req.query.color1 === 'red'  // true
//    req.query.color2 === 'blue' // true
//})