import "./portfolio.scss";
import { useState } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import webScraping from "../../assets/WebScraperPic.png";
import hackathon from "../../assets/HackathonPic.png";
import network from "../../assets/NetworkMonitoring.png";

export default function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>

			<Container fluid className="cont">
				<div className="cards ">
					<Card
						className="m-3"
						style={{ width: "18rem", overflow: "visible" }}
					>
						<Card.Img variant="top" src={webScraping} />
						<Card.Body>
							<Card.Title>Python Web Scraping</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button href="/MovieScraper" variant="primary">
								More about the project
							</Button>
						</Card.Body>
					</Card>

					<Card
						className="m-3"
						style={{ width: "18rem", overflow: "visible" }}
					>
						<Card.Img variant="top" src={hackathon} />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button href="/Hackathon" variant="primary">
								More about the project
							</Button>
						</Card.Body>
					</Card>

					<Card
						className="m-3"
						style={{ width: "18rem", overflow: "visible" }}
					>
						<Card.Img variant="top" src={network} />
						<Card.Body>
							<Card.Title>Network Monitoring</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button href="/NetworkMonitor" variant="primary">
								More about the project
							</Button>
						</Card.Body>
					</Card>
				</div>
			</Container>
		</div>
	);
}
