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
import mastersThesis from "./assets/masters-thesis.png";
import candidateThesis from "./assets/candidate-thesis.png";

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
                        <a className="link-style" href="https://jyx.jyu.fi/jyx/Record/jyx_123456789_87309">
                            <ImageHover mainImage={mastersThesis} hoverImage={mastersThesis} />
                        </a>
                        <h4>
                            <a className="link-style" href="https://jyx.jyu.fi/jyx/Record/jyx_123456789_87309">
                                "Just let me buy my thing!" : A survey study on consumers' perceptions of social influence in E-Commerce 
                            </a>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col project content-padding">
                        <a className="link-style" href="https://jyx.jyu.fi/jyx/Record/jyx_123456789_72034">
                            <ImageHover mainImage={candidateThesis} hoverImage={candidateThesis} />
                        </a>
                        <h4>
                            <a className="link-style" href="https://jyx.jyu.fi/jyx/Record/jyx_123456789_72034">
                                Dark patterns and their use in e-commerce
                            </a>
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
