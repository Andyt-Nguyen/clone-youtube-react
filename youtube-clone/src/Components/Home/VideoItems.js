import React, { Component } from 'react';
import { convertDate, convertViews, fiveWords } from '../../resusableFxns.js';

const VideoItems = (props) =>  {
	return (
			<div style={{padding:"20px"}}>
				<img
					onClick={()=>{props.goToVideo(props.id, props.snippet.title, props.statistics.viewCount, props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId)}}
					src={props.snippet.thumbnails.high.url}
					height="122"
					width='200'/>
				<div style={{display:'flex', flexWrap:'wrap', width:'200px'}}>
					<p style={{fontFamily:"Roboto", fontWeight:'bold'}}>{fiveWords(props.snippet.title)}</p>
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
