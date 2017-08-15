import React  from 'react';

const PageItem = (props) => {
	return (
			<div className="pageCol">
				<div style={{paddingTop:"20px", width:"100%"}}>
					<div className="pageItemsContainer">
						<div>
							<img src={props.thumbnail} width="250" height="150"/>
						</div>
						<div style={{marginLeft:"10px"}}>
							<h1 className="titleOfVid">{props.title}</h1>
							<div className="dateAndTitle">
							<p className="titleInfo" style={{color:"#167ac6"}}>{props.channelTitle}</p>
							<p className="titleInfo">
								{props.views} {" "}
								<span style={{fontWeight:"bold", fontSize:"15px"}}>&middot;</span> {" "}
								{props.date}
							</p>
							</div>
							<p className="titleInfo">{props.description}</p>
						</div>
					</div>
				</div>
			</div>
	);
}

export default PageItem;
