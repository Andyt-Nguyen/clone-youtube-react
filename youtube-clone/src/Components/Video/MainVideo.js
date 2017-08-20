import React, { Component } from 'react';

const MainVideo = (props) => {
	return (
		<div className="videoPlay">
			<iframe allowFullScreen style={{width:"95%", height:"500px"}} src={`http://www.youtube.com/embed/${props.videoId}?rel=0&autoplay=1`}></iframe>
		</div>
	);
}

export default MainVideo;
