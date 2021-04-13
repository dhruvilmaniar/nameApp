import React from "react";
import "../../../public/Header-Image.svg";
import "./Header.css";

const Header = () => {
    return (
        <div className="head-container">
            <img src="Header-Image.svg" alt="Logo" className="head-Image" />
            <h1 className="head-text">Name It!</h1>
        </div>
    );
};

export default Header;
