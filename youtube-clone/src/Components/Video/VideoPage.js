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
		let { videoInfo, channelInfo } = this.props;
		let vId = videoInfo[videoInfo.length - 1].id;
		let videoTitle = videoInfo[videoInfo.length -1].title;
		let channelTitle = videoInfo[videoInfo.length - 1].channelTitle;
		let views = addCommas(videoInfo[videoInfo.length - 1].views);
		let date = convertDate(videoInfo[videoInfo.length - 1].date);
		let description = videoInfo[videoInfo.length - 1].description;
		let videoLikes = videoInfo[videoInfo.length - 1].like;
		let videoDislikes = videoInfo[videoInfo.length -1].dislike;

		//ChannelIdProps
		let channelThumbnail = this.props.channelInfo[channelInfo.length - 1].snippet.thumbnails.high.url;
		let subCount = convertViews(channelInfo[channelInfo.length - 1].statistics.subscriberCount);

		return (
			<div>
				<div style={{display:"flex", marginTop:"1.7%", marginLeft:"2%"}}>
					<div style={{width:"70%"}}>
						<MainVideo videoId={vId} />

						<TitleLikes
							videoTitle={videoTitle}
							views={views}
							likes={videoLikes}
							dislikes={videoDislikes} />

						<ChannelDetails
							channelTitle={channelTitle}
							channelThumbnail={channelThumbnail}
							subCount={subCount}
							date={date}
							description={description} />

						<CommentList />
					</div>
					<Recommended rec={this.props.recommended}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		videoInfo: state.ytId,
		channelInfo: state.userInfo,
		recommended: state.recommended
	};
}

export default connect(mapStateToProps)(VideoPage);
