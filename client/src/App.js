import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import './materialize.min.css';
import './App.css';
import {loadUser} from './actions/authActions'

class App extends Component {

  componentDidMount(){
    this.props.loadUser();    
  } 

  render(){   
    return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>              
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/dashboard' component={Dashboard}/>                
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>                                
              </Switch>
              
          </div>
        </BrowserRouter>
      );  
  }   
}


export default connect(null,{loadUser})(App);