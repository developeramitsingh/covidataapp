const {checkUser} = require('./usersSQLquery');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
	currentUser:(req, res)=>{
		const body= req.user;
			checkUser(body, (err, results)=>{
				if(err){res.status(400).json({msg:err})}
				else{
					console.log("results", results)
					if(results.length>0){
						return res.status(200).json(
							{
								name:results[0].name,
								email:results[0].email,							
								
							})
					}
					else{
						return res.status(200).json({"msg":"User is not Registered"})
					}
				}

			})	
		
		
	}
}