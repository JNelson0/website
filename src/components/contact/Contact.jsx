import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();

    const [emailDetails, setEmailDetails] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setEmailDetails({
            ...emailDetails,
            [e.target.name]: e.target.value,
        });
    };

    const resetInput = () => {
        setEmailDetails({
            name: "",
            email: "",
            message: "",
        });
    };

    const [confirm, setConfirm] = useState(false);

    const emailSubmit = (e) => {
        e.preventDefault();
        setConfirm(true);
    };

    function sendEmail(e) {
        console.log(form.current);
        emailjs
            .sendForm(
                "mygmail",
                "recieve_template",
                form.current,
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
                form.current,
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
        resetInput();
        setConfirm(false);
    }
    const handleConfirmButton = (e) => {
        sendEmail(e);
    };

    const messageConfirmation = (e) => {
        return (
            <div className="confirmation">
                <h1 className="messageDetials">Your message to me!</h1>
                <div className="details">
                    <div className="emailName">
                        Your name:
                        <br /> {emailDetails.name}
                    </div>
                    <div className="emailAddress">
                        Your email address: <br />
                        {emailDetails.email}
                    </div>
                    <div className="emailMessageTitle">Your message:</div>
                    <div className="emailMessage">{emailDetails.message}</div>
                </div>

                <span>Are you ready to send?</span>
                <div className="buttonWrapper">
                    <button onClick={() => handleConfirmButton(e)}>Yes</button>
                    <button onClick={() => setConfirm(false)}>Not yet</button>
                </div>
            </div>
        );
    };

    return (
        <div className="contact" id="contact">
            {confirm ? messageConfirmation() : <></>}
            <form className="emailWrapper" ref={form} onSubmit={emailSubmit}>
                <div className="sendMe">Send Me a Message!</div>
                <label>Name:</label>
                <input
                    className="info"
                    placeholder="Enter Your Name"
                    type="text"
                    name="name"
                    value={emailDetails.name}
                    onChange={handleChange}
                    required
                />
                <label>Email:</label>
                <input
                    className="info"
                    placeholder="Enter Your Email address"
                    type="email"
                    name="email"
                    value={emailDetails.email}
                    onChange={handleChange}
                    required
                />
                <label>Message:</label>
                <textarea
                    id="textArea"
                    placeholder="Empty Message"
                    name="message"
                    value={emailDetails.message}
                    onChange={handleChange}
                    required
                />
                {confirm ? (
                    <></>
                ) : (
                    <div className="submitButtons">
                        <input
                            type="button"
                            value="Clear"
                            onClick={resetInput}
                        />
                        <input type="submit" value="Send" />
                    </div>
                )}
            </form>
        </div>
    );
}
