import React from "react";
import './modal.css';


class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render( ) {
        return (<div id="modal">
		

			
			<div class="modal-content login-box">
				<h2>Connectors</h2>
				<a href="#" class="social-button" id="runtastic-connect"> <span>Runtatic</span></a>
				<a href="#" class="social-button" id="runkeeper-connect"> <span>Runkeeper</span></a>
				<a href="#" class="social-button" id="nikerunclub-connect"> <span>Nike Club</span></a>
				<a href="#" class="social-button" id="strava-connect"> <span>Strava</span></a>
				<div class="cf footer">
				<a href="#" class="btn">Close</a>
				</div>
			</div>
			
			
		
		
	</div>);
    }
}


export default Modal