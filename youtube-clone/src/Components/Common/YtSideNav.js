import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Category from './Category';

const YtSideNav = () => {
	return (
		<div className="SideNav">
			<IndexLink to="/" style={{textDecoration:"none"}} activeClassName="active">
				<Category icon={"home"} category={"Home"}/>
			</IndexLink>

			<Link to="trends" style={{textDecoration:"none"}} activeClassName="active">
				<Category icon={"whatshot"} category={"Trending"}/>
			</Link>

			<Link to="history" style={{textDecoration:"none"}} activeClassName="active" >
				<Category icon={"restore"} category={"History"}/>
			</Link>

			<hr />

			<div className="side-title">
				<h6>Library</h6>
			</div>
			<Category icon={"music_video"} category={"Subscriptions"} />
			<Category icon={"fitness_center"} category={"Sports"} />
			<Category icon={"laptop_mac"} category={"Gaming"} />
			<Category icon={"book"} category={"Education"} />
			<Category icon={"tag_faces"} category={"Comedy"} />
			<Category icon={"local_movies"} category={"Film And Animation"} />
			<hr />

			<div style={{display:"flex", justifyContent:"center"}}>
				<button className="btn btn-primary text-center">Login</button>
			</div>
		</div>
	);
}

export default YtSideNav;
