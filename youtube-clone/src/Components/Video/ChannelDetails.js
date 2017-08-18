import React, { Component } from 'react';
import { convertViews, convertDate, limitDescription} from '../../resusableFxns';
import "./VideoCss.css";

class ChannelDetails extends Component {
	constructor() {
		super();
			this.state = {
				show: true
		}
	}

	render() {
		 const showLessMore =()=> {
			if(this.state.show === true){
				return "show";
			} else {
				return "none";
			}
		}

		console.log(this.state.show);
		return (
			<div>
				<hr />
				<div style={{display:"flex", justifyContent:"space-between"}}>
					<div style={{display:"flex"}}>
						<div>
							<img style={{width:"70px", borderRadius:"50%"}} src={this.props.channelThumbnail}/>
						</div>
						<div style={{marginLeft:"2%"}}>
							<h1 style={{fontWeight:"bold", letterSpacing:".3px"}}>{this.props.channelTitle}</h1>
							<p style={{fontSize: '12px', color:"#707070"}}>Published on {convertDate(this.props.date)}</p>
							<div className={showLessMore()}>
								<h1 style={{marginTop:"25px", lineHeight:"200%"}}>{this.props.description}</h1>
							</div>
							<h1 onClick={()=> this.setState({show: !this.state.show})} style={{fontSize: '15px', color:"#707070", cursor:"pointer"}}>SHOW LESS</h1>
						</div>
					</div>

					<div>
						<button className="btn btn-danger" style={{marginRight:"20px"}}>Subscribe {this.props.subCount}</button>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default ChannelDetails;
