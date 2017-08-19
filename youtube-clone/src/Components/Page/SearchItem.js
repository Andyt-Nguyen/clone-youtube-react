import React, { Component } from 'react';
import { convertViews, convertDate, limitDescription} from '../../resusableFxns';
import "../../css/SearchItem.css"

const SearchItem = (props) => {
	return(
		<div style={{display:"flex", paddingTop:"20px"}}>
			<img style={{cursor:"pointer"}} onClick={() => props.getId(props.id, props.snippet.title, props.statistics.viewCount, props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commmentCount, props.statistics.dislikeCount, props.statistics.likeCount)} width="270" height="130" src={props.snippet.thumbnails.high.url} />
			<div style={{cursor:"pointer", marginLeft:"20px", width:"100%",paddingTop:"15px"}}>
				<h1 style={{cursor:"pointer"}} onClick={() => props.getId(props.id, props.snippet.title, props.statistics.viewCount, props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commmentCount, props.statistics.dislikeCount, props.statistics.likeCount)} className="searchTitle"><b>{props.snippet.title}</b></h1>
				<h3 className="searchChannelViews">{props.snippet.channelTitle} {convertViews(props.statistics.viewCount)} views {" "} {convertDate(props.snippet.publishedAt)}</h3>
				<h3 className="searchDescription">{limitDescription(props.snippet.description, 212)} </h3>
			</div>
		</div>
	);
}

export default SearchItem;
