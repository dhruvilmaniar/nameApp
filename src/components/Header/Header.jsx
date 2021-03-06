import React from "react";
import "../../../public/Header-Image.svg";
import "./Header.css";

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src={process.env.PUBLIC_URL + "/Header-Image.svg"}
                alt="Logo"
                className={`head-image ${
                    headerExpanded
                        ? "head-image-expanded"
                        : "head-image-contracted"
                }`}
            />
            <h1
                className={`head-text ${
                    headerExpanded
                        ? "head-text-expanded"
                        : "head-text-contracted"
                }`}
            >
                {headTitle}
            </h1>
        </div>
    );
};

export default Header;
