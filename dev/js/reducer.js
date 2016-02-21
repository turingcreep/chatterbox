import {ReducerContainer} from '../reducercontainer';
const reducerContainer = ReducerContainer.getInstance();
function changePassword(state,action){
	if(action.type=="change_user.pwd"){
		let	user = state.user,
			newUser = Object.assign(user,{pwd:action.usr.pwd}),
			newState = Object.assign(state,{user:newUser});
		
		return newState;
	}
}
reducerContainer.add(changePassword);

function changeUsername(state,action){
	if(action.type=="change_user.id"){
		let	user = state.user,
			newUser = Object.assign(user,{id:action.user.id}),
			newState = Object.assign(state,{user:newUser});
		return newState;
	}
}
reducerContainer.add(changeUsername);
export default reducerContainer.getReducer();
