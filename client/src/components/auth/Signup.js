import React, {useState, useEffect} from 'react';
import {Form, Row,Col, Input, Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {signupUser} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';
import './signup.css';
import Loading from '../loading/loading';

import {returnErrors, clearErrors} from '../../actions/errorActions';

import { USER_LOADING, USER_LOADED, LOGIN_SUCCESS, SIGNUP_SUCCESS, AUTH_ERROR, LOGIN_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL, GET_LOGGED_IN_USER} from '../../actionTypes/actionTypes';

const Signup = (props)=>{
	const [user, updateUser] = useState({name:'', email:'', password:'', repassword:''});
	const [formErrors, updateErrors] = useState({name:'', email:'', password:'', repassword:''});
	
	
	const handleChange = (e)=>{
		const {name, value} = e.target;
		
		updateUser({...user, [name]:value})
  		

		let fErrors = formErrors;
		switch(name){
			case "name":
				fErrors.name = value.length < 3  && value.length > 0? "Minimum 3 characters required":'';	
				break;

			case "email":
				fErrors.email = value.length < 5  && value.length > 0? "Email is not valid":'';
				break;
						
			default:
				break;			
		}		

	}

	useEffect(()=>{
			props.clearErrors()
			let password = user.password.length > 0 ? validatePassword() : '';
			let repassword = user.repassword.length > 0? validatePassword():'';	
			updateErrors({...formErrors, password:password, repassword:repassword})
			
	},[user.name, user.email, user.password, user.repassword])


	const validatePassword = ()=>{		
		if(user.password.length < 7){
			return 'Password must be 8 characters long'
		}
		if((user.password!=="" && user.repassword!=="")){
			if(user.password === user.repassword){								
				console.log("Password Matched..")
				return '';		
				
			}else{
				return 'Password did not match';
			}			
		}else{			
				return '';
		}		
	}

	const formValid = (errors)=>{
		let isValid = true;
		Object.values(errors).forEach(val =>{
			val.length > 0 && (isValid = false);
		})
		
		return isValid;
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		if(formValid(formErrors)){			
			const newUser = {
				name:user.name,
				email:user.email,				
				password:user.password
			}
			props.signupUser(newUser);
		}
		else{
			console.error("form invalid")
			console.log(formErrors)
		}
	}


	return(
			<div>
				{props.authState.isAuthenticated?<Redirect to='/dashboard'/>:''	}			
				<div className="container">	
					<div className="row">
						<div className="col-md-12">
							<div className="SignupDiv">									
								<div className="smallHead">Sign Up</div>									
								
								<Form onSubmit={handleSubmit}>
									{props.errorState.msg?<Alert color="danger">{props.errorState.msg.msg}</Alert>:""}
									{props.authState.isAuthenticated?<Alert color="success">Signup Success</Alert>:""}
									
									<Input type="text" className="FormInput" onChange={handleChange} name ="name" placeholder="Full name" autoComplete="name" required/>
									{formErrors.name?<span className="error">{formErrors.name}</span>:''}

									<Input type="email" className="FormInput" onChange={handleChange} name ="email" placeholder="Email" autoComplete="email" required/>

									{formErrors.email?<span className="error">{formErrors.email}</span>:''}
									
									
									<Input type="password" className="FormInput" name="password" onChange={handleChange} placeholder="Password" autoComplete="password" required/>

									{formErrors.password.length>0?<span className="error">{formErrors.password}</span>:''}
									
									<Input type="password" className="FormInput" name="repassword" onChange={handleChange} placeholder="Retype Password" autoComplete="password" required/>

									{formErrors.repassword.length>0?<span className="error">{formErrors.repassword}</span>:''}
									
									<Row form className="mt-4">
										<Col md={12}>
											<input type="submit" value="Signup" className="FormBtn" name="Signup" onSubmit={handleSubmit}/>											
										</Col>
									</Row>							
								</Form>
								{props.authState.isLoading?<Loading/>:""}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

const mapStateToProps = (state)=>{
	return{
		authState: state.AuthReducer,
		errorState:state.ErrorAuthReducer
	}	
}

export default connect(mapStateToProps, {signupUser, returnErrors, clearErrors})(Signup);