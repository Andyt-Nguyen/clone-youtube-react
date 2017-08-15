import React  from 'react';

const PageItem = (props) => {
	return (
			<div className="pageCol">
				<div style={{paddingTop:"20px", width:"100%"}}>
					<div style={{display:"flex"}}>
						<div>
							<img src={props.thumbnail} width="250" height="150"/>
						</div>
						<div style={{marginLeft:"10px"}}>
							<h1 className="titleOfVid">{props.title}</h1>
							<div className="dateAndTitle">
							<p className="titleInfo" style={{color:"#167ac6"}}>{props.channelTitle}</p>
							<p className="titleInfo" style={{border:"2px solid green"}}>
								<span>{props.views} {" "}</span>
								<span style={{fontSize:"30px"}}>&middot;</span>
								<span>{props.date}</span>
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
