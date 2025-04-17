import React from "react";
import "../App.css";
import "./project.css";
import Navigation from "../components/navigation";

const RapuProject = () => (
	<div className="container-fluid">
		<div className="row page-row">
			<Navigation />
			<div className="col content">
				<h2 className="content-padding">Rapu - Information system on demolition and construction material and waste for SYKE</h2>
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac scelerisque velit. Donec iaculis, quam quis maximus varius, libero erat convallis purus, quis vehicula lectus orci vel lacus. Donec vehicula, velit a convallis ullamcorper, ipsum diam iaculis nisl, ac gravida lorem mauris eget tortor. Quisque sollicitudin ultricies metus eget viverra. Ut sapien erat, facilisis ut semper vitae, placerat convallis felis. Mauris lectus risus, euismod in libero et, vehicula mattis purus. Aenean ex libero, efficitur a pretium vitae, iaculis non urna. Curabitur eu lacinia tortor, non venenatis sapien. Ut arcu urna, vehicula no
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default RapuProject;
