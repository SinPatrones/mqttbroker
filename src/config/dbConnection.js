const{ Pool } = require('pg')
if(process.env.STR_DB){
	const poll = new Pool(
		{connectionString: porcess.env.STR_DB}
	);
	module.exports = {
		query: (text,params,callback)=>{
			return pool.query(text,params,callback)
		}
	}
}
else{
	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'covid',
		password: '2012',
		port: 5432
	});
	module.exports = {
		query:(text,params,callback)=>{
			return pool.query(text,params,callback)
		}
	}
}
