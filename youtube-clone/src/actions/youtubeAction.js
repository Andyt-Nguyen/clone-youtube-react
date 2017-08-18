import axios from 'axios';
import { apiKey } from '../config';

export function sendYoutubeData(videos) {
	return {type:"GET_YOUTUBE_VIDEOS", payload: videos};
}

export function sendQuery(query) {
	return {type:"YOUTUBE_QUERY_SUCCESS", payload:query};
}


export function getYoutubeInfo() {
	let youtubeVideos = {};
	const url = "https://www.googleapis.com/youtube/v3/videos";
	const key = apiKey;
	let promise = (videoCategoryId) => axios({
		method: "GET",
		url,
		params: {
			key,
			part: "id, contentDetails, snippet, statistics",
			chart: 'mostPopular',
			maxResults: 10,
			videoCategoryId
		}
	});
	return dispatch => {
	 	promise(0).then( res => {
			const trending = res.data.items;
			youtubeVideos.trending = trending;
			return promise(10)
		}).then(res => {
			const music = res.data.items;
			youtubeVideos.music = music;
			return promise(27)
		}).then(res => {
			const education = res.data.items;
			youtubeVideos.education = education;
			return promise(17);
		}).then(res => {
			const sports = res.data.items;
			youtubeVideos.sports = sports;
			return promise(23)
		}).then( res => {
			const comedy = res.data.items;
			youtubeVideos.comedy = comedy;
			return promise(20)
		}).then( res => {
			const gaming = res.data.items;
			youtubeVideos.gaming = gaming;
			return promise(1)
		}).then( res => {
			const filmAnimation = res.data.items;
			youtubeVideos.filmAnimation = filmAnimation;
			// console.log(youtubeVideos);
			dispatch(sendYoutubeData(youtubeVideos));
		});
	}
	setTimeout(()=>{
		console.log("retriveing info");
	},1000);
}


export function searchQuery(query) {
	let searchedVideo;
	let q = query;
	const url = `https://www.googleapis.com/youtube/v3/search`;
	const key = apiKey;

	let promise = axios({
		method:"GET",
		url,
		params: {
			key: "AIzaSyDlPmknZS4zRY9KPWfm8f3v6OYSfB3UivQ",
				order: 'relevance',
				part: "snippet, id",
				chart: 'mostPopular',
				myRating:'like',
				maxResults: 12,
				q,
				type: 'video',
				safeSearch: 'moderate'
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

		return dispatch => {
			return promise.then(res => {
				let ids = res.data;
				let videoIds = ids.items.map(a => a.id.videoId);
				videoIds = videoIds.join(",")
				return getStats(videoIds);
			}).then(res => {
				const videos = res.data.items;
				searchedVideo = videos;
				dispatch(sendQuery(searchedVideo))
			});
	};
}
