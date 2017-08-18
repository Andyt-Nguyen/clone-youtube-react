import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducers';
import queryReducer from './queryReducer';
import ytIdReducer from './ytIdReducer';
import channelInfoReducer from './channelInfoReducer';

const rootReducer = combineReducers({
    videos: youtubeReducer,
		query: queryReducer,
		ytId: ytIdReducer,
		userInfo: channelInfoReducer
});

export default rootReducer;
