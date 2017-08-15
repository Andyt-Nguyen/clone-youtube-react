import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchLayout from '../Page/SearchLayout';
import * as youtubeActions from '../../actions/youtubeAction';

class TrendingPage extends Component {
	render() {
		return (
			<div>
				<SearchLayout />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
	videos: state.videos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(youtubeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);
