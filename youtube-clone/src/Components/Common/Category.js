import React from 'react';

const Categories = (props) => {
	return (
		<div className="sidenav-i">
			<i className="material-icons">{props.icon}</i>
			<h6>{props.category}</h6>
		</div>
	);
}

export default Categories;
