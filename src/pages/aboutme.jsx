import React from "react";
import "../App.css";
import Navigation from "../components/navigation";

const AboutMePage = () => (
	<div className="container-fluid">
		<div className="row page-row">
			<Navigation />
			<div className="col content">
				<h2 className="content-padding">About me</h2>
			</div>
		</div>
	</div>
);

export default AboutMePage;
