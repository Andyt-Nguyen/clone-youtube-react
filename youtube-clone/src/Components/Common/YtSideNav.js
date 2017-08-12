import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class YtSideNav extends Component {
	render() {
		return (
			<div className="SideNav">

				<IndexLink to="/" className="sidenav-i">
					<i className="material-icons">&#xE88A;</i>
					<h6>Home</h6>
				</IndexLink>

				<Link to="trending" className="sidenav-i">
					<i className="material-icons">&#xE80E;</i>
					<h6>Trending</h6>
				</Link>

				<Link to="history" className="sidenav-i">
					<i className="material-icons">&#xE88A;</i>
					<h6>History</h6>
				</Link>

				<hr />

				<div className="side-title">
					<h6>Library</h6>
				</div>

				<div className="sidenav-i">
					<i className="material-icons">replay</i>
					<h6>Subscriptions</h6>
				</div>

				<div className="sidenav-i">
					<i className="material-icons">access_time</i>
					<h6>Watch Later</h6>
				</div>

				<div className="sidenav-i">
					<i className="material-icons">favorite</i>
					<h6>Favorites</h6>
				</div>

				<hr />

				<div style={{display:"flex", justifyContent:"center"}}>
					<button className="btn btn-primary text-center">Click To Login</button>
				</div>
			</div>
		);
	}
}

export default YtSideNav;
