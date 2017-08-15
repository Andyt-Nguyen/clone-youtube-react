import React, { Component } from 'react';
import PageItem from './PageItem';

class SubPageHeader extends Component {
	render() {
		return (
				<div className="card">
					<img className="card-img-top" src={this.props.bannerImage} />
					<div className="card-block">
							<h1 className="page-title">{this.props.categoryTitle}</h1>
							<div style={{display:"flex", justifyContent:"space-between", width:"10%"}}>
								<h3 className="page-home-tab" style={{width:"45px", }}>Home</h3>
								<h3 style={{borderBottom:"3px solid red", width:"55%"}}>{this.props.categoryTitle}</h3>
							</div>
					</div>
				</div>
		);
	}
}

export default SubPageHeader;
