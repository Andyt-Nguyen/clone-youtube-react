import axios from 'axios';

export function sendYoutubeData(videos) {
	return {type:"YOUTUBE_SEND_SUCCESS", payload: videos};
}
