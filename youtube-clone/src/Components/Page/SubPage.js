import React, { Component } from 'react';
import PageItem from './PageItem';

class SubPage extends Component {
	render() {
		return (
			<div className="container container-background">
				<div className="card">
					<div className="bannerPic"></div>
					<div className="paddingTitle">
						<h1 className="page-title">{this.props.categoryTitle}</h1>
						<div style={{display:"flex", justifyContent:"space-between", width:"110px"}}>
							<h3 className="page-home-tab" style={{width:"45px", }}>Home</h3>
							<h3 style={{borderBottom:"3px solid red", width:"50%"}}>{this.props.categoryTitle}</h3>
						</div>
					</div>
				</div>
				<div className="pageItems">
					<div className="pageCol">
							<PageItem />
					</div>
				</div>
			</div>
		);
	}
}

export default SubPage;
