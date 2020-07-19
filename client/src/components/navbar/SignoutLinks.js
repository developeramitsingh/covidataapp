import React from  'react'
import {NavLink} from 'react-router-dom'



const SignoutLinks = ()=>{	
	return(
			<div>
				<ul>
					<li><NavLink to='/' className='links' >Home</NavLink></li>					
					<li><NavLink to='/login' className='links' >Login</NavLink></li>
					<li><NavLink to='/signup' className='links'>Signup</NavLink></li>
									
				</ul>			
				
			</div>
		)
		
}

export default SignoutLinks;