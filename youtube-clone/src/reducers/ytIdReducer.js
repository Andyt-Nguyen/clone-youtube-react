export default function ytIdReducer(state=[], action) {
	switch (action.type) {
		case "YT_ID_SUCCESS":
			return [...state, Object.assign({}, action.payload)];
		default:
			return state;
	};
}
