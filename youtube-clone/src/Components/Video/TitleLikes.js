import React, { Component } from 'react';
import Recommended from './Recommended';
import { convertViews } from '../../resusableFxns';
class TitleLikes extends Component {

	likeToDislikes() {
		let total = parseInt(this.props.likes) + parseInt(this.props.dislikes);
		let percentageOfLikes = this.props.likes/total * 100;
		return {
			width: percentageOfLikes + "%",
			height: "100%",
			background: "#2693e6"
		}
	}

	render() {
		return (
			<div className="superContainer">
				<div className="titleLikesViews">
					<div className="titleLikesViewsContainer">
						<div className="positioningTitleLikes">
							<div>
								<h1 className="mainVideoTitle">{this.props.videoTitle}</h1>
								<h3 style={{color:"#a0a0a0", marginTop:"10px", fontSize:"17px"}}>{this.props.views} views</h3>
							</div>

							<div className="positionLikes">
								<div className="text-center theThumbup">
									<i className="material-icons iconsColorFonts">thumb_up</i>{" "}<span className="like">{convertViews(this.props.likes)}</span>
							</div>

							<div className="text-center">
								<i className="material-icons iconsColorFonts">thumb_down</i>{" "}<span className="dislike">{convertViews(this.props.dislikes)}</span>
							</div>

								<h3><i style={{color:"#a0a0a0", fontSize:"25px"}} className="material-icons iconsColorFonts">redo</i></h3>
								<i style={{color:"#a0a0a0", fontSize:"25px"}} className="material-icons iconsColorFonts">toc</i>
							</div>
						</div>
					</div>
				</div>
				<div className="likeDislike">
					<div style={this.likeToDislikes()}></div>
				</div>
			</div>
		);
	}
}

export default TitleLikes;
