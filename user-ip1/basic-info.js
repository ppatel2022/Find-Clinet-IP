var address = require('address');

console.log(`IP4 address: `, address.ip());

console.log(`IP6 Address: `, address.ipv6());

address.mac(function(err,address) {

    console.log(`MAC Address: `, address);

})

console.log(`localhost:`, address.ip('lo'));
address.dns(function (err, addrs) {
    console.log(addrs);
    // ['10.13.2.1', '10.13.2.6']
  });