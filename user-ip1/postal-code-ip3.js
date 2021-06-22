var geoip = require('geoip-lite');
 
// 1st IP ADDRESS ==============================================
var ip1 = "207.97.227.239";
var ip2 = "8.8.8.8";
var geo1 = geoip.lookup(ip1);
var geo2 = geoip.lookup(ip2);


//console.log(geo);
console.log("Longiture-Latitude 1: ",geo1.ll);
console.log("Longiture-Latitude 2: ",geo2.ll);

// Find Distance between to GeoPoints.

    var GeoPoint = require('geopoint');
    
    let Point1 = new GeoPoint(geo1.ll[0],geo1.ll[1]);
    let Point2 = new GeoPoint(geo2.ll[0],geo2.ll[1]);
    console.log(Point1);
    console.log(Point2);


    let Distance = Point1.distanceTo(Point2);

    console.log('Distance between ',ip1, ' & ',ip2,' IS ', Distance,' Miles...');
