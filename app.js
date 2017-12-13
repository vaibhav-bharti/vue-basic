const http = require('http');
// const request = require('http').request();
const port = 3000;
const host = 'localhost';

/*const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/html');
	res.end(method + url + headers +  'Hello World\n');
});
 request.on('end',()=>{
 	body = "hey";
 }).on('error',(err)=>{
 	console.log(err);
 });*/
const fs = require('fs');
// const data = fs.readFileSync('sample.txt');
fs.readFile('sample1.txt',(err, data) => {
	console.log(data);
	console.log(err);
});
console.log("outer data");
 const server = http.createServer((req, res)=>{
 	const { headers, url, method } = req;
 	if(method == 'POST'){
 		res.statusCode = 404;
 		res.end();
 	}else{
	let body = [];
 	req.on('error', (err) => {
 		console.log(err);
 		res.statusCode = 400;
 		res.end();
 	}).on('data', (chunk)=> {
 		body.push(chunk);
 	}).on('end', () => {
 		body = Buffer.concat(body).toString();
 		res.on('error',(err)=>{
 			console.log(err);
 		});
 	});
 	res.statusCode = 200; 	
 	res.setHeader('Content-type', 'application/json'); 
 	const resBody = {headers, method, url, body};
 	res.write(JSON.stringify(resBody));
 	res.end();
 	}
 });

server.listen(port, host, ()=>{
	console.log("listen on port 3000");
})