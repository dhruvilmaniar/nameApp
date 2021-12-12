import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");
const defaultIntroText =
    "Having trouble finding a cool name for your project?\n\n This basic tool will suggest you some cool names, and you can check availability on NameCheap too!";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerText: "Find a Name!",
            headerExpanded: true,
            suggestedNames: [],
            introText: defaultIntroText,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(inputText) {
        this.setState((prevState) => ({
            headerExpanded: !inputText,
            introText: inputText ? "" : defaultIntroText,
            suggestedNames: inputText ? name(inputText) : [],
        }));
    }

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                {/* <p>{this.state.introText}</p> */}
                <ResultsContainer
                    suggestedNames={this.state.suggestedNames}
                    introText={this.state.introText}
                />
            </div>
        );
    }
}

export default App;
