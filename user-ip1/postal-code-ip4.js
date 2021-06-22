var unirest = require("unirest");

var req = unirest("GET", "https://jkosgei-free-ip-geolocation-v1.p.rapidapi.com/");

req.query({
	"api-key": "test"
});

req.headers({
	"x-rapidapi-key": "a4bd1fba46msh29072e10b775090p1d7bb2jsna9af9b2fa79f",
	"x-rapidapi-host": "jkosgei-free-ip-geolocation-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});