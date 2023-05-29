import React from "react";
import { Link } from "react-router-dom";

function Cards({ title, fn, link }) {
	return (
		<Link
			style={{
				flex: 1,
				backgroundColor: "pink",
				padding: 5,
				margin: 5,
				borderRadius: 10,
				cursor: "pointer",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textDecoration: "none",
			}}
			// onClick={fn}
			to={link}>
			<h3
				style={
					{
						// backgroundColor: "blue",
						// display: "inline",
					}
				}>
				{title}
			</h3>
		</Link>
	);
}

export default Cards;
