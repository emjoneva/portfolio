import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";

const RapuProject = () => (
    <div className="container-fluid">
        <div className="row page-row" id="project-page">
            <Navigation />
            <div className="col content project-content">
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
                <div className="row project-background">
                    <h4>Background</h4>
                </div>
                <div className="row">
                    <div className="project content-padding project-info">
                        The new Construction Act (Rakentamislaki) came into effect on January 1, 2025. To support municipalities and cities in granting building and demolition permits under the new
                        law, Gofore designed and developed an information system (RAPU) for reporting materials generated during construction and demolition projects. The system was created in
                        collaboration with the Finnish Environment Institute (SYKE) and the Ministry of the Environment (YM), and is integrated into the building and demolition permit process. My role in this project concerned research, requirement specification, service design, and UI/UX design and writing.
                    </div>
                    <div className="row">
                        <h4>Goals</h4>
                    </div>
                    <div className="project content-padding project-info">
                        The project aimed to create an information system for two user groups: individuals applying for a building or demolition permit, and permit authorities responsible for
                        processing and approving those applications. Under the new Construction Act, applicants for permits must report the materials (and waste) generated during construction and
                        demolition projects. Permit authorities are required to review these reports as part of the permit approval process.
                    </div>
                    <div className="row">
                        <h4>Research</h4>
                    </div>
                    <div className="project content-padding project-info">
                        As the project was driven by a regulatory change rather than a clearly identified user need, the research phase began with a review of preparatory materials for the new
                        Construction Act, along with a preliminary investigation of a report conducted by another consulting firm. Based on this material and interviews with experts from the Ministry
                        of the Environment (YM), we identified key user groups and use cases.
                    </div>
                    <div className="project content-padding project-info">
                        These insights guided the creation of initial wireframes, which were later refined into mockups and iterated on as the details of the new legislation became clearer. The
                        designs were reviewed by a panel of experts from various fields — including sustainability consultants, construction professionals, and permit authorities. We also conducted
                        one-on-one interviews with these stakeholders to deepen our understanding of their specific needs.
                    </div>
                    <div className="row">
                        <h4>Design process</h4>
                    </div>
                    <div className="project content-padding project-info">
                        The design process was iterative and collaborative. Each week, we reviewed the designs with the client, comparing them against the service blueprint and the evolving
                        regulation. Ongoing feedback from both the customer and stakeholders played a key role in shaping the system. To support smooth collaboration with developers, I created a
                        component library in Figma based on SYKEʼs internal design guidelines, streamlining the designer–developer handoff.
                    </div>
                    <div className="row">
                        <h4>Outcome</h4>
                    </div>
                    <div className="project content-padding project-info">
                        The outcome of the project was the Rapu system, now used daily by individuals applying for building and demolition permits, as well as by permit authorities. In just one year,
                        we turned a regulation-driven and initially vague concept into a functioning service that guides users toward recycling materials responsibly.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default RapuProject;
