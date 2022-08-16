import React from "react";
import "./NetworkMonitor.scss";
import { Container, Tab, Nav, Col, ListGroup } from "react-bootstrap";
import researchPaper from "../../assets/researchpaper_Nelson_Jared.pdf";

export default function NetworkMonitor() {
	return (
		<div className="networkMonitor" id="NetworkMonitor">
			<Container fluid className="container">
				<h1 className="title">Network Monitoring</h1>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<div className="row">
						<Col sm={3}>
							<Nav variant="pills" className="flex-column nav" v>
								<Nav.Item>
									<Nav.Link eventKey="first">
										Description
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">
										Technologies
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href={researchPaper}
										target="_blank"
										eventKey="third"
									>
										Research Paper
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content
								style={{
									display: "flex",
									height: "100%",
									width: "100%",
								}}
							>
								<Tab.Pane eventKey="first">
									<h2>Summary</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Totam, iure error
										illum voluptates perspiciatis minus
										nostrum possimus quisquam magnam
										impedit? Deserunt unde maiores eum,
										voluptatibus similique dolore odit
										exercitationem fuga!
									</p>
									<h2>How does it work?</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Saepe ea, ullam
										recusandae aspernatur cupiditate
										provident corporis! Quam quos magnam
										nostrum? Sint at vero et. Ea, quaerat?
										Fugit laboriosam quia inventore!
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<ListGroup as="ol" numbered>
										<ListGroup.Item
											as="li"
											className="d-flex justify-content-between align-items-start"
										>
											<div className="ms-2 me-auto">
												<div className="fw-bold">
													Python and PostgreSQL
												</div>
												The web scraping scripts built
												with python programming language
												utilizing{" "}
												<a
													target="_blank"
													rel="noreferrer"
													href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
												>
													Beautiful Soup
												</a>{" "}
												for HTML parsing and movie
												compilation. Parsed html is then
												put into a PostgreSQL database
												containing movie information
												which is then displayed to user.
											</div>
										</ListGroup.Item>
										<ListGroup.Item
											as="li"
											className="d-flex justify-content-between align-items-start"
										>
											<div className="ms-2 me-auto">
												<div className="fw-bold">
													Selenium
												</div>
												<a
													target="_blank"
													rel="noreferrer"
													href="https://www.selenium.dev/documentation/webdriver/"
												>
													Selenium Web Driver
												</a>{" "}
												was used to pull active HTML
												from desired web pages and then
												passes this parsed HTML to my
												python scripts producing the
												database of movies.
											</div>
										</ListGroup.Item>
										<ListGroup.Item
											as="li"
											className="d-flex justify-content-between align-items-start"
										>
											<div className="ms-2 me-auto">
												<div className="fw-bold">
													React/HTML/CSS
												</div>
												The front end of the Movie
												Finder application pulls
												information from the database of
												movies and displays the
												information in an interactable
												format for users to view. Front
												end for the Movie Finder
												application is built using
												React, HTML, and CSS.
											</div>
										</ListGroup.Item>
									</ListGroup>
								</Tab.Pane>
								<Tab.Pane
									eventKey="third"
									style={{
										marginLeft: " auto",
										marginRight: "auto",
										textAlign: "center",
									}}
								>
									<h1>
										Thank you for reading my research paper
									</h1>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</div>
				</Tab.Container>
			</Container>

			{/* <h1>Network Monitoring</h1>
			<Link
				className="download"
				to="/files/researchpaper_Nelson_Jared.pdf"
				target="_blank"
				download
			>
				Download the research paper!
			</Link>
			<div className="pdf">
				<iframe
					className="pdfFile"
					src="files/researchpaper_Nelson_Jared.pdf#toolbar=0"
					frameborder="0"
					title="researchPaper_Nelson_Jared"
				></iframe>
			</div> */}
		</div>
	);
}
