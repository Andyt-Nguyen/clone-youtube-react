import React, { Component } from 'react';
import $ from 'jquery';
import { Link, IndexLink } from 'react-router';

class YtSideNav extends Component {

	activeClass() {

	}

	render() {
		return (
			<div className="SideNav">

				<IndexLink to="/"
					style={{textDecoration:"none"}}
					activeClassName="active"
					className="sidenav-i"
					>
					<i className="material-icons red">&#xE88A;</i>
					<h6>Home</h6>
				</IndexLink>

				<Link to="trending"
					style={{textDecoration:"none"}}
					activeClassName="active"
					className="sidenav-i">
						<i className="material-icons">&#xE80E;</i>
					<h6>Trending</h6>
				</Link>

				<Link to="history"
					style={{textDecoration:"none"}}
					activeClassName="active"
					className="sidenav-i">
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
