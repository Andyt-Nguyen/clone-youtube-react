import React, { Component } from 'react';
import "../../css/SearchItem.css"
const SearchItem = (props) => {

	return(
		<div style={{display:"flex", paddingTop:"20px"}}>
			<img onClick={() => props.getId(props.id)} width="270" height="130" src={props.thumbnail} />
			<div style={{cursor:"pointer", marginLeft:"20px", width:"100%",paddingTop:"15px"}}>
				<h1 onClick={() => props.getId(props.id)} className="searchTitle"><b>{props.title}</b></h1>
				<h3 className="searchChannelViews">{props.channelTitle} {props.views} views {" "} {props.date}</h3>
				<h3 className="searchDescription">{props.description} </h3>
			</div>
		</div>
	);
}

export default SearchItem;
