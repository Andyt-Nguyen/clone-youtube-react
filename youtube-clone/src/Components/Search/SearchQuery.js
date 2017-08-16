import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchLayout from '../Page/SearchLayout';

class SearchQuery extends Component {
	constructor() {
		super();
		this.state = {
			searchedResults: []
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
				maxResults:10,
				order:"relevance",
				q:"Bruno Mars",
				safeSearch: "moderate",
				type:"video",
			}
		});

		return promise.then(res => {
			this.setState({searchedResults:res.data});
		});
	}

	componentWillMount() {
		// this.searchApi();
	}

	render() {
		return (
			<div>
				<h1>Search Page</h1>
				<SearchLayout videos={this.props.videos.trending} />
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
