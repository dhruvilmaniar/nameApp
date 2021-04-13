import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";

const ResultsContainer = ({ suggestedNames }) => {
    const namesJsx = suggestedNames.map((name) => {
        return <NameCard key={name} suggestedName={name} />;
    });

    return <div className="results-container">{namesJsx}</div>;
};

export default ResultsContainer;
