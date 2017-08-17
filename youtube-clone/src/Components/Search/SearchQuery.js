import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchLayout from '../Page/SearchLayout';

class SearchQuery extends PureComponent {

	constructor() {
		super();
	}

	render() {
		console.log(this.props.query);
		return (
			<div>
				<SearchLayout videos={this.props.query} />
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
