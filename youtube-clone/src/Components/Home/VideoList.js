import React, { Component } from 'react';
import VideoItems from './VideoItems';
import { browserHistory } from 'react-router';

class VideoList extends Component {

	goNavigation() {
		this.props.navigate(this.props.link)
	}

	render() {
		let trendingItems = this.props.videos.map( (a,i) =>
			<VideoItems key={i} {...a}/>
		)
		return (
			<div style={{display:"flex",width:"100%", background:"white"}}>
				<div style={{padding:"20px"}}>
					<h6 onClick={this.goNavigation.bind(this)} style={{fontWeight:"bold", padding:"10px", cursor:"pointer"}}>{this.props.title}</h6>
					<div style={{display:"flex", flexWrap:'wrap'}}>
						{trendingItems}
					</div>
					<a style={{color:'grey', cursor:"pointer"}} onClick={this.goNavigation.bind(this)}>View More</a>
				</div>
			</div>
		);
	};
}

export default VideoList;
