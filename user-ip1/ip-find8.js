let extIP = require("ext-ip")();
extIP.get().then(ip => {
    console.log('daxy :: ',ip);
})
.catch(err => {
    console.error(err);
});