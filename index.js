// Automizy NodeJS API Wrapper
// Tested and Works with HTTP Node which supports JS
// Copyright MC Naveen
// GitHub - https://github.com/mcnaveen

var request = require('request');
//var user_name = event.user.customAttributes.first_name; //Uncomment this Line if you want to use Variables of the Service
//var user_email = event.user.customAttributes.user_email; //Uncomment this Line if you want to use Variables of the Service
var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer APIKEY' //API Key as Bearer KEY
};
//If you user the variable above you can replace the FIRSTNAME with user_name same goes for email
var dataString = '{"email": " EMAIL ADDRESS ", "customFields":{ "firstname":" FIRSTNAME "}, "tags": " NAME OF TAG "}'; //Keep it in single line,
var options = {
    url: 'https://gateway.automizy.com/v2/smart-lists/LISTID/contacts', //Replace List ID
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);