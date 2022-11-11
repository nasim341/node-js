var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {
    if (req.url == "/") {
        var data = fs.readFileSync('home.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    } else if (req.url == "/Contact") {
        var data = fs.readFileSync('contact.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    } else if (req.url == "/About") {
        var data = fs.readFileSync('about.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    } else if (req.url == "/Service") {
        var data = fs.readFileSync('service.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }

    /**********File write Asynchronus**********

    fs.writeFile('demo.txt', 'hello', function(error) {
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File run error");
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write("File run success")
            res.end();
        }
    })
    */
    /**********File Rename Synchronus**********

    var error = fs.renameSync('demo.txt', 'new.txt');
    if (error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('File rename error');
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('File rename success');
        res.end();
    }
    */
    /**********File delete Synchronus*********

    fs.unlink('new.txt', function(error) {
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('File delete error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('File rename success');
            res.end();
        }
    })
    */
    /**********File exists Synchronus*********
    var result = fs.existsSync('main.js');
    if (result) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('True');
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('False');
        res.end();
    }*/

})
server.listen(1010);
console.log('Run Success')