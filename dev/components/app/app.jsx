var	App = React.createClass({
	getInitialState:function(){
		return {
			appState:"login",
			user:{
				id:"Shanks",
				pwd:"Nes"
			}
		}
	},
	render:function(){
		if(this.state.appState="login"){
			return (
					<div>
						<Login uid={this.state.user.id} pwd={this.state.user.pwd}/>
						<div>{this.state.user.id}</div>
					</div>
				);
		}
		else if(this.state.appState="couch"){
			return <Couch user={this.state.user.name}/>
		}
		else if(this.state.appState="pallist"){
			return <PalList user={this.state.user.name}/>
		}
}
});
