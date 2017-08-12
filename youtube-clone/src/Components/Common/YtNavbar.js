import React, { Component } from 'react';
import $ from 'jquery';
import YtSideNav from './YtSideNav';

class YtNavbar extends Component {

	revealSideNav() {
			$(".ytSideNav").toggle("slide");
	}

	render() {
		return (
				<div style={{position:"static", width:"100%"}}>
					<nav className="yt-nav container-fluid">
						<div className="yt-nav-left">
							<i
								onClick={this.revealSideNav.bind(this)}
								className="material-icons"
								style={{cursor:"pointer"}}>&#xE8EE;</i>
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
				</div>
		);
	}
}

export default YtNavbar;
