import React, { Component } from 'react';
import SearchItem from './SearchItem';

class SearchLayout extends Component {
	render() {
		return (
			<div style={{marginLeft:"20px"}}>
				<h2>About 478,000 results</h2>
				< hr/>
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
			</div>
		);
	}
}

export default SearchLayout;
