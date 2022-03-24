import { React, useState } from "react";
import { ReactTerminal } from "react-terminal";
import "./terminal.scss";
import { Link } from "react-router-dom";

export default function Terminal({ setTerminalActive }) {
    function isColor(strColor) {
        var s = new Option().style;
        s.color = strColor;
        return s.color === strColor;
    }

    const welcomeMessage = (
        <span>
            Want to know more about me? Start by typing help! <br />
        </span>
    );

    const defaultTheme = {
        themeBGColor: "#151515",
        themeToolbarColor: "#424242",
        themeColor: "#ffffff",
        themePromptColor: "#42a5f5",
    };

    const [customTheme, setCustomTheme] = useState({
        themeBGColor: "#151515",
        themeToolbarColor: "#424242",
        themeColor: "#ffffff",
        themePromptColor: "#42a5f5",
    });

    const [templateTheme, setTemplateTheme] = useState();

    const commands = {
        help: (
            <span>
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">>"}
                    </span>{" "}
                    Any value such as "__color__" requires your input replacing
                    "__color__"
                </span>
                <br /> <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    help : Display commands
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    clear : Clear terminal
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    resume : Download my resume!
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    about : Some info about me!
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    projects : Check out my projects!
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    skills : Check out my skills!
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    contact : Send me an email!
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    LinkedIn : Connect with me!
                </span>
                <br /> <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    themes : Display all premade themes
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    change-theme __theme__ : Try a premade theme!
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    change-background-color __color__ : Change terminal
                    background color
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    change-text-color __color__ : Change terminal text color
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    change-arrow-color __color__ : Change terminal line arrow
                    color
                </span>
                <br />
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    change-topbar-color __color__ : Change terminal topbar color
                </span>
            </span>
        ),
        resume: (
            <span>
                <Link
                    className="itemContainer"
                    to="/public/files/JaredNelsonResume.pdf"
                    target="_blank"
                    download
                >
                    resume.pdf
                </Link>
            </span>
        ),
        about: () => setTerminalActive(false),
        projects: () => (
            <span>
                <a href="#portfolio">Cool Projects!</a>
            </span>
        ),
        skills: () => (
            <span>
                <a href="#skills">Nice skills!</a>
            </span>
        ),
        contact: () => (
            <span>
                <a href="#contact">How to contact me!</a>
            </span>
        ),
        LinkedIn: () => (
            <span>
                <a
                    href="https://www.linkedin.com/in/jared-nelson-31231419a/"
                    target="_blank"
                >
                    Connect with me!
                </a>
            </span>
        ),
        themes: (
            <span>
                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    light
                </span>
                <br />

                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    dark
                </span>
                <br />

                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    material-light
                </span>
                <br />

                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    material-dark
                </span>
                <br />

                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    material-ocean
                </span>
                <br />

                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    matrix
                </span>
                <br />

                <span>
                    <span
                        style={{
                            color: customTheme.themePromptColor
                                ? customTheme.themePromptColor
                                : defaultTheme.themePromptColor,
                        }}
                    >
                        {">"}
                    </span>{" "}
                    dracula
                </span>
            </span>
        ),
        "change-theme": (theme) => {
            if (theme === "default") {
                setTemplateTheme();
                setCustomTheme(defaultTheme);
            } else if (theme === "light") {
                setTemplateTheme("light");
            } else if (theme === "dark") {
                setTemplateTheme("dark");
            } else if (theme === "material-light") {
                setTemplateTheme("material-light");
            } else if (theme === "material-dark") {
                setTemplateTheme("material-dark");
            } else if (theme === "material-ocean") {
                setTemplateTheme("material-ocean");
            } else if (theme === "matrix") {
                setTemplateTheme("matrix");
            } else if (theme === "dracula") {
                setTemplateTheme("dracula");
            } else {
                return <span>Sorry I don't know that theme!</span>;
            }
        },
        "change-background-color": (color) => {
            if (isColor(color)) {
                setCustomTheme({
                    ...customTheme,
                    themeBGColor: color,
                });
            } else {
                return <span>I couldn't find the color you entered!</span>;
            }
        },
        "change-text-color": (color) => {
            if (isColor(color)) {
                setCustomTheme({
                    ...customTheme,
                    themeColor: color,
                });
            } else {
                return <span>I couldn't find the color you entered!</span>;
            }
        },
        "change-arrow-color": (color) => {
            if (isColor(color)) {
                setCustomTheme({
                    ...customTheme,
                    themePromptColor: color,
                });
            } else {
                return <span>I couldn't find the color you entered!</span>;
            }
        },
        "change-topbar-color": (color) => {
            if (isColor(color)) {
                setCustomTheme({
                    ...customTheme,
                    themeToolbarColor: color,
                });
            } else {
                return <span>I couldn't find the color you entered!</span>;
            }
        },
    };
    return (
        <div className="terminal">
            <ReactTerminal
                welcomeMessage={welcomeMessage}
                commands={commands}
                errorMessage="Try another command or enter 'help' for list of all commands"
                themes={{
                    custom: customTheme,
                }}
                theme={templateTheme !== undefined ? templateTheme : "custom"}
            />
        </div>
    );
}
