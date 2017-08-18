import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ytVideoAction from '../../actions/ytVideoAction';
import SearchItem from './SearchItem';
import { convertViews, convertDate, limitDescription} from '../../resusableFxns'

class SearchLayout extends Component {

	constructor() {
		super();
		this.getVideoId = this.getVideoId.bind(this);
	}

	getVideoId(id, title, views, date, channelTitle, description) {
		this.props.action.ytVideoId({id, title, views, date, channelTitle, description});
		browserHistory.push("/video");
	}

	render() {
		const { videos } = this.props;
		let searchItems = videos.map( (a,i) =>
			<SearchItem
				key={i}
				id={a.id}
				thumbnail={a.snippet.thumbnails.high.url}
				title={a.snippet.title}
				channelTitle={a.snippet.channelTitle}
				views={convertViews(a.statistics.viewCount)}
				date={convertDate(a.snippet.publishedAt)}
				description={limitDescription(a.snippet.description, 212)}
				getId={this.getVideoId} />
		);

		return (
			<div className="container">
				<h2>About 478,000 results</h2>
				<hr />
				{searchItems}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		ytId: state.ytId
	};
}

function mapDispatchToProps(dispatch){
	return {
		action: bindActionCreators(ytVideoAction, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchLayout);
