import React from "react";

function Header({ title, color }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: color,
			}}>
			<h1>{title}</h1>
		</div>
	);
}

export default Header;
