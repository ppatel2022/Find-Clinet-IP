const os = require("os");
var ifaces = require('os').networkInterfaces();
var address = Object.keys(ifaces).reduce(function (result, dev) {
  return result.concat(ifaces[dev].reduce(function (result, details) {
    return result.concat(details.family === 'IPv4' && !details.internal ? ","+[details.address] : []);
    
  }, []));
});
var s = address.split(",");
 for (const i of s) {
    
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(i)) {
        console.log('IP ADDRESS :', i);
       // Value of "i" will have your IP address, whatever OS or Device you are using.
    } 
}
// IP ADDRESS : 172.16.80.170
// IP ADDRESS : 172.18.2.49
