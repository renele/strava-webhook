const http = require('http');
const shell = require('shelljs');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            console.log(body);
            var data = body ;

            fs.writeFile('body-of-responds.txt', data, function(err, data){
                if (err) console.log(err);
                console.log("Successfully Written to Body to body-of-responds.txt.");
            });
            //execute any shell or python script when the webhook is recived
            shell.exec('/var/www/newfile.sh')
            res.end('ok');
        });
    }
    else 
    res.end(`
        <!doctype html>
        <html>
        <body>
            Hey just use Post to trigger the Sync!
            </form>
        </body>
        </html>
    `);
});
server.listen(8080);
console.log("ok listen on 3000")