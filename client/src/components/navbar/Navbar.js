import React, {Component} from  'react'
import {connect} from 'react-redux'
import '../../materialize.min.css'
import './nav.css'
import SigninLinks from './SigninLinks'
import SignoutLinks from './SignoutLinks'


class Navbar extends Component{
	render(){
		return(
				<nav className="navCustom">
					<div className="container">
						<div className="nav-wrapper">					      
					      <ul>
					      	{this.props.user === false?<SignoutLinks/>:<SigninLinks/>} 	
						  </ul>
					    </div>
				    </div>
				</nav>

			)
	}
}

const mapStateToProps = (state)=>{
	return {
		user: state.AuthReducer.user
	}
}

export default connect(mapStateToProps)(Navbar);