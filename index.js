const { createServer, startServer } = require('fastify-micro')

const server = createServer()
startServer(server, parseInt(process.env.PORT || 3000))
