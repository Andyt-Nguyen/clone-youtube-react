import React, { Component } from 'react';
import { convertDate, convertViews, fiveWords } from '../../resusableFxns.js';

const VideoItems = (props) =>  {
	let thumbnails = () => {
		if(props.snippet.thumbnails === undefined) {
			return "";
		} else {
			return props.snippet.thumbnails.high.url;
		}
	}

	let views = () => {
		if(props.statistics === undefined) {
			return "";
		} else {
			return convertViews(props.statistics.viewCount);
		}
	}

	return (
			<div style={{padding:"20px"}}>
				<img
					onClick={()=>{props.goToVideo(props.id, props.snippet.title, props.statistics.viewCount, props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commentCount, props.statistics.dislikeCount, props.statistics.likeCount)}}
					src={thumbnails()}
					className="theThumbnail"
					height="122"
					width='200'/>
				<div style={{display:'flex', flexWrap:'wrap', width:'200px'}}>
					<p
					style={{fontFamily:"Roboto", fontWeight:'bold',cursor:"pointer"}}
					onClick={()=>{props.goToVideo(props.id, props.snippet.title, props.statistics.viewCount, props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commentCount, props.statistics.dislikeCount, props.statistics.likeCount)}}>
					{fiveWords(props.snippet.title)}</p>
				</div>

				<div style={{display:'flex', flexWrap:'wrap', width:'200px', paddingTop:5}}>
					<p style={{fontSize:15, color:"#888888"}}>{props.snippet.channelTitle}</p>
				</div>

				<div style={{display:'flex', flexWrap:'wrap', width:'200px'}}>
					<p style={{fontSize:15, color:"#888888"}}>
						{convertViews(props.statistics.viewCount)} views {" "}
						<span style={{fontSize:"20px"}}>&middot;</span>
						{convertDate(props.snippet.publishedAt)}
					</p>
				</div>
			</div>
		);
	}

export default VideoItems;
