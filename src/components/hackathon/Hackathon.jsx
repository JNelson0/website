import React from "react";
import "./hackathon.scss";
import { Player, BigPlayButton } from "video-react";
import { Link } from "react-router-dom";
export default function Hackathon() {
    return (
        <div className="hackathon">
            <Link to="/" className="homeButton">
                Home
            </Link>

            <div className="center">
                <h1 className="title">Live Video Upscaling Using SRGANs</h1>
                <div className="description">
                    <h1>University of Nevada Reno Hackathon 2020</h1>
                    <p>
                        Sponsored coding competition hosted at the University of
                        Nevada Reno. Teams compete for a chance to win cash
                        prizes split between three categories including
                        Applications, Games, and Machine Learning / Artificial
                        Intelligence. Each team had 24 hours to complete their
                        project before final presentations.
                    </p>

                    <h1>Project Description</h1>
                    <p>
                        The category my team took part in was Machine Learning /
                        Artificial Intelligence. Our project goal was to create
                        an image and live video software that would grant users
                        with low internet bandwidth the ability to stream live
                        video to another user while reducing amount of bandwidth
                        used. Our solution to this problem was, reduce the
                        resolution of outgoing live video on the sending side of
                        the application and on the recieving side of the
                        application utilize a SRGAN to then upscale this video
                        feed. My team won first place in the Machine Learning /
                        Artificial Intelligence category for this competition.
                    </p>

                    <h1>What is a SRGAN?</h1>
                    <p>
                        SRGAN stands for Super Resolution Generative Adversarial
                        Network. The idea behind SRGANs is to take a low
                        resolution image and upscale the image into a high
                        resolution image. The end goal is achieving super
                        resolution images from the lowest quality images.
                    </p>

                    <h1>How did we implement a SRGAN?</h1>
                    <p>
                        SRGANs are meant to be used with single images to
                        upscale a low resolution image to high resolution.
                        Utilizing OpenCV python image processing and GPU
                        computations, we were able to split a video file frame
                        by frame (60 fps) and individualy process the frames
                        using the SRGAN. Applying this concept to captured live
                        video, we were able to successfully scale our low
                        resolution live video feed to high resolution.
                    </p>
                </div>
                <div className="movieWrapper">
                    <h1>Original video resolution</h1>
                    <h2>384 width x 216 height</h2>
                    <Player className="movie" src="assets/crop.mp4">
                        <BigPlayButton position="center" />
                    </Player>
                </div>
                <div className="movieWrapper">
                    <h1>Video resolution after SRGAN conversion</h1>
                    <h2>1536 width x 864 height</h2>
                    <Player className="movie" src="assets/upscale.mp4">
                        <BigPlayButton position="center" />
                    </Player>
                </div>
            </div>
        </div>
    );
}
