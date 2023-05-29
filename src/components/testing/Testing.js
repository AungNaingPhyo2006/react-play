import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Header from "../utils/Header";

function Testing() {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	return (
		<div>
			<Header title="Hello world" color="blue" />
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

export default Testing;
