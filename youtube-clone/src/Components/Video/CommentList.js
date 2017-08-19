import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component{
	render() {
		return (
			<div style={{marginLeft:"5%"}}>
				<h1 className="commentSection" style={{fontSize:"20px"}}>{this.props.comment} Comments</h1>
				<div className="commentItem"><CommentItem /></div>
			</div>
		);
	}
}

export default CommentList;
