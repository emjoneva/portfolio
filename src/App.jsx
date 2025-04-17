import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import { NavLink } from "react-router";
import ImageHover from "./components/imagehover";

const App = () => (
    <div className="container-fluid">
        <div className="row page-row">
            <Navigation />
            <div className="col content">
                <h2 className="content-padding">Portfolio</h2>
                <div className="row">
                    <div className="col project content-padding">
                        <NavLink className="link-style" to="/rapu-project">
                            <ImageHover mainImage="src/assets/rapu-default.png" hoverImage="src/assets/rapu-hover.png" />
                        </NavLink>
                        <h4>
                            <NavLink className="link-style" to="/rapu-project">
                                Rapu - Information system on demolition and construction material and waste for SYKE
                            </NavLink>
                        </h4>
                    </div>
                    <div className="col project content-padding">
                        <NavLink className="link-style" to="/digital-twin-project">
                            <ImageHover mainImage="src/assets/digital-twin-default.png" hoverImage="src/assets/digital-twin-hover.png" />
                        </NavLink>
                        <h4>
                            <NavLink className="link-style" to="/digital-twin-project">
                                Digital Twin App Proof of Concept (POC) for City of Helsinki
                            </NavLink>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col project content-padding">
                        <NavLink className="link-style" to="/SIGCHI-project">
                            <ImageHover mainImage="src/assets/SIGCHI-talk.png" hoverImage="src/assets/sigchi.png" />
                        </NavLink>
                        <h4>
                            <NavLink className="link-style" to="/SIGCHI-project">
                                "How to advocate for Fair Design as a UX Designer" talk at SIGCHI Spring 2024 Seminar
                            </NavLink>
                        </h4>
                    </div>
                    <div className="col project content-padding">
                        <NavLink className="link-style" to="/myjyu-project">
                            <ImageHover mainImage="src/assets/myjyu-default.png" hoverImage="src/assets/myjyu-hover.png" />
                        </NavLink>
                        <h4>
                            <NavLink className="link-style" to="/myjyu-project">
                                MyJYU Campus App for the University of Jyväskylä
                            </NavLink>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
