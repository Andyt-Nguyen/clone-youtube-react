import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component{
	render() {
		return (
			<div>
				<h1 style={{fontSize:"20px"}}>451 Comments</h1>
				<CommentItem />
				<CommentItem />
				<CommentItem />
				<CommentItem />
				<CommentItem />
			</div>
		);
	}
}

export default CommentList;
