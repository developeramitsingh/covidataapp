import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


const Dashboard =(props)=>{
	return (
		<div className="container">
			{!props.authState.isAuthenticated?<Redirect to='/'/>:''}
			<h1>Hello User</h1>
			
		</div>
	)
}

const mapStateToProps = (state)=>{
	return{		
		authState: state.AuthReducer
	}
}

export default connect(mapStateToProps)(Dashboard);