import axios from 'axios';
import { apiKey } from '../config';

export function getRecommended(vids) {
	return {type:"RECOMMENDED_SUCCESS", payload:vids};
}

export function retriveRecommended(vidId) {
	console.log(vidId);
	const url = "https://www.googleapis.com/youtube/v3/search";
	const key = apiKey;
	let promise = axios({
		method: "GET",
		url,
		params: {
			key,
			type: 'video',
			part: "snippet",
			chart: 'mostPopular',
			order: 'relevance',
			myRating:'like',
			maxResults: 3,
			relatedToVideoId: vidId,
			safeSearch: 'moderate'
		}
	});

	let statPromise = (id) => axios({
		method: "GET",
		url:"https://www.googleapis.com/youtube/v3/videos",
		params: {
			key,
			id,
			part:"snippet, statistics"
		}
	});

	return dispatch => {
		return promise.then(res => {
			let videoIds = res.data.items.map(a => a.id.videoId);
			videoIds = videoIds.join(",");
			return statPromise(videoIds);
		}).then( res => {
			dispatch(getRecommended(res.data.items));
		})
	}
}
