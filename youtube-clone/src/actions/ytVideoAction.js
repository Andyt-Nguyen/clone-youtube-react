import axios from 'axios';
import { apiKey } from '../config';

export function ytVideoId(videoId) {
	return {type:"YT_ID_SUCCESS", payload: videoId};
}
