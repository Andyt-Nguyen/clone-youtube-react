import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainVideo from './MainVideo';
import TitleLikes from './TitleLikes';
import Recommended from './Recommended';
import ChannelDetails from './ChannelDetails';
import CommentList from './CommentList';
import { convertViews, convertDate, addCommas} from '../../resusableFxns';
import "./VideoCss.css";

class VideoPage extends Component {
	constructor() {
		super();
	}


	render() {
		console.log(this.props);

		//VidIdProps
		let { vidId, channelId } = this.props;
		let vId = vidId[vidId.length - 1].id;
		let videoTitle = vidId[vidId.length -1].title;
		let channelTitle = vidId[vidId.length - 1].channelTitle;
		let views = addCommas(vidId[vidId.length - 1].views);
		let date = convertDate(vidId[vidId.length - 1].date);
		let description = vidId[vidId.length - 1].description;

		//ChannelIdProps
		let channelThumbnail = this.props.channelId[channelId.length - 1].snippet.thumbnails.high.url;
		let subCount = convertViews(channelId[channelId.length - 1].statistics.subscriberCount);
		return (
			<div>
				<MainVideo videoId={vId} />

				<div style={{display:"flex", marginTop:"3%", marginLeft:"2%"}}>
					<div style={{width:"70%"}}>
						<TitleLikes
							videoTitle={videoTitle}
							views={views} />

						<ChannelDetails
							channelTitle={channelTitle}
							channelThumbnail={channelThumbnail}
							subCount={subCount}
							date={date}
							description={description} />

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
		vidId: state.ytId,
		channelId: state.userInfo
	};
}

export default connect(mapStateToProps)(VideoPage);
