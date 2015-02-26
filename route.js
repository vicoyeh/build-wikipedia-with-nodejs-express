// load up the page model
var Page = require('./models/page');

// this is how you export the module in the current js file
module.exports = function(app) {

	// app.get(path, callback [, callback ...])
	// Routes HTTP GET requests to the specified path with the specified callback functions
	app.get('/',function(req,res) {
		res.render('index');
	});

	app.get('/new',function(req,res) {
		res.render('new');
	});

	app.get('/page/:name',function(req,res) {
		Page.findOne({'content.name':req.params.name},function(err,page){
			res.render('template',{
				page:page
			});
		})
	});

	app.post('/create',function(req,res) {

		Page.findOne({'content.name':req.body.name},function(err,page) {


			// if there is an error, stop everything and return that
            // ie an error connecting to the database
			if (err)
				throw err;

			// if the page is found
			if (page) {
				var url='/page/'+page.content.name;
				res.redirect(url); 
			}
			else {
				var newPage = new Page();
				newPage.content.name=req.body.name;
				newPage.content.major=req.body.major;
				newPage.content.school=req.body.school;
				
				var interests=req.body.interests.split(',');
				for (i=0;i<interests.length;i++) {
					newPage.content.interests.push(interests[i]);
				}
					
				newPage.content.summary=req.body.summary;
				newPage.content.life=req.body.life;
				newPage.content.accomplishments=req.body.accomplishments;
				newPage.content.references=req.body.references;

				newPage.save(function(err) {
					if (err)
						throw err;

					url='/page/'+req.body.name;
					console.log(url);
					res.redirect(url);
				});
			}
		});
	});

}