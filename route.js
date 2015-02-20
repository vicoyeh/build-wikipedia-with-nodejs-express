// this is how you export the module in the current js file
module.exports = function(app) {

	// app.get(path, callback [, callback ...])
	// Routes HTTP GET requests to the specified path with the specified callback functions
	app.get('/',function(req,res) {
		res.render('index');
	});

	app.get('/account',function(req,res) {
		res.render('account');
	});

	app.get('/page',function(req,res) {
		res.render('template');
	});

}