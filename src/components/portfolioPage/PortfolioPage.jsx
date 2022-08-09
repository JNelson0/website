import React from "react";
import "./portfolioPage.scss";
import MovieScraper from "../moviesScraperProject/MovieScraper";
import Hackathon from "../hackathon/Hackathon";
import NetworkMonitor from "../networkMonitor/NetworkMonitor";
import PortfolioTopBar from "../portfolioTopBar/PortfolioTopBar";

export default function PortfolioPage() {
	return (
		<div className="portfolioPage">
			<PortfolioTopBar />
			<div className="sections">
				<div className="item">
					<MovieScraper />
				</div>
				<div className="item">
					<Hackathon />
				</div>
				<div className="item">
					<NetworkMonitor />
				</div>
			</div>
		</div>
	);
}
