function changePassword(state,action){
	if(action.type=="change_user.pwd"){
		let	user = state.user,
			newUser = Object.assign(user,{pwd:action.usr.pwd}),
			newState = Object.assign(state,{user:newUser});
		
		return newState;
	}
}
reducerContainer.add(changePassword);
