const { write } = require('fs')
const  http = require('http')

const handleAllRequest = (req, res)=> {
    console.log(' i have just recieve a request')
    const url = req.url
    if (url === '/') {
        res.write('<h1>Welcome to the Home page</h1>')
    }
    else if (url === '/login') {
        res.write('<h2>Welcome to login page</h2>')
    }
    else if (url === '/signup') {
        res.write('<h2>Welcome to signup page</h2>')
    }
    else{
        res.write('<h1>Page not found</h1>')
    }
    res.end()
}

const server = http.createServer(handleAllRequest)




server.listen(3000, '127.0.0.1', ()=> console.log ('server is ready to accept request'))