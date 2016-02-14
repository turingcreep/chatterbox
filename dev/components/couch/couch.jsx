var	Couch = React.createClass({
	render:function(){
		return <div class="component">
				<div class="couch">
					<div class="couch-banner">
						<div class="pic person-pic pic-banner person-pic-{}"></div>
						<div class="couch-banner-name">{}</div>	
					</div>
					<div class="couch-conversation">
						<div class="speak speak-{}">
							<i class="person-pic person-pic-{}"></i>
							<span class="speak-content">{}</span>
						</div>
					</div>
				</div>
			</div>
	}
});
