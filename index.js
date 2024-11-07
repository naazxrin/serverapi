const jsonServer = require('json-server')
const testServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const PORT = 3000||process.env.PORT
testServer.use(middleware)
testServer.use(router)
testServer.listen(PORT,()=>{
    console.log('Server is running');
    
})