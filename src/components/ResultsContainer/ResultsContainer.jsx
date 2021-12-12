import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";

const ResultsContainer = ({ suggestedNames, introText }) => {
    const namesJsx = suggestedNames.map((name, index) => {
        // Note: This is a bad practice to use index as key, but as this is a demo app, I'm using it.
        return <NameCard key={`${name}_${index}`} suggestedName={name} />;
    });

    return (
        <div className="results-container">
            {suggestedNames.length ? null : (
                <p style={{ whiteSpace: "pre-line", textAlign: "center" }}>
                    {introText}
                </p>
            )}
            {namesJsx}
        </div>
    );
};

export default ResultsContainer;
