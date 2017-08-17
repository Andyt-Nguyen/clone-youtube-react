export default function queryReducer(state=[], action) {
	switch (action.type) {
		case "YOUTUBE_QUERY_SUCCESS":
			return action.payload;

		default:
			return state;
	};
}
