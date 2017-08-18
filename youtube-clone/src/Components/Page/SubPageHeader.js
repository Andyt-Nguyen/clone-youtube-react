import React, { Component } from 'react';
import { Link } from 'react-router';
import PageItem from './PageItem';

class SubPageHeader extends Component {
	render() {
		return (
				<div className="card">
					<img className="card-img-top" style={{width:"100%", margin:"auto"}} src={this.props.bannerImage} />
					<div className="card-block">
							<h1 className="page-title">{this.props.categoryTitle}</h1>
							<div style={{display:"flex", justifyContent:"space-between", width:"13%"}}>
								<Link to="/" style={{textDecoration:"none", color:"#000"}}><h3 className="page-home-tab" style={{width:"45px"}}>Home</h3></Link>
								<h3 style={{borderBottom:"3px solid red", width:"35%"}}>{this.props.categoryTitle}</h3>
							</div>
					</div>
				</div>
		);
	}
}

export default SubPageHeader;
