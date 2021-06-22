const iplocate = require("node-iplocate");
 
iplocate("172.16.80.170").then(function(results) {
//   console.log("IP Address: " + results.ip);
//   console.log("Country: " + results.country + " (" + results.country_code + ")");
//   console.log("Continent: " + results.continent);
//   console.log("Organisation: " + results.org + " (" + results.asn + ")");
 
  //console.log(JSON.stringify(results, null, 2));
});
 
// Or with callbacks
iplocate("8.8.8.8", null, function(err, results) {

  console.log("===============================");
  console.log(JSON.stringify(results, null, 2));
  
});
 
// Provide an API key from IPLocate.io
iplocate("8.8.8.8", { api_key: "94d4f5e31a70f9" }).then(function(results) {
  // ...
  console.log("IP ADDRESS : ",results.postal_code);
});

//-------------------- COST Solution ===============================