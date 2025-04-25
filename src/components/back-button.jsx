import React from "react";
import "../App.css";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import "./back-button.css";

const BackButton = () => {
	return (
		<div style={{ marginBottom: '20px' }}>
			<NavLink className="link-style back-button" to="/">
				<FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '10px', fontSize: '20px' }} />
				Back to portfolio
			</NavLink>
		</div>
	);
};

export default BackButton;
