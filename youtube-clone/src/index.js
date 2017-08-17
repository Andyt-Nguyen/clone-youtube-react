import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import "./css/reset.css";
import './index.css';
import "./css/Header.css";
import "./css/SideNav.css";
import "./css/pageView.css"
import "./css/home.css"
import registerServiceWorker from './registerServiceWorker';
import { getYoutubeInfo } from './actions/youtubeAction';

const store = configureStore();
// store.dispatch(getYoutubeInfo());

render (
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
