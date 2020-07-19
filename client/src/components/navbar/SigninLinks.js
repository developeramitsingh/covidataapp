import React, {Component} from  'react'
import {NavLink} from 'react-router-dom'
import './nav.css'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/authActions';


const Signinlinks  = (props)=>{	
		return(				
				<React.Fragment >
					
					<li><span className="userHeading">Welcome {props.user.name}</span></li>	
					<li><span className="logoutBtn" onClick={props.logoutUser}>Logout</span></li>
				</React.Fragment>

			)
	}	


const mapStateToProps = (state)=>{
	return {
		user:state.AuthReducer.user
	}
}
export default connect(mapStateToProps, {logoutUser})(Signinlinks);