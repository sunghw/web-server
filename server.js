var express = require('express');

var app = express();
var PORT = 3000;
var middleware = {
	requireAuthentication: function (req, res, next){
		//next: telling express to move on to next routing body
		console.log('private route hit!');
		next();
	}, 
	logger: function(req, res, next){
		//request method
		console.log('Request : ' + new Date() + ' ' + req.method + ' ' + req.originalUrl);

		next();
	}
}
app.use(middleware.logger); //application level middleware

// about page
app.get('/about' , middleware.requireAuthentication, function(req, res){ //route level middleware
	res.send('About Us');
});

//expose a folder in your project as a web server?
app.use(express.static(__dirname + '/public'));
	//default redirects '/' to abovedir/index.html
console.log(__dirname);

app.listen(PORT, function(){//callback fn once the server starts.
	console.log('express server started on port:' + PORT);
}); //which port to listen to