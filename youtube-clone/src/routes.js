import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './Components/Home/HomePage';
import TrendingPage from './Components/Trending/TrendingPage';
import HistoryPage from './Components/History/HistoryPage';
import ComedyPage from './Components/Comedy/ComedyPage';
import FilmAnimPage from './Components/FilmAnim/FilmAnimPage';
import GamingPage from './Components/Gaming/GamingPage';
import SportsPage from './Components/Sports/SportsPage';
import MusicPage from './Components/Music/MusicPage';
import EducationPage from './Components/Education/EducationPage';
import SearchQuery from './Components/Search/SearchQuery';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/music" component={MusicPage}/>
		<Route path="/trends" component={TrendingPage} />
		<Route path="/history" component={HistoryPage} />
		<Route path="/comedy" component={ComedyPage} />
		<Route path="/film" component={FilmAnimPage} />
		<Route path="/gaming" component={GamingPage} />
		<Route path="/sports" component={SportsPage} />
		<Route path="/education" component={EducationPage} />
		<Route path="/search" component={SearchQuery} />
	</Route>
)
