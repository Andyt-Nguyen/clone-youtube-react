import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Category from './Category';

const YtSideNav = () => {
	return (
		<div className="ytSideNav">
			<div className="SideNav">
				<IndexLink to="/"
					style={{textDecoration:"none"}}
					activeClassName="active">
					<Category icon={"home"} category={"Home"}/>
				</IndexLink>

				<Link to="trends"
					style={{textDecoration:"none"}}
					activeClassName="active">
					<Category icon={"whatshot"} category={"Trending"}/>
				</Link>

				<Link to="history"
					style={{textDecoration:"none"}}
					activeClassName="active" >
					<Category icon={"restore"} category={"History"}/>
				</Link>

				<hr />

				<div className="side-title">
					<h6>Library</h6>
				</div>


				<Link to="music"
					style={{textDecoration:"none"}}
					activeClassName="active" >
					<Category icon={"music_video"} category={"Music"} />
				</Link>

				<Link to="sports"
					style={{textDecoration:"none"}}
					activeClassName="active" >
					<Category icon={"fitness_center"} category={"Sports"} />
				</Link>

				<Link to="gaming"
					style={{textDecoration:"none"}}
					activeClassName="active" >
					<Category icon={"laptop_mac"} category={"Gaming"} />
				</Link>

				<Link to="education"
					style={{textDecoration:"none"}}
					activeClassName="active" >
					<Category icon={"book"} category={"Education"} />
				</Link>

				<Link to="comedy"
					style={{textDecoration:"none"}}
					activeClassName="active" >
					<Category icon={"tag_faces"} category={"Comedy"} />
				</Link>

				<Link to="film"
					style={{textDecoration:"none"}}
					activeClassName="active" >
					<Category icon={"local_movies"} category={"Film And Animation"} />
				</Link>

				<hr />

				<div style={{display:"flex", justifyContent:"center"}}>
					<button className="btn btn-primary text-center">Login</button>
				</div>
			</div>
		</div>
	);
}

export default YtSideNav;
