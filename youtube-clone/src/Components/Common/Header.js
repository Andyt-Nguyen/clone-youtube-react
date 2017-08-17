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
	}

	revealSideNav() {
			$(".ytSideNav").toggle("slide");
	}

	sendQuery(e) {
		e.preventDefault();
		this.props.action.searchQuery(this.state);
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
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/YouTube_logo_2015.svg/1200px-YouTube_logo_2015.svg.png" width="70px"/>
						</div>

						<form onSubmit={this.sendQuery.bind(this)} className="yt-nav-middle">
							<input
								type="text"
								className="yt-search"
								onChange={this.onQueryChange} />
							<button type="submit"><i style={{padding:"2px"}} className="material-icons">search</i></button>
						</form>

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
