import React, { Component } from 'react';
import SearchItem from './SearchItem';
import { convertViews, convertDate, limitDescription} from '../../resusableFxns'

class SearchLayout extends Component {
	
	render() {
		const { videos } = this.props;
		let searchItems = videos.map( (a,i) =>
			<SearchItem
				key={i}
				thumbnail={a.snippet.thumbnails.high.url}
				title={a.snippet.title}
				channelTitle={a.snippet.channelTitle}
				views={convertViews(a.statistics.viewCount)}
				date={convertDate(a.snippet.publishedAt)}
				description={limitDescription(a.snippet.description, 212)}
				/>
		);

		return (
			<div className="container">
				<h2>About 478,000 results</h2>
				<hr />
				{searchItems}
			</div>
		);
	}
}

export default SearchLayout;
