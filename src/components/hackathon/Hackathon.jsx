import React from "react";
import "./hackathon.scss";
import { Container, Tab, Nav, Row, Col, ListGroup } from "react-bootstrap";
import crop from "../../assets/crop.mp4";
import upscale from "../../assets/upscale.mp4";

export default function Hackathon() {
	return (
		<div className="hackathon" id="Hackathon">
			<Container fluid className="container">
				<Col style={{ overflow: "visible" }} md>
					<h1 className="title ">
						SRGAN Video Upscaling and Streaming
					</h1>
					<Tab.Container
						id="left-tabs-example"
						defaultActiveKey="first"
					>
						<Row>
							<Col sm={3}>
								<Nav
									variant="pills"
									className="flex-column nav"
									v
								>
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
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<h2>Summary</h2>
										<p>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Quas
											distinctio consequatur possimus odit
											sunt enim, esse neque. Repellendus,
											officiis dolor. Corrupti, fuga
											consequatur. Repellat debitis
											quibusdam fugiat cum, similique
											minima.
										</p>
										<h2>How does it work?</h2>
										<p>
											Lorem, ipsum dolor sit amet
											consectetur adipisicing elit. Harum
											reprehenderit magnam reiciendis a
											nemo deserunt fugit iste asperiores
											ea, culpa excepturi nulla vero fuga.
											Velit voluptate nesciunt sunt hic
											temporibus!
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
													The web scraping scripts
													built with python
													programming language
													utilizing{" "}
													<a
														target="_blank"
														rel="noreferrer"
														href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
													>
														Beautiful Soup
													</a>{" "}
													for HTML parsing and movie
													compilation. Parsed html is
													then put into a PostgreSQL
													database containing movie
													information which is then
													displayed to user.
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
													from desired web pages and
													then passes this parsed HTML
													to my python scripts
													producing the database of
													movies.
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
													information from the
													database of movies and
													displays the information in
													an interactable format for
													users to view. Front end for
													the Movie Finder application
													is built using React, HTML,
													and CSS.
												</div>
											</ListGroup.Item>
										</ListGroup>
									</Tab.Pane>
									<Tab.Pane eventKey="third">
										<Col>
											<video controls="true">
												<source
													src={crop}
													type="video/mp4"
												/>
											</video>
											<video controls="true">
												<source
													src={upscale}
													type="video/mp4"
												/>
											</video>
										</Col>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Col>
			</Container>

			{/* <div className="center">
                <h1 className="title">Live Video Upscaling Using SRGANs</h1>
                <div className="description">
                    <h1>University of Nevada Reno Hackathon 2020</h1>
                    <p>
                        Sponsored coding competition hosted at the University of
                        Nevada Reno. Teams compete for a chance to win cash
                        prizes split between three categories including
                        Applications, Games, and Machine Learning / Artificial
                        Intelligence. Each team had 24 hours to complete their
                        project before final presentations.
                    </p>

                    <h1>Project Description</h1>
                    <p>
                        The category my team took part in was Machine Learning /
                        Artificial Intelligence. Our project goal was to create
                        an image and live video software that would grant users
                        with low internet bandwidth the ability to stream live
                        video to another user while reducing amount of bandwidth
                        used. Our solution to this problem was, reduce the
                        resolution of outgoing live video on the sending side of
                        the application and on the recieving side of the
                        application utilize a SRGAN to then upscale this video
                        feed. My team won first place in the Machine Learning /
                        Artificial Intelligence category for this competition.
                    </p>

                    <h1>What is a SRGAN?</h1>
                    <p>
                        SRGAN stands for Super Resolution Generative Adversarial
                        Network. The idea behind SRGANs is to take a low
                        resolution image and upscale the image into a high
                        resolution image. The end goal is achieving super
                        resolution images from the lowest quality images.
                    </p>

                    <h1>How did we implement a SRGAN?</h1>
                    <p>
                        SRGANs are meant to be used with single images to
                        upscale a low resolution image to high resolution.
                        Utilizing OpenCV python image processing and GPU
                        computations, we were able to split a video file frame
                        by frame (60 fps) and individualy process the frames
                        using the SRGAN. Applying this concept to captured live
                        video, we were able to successfully scale our low
                        resolution live video feed to high resolution.
                    </p>
                </div>
                <div className="movieWrapper">
                    <h1>Original video resolution</h1>
                    <h2>384 width x 216 height</h2>
                    <Player className="movie" src="assets/crop.mp4">
                        <BigPlayButton position="center" />
                    </Player>
                </div>
                <div className="movieWrapper">
                    <h1>Video resolution after SRGAN conversion</h1>
                    <h2>1536 width x 864 height</h2>
                    <Player className="movie" src="assets/upscale.mp4">
                        <BigPlayButton position="center" />
                    </Player>
                </div>
            </div> */}
		</div>
	);
}
