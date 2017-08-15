import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SubPageHeader from '../Page/SubPageHeader';
import * as youtubeActions from '../../actions/youtubeAction';

class TrendingPage extends Component {
	render() {
		return (
			<div className="subpage-center">
				<SubPageHeader bannerImage={"https://s23.postimg.org/gj40a18gb/music_Img.jpg"} categoryTitle={"Trending"} />
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
