const geoIP = require('geoip-lite');
const cors = require('cors');
const express = require('express')
const app = express()
const port = process.env.PORT||3000

const getIP = (req) => (
    (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress ||
    req.headers['x-appengine-user-ip'] ||
    req.headers['fastly-client-ip']
)
var corsOptions = {
    origin: '*', //everyone is allowed, You can write your domain here so only you can get the response from this server.
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET"
}

app.use(cors(corsOptions))
app.get('/', (req, res) => res.send(getIP(req)))

app.get('/IPwithData', (req, res) => {
  
    let IP = getIP(req);
    let geo = geoip.lookup(IP);
    let notFound = IP == "::1" || IP == null || IP == undefined

    res.json({ ip: IP, ...geo, ...notFound ? { error: "An error occurred, IP address not found" } : {} })
})

app.listen(port, () => console.log(`go to ==>>> http://localhost:${port}/`))