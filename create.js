var request = require("request");

var options = { method: 'POST',
  url: 'https://api.strava.com/api/v3/push_subscriptions',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: 
   { client_id: '31546',
     client_secret: 'e549596ba297fd5655f5ce2c72c6696b23395d5a',
     callback_url: 'http://3c67fb4a.ngrok.io',
     verify_token: 'thomasundrene' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
