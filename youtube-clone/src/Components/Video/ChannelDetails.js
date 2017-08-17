import React, { Component } from 'react';

class ChannelDetails extends Component {
	render() {
		return (
			<div style={{display:"flex"}}>
				<div>
					<img src="https://placehold.it/75"/>
				</div>
				<div style={{marginLeft:"2%"}}>
					<h1>Bruno Mars</h1>
					<p style={{fontSize: '12px', color:"#707070"}}>Published at Data</p>
					<h1 style={{marginTop:"25px"}}>Description</h1>
					<h1 style={{fontSize: '15px', color:"#707070"}}>SHOW MORE</h1>
				</div>
			</div>
		);
	}
}

export default ChannelDetails;
