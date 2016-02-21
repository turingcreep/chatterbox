var Login = React.createClass({
	render:function(){
		return <div class="component">
				<form class="pure-form pure-form-stacked">
					<fieldset>
						<label for="uid">Username</label>
						<input type="email" id="uid" value={this.props.uid}/>
						<label for="pwd">Password</label>
						<input type="password" id="pwd" value={this.props.pwd}/>
					</fieldset>
					<input type="button" value="Forgot Password?"/>
					<button type="submit" class="pure-button">Sign in</button>
				</form>
			</div>
	}
});
