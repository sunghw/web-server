module.exports={
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
};