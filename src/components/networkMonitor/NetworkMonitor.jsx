import React from "react";
import "./NetworkMonitor.scss";
import { Link } from "react-router-dom";

export default function NetworkMonitor() {
    return (
        <div className="networkMonitor">
            <Link to="/" className="homeButton">
                Home
            </Link>
            <h1>Network Monitoring</h1>
            <Link
                className="download"
                to="/files/researchpaper_Nelson_Jared.pdf"
                target="_blank"
                download
            >
                Download the research paper!
            </Link>
            <div className="pdf">
                <iframe
                    className="pdfFile"
                    src="files/researchpaper_Nelson_Jared.pdf#toolbar=0"
                    frameborder="0"
                    title="researchPaper_Nelson_Jared"
                ></iframe>
            </div>
        </div>
    );
}
