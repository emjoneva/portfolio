import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import { NavLink } from "react-router";
import ImageHover from "./components/imagehover";

import rapuDefault from "./assets/rapu-default.png";
import rapuHover from "./assets/rapu-hover.png";
import digitalTwinDefault from "./assets/digital-twin-default.png";
import digitalTwinHover from "./assets/digital-twin-hover.png";
import sigchiDefault from "./assets/SIGCHI-talk.png";
import sigchiHover from "./assets/sigchi.png";
import myjyuDefault from "./assets/myjyu-default.png";
import myjyuHover from "./assets/myjyu-hover.png";

const App = () => (
    <div className="container-fluid">
        <div className="row page-row">
            <Navigation />
            <div className="col content">
                <h2 className="content-padding">Portfolio</h2>
                <div className="row">
                    <div className="col project content-padding">
                        <NavLink className="link-style" to="/rapu-project">
                            <ImageHover mainImage={rapuDefault} hoverImage={rapuHover} />
                        </NavLink>
                        <h4>
                            <NavLink className="link-style" to="/rapu-project">
                                Rapu - Information system on demolition and construction material and waste for SYKE
                            </NavLink>
                        </h4>
                    </div>
                    <div className="col project content-padding">
                        <NavLink className="link-style" to="/digital-twin-project">
                            <ImageHover mainImage={digitalTwinDefault} hoverImage={digitalTwinHover} />
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
                            <ImageHover mainImage={sigchiDefault} hoverImage={sigchiHover} />
                        </NavLink>
                        <h4>
                            <NavLink className="link-style" to="/SIGCHI-project">
                                "How to advocate for Fair Design as a UX Designer" talk at SIGCHI Spring 2024 Seminar
                            </NavLink>
                        </h4>
                    </div>
                    <div className="col project content-padding">
                        <NavLink className="link-style" to="/myjyu-project">
                            <ImageHover mainImage={myjyuDefault} hoverImage={myjyuHover} />
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
