// Ready to consume by CIS -------------------

var GeoPoint = require('geopoint');
var geoip = require('geoip-lite');
 
// This function will check IP and returns infor ELSE throws error...

var GetIPInformation = funtion (ip) {
    
    var lookedUpIP = geoip.lookup(ip);
      if ((ip === '127.0.0.1' || ip === '::1')) {   return {error:"This won't work on localhost"} }
      if (!lookedUpIP){ return { error: "Error occured while trying to process the information" }}
      return lookedUpIP;
}
// ============================================================Step 1 Get IP ADDRESS 
var ip1  = "207.97.227.239";
var ip2 = "8.8.8.8";
// =============================================================STEP 2 - Get Geo Location FROM IP
var geo1 = GetIPInformation(ip1);
var geo2 = GetIPInformation(ip2);



console.log("Longiture-Latitude 1: ",geo1.ll);
console.log("Longiture-Latitude 2: ",geo2.ll);



    
// ===============================================================STEP 3 - GeoPoint FROM Geo Location
    let Point1 = new GeoPoint(geo1.ll[0],geo1.ll[1]);
    let Point2 = new GeoPoint(geo2.ll[0],geo2.ll[1]);
    console.log(Point1);
    console.log(Point2);

// // ===========================================================STEP 4 - Distance from 2 GeoPoints.
    let Distance = Point1.distanceTo(Point2);


    console.log('Distance between ',ip1, ' & ',ip2,' IS ', Distance,' Miles...');
// NOTE:------------------------
// "geopoint" represents a geographic point for node.js and the browser, 
// and provides distance between points and radius bounding box calculations.

// 