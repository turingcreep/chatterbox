var	PalList = React.createClass({
	render:function(){
		var	pals=this.props.pals,
			markup=[];
		for(var	i=0;i<pals.length;i++){
			var	pal = pals[i];
			markup.push(	<li>
						<div class="pal">
							<div class="status status-{pal.status}">&nbsp;</div>
							<div class="pal-name">{pal.name}</div>
						</div>				
					</li>);
		}
		return <div class="component">
				<ul class="pal-list">
					{markup}
				</ul>
			</div>
	}
});
