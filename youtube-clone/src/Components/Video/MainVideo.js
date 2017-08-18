import React, { Component } from 'react';

class MainVideo extends Component {
	render() {
		console.log(this.props.videoId);
		return (
			<div className="videoPlay">
			<iframe allowFullScreen style={{width:"100%", height:"600px"}} src={`http://www.youtube.com/embed/${this.props.videoId()}`}></iframe>
			</div>
		);
	}
}

export default MainVideo;
