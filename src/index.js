import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/index/header/header.js";
import Footer from "./components/index/footer/footer.js";
import ConnectorModal from "./components/index/logon/connector.modal.js";
import './index.css';

class Application extends React.Component {
    render() {
        return (
        <div>
        <ConnectorModal></ConnectorModal>
        <Header></Header>
        <Footer></Footer>
        </div>
        );
    }
};



ReactDOM.render(<Application />, document.getElementById("application"));