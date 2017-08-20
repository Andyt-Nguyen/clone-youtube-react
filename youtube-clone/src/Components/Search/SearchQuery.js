import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchLayout from '../Page/SearchLayout';

class SearchQuery extends PureComponent {

	constructor() {
		super();
		this.state = {
			isLoading: true
		};
	}

	implementLoad() {
		setTimeout(()=>{
			this.setState({isLoading:false});
		},1000);
	}

	componentWillMount() {
		this.implementLoad();
	}

	render() {
		return (
			<div>
				{this.state.isLoading ? <div className="loader"></div> :
				<SearchLayout videos={this.props.query} />
			}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		query: state.query
	}
}

export default connect(mapStateToProps)(SearchQuery);
