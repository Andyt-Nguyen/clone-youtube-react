import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SubPageHeader from '../Page/SubPageHeader';
import PageItem from '../Page/PageItem';
import * as youtubeActions from '../../actions/youtubeAction';
import { convertDate, convertViews, limitDescription } from '../../resusableFxns';

class ComedyPage extends Component {

	render() {
		let pageItems = this.props.videos.comedy.map( (a,i) => {
			let desc = limitDescription(a.snippet.description);

			return (
					<PageItem
						key={i}
						title={a.snippet.title}
						channelTitle={a.snippet.channelTitle}
						views={convertViews(a.statistics.viewCount)}
						date={convertDate(a.snippet.publishedAt)}
						description={desc}
						thumbnail={a.snippet.thumbnails.high.url} />
		)});

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

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(youtubeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ComedyPage);
