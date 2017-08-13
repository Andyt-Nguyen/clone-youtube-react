import React, { Component } from 'react';

class VideoItems extends Component {
	render() {
		let { snippet, statistics } = this.props;

		function fiveWords(str) {
			str = str.split(" ");
			if(str.length < 8) {
				return str.join(" ");
			} else {
				let fiveWords = str.filter( (a,i) => i < 8 );
				return fiveWords.join(" ");
			}
		}
		let theWords = fiveWords(snippet.title);

		function convertViews(str) {
			if(str.length === 3) {
				return str;
			} else if (str.length === 4) {
				str = str.substr(0,1);
				return str + "K";
			} else if(str.length === 5) {
				str = str.substr(0,2);
				return str + "K";
			} else if(str.length === 6) {
				str = str.substr(0,3);
				return str + "K"
			} else if(str.length === 7) {
				str = str.substr(0,1);
				return str + "M"
			} else if(str.length === 8) {
				str = str.substr(0,2);
				return str + "M";
			} else if(str.length === 9) {
				str = str.substr(0,3);
				return str + "M";
			} else {
				str = str.substr(0,1);
				return str + "B";
			}
		}

		let date = new Date(snippet.publishedAt);
		let newDate = date.toDateString();

		function convertDate(str) {
			str = str.split(" ");
			str.shift();
			return str.join(" ");
		}
		let views = convertViews(statistics.viewCount);
		let theDate = convertDate(newDate);

		return (
				<div style={{padding:"20px"}}>
					<img
						src={snippet.thumbnails.high.url}
						height="112"
						width='200'/>
					<div style={{display:'flex', flexWrap:'wrap', width:'200px'}}>
						<p style={{fontFamily:"Roboto", fontWeight:'bold'}}>{theWords}</p>
					</div>

					<div style={{display:'flex', flexWrap:'wrap', width:'200px', paddingTop:10}}>
						<p style={{fontSize:15, color:"#888888"}}>{snippet.channelTitle}</p>
					</div>

					<div style={{display:'flex', flexWrap:'wrap', width:'200px', paddingTop:10}}>
						<p style={{fontSize:15, color:"#888888"}}>
							{views} <span style={{fontSize:"20px"}}>&middot;</span> {theDate}
						</p>
					</div>
				</div>
		);
	}
}

export default VideoItems;
