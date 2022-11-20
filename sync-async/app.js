const { readFile } = require("fs");
const http = require("http");

const readfunc = (path) => {
    if (path == '/about') {
        return new Promise((resolve, reject) => {
            readFile("./content.txt", "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
                
                for (let i = 0; i < 1000; i++) {
                    for (let j = 0; j < 1000; j++) {
                        console.log(`${i} ${data} ${j}`);
                    }
                }
            }
        });
    });
    } else {
        return new Promise((resolve, reject) => {
            readFile("./content.txt", "utf-8", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
};
const server = http.createServer((req, res) => {
    console.log("server running");
    if (req.url == '/about'){
        res.end("ABOUT --server running");
    } else {
        res.end("HOME --server running");
    }
    readfunc(req.url)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
    console.log('##########');
});
server.listen(3000);