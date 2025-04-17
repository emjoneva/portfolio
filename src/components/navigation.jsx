import React from "react";
import "../App.css";
import "./navigation.css";
import { NavLink } from "react-router";
import profileImage from "../assets/Emma-Nevala-2.jpeg";
const Navigation = () => (
    <>
        <div className="col-3 side-nav">
            <img src={profileImage} />
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
                {/* <li>
                    <NavLink className="link-style" to="/aboutme">
                        About me
                    </NavLink>
                </li> */}
                <li>
					<a className="link-style" href="https://www.linkedin.com/in/emma-nevala/" target="_blank">
                        Get in contact
                    </a>
                </li>
            </ul>
        </div>
        <div className="top-nav">
			<div className="top-nav-row top-nav-name">
				<img src={profileImage} />
				<div style={{textAlign: 'left', width: '100%'}}>Emma Nevala - UX/UI Designer</div>
			</div>
            <div className="top-nav-row top-nav-links">
                <div>
                    <NavLink className="link-style" to="/">
                        Portfolio
                    </NavLink>
                </div>
                {/* <div>
                    <NavLink className="link-style" to="/aboutme">
                        About me
                    </NavLink>
                </div> */}
                <div>
                    <a className="link-style" href="https://www.linkedin.com/in/emma-nevala/" target="_blank">
                        Get in contact
                    </a>
                </div>
            </div>
        </div>
    </>
);

export default Navigation;
