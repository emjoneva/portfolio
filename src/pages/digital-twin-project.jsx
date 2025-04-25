import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";
import BackButton from "../components/back-button";

const DigitalTwinProject = () => (
    <div className="container-fluid">
        <div className="row page-row" id="project-page">
            <Navigation />
            <div className="col content project-content">
                <BackButton />
                <h2 className="content-padding">Digital Twin App Proof of Concept (POC) for City of Helsinki</h2>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Duration:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">06/2023 - 03/2024</div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Customer:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">City of Helsinki</div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Skills:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content skills">
                            <ul>
                                <li>UI design</li>
                                <li>UX design</li>
                                <li>collaboration</li>
                                <li>figma</li>
                                <li>public sector</li>
                                <li>usability testing</li>
                                <li>user-centric design</li>
                                <li>wireframes</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="info-quote">
                        Just yesterday we presented our work to our client from the City of Helsinki and they were so happy. We heard comments like "This is so good! This is just what we wanted to
                        have!"
                    </div>
                </div>
                <div className="row">
                    <div className="row project-background">
                        <h4>Background</h4>
                    </div>
                    <div className="row">
                        <div className="project content-padding project-info">
                            I worked on a service design and ideation project for the City of Helsinki to shape an early concept into a concrete proof of concept for their upcoming tendering process.
                            My role was UI/UX designer, collaborating closely with a service designer and the client.
                        </div>
                    </div>
                    <div className="project content-padding">
                        <div className="border-top-row"></div>
                        <div className="sensitive-info">
                            <h5>Some details are hidden to protect potentially sensitive information.</h5>
                            If you'd like to know more about the project, feel free to get in touch - I'm happy to share more!
                            <a className="link-button" href="https://www.linkedin.com/in/emma-nevala/" target="_blank">
                                Get in contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DigitalTwinProject;
