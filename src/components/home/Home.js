import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import CardComponent from "../card/CardComponent";
function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-logo">
					<img
						src="https://avatars.githubusercontent.com/u/115768795?v=4"
						alt="logo"
						className="My-logo"
					/>
				</div>

				<p style={{ display: "flex", justifyContent: "space-between" }}>
					<h3 style={{ color: "yellow" }}>Aung Naing Phyo</h3>
					<h4>*road to Mount Everest.*</h4>
				</p>
				<a
					className="App-link"
					href="https://github.com/AungNaingPhyo2006"
					target="_blank"
					rel="noopener noreferrer">
					Learn Me Here
				</a>
				<div style={{ marginTop: 20 }}></div>
				<Link
					to="/cardComponent"
					style={{
						textDecoration: "none",
						color: "red",
						height: 30,
						backgroundColor: "white",
						padding: 15,
						borderRadius: 10,
					}}>
					Explore
				</Link>
			</header>
		</div>
	);
}

export default Home;
