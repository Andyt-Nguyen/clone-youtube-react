import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainVideo from './MainVideo';
import TitleLikes from './TitleLikes';
import Recommended from './Recommended';
import ChannelDetails from './ChannelDetails';
import CommentList from './CommentList';
import "./VideoCss.css";

class VideoPage extends Component {
	constructor() {
		super();
		this.videoId = this.videoId.bind(this);
	}

	videoId() {
		let vidId = this.props.vidId[this.props.vidId.length - 1].id;
		return vidId;
	}

	render() {
		return (
			<div>
				<MainVideo videoId={this.videoId}/>
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

function mapStateToProps(state, ownProps) {
	return {
		vidId: state.ytId
	};
}
export default connect(mapStateToProps)(VideoPage);
