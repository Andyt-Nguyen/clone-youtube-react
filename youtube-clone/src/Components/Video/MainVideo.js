import React, { Component } from 'react';

class MainVideo extends Component {
	render() {
		return (
			<div className="videoPlay">
				<iframe allowFullScreen style={{width:"95%", height:"500px"}} src={`http://www.youtube.com/embed/${this.props.videoId}?rel=0&autoplay=1`}></iframe>
			</div>
		);
	}
}

export default MainVideo;
