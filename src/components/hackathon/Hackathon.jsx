import React from "react";
import "./hackathon.scss";
import { Container, Tab, Nav, Col, ListGroup } from "react-bootstrap";
import crop from "../../assets/crop.mp4";
import upscale from "../../assets/upscale.mp4";

export default function Hackathon() {
	return (
		<div className="hackathon" id="Hackathon">
			<Container fluid className="container">
				<h1 className="title ">SRGAN Video Upscaling and Streaming</h1>
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
										This project is intended to allow users
										with low internet bandwidth to stream
										live video to another user while
										reducing the amount of bandwidth used.
										Our solution to this problem was, reduce
										the resolution of outgoing live video on
										the sending side of the application and
										on the recieving side of the application
										utilize a SRGAN to then upscale this
										video feed to full resolution.
									</p>
									<h2>How does it work?</h2>
									<p>
										SRGAN stands for Super Resolution
										Generative Adversarial Network. The idea
										behind SRGANs is to take a low
										resolution image and upscale the image
										into a high resolution image. The end
										goal is achieving super resolution
										images from the lowest quality images.
									</p>
									<p>
										SRGANs are meant to be used with single
										images to upscale a low resolution image
										to high resolution. Utilizing OpenCV
										python image processing and GPU
										computations, we were able to split a
										video file frame by frame (60 fps) and
										individualy process the frames using the
										SRGAN. Applying this concept to captured
										live video, we were able to successfully
										scale our low resolution live video feed
										to high resolution.
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
													Python
												</div>
												SRGAN application built using
												python programming language
												utilizing{" "}
												<a
													target="_blank"
													rel="noreferrer"
													href="https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html"
												>
													OpenCV
												</a>{" "}
												for video frame filtering and
												upscaling and{" "}
												<a
													target="_blank"
													rel="noreferrer"
													href="https://github.com/tensorlayer/srgan"
												>
													SRGAN
												</a>{" "}
												training library.
											</div>
										</ListGroup.Item>

										<ListGroup.Item
											as="li"
											className="d-flex justify-content-between align-items-start"
										>
											<div className="ms-2 me-auto">
												<div className="fw-bold">
													Django/HTML/CSS
												</div>
												The front end of the SRGAN
												application displaying the video
												stream before being upscaled and
												after.
											</div>
										</ListGroup.Item>
									</ListGroup>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<Col>
										<video
											controls="true"
											style={{
												width: "75%",
											}}
										>
											<source
												src={crop}
												type="video/mp4"
											/>
										</video>
										<video
											controls="true"
											style={{
												width: "75%",
											}}
										>
											<source
												src={upscale}
												type="video/mp4"
											/>
										</video>
									</Col>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</div>
				</Tab.Container>
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
