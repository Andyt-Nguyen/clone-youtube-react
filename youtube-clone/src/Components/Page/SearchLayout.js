import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ytVideoAction from '../../actions/ytVideoAction';
import * as ytChannelInfoAction from '../../actions/ytChannelInfoAction';
import * as recommendedAction from '../../actions/recommendedAction';
import SearchItem from './SearchItem';

class SearchLayout extends Component {

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
		const { videos } = this.props;
		let searchItems = videos.map( (a,i) =>
			<SearchItem
				key={i}
				{...a}
				getId={this.getVideoId} />
		);

		return (
			<div className="container SearchLayout">
				<h2>Popular Results</h2>
				<hr />
				{searchItems}
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchLayout);
