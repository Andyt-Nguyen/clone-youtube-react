import React, { Component } from 'react';
import MainVideo from './MainVideo';
import TitleLikes from './TitleLikes';
import Recommended from './Recommended';
import ChannelDetails from './ChannelDetails';
import CommentList from './CommentList';
import "./VideoCss.css";
class VideoPage extends Component {
	render() {
		return (
			<div>
				<MainVideo />
				<div style={{display:"flex", marginTop:"3%", marginLeft:"2%"}}>
					<div style={{width:"70%"}}>
						<TitleLikes />
							<hr />
							<ChannelDetails />
							<hr />
						<CommentList />
					</div>
					<Recommended />
				</div>
			</div>
		)
	}
}
export default VideoPage;
