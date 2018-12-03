import React from "react";
import './header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
    }

    render( ) {
        return (
        <header>
            <div className="fixed-navbar">
                <div className="navbar-lockup">
                    <ul className="nav">        
                        <li><a href="">Contribute</a></li>
                        <li><a href="">Frontend Docs</a></li>
                        <li><a href="">Api Docs</a></li>
                        <li><a href="#modal" onClick={this.handleClick}>Start Here</a></li>
                    </ul>        
                </div>
            </div>
            <div className="claim-lockup">
                <div className="claim">
                    <p className="headline">MyRunHub.com</p>
                    <p className="kicker">Open Source solution</p>
                    <p className="kicker">for Fitness Data.</p>
                </div>
            </div>
            <div className="angled-overlay"></div>
    
            <div className="slide-out-nav">
        
                <ul className="mobile-nav">
        
                <li><a href="">Contribute</a></li>
                <li><a href="">Frontend Docs</a></li>
                <li><a href="">Api Docs</a></li>
                <li><a href="">Start Here</a></li>
        
                </ul>
        
                <div className="mobile-nav-slice"></div>
        
            </div>
        
            <div className="mobile-nav-toggle">
        
                <span></span>
                <span></span>
                <span></span>
        
            </div>
    
    </header>);
    }
}


export default Header