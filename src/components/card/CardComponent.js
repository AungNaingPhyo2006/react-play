import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Cards from "./Cards";
import Header from "../utils/Header";

function CardComponent() {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	const doSomething = () => {
		alert("hello world!");
	};
	return (
		<div
			style={{
				backgroundColor: "cyan",
				margin: 15,
				padding: 15,
			}}>
			<Header title="	Hi, I am  Aung Naing Phyo" color="red" />
			{/* <=================main div 1===============> */}
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}>
				{/* <===============div================> */}
				<div
					style={{
						flex: 1,
						height: 80,
						// backgroundColor: "red",
						display: "flex",
						justifyContent: "center",
					}}>
					<Cards
						title="testing"
						fn={doSomething}
						link="/testComponent"
					/>

					<Cards title="card2" fn={doSomething} />
					<Cards title="card3" fn={doSomething} />
					<Cards title="card4" fn={doSomething} />
				</div>
				{/* <===============div================> */}
				<div
					style={{
						flex: 1,
						height: 80,
						// backgroundColor: "red",
						display: "flex",
						justifyContent: "center",
					}}>
					<Cards title="card5" fn={doSomething} />
					<Cards title="card6" fn={doSomething} />
					<Cards title="card7" fn={doSomething} />
					<Cards title="card8" fn={doSomething} />
				</div>
			</div>
			{/* <=================main div 2===============> */}
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
				}}>
				{/* <===============main  div 3================> */}
				<div
					style={{
						flex: 1,
						height: 80,
						// backgroundColor: "red",
						display: "flex",
						justifyContent: "center",
					}}>
					<Cards title="card9" fn={doSomething} />
					<Cards title="card10" fn={doSomething} />
					<Cards title="card11" fn={doSomething} />
					<Cards title="card12" fn={doSomething} />
				</div>
				{/* <===============main div 4================> */}
				<div
					style={{
						flex: 1,
						height: 80,
						// backgroundColor: "red",
						display: "flex",
						justifyContent: "center",
					}}>
					<Cards title="card13" fn={doSomething} />
					<Cards title="card14" fn={doSomething} />
					<Cards title="card15" fn={doSomething} />
					<Cards title="card16" fn={doSomething} />
				</div>
			</div>
			{/* <================button==================> */}
			<div
				style={{
					display: "flex",
					// backgroundColor: "black",
					justifyContent: "center",
					alignSelf: "center",
					marginTop: 30,
				}}>
				<Button
					onClick={goBack}
					style={{ backgroundColor: "blue", color: "#fff" }}>
					Go Back
				</Button>
			</div>
		</div>
	);
}

export default CardComponent;
