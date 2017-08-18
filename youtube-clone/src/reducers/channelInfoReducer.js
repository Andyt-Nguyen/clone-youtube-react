export default channeInfoReducer(state=[], action) {
	switch (action.type) {
		case 'CHANNEL_INFO_SUCCESS':
			return action.payload;
		default:
			return state;
	};
}
