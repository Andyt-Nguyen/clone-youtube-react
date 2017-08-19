import React  from 'react';
import { convertDate, convertViews, limitDescription } from '../../resusableFxns';

const PageItem = (props) => {
	console.log(props);
	return (
			<div className="pageCol">
				<div style={{paddingTop:"20px", width:"100%"}}>
					<div className="pageItemsContainer">
						<div>
							<img
							 	onClick={()=>{props.onSave(props.id,props.snippet.title,props.statistics.viewCount,props.snippet.publishedAt, props.snippet.channelTitle, props.snippet.description, props.snippet.channelId, props.statistics.commmentCount, props.statistics.dislikeCount, props.statistics.likeCount)}}
								src={props.snippet.thumbnails.high.url} width="250" height="150"/>
						</div>
						<div style={{marginLeft:"10px"}}>
							<h1 className="titleOfVid">{props.snippet.title}</h1>
							<div className="dateAndTitle">
							<p className="titleInfo" style={{color:"#167ac6"}}>{props.snippet.channelTitle}</p>
							<p className="titleInfo">
								{convertViews(props.statistics.viewCount)} {" "}
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
