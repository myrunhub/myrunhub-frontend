import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/index/header.js";
import './index.css';

class Application extends React.Component {
    render() {
        return (<Header></Header>);
    }
};



ReactDOM.render(<Application />, document.getElementById("application"));