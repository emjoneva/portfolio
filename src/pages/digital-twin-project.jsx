import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";

const DigitalTwinProject = () => (
    <div className="container-fluid">
        <div className="row page-row">
            <Navigation />
            <div className="col content">
                <h2 className="content-padding">Digital Twin App Proof of Concept (POC) for City of Helsinki</h2>
                <div className="row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Duration:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Customer:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Skills:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content skills">
                            <ul></ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="info-quote"></div>
                </div>
                <div className="row project-background">
                    <h4>Background</h4>
                </div>
                <div className="row">
                    <div className="project content-padding project-info">Coming soon!</div>
                </div>
            </div>
        </div>
    </div>
);

export default DigitalTwinProject;
