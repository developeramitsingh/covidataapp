import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './home.css'
import {connect} from 'react-redux';
import Covidtable from './covidtable/Covidtable';
import {Redirect} from 'react-router-dom'

const Home =(props)=>{
	const [coviddata, setCovidData] = useState('');


	useEffect(()=>{
		const config ={
			headers:{
				'Content-type':"application/json",
				'Access-Control-Allow-Origin':true
			}
		}

		axios.get("https://api.covid19api.com/summary", config)
				.then(res=>{
					
					setCovidData(()=>res.data)

				})
	},[])
	return (
		<div className="container">
			{props.authState.isAuthenticated?<Redirect to='/Dashboard'/>:''}
			<div className="row">
				<div className="col-sm-12">	
					<h3 className="center">COVID Cases Globally</h3>
					<div className="CasesCont">
						<div className="card cardCustom z-depth-2">
							<h5 className="card-title">Active Cases</h5> 
							<span className="card-data"> {coviddata!=''?coviddata.Global.TotalConfirmed-(coviddata.Global.TotalDeaths+coviddata.Global.TotalRecovered):""}</span>
						</div>
						<div className="card cardCustom z-depth-2">
							<h5 className="card-title">Total Cases</h5> 
							<span className="card-data"> {coviddata!=''?coviddata.Global.TotalConfirmed:""}</span>
						</div>
						<div className="card cardCustom z-depth-2">
							<h5 className="card-title">Total Deaths</h5> 
							<span className="card-data"> {coviddata!=''?coviddata.Global.TotalDeaths:""}</span>
						</div>
					</div>

				</div>
			</div>

			<div className="row">
				<div className="col-sm-12 tableCont">	
					{coviddata?<Covidtable countries={coviddata.Countries}/>:""}
				</div>
			</div>
			
		</div>
	)
}

const mapStateToProps = (state)=>{
	return{		
		authState: state.AuthReducer
	}
}

export default connect(mapStateToProps)(Home);