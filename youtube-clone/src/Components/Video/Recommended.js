import React, { Component } from 'react';
import RecommendedItem from './RecommendedItem';
class Recommended extends Component {
	render() {
		let recommendedItem = this.props.rec.map((a,i) =>
			<RecommendedItem key={i} {...a}/>
		);

		return (
			<div className="RecommendedContainer">
				<h1>Recommended</h1>
				{recommendedItem}
			</div>
		)
	}
}

export default Recommended;
