import React, { Component } from 'react';

class YtNavbar extends Component {
	render() {
		return (
			<nav className="yt-nav container-fluid">
				<div className="yt-nav-left">
					<i className="material-icons">&#xE8EE;</i>
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/YouTube_logo_2015.svg/1200px-YouTube_logo_2015.svg.png" width="70px"/>
				</div>

				<div className="yt-nav-middle">
					<input type="text" className="yt-search"/>
					<button><i style={{padding:"2px"}} className="material-icons">search</i></button>
				</div>

				<div className="yt-nav-right">
					<i className="material-icons">file_upload</i>
					<i className="material-icons">apps</i>
					<i className="material-icons">notifications</i>
					<i className="material-icons">person_outline</i>
				</div>
			</nav>
		);
	}
}

export default YtNavbar;
