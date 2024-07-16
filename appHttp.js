const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Hello this is the home page');
    }
    else if (req.url === '/about'){
        res.end('Hello this is the about page');
    }
    else {
        res.end(`<h1>Ooops</h1>
            <p>The page you are looking for does not exist!</p>
            `);
    }
})
server.listen(5000);