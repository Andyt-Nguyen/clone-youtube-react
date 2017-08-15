import React, { Component } from 'react';
import { convertDate, convertViews } from '../../resusableFxns.js';

class VideoItems extends Component {

	fiveWords(str) {
		str = str.split(" ");
		if(str.length < 8) {
			return str.join(" ");
		} else {
			let fiveWords = str.filter( (a,i) => i < 8 );
			return fiveWords.join(" ");
		}
	}
	
	render() {
		let { snippet, statistics } = this.props;
		let theWords = this.fiveWords(snippet.title);
		let theDate = convertDate(snippet.publishedAt);
		let views = convertViews(statistics.viewCount);

		return (
				<div style={{padding:"20px"}}>
					<img
						src={snippet.thumbnails.high.url}
						height="112"
						width='200'/>
					<div style={{display:'flex', flexWrap:'wrap', width:'200px'}}>
						<p style={{fontFamily:"Roboto", fontWeight:'bold'}}>{theWords}</p>
					</div>

					<div style={{display:'flex', flexWrap:'wrap', width:'200px', paddingTop:5}}>
						<p style={{fontSize:15, color:"#888888"}}>{snippet.channelTitle}</p>

					</div>

					<div style={{display:'flex', flexWrap:'wrap', width:'200px'}}>
						<p style={{fontSize:15, color:"#888888"}}>
							{views} views {" "}
							<span style={{fontSize:"20px"}}>&middot;</span>
							{theDate}
						</p>
					</div>
				</div>
		);
	}
}

export default VideoItems;
