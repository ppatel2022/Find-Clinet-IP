const GeoIP = require("simple-geoip");
let IPaddr = "8.8.8.8";
let geoIP = new GeoIP("at_LGNM3QfAATfYzso0nbAtmbBMDPrdA");
geoIP.lookup(IPaddr, (err, data) => {
  if (err) throw err;
  
  let PS = data.location.postalCode;
  let long = data.location.lng;
  let lat = data.location.lat;
  if (PS) {
    console.log("\n\nPostal code = ",PS," || IP-Address : ",IPaddr," \n\n");
    console.log("Latitue + Longitude = ",lat,"  ",long);
  }
  else {
    console.log("IP Address: ",IPaddr," is form Private Network...");
  
  
  }
});

//-------------------- COST Solution ===============================
// API Key
//https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_LGNM3QfAATfYzso0nbAtmbBMDPrdA&ipAddress=8.8.8.8