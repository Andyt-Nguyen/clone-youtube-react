import React  from 'react';
import { convertDate, convertViews, limitDescription } from '../../resusableFxns';

const PageItem = (props) => {

	let thumbnails = () => {
		if(props.snippet.thumbnails === undefined) {
			return "";
		} else {
			return props.snippet.thumbnails.high.url;
		}
	}

	let views = () => {
		if(props.statistics === undefined) {
			return "Delete Video";
		} else {
			return convertViews(props.statistics.viewCount);
		}
	}

	return (
			<div className="pageCol">
				<div style={{paddingTop:"20px", width:"100%"}}>
					<div className="pageItemsContainer">
						<div>
							<img
							 	onClick={()=>{props.onSave(props.id,props.snippet.title,props.statistics.viewCount,props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commentCount, props.statistics.dislikeCount, props.statistics.likeCount)}}
								style={{cursor:"pointer"}}
								className="pageThumbnails"
								src={thumbnails()} />
						</div>
						<div style={{marginLeft:"10px"}}>
							<h1
								style={{cursor:"pointer"}}
								className="titleOfVid"
								onClick={()=>{props.onSave(props.id,props.snippet.title,props.statistics.viewCount,props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commentCount, props.statistics.dislikeCount, props.statistics.likeCount)}}>
								{props.snippet.title}</h1>

							<div className="dateAndTitle">
							<p className="titleInfo" style={{color:"#167ac6"}}>{props.snippet.channelTitle}</p>
							<p className="titleInfo">
								{views()} {" "}
								<span style={{fontWeight:"bold", fontSize:"15px"}}>&middot;</span> {" "}
								{convertDate(props.snippet.publishedAt)}
							</p>
							</div>
							<p className="titleInfo">{limitDescription(props.snippet.description, 112)}</p>
						</div>
					</div>
				</div>
			</div>
	);
}

export default PageItem;
