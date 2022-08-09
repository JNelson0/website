import React from "react";

import { Nav, Container, Navbar } from "react-bootstrap";

export default function PortfolioTopBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container fluid>
				<Navbar.Brand href="/">Jared Nelson</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#MovieScraper">Movie Finder</Nav.Link>
						<Nav.Link href="#Hackathon">Hackathon</Nav.Link>
						<Nav.Link href="#NetworkMonitor">
							Network Monitoring
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/" style={{ color: "white" }}>
							Thank you for visiting my portfolio!
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
