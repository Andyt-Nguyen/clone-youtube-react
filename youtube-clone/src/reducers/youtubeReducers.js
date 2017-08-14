
export default function youtubeReducer(state=[], action) {
	switch (action.type) {
		case "YOUTUBE_LOAD_SUCCESS":
			return action.payload
		default:
			return state;
	};
}
