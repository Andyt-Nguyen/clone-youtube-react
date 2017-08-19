import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import SubPageHeader from '../Page/SubPageHeader';
import PageItem from '../Page/PageItem';
import * as ytVideoAction from '../../actions/ytVideoAction';
import * as ytChannelInfoAction from '../../actions/ytChannelInfoAction';
import * as recommendedAction from '../../actions/recommendedAction';

class ComedyPage extends Component {
	constructor() {
		super();
		this.getVideoInfo = this.getVideoInfo.bind(this);
	}

	getVideoInfo(id, title, views, date, channelTitle, description, channelId, comment, dislike, like) {
		this.props.action.ytVideoId({id, title, views, date, channelTitle, description,channelId, comment, dislike, like});
		this.props.otherAction.getChannelInfo(channelId);
		this.props.recAction.retriveRecommended(id);
		setTimeout(() => {
			browserHistory.push("/video");
		},1000);
	}

	render() {

		let pageItems = this.props.videos.comedy.map( (a,i) =>
				<PageItem
					key={i}
					date={a.snippet.publishedAt}
					{...a}
					onSave={this.getVideoInfo} />
				);

		return (
			<div className="container">
				<div className="subpage-center">
					<SubPageHeader
						bannerImage={"https://s23.postimg.org/gj40a18gb/music_Img.jpg"}
						categoryTitle={"Comedy"} />
					<div className="pageItems" style={{background:"#fff", width:"100%"}}>
						{pageItems}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		videos: state.videos,
		ytId: state.ytId,
		userInfo: state.userInfo
	};
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(ytVideoAction, dispatch),
		otherAction: bindActionCreators(ytChannelInfoAction, dispatch),
		recAction: bindActionCreators(recommendedAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ComedyPage);
