import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";
import pdfDeck from "../assets/sigchi-22-5.pdf";
import BackButton from "../components/back-button";

const SIGCHIProject = () => (
    <div className="container-fluid">
        <div className="row page-row" id="project-page">
            <Navigation />
            <div className="col content project-content">
                <BackButton />
                <h2 className="content-padding">"How to advocate for Fair Design as a UX Designer" talk at SIGCHI Spring 2024 Seminar</h2>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Duration:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">May 2024</div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Customer:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">-</div>
                    </div>
                </div>
                <div className="row info-row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Skills:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content skills">
							<ul>
								<li>public speaking</li>
                                <li>research</li>
								<li>ux design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="info-quote"></div>
                </div>
                <div className="row">
                    <div className="info-quote">I cannot do all the good that the world needs. But the world needs all the good that I can do.</div>
                </div>
                <div className="row project-background">
                    <h4>Description </h4>
                </div>

                <div className="row">
                    <div className="project content-padding project-description">
                        <p>
                            Wrote and held a presentation on the topic of advocating for fair design as a UX designer. Which factors affect design decisions? What can designers do to advocate for fair
                            design?
                        </p>
                        <p>
                            <a href={pdfDeck} download>
                                Download the slide deck from here
                            </a>
                        </p>
                        <p>Factors I’ve identified in my research affecting the design process of a UX designer</p>
                        <ul>
                            <li>Time pressure</li>
                            <li>Lack of knowledge</li>
                            <li>Economic pressure</li>
                            <li>Automating decisions and distancing the designer from real users</li>
                        </ul>
                        <p>What can one do as a designer to be a fair designer?</p>
                        <ul>
                            <li>Balancing business goals and user needs</li>
                            <li>Arguing for the benefit of ethical design</li>
                            <li>Deceptive design harms users, is bad for business, and can have legal consequences</li>
                            <li>Paying extra attention for when designer for a) vulnerable users and b) vulnerable contexts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SIGCHIProject;
