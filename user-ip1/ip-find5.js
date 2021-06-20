const cors = require('cors');
const express = require('express')
const app = express()
const port = process.env.PORT||3000

var corsOptions = {
    origin: '*', //everyone is allowed, You can write your domain here so only you can get the response from this server.
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET"
}
app.use(cors(corsOptions))
app.get('/', (req, res) => {

    let IP = (req.headers['x-forwarded-for'] ||'').split(',').pop().trim() ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress ||
        req.headers['x-appengine-user-ip'] ||
        req.headers['fastly-client-ip'] ;
        res.send(IP)
        console.log(IP);
})
app.listen(3000);