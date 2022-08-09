import "./portfolio.scss";
import { Container, Card, Button } from "react-bootstrap";
import webScraping from "../../assets/WebScraperPic.png";
import hackathon from "../../assets/HackathonPic.png";
import network from "../../assets/NetworkMonitoring.png";

export default function Portfolio() {
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>

			<Container fluid className="cont">
				<div className="cards ">
					<Card className="m-3 card">
						<Card.Img
							variant="top"
							src={webScraping}
							style={{ height: "40%" }}
						/>
						<Card.Body style={{ overflow: "visible" }}>
							<Card.Title>Python Web Scraping</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button
								href="/Portfolio#MovieScraper"
								variant="primary"
							>
								More about the project
							</Button>
						</Card.Body>
					</Card>

					<Card className="m-3 card">
						<Card.Img
							variant="top"
							src={hackathon}
							style={{ height: "40%" }}
						/>
						<Card.Body style={{ overflow: "visible" }}>
							<Card.Title>SRGAN Video Upscaling</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button
								href="/Portfolio#Hackathon"
								variant="primary"
							>
								More about the project
							</Button>
						</Card.Body>
					</Card>

					<Card className="m-3 card">
						<Card.Img
							variant="top"
							src={network}
							style={{ height: "40%" }}
						/>
						<Card.Body style={{ overflow: "visible" }}>
							<Card.Title>Network Monitoring</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button
								href="/Portfolio#NetworkMonitor"
								variant="primary"
							>
								More about the project
							</Button>
						</Card.Body>
					</Card>
				</div>
			</Container>
		</div>
	);
}
