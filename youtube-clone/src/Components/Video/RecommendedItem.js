import React, { Component } from 'react';

class RecommendedItems extends Component {
	render() {
		return (
			<div style={{display:"flex", marginTop:'10px'}}>
				<img className="recThumbnail" src={this.props.snippet.thumbnails.high.url} />
				<div style={{marginLeft:'10px'}}>
					<p className="recTitle">{this.props.snippet.title}</p>
					<p style={{fontSize:"12px", color:"grey", marginTop:'5px'}}>{this.props.snippet.channelTitle}</p>
					<p style={{fontSize:"12px", color:"grey", marginTop:'5px'}}>{this.props.statistics.viewCount} views</p>
				</div>
			</div>
		)
	}
}

export default RecommendedItems;
