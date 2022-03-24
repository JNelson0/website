import React from "react";
import "./movieScraper.scss";
import { Player, BigPlayButton } from "video-react";
import { Link } from "react-router-dom";

export default function MovieScraper() {
    return (
        <div className="movieScraper">
            <Link to="/website/" className="homeButton">
                Home
            </Link>
            <div className="center">
                <h1 className="title">Movie Finder</h1>
                <div className="description">
                    <h1>Project Description</h1>
                    <p>
                        The Movie Finder web application creates a portal for
                        users to view all available movies with streaming
                        capability hosted on top media streaming services
                        (Netflix, HBO, Hulu, etc.) If users don't know what a
                        streaming platform offers before signing up for pricy
                        subscriptions they can use Movie Finder to look at
                        available streaming capabilities from each platform
                        before making a decision.
                    </p>
                    <h1>How does it work?</h1>
                    <p>
                        Movie Finder pulls current movie and tv-show data using
                        python webscraping and compiles the data into a platform
                        easy for users to use. Selecting a movie or tv-show will
                        connect the user directly to the associated host
                        streaming platform.
                    </p>
                    <h1>How was it built?</h1>
                    <p>
                        Movie Finder web application utilizes Node.js, React,
                        HTML, and SCSS for the front end components. The back
                        end of Movie Finder application is created using
                        postgreSQL. All webscraping is done by the back end
                        using python beautiful soup and Selenium web driver.
                    </p>
                </div>
                <div className="movieWrapper">
                    <h1>Below is a short clip of Movie Finder</h1>
                    <Player className="movie" src="assets/MovieScraper.mp4">
                        <BigPlayButton position="center" />
                    </Player>
                </div>
            </div>
        </div>
    );
}
