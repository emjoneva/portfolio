import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";
import BackButton from "../components/back-button";

const RapuProject = () => (
    <div className="container-fluid">
        <div className="row page-row" id="project-page">
            <Navigation />
            <div className="col content project-content">
                <BackButton />
                <h2 className="content-padding">Rapu - Information system on demolition and construction material and waste reporting for SYKE</h2>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Duration:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">09/2023 - 11/2024</div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Customer:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">Finnish Environment Institue (SYKE) and Ministry of the Environment (YM)</div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Skills:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content skills">
                            <ul>
                                <li>accessibility</li>
                                <li>form design</li>
                                <li>public sector</li>
                                <li>requirements specification</li>
                                <li>sustainability</li>
                                <li>usability testing</li>
                                <li>UI design</li>
                                <li>user-centric design</li>
                                <li>visual design</li>
                                <li>wireframes</li>
                                <li>workshop design</li>
                                <li>workshop facilitation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="info-quote">
                        In just one year, we turned a reqgulation-driven and initially vague concept into a functioning service that guides users toward recycling materials responsibly.
                    </div>
                </div>
                <div className="row">
                    <div className="row project-background">
                        <h4>Background</h4>
                    </div>

                    <div className="project content-padding project-info">
                        The new Construction Act (Rakentamislaki) came into effect on January 1, 2025. To support municipalities and cities in granting building and demolition permits under the new
                        law, Gofore designed and developed an information system (RAPU) for reporting materials generated during construction and demolition projects. The system was created in
                        collaboration with the Finnish Environment Institute (SYKE) and the Ministry of the Environment (YM), and is integrated into the building and demolition permit process. My role
                        in this project concerned research, requirement specification, service design, and UI/UX design and writing.
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

export default RapuProject;
