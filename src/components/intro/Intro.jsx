import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import me from "../../assets/me.jpeg";
import arrow from "../../assets/down.png";
export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["Developer", "Designer", "Engineer"],
		});
	}, []);
	return (
		<Container className="container" fluid id="intro">
			<Col className="left">
				<div className="image mt-3">
					<Image src={me} responsive />
				</div>
			</Col>
			<Col className="right">
				<h2>Hi There, I'm</h2>
				<h1>Jared Nelson</h1>
				<h3>
					Software <span ref={textRef}></span>
				</h3>
				<a href="#about">
					<img src={arrow} alt="" />
				</a>
			</Col>

			{/* <div className="intro" id="intro">
				<div className="left">
					<div className="imgContainer"></div>
				</div>
				<div className="right">
					<div className="wrapper"></div>
					<a href="#about">
						<img src="assets/down.png" alt="" />
					</a>
				</div>
			</div> */}
		</Container>
	);
}
