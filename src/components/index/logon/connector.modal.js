import React from "react";
import './connector.modal.css';


class ConnectorModal extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			selectedConnector: null
		}
	}
	
	handleClick (connectorName) {
		this.setState({
		   selectedConnector: connectorName
		 });
	}

    render( ) {
        return (<div id="modal">
			<div class="modal-content login-box">
				<div id="connectors" hidden = {this.state.selectedConnector !== null}>
					<h2>Connectors</h2>
					<a  onClick={() => this.handleClick("Runtastic")} class="social-button" id="runtastic-connect"> <span>Runtatic</span></a>
					<a  onClick={() => this.handleClick("Runkeeper")} class="social-button" id="runkeeper-connect"> <span>Runkeeper</span></a>
					<a  onClick={() => this.handleClick("NikeRun")} class="social-button" id="nikerunclub-connect"> <span>Nike Club</span></a>
					<a  onClick={() => this.handleClick("Strava")} class="social-button" id="strava-connect"> <span>Strava</span></a>
					<div class="cf footer">
						<a href="#" class="btn">Close</a>
					</div>
				</div>
				<div id="connectors" hidden = {this.state.selectedConnector !== 'Runtastic'}>
					<h2>Runtastic</h2>
					
					<div class="cf footer">
						<a href="#" class="btn">Close</a>
					</div>
				</div>
			</div>
	</div>);
    }
}


export default ConnectorModal