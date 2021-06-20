const os = require('os');



// LOGIC 1 =========================================================

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('Logic 1: Your IP is: ' + add);
  })
//==================================================================

// LOGIC 2 =========================================================
var ifaces = require('os').networkInterfaces();


var adresses = Object.keys(ifaces).reduce(function (result, dev) {
  return result.concat(ifaces[dev].reduce(function (result, details) {
    return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
    
  }, []));
});

// Print the result
console.log(' Logic 2: Your IP is: ',adresses)

//==================================================================

