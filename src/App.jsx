import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import MovieScraper from "./components/moviesScraperProject/MovieScraper";
import MainPage from "./components/mainPage/MainPage";
import Hackathon from "./components/hackathon/Hackathon";
import NetworkMonitor from "./components/networkMonitor/NetworkMonitor";

import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Container, Button, Row, Col } from "react-bootstrap";

import "./app.scss";

function App() {
	return (
		<div className="app">
			<BrowserRouter basename="/website/">
				<Routes>
					<Route index path="/" element={<MainPage />} />
					{/* <Route path="/MovieScraper" element={<MovieScraper />} />
					<Route path="/Hackathon" element={<Hackathon />} />
					<Route
						path="/NetworkMonitor"
						element={<NetworkMonitor />}
					/> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
