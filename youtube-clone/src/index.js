import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import "./css/NavBar.css";
import "./css/SideNav.css";
import registerServiceWorker from './registerServiceWorker';

render (
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('root')
);

registerServiceWorker();
