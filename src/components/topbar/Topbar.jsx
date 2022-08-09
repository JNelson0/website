import "./topbar.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import resume from "../../assets/JaredNelsonResume.pdf";

function CollapsibleExample() {
	return (
		<Navbar
			collapseOnSelect
			className="topbar"
			expand="lg"
			bg="dark"
			variant="dark"
		>
			<Container fluid>
				<Navbar.Brand href="#intro">Jared Nelson</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#portfolio">Portfolio</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link target="_blank" href={resume}>
							Download my resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
