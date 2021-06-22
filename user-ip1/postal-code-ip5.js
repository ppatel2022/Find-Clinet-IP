var util = require('util');
var exec = require('child_process').exec;

var command = 'curl https://api.ipgeolocation.io/ipgeo?apiKey=90aa0f5772fe4b368cd654b71a2bb197&ip=8.8.8.8'


let child = exec(command, function(error, stdout, stderr){

    let Long = stdout.longitude;
    let Lat = stdout.latitude;
    
console.log('Latitude: ' + Long);
console.log('Latitude: ' + command.longitude);
console.log(stdout);

});