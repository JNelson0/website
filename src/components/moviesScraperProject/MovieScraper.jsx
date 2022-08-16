import React from "react";
import "./movieScraper.scss";
import { Container, Tab, Nav, Col, ListGroup } from "react-bootstrap";

import movieScraper from "../../assets/MovieScraper.mp4";
export default function MovieScraper() {
	return (
		<div className="movieScraper" id="MovieScraper">
			<Container fluid className="container">
				<h1 className="title">Movie Finder</h1>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<div className="row">
						<Col sm={3}>
							<Nav variant="pills" className="flex-column nav">
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
									<Nav.Link eventKey="third">
										Demo Video
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
										The Movie Finder web application creates
										a portal for users to view all available
										movies with streaming capability hosted
										on top media streaming services
										(Netflix, HBO, Hulu, etc.) If users
										don't know what a streaming platform
										offers before signing up for pricy
										subscriptions they can use Movie Finder
										to look at available streaming
										capabilities from each platform before
										making a decision.
									</p>
									<h2>How does it work?</h2>
									<p>
										Movie Finder pulls current movie and
										tv-show data using Selenium web driver
										and Python webscraping, compiling the
										data into a PostgreSQL databse which is
										then converted by React, HTML, and CSS
										into a website suitable for users.
										Selecting a movie or tv-show will
										connect the user directly to the
										associated host streaming platform.
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
								<Tab.Pane eventKey="third">
									<video controls="true">
										<source
											src={movieScraper}
											type="video/mp4"
										/>
									</video>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</div>
				</Tab.Container>
			</Container>
		</div>
	);
}
