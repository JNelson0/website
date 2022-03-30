import "./about.scss";
import Terminal from "../terminal/Terminal";
import { React, useState } from "react";

export default function About() {
    const [terminalActive, setTerminalActive] = useState(false);
    return (
        <div className="about" id="about">
            {terminalActive ? (
                <div className="terminal">
                    <Terminal setTerminalActive={setTerminalActive} />
                </div>
            ) : (
                <div className="about">
                    <div className="topWrapper">
                        <h1>About Me</h1>
                        <span className="line"></span>
                        <span className="line2"></span>
                    </div>
                    <div className="bottomWrapper">
                        <p>
                            I am currently in my final semester at the
                            University of Nevada Reno studying Computer Science
                            and Engineering.
                        </p>
                        <p>
                            I have a strong passion for software development,
                            machine learning, full stack web development, and
                            application development. I am constantly learning
                            and working on projects to strengthen my coding
                            potential.
                        </p>
                        <h2>Learn more about my:</h2>
                        <div className="linkClicker">
                            <a className="portfolio" href="#portfolio">
                                Projects
                            </a>
                            <a className="skills" href="#skills">
                                Skills
                            </a>
                        </div>
                    </div>
                    <div
                        className="goBack"
                        onClick={() => setTerminalActive(true)}
                    >
                        Check this out!!!
                    </div>
                </div>
            )}
        </div>
    );
}
