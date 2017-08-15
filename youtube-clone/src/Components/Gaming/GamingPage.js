import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SubPageHeader from '../Page/SubPageHeader';
import * as youtubeActions from '../../actions/youtubeAction';

class GamingPage extends Component {
	render() {
		return (
			<div>
			<SubPageHeader categoryTitle={"Trending"} />

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

export default connect(mapStateToProps, mapDispatchToProps)(GamingPage);
