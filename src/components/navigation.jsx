import React from "react";
import "../App.css";
import "./navigation.css";
import { NavLink } from "react-router";

const Navigation = () => (
    <>
        <div className="col-3 side-nav">
            <img src="src/assets/Emma-Nevala-2.jpeg" />
            <h1 className="side-nav-padding">Emma Nevala</h1>
            <h3 className="side-nav-padding">UI/UX Designer</h3>
            <p className="side-nav-padding">
                I'm a UI/UX designer with experience in both the public and private sectors. I'm especially interested in how <strong>data</strong> and <strong>AI</strong> can help to shape the user
                experience.
            </p>
            <ul className="side-nav-nav">
                <li>
                    <NavLink className="link-style" to="/">
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link-style" to="/aboutme">
                        About me
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link-style" to="/contact">
                        Get in contact
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="top-nav">
			<div className="top-nav-row top-nav-name">
				<img src="src/assets/Emma-Nevala-2.jpeg" />
				<div style={{textAlign: 'left', width: '100%'}}>Emma Nevala - UX/UI Designer</div>
			</div>
            <div className="top-nav-row top-nav-links">
                <div>
                    <NavLink className="link-style" to="/">
                        Portfolio
                    </NavLink>
                </div>
                <div>
                    <NavLink className="link-style" to="/aboutme">
                        About me
                    </NavLink>
                </div>
                <div>
                    <NavLink className="link-style" to="/contact">
                        Get in contact
                    </NavLink>
                </div>
            </div>
        </div>
    </>
);

export default Navigation;
