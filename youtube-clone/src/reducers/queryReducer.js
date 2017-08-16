export default function queryReducer(state=[], action) {
	switch (action.type) {
		case "YOUTUBE_QUERY_SUCCESS":
			return Object.assign({}, state, action.payload);

		default:
			return state;
	};
}
