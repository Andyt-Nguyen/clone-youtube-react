import React, { Component } from 'react';
import { convertViews, convertDate, limitDescription} from '../../resusableFxns';
import "./VideoCss.css";

class ChannelDetails extends Component {
	constructor() {
		super();
			this.state = {
				show: false,
				openDescription: "SHOW MORE"
		}
	}

	render() {
		 const showLessMore =()=> {
			if(this.state.show === true){
				// this.setState({openDescription:"SHOW LESS"});
				return "show";
			} else {
				// this.setState({openDescription:"SHOW MORE"});
				return "none";
			}
		}

		return (
			<div className="channelContainer">
				<hr />
				<div className="positionChannelContainer">
					<div style={{display:"flex"}}>
						<div>
							<img className="channelThumbnail" src={this.props.channelThumbnail}/>
						</div>
						<div style={{marginLeft:"2%"}}>
							<h1 className="channelTitle">{this.props.channelTitle}</h1>
							<p className="channelDate">Published on {convertDate(this.props.date)}</p>
							<div className={showLessMore()}>
								<h1 className="channelDescription">{this.props.description}</h1>
							</div>
							<h1 onClick={()=>console.log("yoy yoyyyy")} className="showLessMore">{this.state.openDescription}</h1>
						</div>
					</div>

					<div className="button">
						<button className="subButton" style={{marginRight:"20px"}}>SUBSCRIBE {this.props.subCount}</button>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default ChannelDetails;
