export function channeInfoAction(info) {
	return {type: `CHANNEL_INFO_SUCCESS`, payload:info};

}

export function getChannelInfo(channelId) {
	const url = `https://www.googleapis.com/youtube/v3/channels`;
	const key = apiKey;
	let promise = axios({
		method:"GET",
		url,
		params : {
			key,
			id: channelId,
			part: `snippet, contentDetails, statistics`
		}
	});

	return dispatch => {
		return promise.then(res => {
			let channelInfo = res.data.items
			dispatch(ytVideoId(channelInfo));
		});
	}
}
