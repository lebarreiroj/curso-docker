const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')


// Database
mongoose.provise = global.Promise
mongoose.connect('mongodb://db/mydb')


// Middlewares
server.use(podyParser.urlendoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())


// ODM
const Client = restful.mode('Client', {name: {
    type: String, required: true}
})


// Rest API
Client.method(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

//Routes
Client.register(server, '/clients')


// Start Server
server.listen(3000)
