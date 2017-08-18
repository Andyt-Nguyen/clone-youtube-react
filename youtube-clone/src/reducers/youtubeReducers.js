export default function youtubeReducer(state=[], action) {
	switch (action.type) {
		case "GET_YOUTUBE_VIDEOS":
			return action.payload;

		default:
			return state;
	};
}
