import React, { Component } from 'react';
import VideoItems from './VideoItems';

class VideoList extends Component {
	render() {
		let trendingItems = this.props.videos.map( (a,i) =>
			<VideoItems key={i} {...a}/>
		)
		return (
			<div style={{display:"flex",width:"100%", background:"white"}}>
				<div style={{padding:"20px"}}>
					<h6 style={{fontWeight:"bold", padding:"10px"}}>{this.props.title}</h6>
					<div style={{display:"flex", flexWrap:'wrap'}}>
						{trendingItems}
					</div>
				</div>
			</div>
		);
	};
}

export default VideoList;
