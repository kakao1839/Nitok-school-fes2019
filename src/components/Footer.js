import React, {Component} from 'react';
import Particles from 'react-particles-js';

export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>

                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                                    return (
                                        <li>
                                            <a href={item.url} target="_blank" rel="noopener">
                                                <i className={item.className}/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"/></a></div>
                    <p>Web: &copy; 2019 NIT-ok Festival</p>
                    <p>Top illust: &copy; 2019 kirota</p>
                    <div className="backanimation">
                        <Particles
                            canvasClassName="example"
                            height="100%"
                            width="20%"


                            params={{
                                "particles": {
                                    "number": {
                                        "value": 10
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }

                            }}/>
                    </div>
                </div>

            </footer>
        );
    }
}
