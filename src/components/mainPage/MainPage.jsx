import { React, useState } from "react";
import "./MainPage.scss";

import Topbar from "../topbar/Topbar";
import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Menu from "../menu/Menu";
import About from "../about/About";

export default function MainPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="mainPage">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <About />
                <Portfolio />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}
