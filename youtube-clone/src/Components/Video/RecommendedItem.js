import React, { Component } from 'react';
import { convertViews } from '../../resusableFxns';

const RecommendedItems = (props) => {

		return (
			<div style={{display:"flex", marginTop:'10px'}}>
				<img
				 onClick={() => props.getVideo(props.id, props.snippet.title, props.statistics.viewCount, props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commentCount, props.statistics.dislikeCount, props.statistics.likeCount)}
				 style={{cursor:"pointer"}}
				 className="recThumbnail"
				 src={props.snippet.thumbnails.high.url} />

				<div style={{marginLeft:'10px'}}>
					<p
						onClick={() => props.getVideo(props.id, props.snippet.title, props.statistics.viewCount, props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commentCount, props.statistics.dislikeCount, props.statistics.likeCount)}
						style={{cursor:"pointer"}}
						className="recTitle">{props.snippet.title}
					</p>

					<p className="recChannelTitle">{props.snippet.channelTitle}</p>
					<p className="recChannelTitle">{convertViews(props.statistics.viewCount)} views</p>
				</div>
			</div>
		)
}

export default RecommendedItems;
