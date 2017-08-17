import React, { Component } from 'react';
import RecommendedItem from './RecommendedItem';
class Recommended extends Component {
	render() {
		return (
			<div>
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
			</div>
		)
	}
}

export default Recommended;
