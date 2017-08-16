
export function sendYoutubeData(videos) {
	return {type:"YOUTUBE_SEND_SUCCESS", payload: videos};
}

export function sendQuery(query) {
	return {type:"YOUTUBE_QUERY_SUCCESS", payload:query};
}
