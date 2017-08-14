import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducers';

const rootReducer = combineReducers({
    videos: youtubeReducer
});

export default rootReducer;
