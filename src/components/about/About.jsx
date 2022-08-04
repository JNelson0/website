import "./about.scss";
import Terminal from "../terminal/Terminal";
import { React, useState } from "react";

import { Button, Row, Col, Container } from "react-bootstrap";
import { Calculate } from "@mui/icons-material";

export default function About() {
	const [terminalActive, setTerminalActive] = useState(false);
	return (
		<Container className="outer" id="about" fluid>
			<Col className="c1" md>
				Need something to fill the void
			</Col>
			<Col className="c2" md>
				<h2>About me</h2>

				<p>
					I am a recent graduate from the University of Nevada Reno,
					where I recieved a Bachelor's degree in Computer Science and
					Engineering.
				</p>
				<p>
					I have a strong passion for software development, machine
					learning, full stack web development, and application
					development. I am constantly learning and working on
					projects to strengthen my coding potential.
				</p>
				<p>
					Outside of coding I enjoy traveling, backpacking, and
					anything outdoors.
				</p>
				<h2>Learn more about my:</h2>
				<div className="buttons">
					<Button variant="outline-secondary" href="#portfolio">
						Portfolio
					</Button>
					<Button
						className="m-3"
						variant="outline-secondary"
						href="#skills"
					>
						Skills
					</Button>
				</div>
			</Col>
		</Container>
	);
}
