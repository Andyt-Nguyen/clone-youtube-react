import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducers';
import queryReducer from './queryReducer';
import ytIdReducer from './ytIdReducer';
import channelInfoReducer from './channelInfoReducer';
import recommendedReducer from './recommendedReducer.js';

const rootReducer = combineReducers({
    videos: youtubeReducer,
		query: queryReducer,
		ytId: ytIdReducer,
		userInfo: channelInfoReducer,
		recommended: recommendedReducer
});

export default rootReducer;
