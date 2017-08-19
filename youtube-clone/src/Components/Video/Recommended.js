import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ytVideoAction from '../../actions/ytVideoAction';
import * as ytChannelInfoAction from '../../actions/ytChannelInfoAction';
import * as recommendedAction from '../../actions/recommendedAction';
import RecommendedItem from './RecommendedItem';

class Recommended extends Component {
	constructor() {
		super();
		this.getVideoId = this.getVideoId.bind(this);
	}

	getVideoId(id, title, views, date, channelTitle, description, channelId, comment, dislike, like) {
		this.props.action.ytVideoId({id, title, views, date, channelTitle, description, comment, dislike, like});
		this.props.otherAction.getChannelInfo(channelId);
		this.props.recAction.retriveRecommended(id);
		setTimeout(() => {
			browserHistory.push("/video");
		},1000);
	}

	render() {
		let recommendedItem = this.props.rec.map((a,i) =>
			<RecommendedItem key={i} getVideo={this.getVideoId} {...a}/>
		);

		return (
			<div className="RecommendedContainer">
				<h1>Recommended</h1>
				{recommendedItem}
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		ytId: state.ytId,
		userInfo: state.userInfo
	};
}

function mapDispatchToProps(dispatch){
	return {
		action: bindActionCreators(ytVideoAction, dispatch),
		otherAction: bindActionCreators(ytChannelInfoAction, dispatch),
		recAction: bindActionCreators(recommendedAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommended);
