const port =4000
const server = require('./api/server')
server.listen(port,()=>{console.log(`server is listening on ${port} `)})
