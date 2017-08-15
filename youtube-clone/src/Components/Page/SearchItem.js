import React, { Component } from 'react';

class SearchItem extends Component {
	render() {
		return(
			<div style={{display:"flex", paddingTop:"20px"}}>
				<img src="https://placehold.it/150" />
				<div style={{marginLeft:"20px", border:"2px solid red", width:"40%",paddingTop:"15px"}}>
					<h1 style={{fontSize:"20px", paddingBottom:"5px"}}><b>Bruno Mars - When I Was Your Man [Official Video]</b></h1>
					<h3 style={{fontSize:"13px", paddingBottom:"10px", color:"#767676"}}>Bruno Mars 559M views 4 years ago</h3>
					<h3 style={{fontSize:"13px",color:"#767676"}}>Description- egan church-key pok pok PBR&B tumeric. Kombucha literally keytar selvage vaporware mumblecore lyft dreamcatcher master cleanse taiyaki drinking </h3>
				</div>
			</div>
		);
	}
}

export default SearchItem;
