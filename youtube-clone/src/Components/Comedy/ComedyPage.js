import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SubPageHeader from '../Page/SubPageHeader';
import PageItem from '../Page/PageItem';
import * as youtubeActions from '../../actions/youtubeAction';
import { convertDate, convertViews, limitDescription } from '../../resusableFxns';

class ComedyPage extends Component {

	render() {
		let pageItems = this.props.videos.comedy.map( (a,i) =>
					<PageItem
						key={i}
						{...a} />
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
	videos: state.videos
	};
}

export default connect(mapStateToProps)(ComedyPage);
