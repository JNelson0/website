import { React } from "react";
import "./MainPage.scss";

import Topbar from "../topbar/Topbar";
import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import About from "../about/About";

export default function MainPage() {
	return (
		<div className="mainPage">
			<Topbar />
			<div className="sections">
				<Intro />
				<About />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}
