import {combineReducers} from 'redux';
import AddLoggedInReducer from './addLoggedInReducer';
import AuthReducer from './authReducer';
import ErrorAuthReducer from './errorAuthReducer';


export default combineReducers({	
	AddLoggedInReducer:AddLoggedInReducer,
	AuthReducer:AuthReducer,
	ErrorAuthReducer:ErrorAuthReducer
	
})