var Login = React.createClass({
	render:function(){
		return <div class="component">
				<form class="pure-form pure-form-stacked">
					<fieldset>
						<label for="uid">Username</label>
						<input type="email" id="uid"/>
						<label for="pwd">Password</label>
						<input type="password" id="pwd"/>
					</fieldset>
					<input type="button">Forgot Password</a>
					<button type="submit" class="pure-button">Sign in</button>
				</form>
			</div>
	}
});