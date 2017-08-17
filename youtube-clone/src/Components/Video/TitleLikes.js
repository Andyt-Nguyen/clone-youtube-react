import React, { Component } from 'react';
import Recommended from './Recommended';

class TitleLikes extends Component {
	render() {
		return (
			<div className="titleLikesViews">

				<div className="titleLikesViewsContainer">

					<div className="positioningTitleLikes">

						<div>
							<h1 style={{fontSize:"20px"}}>Video Title Ipsum Lorem Of Some Kind</h1>
							<h3 style={{color:"#707070", marginTop:"10px"}}>2,189,123 views</h3>
						</div>

						<div className="positionLikes">
							<i className="material-icons iconsColorFonts">thumb_up</i>
							<i className="material-icons iconsColorFonts">thumb_down</i>
							<h3 style={{color:"#707070"}}><i className="material-icons iconsColorFonts">redo</i></h3>
							<i className="material-icons iconsColorFonts">toc</i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TitleLikes;