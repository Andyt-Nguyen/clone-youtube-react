export default function recommendedReducer(state=[], action) {
	switch (action.type) {
		case `RECOMMENDED_SUCCESS`:
			return action.payload;
		default:
			return state;
	};
}
