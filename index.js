let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
console.log(io);
let playerCount = 0;
app.all('/', (req, res)=>{
	res.sendFile(__dirname + "/index.html");
});

app.get('/control.html', (req, res)=>{
	playerCount++;
	res.sendFile(__dirname + "/control.html");
});

app.get(/[0-9]+/, (req, res)=>{
	res.redirect('/control.html?key='+req.url.substring(1));

});

io.on('connection', (socket)=>{
	console.log('User connected');
	socket.on('disconnect', (socket)=>{
		console.log('User disconnected');
	});
	socket.on('keyin', (n)=>{
		io.emit('keyin', n);
	});
	socket.on('keyout', (n)=>{
		io.emit('keyout', n);
	});
	socket.on('move', (n)=>{
		io.emit('move', n);	
	});
	socket.on('newplayer', (n)=>{
		io.emit('newplayer', n);	
	});
	socket.on('chargestart', (n)=>{
		io.emit('chargestart', n);	
	});
	socket.on('chargestop', (n)=>{
		io.emit('chargestop', n);	
	});
	socket.on('rr', (n)=>{
		io.emit('rr', n);	
	});
});

http.listen((process.env.PORT || 8080), ()=>{
	console.log("Main page working");
});
