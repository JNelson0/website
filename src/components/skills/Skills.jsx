import "./skills.scss";
import {
	Container,
	Row,
	Col,
	ProgressBar,
	Card,
	Button,
} from "react-bootstrap";

export default function Skills() {
	return (
		<div className="skills" id="skills">
			<Container fluid className="cont">
				<Col md className="col">
					<div className="rowLeft">
						<h1>My Journey</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tenetur asperiores, blanditiis tempore,
							assumenda vero quae dignissimos autem voluptate
							ipsum officia voluptatum ut ad nulla alias hic
							quibusdam architecto a repellendus!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tenetur asperiores, blanditiis tempore,
							assumenda vero quae dignissimos autem voluptate
							ipsum officia voluptatum ut ad nulla alias hic
							quibusdam architecto a repellendus!
						</p>
					</div>
					<Card>
						<Card.Header as="h5">Key Achievement</Card.Header>
						<Card.Body>
							<Card.Title>Hackathon 1st place</Card.Title>
							<Card.Text>
								First place in Machine Learning and Artificial
								intelligence category. Creating a video
								streaming solution for people with low internet
								bandwidth using SRGAN for video upscaling.
							</Card.Text>
							<Button variant="primary" href="/#Hackathon">
								Check out the project!
							</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col md className="col">
					<div className="rowRight">
						<h2>Web Developement</h2>
						<h4>React.js</h4>
						<ProgressBar
							variant="blue"
							animated
							now={85}
							className="mb-3"
						/>
						<h4>Angular</h4>
						<ProgressBar variant="blue" animated now={50} />
					</div>
					<div className="rowRight">
						<h2>Software Development</h2>
						<h4 className="python">Python</h4>
						<ProgressBar
							variant="blue"
							animated
							now={95}
							className="mb-3"
						/>
						<h4 className="c">C++</h4>
						<ProgressBar variant="blue" animated now={70} />
					</div>
				</Col>
			</Container>
		</div>
	);
}
