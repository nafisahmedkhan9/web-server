var middleware = 
	{
		requireAuthentication : function(req, res, next){
			console.log('private rout hit !!');
			next();
		},
		logger: function(req, res, next){
			
			console.log('Request :'+ new Date().toString()+' '+req.method+' \n'+req.originalUrl);
			next();
		}
	}
module.exports = middleware ;