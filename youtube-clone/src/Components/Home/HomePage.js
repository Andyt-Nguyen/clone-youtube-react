import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoList from './VideoList';
import * as youtubeActions from '../../actions/youtubeAction';

class HomePage extends Component {
	constructor() {
		super();
		this.state ={
			trending: [],
			education: [],
			music: [],
			comedy: [],
			gaming: [],
			sports: [],
			filmAnimation: []
		};
	}

	getYoutubeInfo() {
		const baseUrl = "https://www.googleapis.com/youtube/v3/videos";
		const key = "AIzaSyDlPmknZS4zRY9KPWfm8f3v6OYSfB3UivQ";
		let promise = (videoCategoryId) => axios({
			method: "GET",
			url: baseUrl,
			params: {
				key,
				part: "id, contentDetails, snippet, statistics",
				chart: 'mostPopular',
				maxResults: 9,
				videoCategoryId
			}
		});
		return promise(0).then( res => {
			const trending = res.data.items;
			this.setState({trending});
			return promise(10)
		}).then(res => {
			const music = res.data.items;
			this.setState({music});
			return promise(27)
		}).then(res => {
			const education = res.data.items;
			this.setState({education});
			return promise(17);
		}).then(res => {
			const sports = res.data.items;
			this.setState({sports});
			return promise(23)
		}).then( res => {
			const comedy = res.data.items;
			this.setState({comedy});
			return promise(20)
		}).then( res => {
			const gaming = res.data.items;
			this.setState({gaming});
			return promise(1)
		}).then( res => {
			const filmAnimation = res.data.items;
			this.setState({filmAnimation});
		});
	}

	sendDataToStore() {
		setTimeout(() => {
			this.props.actions.sendYoutubeData(this.state);
		},2000);
	}

	componentWillMount() {
		this.getYoutubeInfo();
		this.sendDataToStore();
	}

	render() {
		console.log(this.props);
		return (
			<div style={{border:"2px solid red", marginLeft:"5%", width: "1300px"}}>
				<VideoList title={"Trending"} videos={this.state.trending} />
				<hr />
				<VideoList title={"Comedy"} videos={this.state.comedy} />
				<hr />
				<VideoList title={"Education"} videos={this.state.education} />
				<hr />
				<VideoList title={"Music"} videos={this.state.music} />
				<hr />
				<VideoList title={"Gaming"} videos={this.state.gaming} />
				<hr />
				<VideoList title={"Blogger"} videos={this.state.sports} />
				<hr />
				<VideoList title={"Film & Animation"} videos={this.state.filmAnimation} />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		videos: state.videos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(youtubeActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
