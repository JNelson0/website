import { React, useState, useRef } from "react";
import { Container, Form, Row, Button, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
	const formInfo = useRef();

	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState(false);

	const [info, setInfo] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			setEmail(true);
		}

		setValidated(true);

		if (email) {
			sendEmail(event);
		}
	};

	const [show, setShow] = useState(false);

	const handleClear = () => {
		resetForm();
		setShow(false);
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const resetForm = () => {
		setInfo({
			name: "",
			email: "",
			message: "",
		});
		setValidated(false);
	};

	function sendEmail(e) {
		emailjs
			.sendForm(
				"mygmail",
				"recieve_template",
				formInfo.current,
				"user_FPHoEtpHVXAxEgNia64ri"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		emailjs
			.sendForm(
				"mygmail",
				"send_template",
				formInfo.current,
				"user_FPHoEtpHVXAxEgNia64ri"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setEmail(false);
	}

	return (
		<Container className="contact" id="contact" md>
			<h1>Send me a message!</h1>
			<Form
				className="form"
				noValidate
				ref={formInfo}
				validated={validated}
				onSubmit={handleSubmit}
				onReset={handleShow}
			>
				<Row className="mb-3">
					<Form.Group md="4" controlId="validationCustom01">
						<Form.Label>Name</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Your name"
							name="name"
							value={info.name}
							onChange={handleChange}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter your name.
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group md="4" controlId="validationCustom02">
						<Form.Label>Email</Form.Label>
						<Form.Control
							required
							type="email"
							placeholder="Example@gmail.com"
							name="email"
							value={info.email}
							onChange={handleChange}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter an email address.
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group md="4" controlId="ValidationCustom03">
						<Form.Label>Message</Form.Label>
						<Form.Control
							required
							as="textarea"
							rows={3}
							name="message"
							value={info.message}
							onChange={handleChange}
						/>
						<Form.Control.Feedback type="invalid">
							Please send me a message.
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Button type="submit">Submit</Button>
				<Button className="m-3" type="reset" variant="secondary">
					Clear
				</Button>
			</Form>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Clear your message to me</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to clear?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleClear}>
						Clear
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
}
