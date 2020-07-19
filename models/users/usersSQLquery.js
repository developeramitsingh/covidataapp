const pool = require('../../mySqlConfig/mySqlConfig');

module.exports = {
	createUser:(data, callBack)=>{
		pool.query('insert into beal2js9dscbteh7y09x.users(name, email, password) values(?,?,?)', 
			[
				data.name,
				data.email,
				data.password,	 			
				
			],(error, results)=>{
				if(error){
				 	return callBack(error +" --Inside ");
				}
				return callBack(null, results);
			})
	},

	checkUser:(data, callBack)=>{
		
		pool.query('select * from beal2js9dscbteh7y09x.users where email = ?',
			[
				data.email
			],(error, results)=>{
				if(error) return callBack(error);
				return callBack(null, results);
			});
	},
	getTableData:(callBack)=>{
		pool.query('select * from beal2js9dscbteh7y09x.users', [],(error, results)=>{
			if(error) return callBack(error);
			return callBack(null, results);
		})
	}
	
}
