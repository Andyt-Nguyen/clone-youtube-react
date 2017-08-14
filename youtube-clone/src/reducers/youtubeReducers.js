
export default function youtubeReducer(state=[], action) {
	switch (action.type) {
		case "YOUTUBE_SEND_SUCCESS":
			return action.payload
		default:
			return state;
	};
}
