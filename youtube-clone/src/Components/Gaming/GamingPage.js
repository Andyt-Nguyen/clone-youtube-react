import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SubPageHeader from '../Page/SubPageHeader';
import PageItem from '../Page/PageItem';
import * as youtubeActions from '../../actions/youtubeAction';

class GamingPage extends Component {

	render() {
		let pageItems = this.props.videos.gaming.map( (a,i) =>
			<PageItem
				key={i}
				{...a} />
		);

		return (
			<div className="container">
				<div className="subpage-center">
					<SubPageHeader
						bannerImage={"https://s23.postimg.org/gj40a18gb/music_Img.jpg"}
						categoryTitle={"Games"} />
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
	videos: state.videos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(youtubeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GamingPage);
