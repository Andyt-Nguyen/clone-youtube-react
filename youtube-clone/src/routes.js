import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './Components/Home/HomePage';
import TrendingPage from './Components/Trending/TrendingPage';
import HistoryPage from './Components/History/HistoryPage'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/trends" component={TrendingPage} />
		<Route path="/history" component={HistoryPage} />
	</Route>
)
