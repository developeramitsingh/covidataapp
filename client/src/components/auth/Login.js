import React, {useState, useEffect} from 'react';
import '../../bootstrap.min.css';
import './login.css';
import { Button, Form, Row, Col, FormGroup, Label, Input, Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions'
import {Redirect} from 'react-router-dom'
import {returnErrors, clearErrors} from '../../actions/errorActions';
import Loading from '../loading/loading';



const Login = (props)=>{

	const [user, updateUser] = useState({email:'', password:''});	

	const handleChange = (e)=>{
		const {name, value} = e.target;		
		updateUser({...user, [name]:value})
	}

	const handleSubmit = (e)=>{
		e.preventDefault();		
		const newUser = {				
			email:user.email,				
			password:user.password
		}		
		props.loginUser(newUser);

	}

	useEffect(()=>{
		props.clearErrors()
	},[])

	return(
			<div>{props.authState.isAuthenticated?<Redirect to='/Dashboard'/>:''}
				
				<div className="container">	
					<div className="row">
						<div className="col-md-12">
							<div className="loginDiv">
												
							<div className="smallHead pb-4">Login Now</div>
							<Form onSubmit={handleSubmit} className="mt-2">
								{props.errorState.msg?<Alert color="danger">{props.errorState.msg.msg}</Alert>:""}
								{props.authState.isAuthenticated?<Alert color="success">Login Success</Alert>:""}

								<Input type="email" className="FormInput" onChange={handleChange} name ="email" placeholder="Email" autoComplete="email" required/>
								
								<Input type="password" className="FormInput" name="password" onChange={handleChange} placeholder="Password" autoComplete="new-password" required/>

								<Row form className="mt-5">
									<Col md={12}>
										<input type="submit" className="FormBtn" value="Login" name="Login" onSubmit={handleSubmit}/>											
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

export default connect(mapStateToProps, {loginUser, returnErrors, clearErrors})(Login);