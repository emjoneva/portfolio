import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";

const MyJyuProject = () => (
    <div className="container-fluid">
        <div className="row page-row" id="project-page">
            <Navigation />
            <div className="col content project-content">
                <h2 className="content-padding">MyJYU Campus App for the University of Jyväskylä</h2>
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
                <div className="row">
                    <h4>Description</h4>
                </div>
                <div className="row">
                    <div className="project content-padding project-info">
                        MyJYU Campus App is an app designed to help students in their day-to-day lives. Students can see their schedule, lunch menus for campus restaurants, events at the campus, sport
                        classes and job advertisements for students all in one place.
                    </div>
                </div>
                <div className="row">
                    <h4>Responsibilities in project</h4>
                </div>
                <div className="row">
                    <div className="project content-padding project-info">
                        UI and UX design and development of the designed components, gathering and analysing user feedback, user testing and interviewing, service design, testing the app's new
                        features, communication and collaboration with stakeholders.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MyJyuProject;
