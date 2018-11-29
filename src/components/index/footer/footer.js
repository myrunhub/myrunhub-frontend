import React from "react";
import './footer.css';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render( ) {
        return (<footer>
            
                <div class="closer">
            
                    <div class="closing-claim">
            
                        <h1>Your runs, are your data. You own it you can play with it.</h1>
            
                        <p>We empower developer to create connector under the standard and being able to connect to different vendors. And make the information available to different channels and agreggators.</p>
            
                    </div>
            
                </div>
            
                <div class="bg-angled-left"></div>
            
                <div class="bg-angled-right"></div>
            
                <div class="container footer-lockup">
            
                    <div class="red-angle"></div>
            
                    <div class="row">
            
                        <div class="col-lg-7">
            
                            <h3>Resources</h3>
            
                            <ul>
                                <li>
                                    <a href="https://github.com/merighifacundo/myrunhub-frontend" data-i18n="footer.links.content.source">Source Code on Github</a>
                                </li>
                                <li>
                                    <a href="https://github.com/merighifacundo/myrunhub-frontend/issues" data-i18n="footer.links.content.apidocs">Issues</a>
                                </li>
                                <li>
                                    <a href="https://github.com/merighifacundo/myrunhub-frontend/wiki" data-i18n="footer.links.content.wiki">Wiki</a>
                                </li>
                            </ul>
                        </div>
            
                        <div class="col-lg-8">
            
                            <h3>About our vision</h3>
            
                            <p>The data you generate is yours, and you should be able to store it keep it and visualize or percibe any type of representation of the data. For Example with voice assistants.</p>
            
                        </div>
            
                        <div class="col-lg-5">
            
                            <h3>Stay in touch</h3>
            
                            <div class="social-icons">
            
                                <a href="https://www.facebook.com/Myrunhub-364414404318338/?modal=admin_todo_tour"><i class="icon-facebook"></i></a>
                                
            
                            </div>
            
                        </div>
            
                    </div>
            

            
                </div>
                
            
            </footer>);
    }
}


export default Footer