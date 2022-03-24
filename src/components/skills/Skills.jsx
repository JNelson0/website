import "./skills.scss";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Technical Skills</h1>
            <span className="span1">
                Below are some of my skills and I'm always striving for more!
            </span>
            <div className="container">
                <div className="left section">
                    <h1>
                        Web Development
                        <span className="webSpan" />
                    </h1>
                    <div className="itemWrapper">
                        <div className="item">
                            <img src="/assets/react.png" alt="" />
                            <h3>React.js</h3>
                        </div>
                        <div className="item">
                            <img src="/assets/html.png" alt="" />
                            <h3>HTML</h3>
                        </div>
                        <div className="item">
                            <img src="/assets/css.png" alt="" />
                            <h3>CSS</h3>
                        </div>
                        <div className="item">
                            <img src="/assets/sql.png" alt="" />
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
                <div className="middle section">
                    <h1>
                        Main Languages
                        <span className="webSpan" />
                    </h1>
                    <div className="itemWrapper">
                        <div className="item">
                            <img src="/assets/python2.png" alt="" />
                            <h3>Python</h3>
                        </div>
                        <div className="item">
                            <img src="/assets/c++.png" alt="" />
                            <h3>C++</h3>
                        </div>
                        <div className="item">
                            <img src="/assets/javascript.png" alt="" />
                            <h3 className="js">JavaScript</h3>
                        </div>
                        <div className="item">
                            <img src="/assets/c++.png" alt="" />
                            <h3>C++</h3>
                        </div>
                    </div>
                </div>
                <div className="right section">
                    <h1>
                        Fundamental Skills
                        <span className="webSpan" />
                    </h1>
                    <div className="itemWrapper">
                        <div className="item">
                            <img src="/assets/github.png" alt="" />
                            <h3>Git</h3>
                        </div>
                        <div className="item">
                            <img src="/assets/office.png" alt="" />
                            <h3>Office</h3>
                        </div>
                        <div className="item">
                            <h2>OOP</h2>
                            <h3 className="oop">Object Oriented Programming</h3>
                        </div>
                        <div className="item">
                            <h2>DP/DS</h2>
                            <h3 className="oop">
                                Design Patterns and Data Structures
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
