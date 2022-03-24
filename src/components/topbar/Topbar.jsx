import "./topbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import {
    Whatshot,
    MailOutline,
    PhoneOutlined,
    ContentCopy,
} from "@mui/icons-material/";
import DownloadIcon from "@mui/icons-material/Download";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Jared Nelson
                    </a>
                    <Link
                        className="itemContainer"
                        to="files/JaredNelsonResume.pdf"
                        target="_blank"
                        download
                    >
                        <DownloadIcon className="icon" />
                        <span className="resume">Download My Resume!</span>
                    </Link>
                    <div className="itemContainer">
                        <PhoneOutlined className="icon" />
                        <span>+1 (775) 741 - 8450</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <span
                            className="email"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "jaredlnelson1@gmail.com"
                                );
                            }}
                        >
                            jaredlnelson1@gmail.com
                        </span>
                        <ContentCopy className="copy" />
                    </div>
                </div>

                <div className="right">
                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
