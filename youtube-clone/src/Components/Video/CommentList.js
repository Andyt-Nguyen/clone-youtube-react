import React, { Component } from 'react';
import CommentItem from './CommentItem';

const CommentList = (props) =>{
	return (
		<div style={{marginLeft:"5%"}}>
			<h1 className="commentSection" style={{fontSize:"20px"}}>{props.comment} Comments</h1>
			<div className="commentItem"><CommentItem /></div>
		</div>
	);
}

export default CommentList;
