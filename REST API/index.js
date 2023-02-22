const http = require('http')
const app = require('./app')
const server = http.createServer(app)


server.listen(process.env.port || 3000,console.log('App listening'))
