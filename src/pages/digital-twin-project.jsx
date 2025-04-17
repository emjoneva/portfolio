import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";

const DigitalTwinProject = () => (
    <div className="container-fluid">
        <div className="row page-row" id="project-page">
            <Navigation />
            <div className="col content project-content">
                <h2 className="content-padding">Digital Twin App Proof of Concept (POC) for City of Helsinki</h2>
                <div className="row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Duration:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">06/2023 - 03/2024</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 project content-padding project-info">
                        <div className="info-label">Customer:</div>
                    </div>
                    <div className="col project content-padding project-info">
                        <div className="info-content">City of Helsinki</div>
                    </div>
                </div>
                <div className="row">
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
                <div className="row project-background">
                    <h4>Background</h4>
                </div>
                <div className="row">
                    <div className="project content-padding project-info">
                        I worked on a service design and ideation project for the City of Helsinki to shape an early concept into a concrete proof of concept for their upcoming tendering process. My
                        role was UI/UX designer, collaborating closely with a service designer and the client.
                    </div>
                </div>
                <div className="row">
                    <h4>Goals</h4>
                </div>
                <div className="row">
                    <div className="project content-padding">
                        The aim was to design a mobile app for two user groups: City of Helsinki employees and maintenance staff.
                        <ul>
                            <li>Employees would use the app to book workspaces and meeting rooms across city offices and report maintenance issues.</li>
                            <li>Maintenance staff would use it in the field to track and update the status of reported issues.</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h4>Research</h4>
                </div>
                <div className="row">
                    <div className="project content-padding">
                        We used a mix of research methods throughout the project. I started with a heuristic evaluation of an existing digital twin solution built by another company. Based on those
                        findings and the initial requirements from the client, we proposed a more user-centric desin to guide our co-design process.
                    </div>
                </div>
                <div className="row">
                    <div className="project content-padding">
                        We ran four workshops, focusing on two key use cases: room booking and maintenance issue reporting. After analysing the workshops, we followed up with one-on-one interviews
                        with maintenance staff to better understand their workflows, challenges, and how the app could support both daily and long-term tasks.
                    </div>
                </div>
                <div className="row">
                    <h4>Design process</h4>
                </div>
                <div className="row">
                    <div className="project content-padding">
                        I created initial wireframes and then refined mockups in close collaboration with the service designer and the client. We iterated on the designs based on findings from the
                        workshops and interviews. All design work was done in Figma using components from the Helsinki Design System. We used Miro to facilitate workshops and synthesise research
                        results.
                    </div>
                </div>
                <div className="row">
                    <h4>Outcome</h4>
                </div>
                <div className="row">
                    <div className="project content-padding">
                        The final deliverables included user stories and requirements for both user groups, detailed design mockups, and a chatbot concept designed to improve the quality of
                        maintenance issue reporting data. These materials will be used by the City of Helsinki as part of their public tender process.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DigitalTwinProject;
