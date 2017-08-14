import React, { Component } from 'react';

class PageItem extends Component {
	render() {
		return (
			<div style={{paddingTop:"15px", width:"50%"}}>
				<div style={{display:"flex"}}>
					<div>
						<img src="https://placehold.it/160" />
					</div>
					<div>
						<h1>Title Video</h1>
						<h3>Channel title</h3>
						<h4>Views and Date</h4>
						<h4>Description</h4>
					</div>
				</div>
			</div>
		)
	}
}

export default PageItem;
