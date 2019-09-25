import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>

                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#event">Event</a></li>
                            <li><a className="smoothscroll" href="#resume">Member</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Gallery</a></li>
                            <li><a className="smoothscroll" href="#contact">Sponsor</a></li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline" style={{
                                fontFamily: 'Hiragino Kaku Gothic Pro'
                            }}>第15回 {resumeData.name}</h1>
                            <h2 style={{
                                color: '#fff',
                                fontFamily: 'sans-serif '
                            }}> {resumeData.role}
                            </h2>
                            <h2 style={{
                                color: '#fff',
                                fontFamily: 'sans-serif '
                            }}> {resumeData.roleDescription}
                            </h2>
                            <hr/>
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                            return (
                                                <li key={item.name}>
                                                    <h2>
                                                    <a href={item.url} target="_blank">
                                                        <i className={item.className}></i></a>
                                                    </h2>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </React.Fragment>
        );
    }
}
