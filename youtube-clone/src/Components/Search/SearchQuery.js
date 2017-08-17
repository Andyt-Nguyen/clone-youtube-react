import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchLayout from '../Page/SearchLayout';

class SearchQuery extends PureComponent {

	constructor() {
		super();
		this.state = {
			searchedResults: [],
			videos: []
		}
	}

	searchApi() {
		const url = `https://www.googleapis.com/youtube/v3/search`;
		const key = `AIzaSyB44dw8hEXAdMcWdhZhfQUxuY0kN4rwJlk`

		let promise = axios({
			method:"GET",
			url,
			params: {
				key,
				part:"snippet",
				maxResults:2,
				order:"relevance",
				q: this.props.queryString.query,
				safeSearch: "moderate",
				type:"video",
			}
		});

		const getStats = (id) => axios({
			method: "GET",
			url: `https://www.googleapis.com/youtube/v3/videos`,
			params: {
				key,
				part: "statistics, snippet",
				id
			}
		});

		return promise.then(res => {
			this.setState({searchedResults:res.data});
			let videoIds = this.state.searchedResults.items.map(a => a.id.videoId);
			videoIds = videoIds.join(",")
			return getStats(videoIds);
		}).then(res => {
			const videos = res.data.items;
			this.setState({videos});
		});
	}

	componentWillMount() {
		// this.searchApi();
	}


	render() {
		console.log(this.state.videos);
		return (
			<div>
				<SearchLayout videos={this.state.videos} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		queryString: state.query
	}
}

export default connect(mapStateToProps)(SearchQuery);
