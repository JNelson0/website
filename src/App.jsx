import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import MovieScraper from "./components/moviesScraperProject/MovieScraper";
import MainPage from "./components/mainPage/MainPage";
import Hackathon from "./components/hackathon/Hackathon";
import NetworkMonitor from "./components/networkMonitor/NetworkMonitor";
import PortfolioPage from "./components/portfolioPage/PortfolioPage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.scss";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<MainPage />} />
					<Route path="Portfolio" element={<PortfolioPage />} />
					<Route path="MovieScraper" element={<MovieScraper />} />
					<Route path="Hackathon" element={<Hackathon />} />
					<Route path="NetworkMonitor" element={<NetworkMonitor />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
