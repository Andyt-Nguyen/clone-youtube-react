import React, { Component } from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YtSideNav from './YtSideNav';
import * as youtubeActions from '../../actions/youtubeAction';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			query: ""
		};
		this.sendQuery = this.sendQuery.bind(this);
		this.onQueryChange = this.onQueryChange.bind(this);
		this.backToHomePage = this.backToHomePage.bind(this);
	}

	backToHomePage() {
		browserHistory.push("/")
	}

	revealSideNav() {
			$(".ytSideNav").toggle("slide");
	}

	sendQuery(e) {
		e.preventDefault();
		this.props.action.searchQuery(this.state.query);
		browserHistory.push("/search");
	}

	onQueryChange(e) {
		this.setState({query:e.target.value})
	}

	render() {
		return (
				<div className="header-container" style={{position:"static", width:"100%"}}>
					<nav className="yt-nav container-fluid">
						<div className="yt-nav-left">
							<i
								onClick={this.revealSideNav.bind(this)}
								className="material-icons"
								style={{cursor:"pointer"}}>&#xE8EE;</i>
							<img style={{cursor:"pointer"}} onClick={this.backToHomePage} className="youtubeLogo" src="https://s22.postimg.org/ew0lnw0pd/youtube_Logo.png" width="70px"/>
							<div className="playBtnPic">
								<img style={{cursor:"pointer"}} onClick={this.backToHomePage} src="https://s18.postimg.org/wsh1d8pa1/youtube_Icon.png" width="40px" />
							</div>
						</div>

						<form onSubmit={this.sendQuery} className="yt-nav-middle">
							<input
								type="text"
								className="yt-search"
								onChange={this.onQueryChange} />
							<button type="submit"><i style={{padding:"2px"}} className="material-icons">search</i></button>
						</form>

						<div className="yt-nav-right">
							<i style={{color: "#a0a0a0"}} className="material-icons">file_upload</i>
							<i style={{color: "#a0a0a0"}} className="material-icons">apps</i>
							<i style={{color: "#a0a0a0"}} className="material-icons">notifications</i>
							<i style={{color: "#a0a0a0"}} className="material-icons">person_outline</i>
						</div>
					</nav>
				</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		query: state.query
	};
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(youtubeActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
