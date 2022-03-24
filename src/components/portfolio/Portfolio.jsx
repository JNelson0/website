import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "school",
            title: "School/Internship",
        },
        {
            id: "hackathon",
            title: "Hackathon",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <Link
                    to="/MovieScraper"
                    className={
                        selected === "featured" || selected === "web"
                            ? "itemSelected"
                            : "itemNotSelected"
                    }
                >
                    <img src="assets/WebScraperPic.PNG" alt="" />
                    <h3>Movie Finder</h3>
                </Link>
                <Link
                    to="/Hackathon"
                    className={
                        selected === "featured" || selected === "hackathon"
                            ? "itemSelected"
                            : "itemNotSelected"
                    }
                >
                    <img src="assets/HackathonPic.PNG" alt="" />
                    <h3>Hackathon</h3>
                </Link>
                <Link
                    to="/NetworkMonitor"
                    className={
                        selected === "featured" || selected === "school"
                            ? "itemSelected"
                            : "itemNotSelected"
                    }
                >
                    <img src="/website/assets/globe.png" alt="" />
                    <h3>Network Monitoring</h3>
                </Link>
            </div>
        </div>
    );
}
