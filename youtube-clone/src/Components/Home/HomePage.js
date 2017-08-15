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

	getNine(category) {
		let nine = category.filter( (a,i) => i < 9);
		return nine;
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
		let {trending, comedy, education, music, gaming, sports, filmAnimation} = this.state;
		let trends = this.getNine(trending);
		let comedys = this.getNine(comedy);
		let educations = this.getNine(education);
		let musics = this.getNine(music);
		let gamings = this.getNine(gaming);
		let sportz = this.getNine(sports);
		let filmAnimations = this.getNine(filmAnimation);
		return (
			<div className="videoListContainer">
				<VideoList title={"Trending"} videos={trends} />
				<hr />
				<VideoList title={"Comedy"} videos={comedys} />
				<hr />
				<VideoList title={"Education"} videos={educations} />
				<hr />
				<VideoList title={"Music"} videos={musics} />
				<hr />
				<VideoList title={"Gaming"} videos={gamings} />
				<hr />
				<VideoList title={"Blogger"} videos={sportz} />
				<hr />
				<VideoList title={"Film & Animation"} videos={filmAnimations} />
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
