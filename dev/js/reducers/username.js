function changeUsername(state,action){
	if(action.type=="change_user.id"){
		let	user = state.user,
			newUser = Object.assign(user,{id:action.user.id}),
			newState = Object.assign(state,{user:newUser});
		return newState;
	}
}
reducerContainer.add(changeUsername);
