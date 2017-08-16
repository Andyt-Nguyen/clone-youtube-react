import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchLayout from '../Page/SearchLayout';

class SearchQuery extends Component {

	constructor() {
		super();
		this.state = {
			searchedResults: [],
			videos: []
		}
	}

	searchApi() {
		const url = `https://www.googleapis.com/youtube/v3/search`;
		const key = `AIzaSyDlPmknZS4zRY9KPWfm8f3v6OYSfB3UivQ`

		let promise = axios({
			method:"GET",
			url,
			params: {
				key,
				part:"snippet",
				maxResults:3,
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
			const videos = res.data;
			this.setState({videos});
		});
	}

	componentWillMount() {
		this.searchApi();
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<h1>Search Page</h1>

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
// <SearchLayout videos={this.state.searchedResults} />
