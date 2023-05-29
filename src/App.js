import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./components/card/CardComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Testing from "./components/testing/Testing";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cardComponent" element={<CardComponent />} />
				<Route path="/testComponent" element={<Testing />} />
			</Routes>
		</Router>
	);
}

export default App;
