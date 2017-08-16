import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducers';
import queryReducer from './queryReducer';

const rootReducer = combineReducers({
    videos: youtubeReducer,
		query: queryReducer
});

export default rootReducer;
