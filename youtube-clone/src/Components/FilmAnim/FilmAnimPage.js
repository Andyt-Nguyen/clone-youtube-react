import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import SubPageHeader from '../Page/SubPageHeader';
import PageItem from '../Page/PageItem';
import * as ytVideoAction from '../../actions/ytVideoAction';
import * as ytChannelInfoAction from '../../actions/ytChannelInfoAction';

class FilmAnimPage extends Component {
	constructor() {
		super();
		this.getVideoInfo = this.getVideoInfo.bind(this);
	}

	getVideoInfo(id, title, views, date, channelTitle, description, channelId) {
		this.props.action.ytVideoId({id, title, views, date, channelTitle, description});
		this.props.otherAction.getChannelInfo(channelId);
		setTimeout(() => {
			browserHistory.push("/video");
		},1000);
	}
	render() {
		let pageItems = this.props.videos.filmAnimation.map( (a,i) =>
			<PageItem
				key={i}
				{...a}
				onSave={this.getVideoInfo}/>
		);

		return (
			<div className="container">
				<div className="subpage-center">
					<SubPageHeader
						bannerImage={"https://s23.postimg.org/gj40a18gb/music_Img.jpg"}
						categoryTitle={"Film & Animation"} />
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
		otherAction: bindActionCreators(ytChannelInfoAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmAnimPage);
