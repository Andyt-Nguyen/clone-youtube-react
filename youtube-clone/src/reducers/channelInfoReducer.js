export default function channeInfoReducer(state=[], action) {
	switch (action.type) {
		case 'CHANNEL_INFO_SUCCESS':
		console.log(action.payload);
			return action.payload;
		default:
			return state;
	};
}
