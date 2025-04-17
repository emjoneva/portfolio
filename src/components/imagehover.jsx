import React, { useState } from "react";
import "../App.css";
import "./imagehover.css";

const ImageHover = ({ mainImage, hoverImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="image-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className={`image ${isHovered ? "fade-out" : "fade-in"}`} src={mainImage} alt="First Image" />
            <img className={`image ${isHovered ? "fade-in" : "fade-out"}`} src={hoverImage} alt="Second Image" />
        </div>
    );
};

export default ImageHover;
