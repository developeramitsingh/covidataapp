import { GET_ERRORS, CLEAR_ERRORS } from '../actionTypes/actionTypes';

const initState ={
	msg:false,
	status : false,
	id:false
}

const ErrorAuthReducer = (state = initState, action) =>{
	switch(action.type){
		case GET_ERRORS:
			return {
				...state,
				msg:action.payload.msg,
				status:action.payload.status,
				id:action.payload.id
			};

		case CLEAR_ERRORS:
			return {
				msg:false,
				status:false,
				id:false
			};

		default:
			return state;	
	}
}

export default ErrorAuthReducer;