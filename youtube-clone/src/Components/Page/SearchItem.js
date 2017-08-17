import React, { Component } from 'react';

const SearchItem = (props) => {
	return(
		<div style={{display:"flex", paddingTop:"20px"}}>
			<img width="240" height="150" src={props.thumbnail} />
			<div style={{marginLeft:"20px", width:"100%",paddingTop:"15px"}}>
				<h1 style={{fontSize:"20px", paddingBottom:"5px"}}><b>{props.title}</b></h1>
				<h3 style={{fontSize:"13px", paddingBottom:"10px", color:"#767676"}}>{props.channelTitle} {props.views} views {" "} {props.date}</h3>
				<h3 style={{fontSize:"13px",color:"#767676"}}>{props.description} </h3>
			</div>
		</div>
	);
}

export default SearchItem;
