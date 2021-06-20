// require('dns').lookup(require('os').hostname(), function (err, add, fam) {
//     console.log('addr: ' + add);
//   })


// Logic 1
  var process = require('child_process');
 var TEST = "H";
 TEST = process.exec('ifconfig -l | xargs -n1 ipconfig getifaddr | grep --line-buffered 0',function (err,stdout,stderr) {
    if (stdout){
        console.log('Logic 1: My Device IP:', stdout);
      }
      if (stderr) {
        console.log('Logic 1: Can not find IP of this Device:', stderr);
      }
    })
// Logic 2
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ifconfig -l | xargs -n1 ipconfig getifaddr | grep --line-buffered 0');
  if (stdout){
  console.log('Logic 2: My Device IP:', stdout);
}
if (stderr) {
  console.log('Logic 2: Can not find IP of this Device:', stderr);
}
}
var pp = lsExample();


// Output from Paresh Machine...
// Logic 2: My Device IP: 172.16.80.170

// Logic 1: My Device IP:  172.16.80.170
