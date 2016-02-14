var	App = React.createClass({
	getInitialState:function(){
		return {
			appState:"login",
			user:null
		}
	},
	render:function(){
		if(this.state.appState="login"){
			return <Login/>;
		}
		else if(this.state.appState="pallist"){
			return <PalList user={this.state.user.name}/>
		}
		else if(this.state.appState="couch"){
			return <Couch user={this.state.user.name}/>
		}
	}
});
