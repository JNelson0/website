import React from "react";
import "./NetworkMonitor.scss";
import { Link } from "react-router-dom";

export default function NetworkMonitor() {
    return (
        <div className="networkMonitor">
            <Link to="/website/" className="homeButton">
                Home
            </Link>
            <h1>Network Monitoring</h1>
            <Link
                className="download"
                to="/website/public/files/researchpaper_Nelson_Jared.pdf"
                target="_blank"
                download
            >
                Download the research paper!
            </Link>
            <div className="pdf">
                <iframe
                    className="pdfFile"
                    src="/website/public/files/researchpaper_Nelson_Jared.pdf#toolbar=0"
                    frameborder="0"
                ></iframe>
            </div>
        </div>
    );
}
