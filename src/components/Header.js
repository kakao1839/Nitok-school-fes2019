import React, {Component} from 'react';

window.onload = function () {
    var popup = document.getElementById('js-popup');
    if (!popup) return;
    popup.classList.add('is-show');

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');

    closePopUp(blackBg);
    closePopUp(closeBtn);

    function closePopUp(elem) {
        if (!elem) return;
        elem.addEventListener('click', function () {
            popup.classList.remove('is-show');
        })
    }
}
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <div className="popup" id="js-popup">
                    <div className="popup-inner">
                        <div className="close-btn" id="js-close-btn"><i className="fa fa-times"></i></div>
                        <a href="https://forms.gle/UHzRbrPNNVyafu9B7" target="_blank" rel="noopener">
                            <h3 style={{fontFamily: 'logotype '}}><span
                                style={{color: '#437DA0', fontSize: '30px'}}>アンケート</span>にご協力ください</h3></a>
                        <a className="button" href="https://forms.gle/UHzRbrPNNVyafu9B7" target="_blank" rel="noopener"
                           style={{fontFamily: 'logotype '}}>協力する</a>
                    </div>
                    <div className="black-background" id="js-black-bg"></div>
                </div>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#event">Event</a></li>
                            <li><a className="smoothscroll" href="#resume">Member</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Gallery</a></li>
                            <li><a className="smoothscroll" href="#contact">Sponsor</a></li>
                            <li><a className="smoothscroll" href="#greeting">Greeting</a></li>
                            <li><a className="smoothscroll" href="#about">Access</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline" style={{
                                fontFamily: 'logotype'
                            }}>第<span c style={{color: '#ffa657', fontSize: '120px'}}>15</span>回 <span
                                class="brspan">{resumeData.name}</span><p className="sp_br">{resumeData.name}</p></h1>
                            <h2 class="coppy" style={{fontFamily: 'logotype', color: '#ffa657'}}>~高専らしくをあたらしく~</h2>
                            <h2 style={{
                                color: '#fff',
                                fontFamily: 'logotype '
                            }}> {resumeData.role}<p style={{fontSize: '30px',}}>9:30~16:00</p>
                            </h2>
                            <h2 style={{
                                color: '#fff',
                                fontFamily: 'logotype '
                            }}> {resumeData.roleDescription}<p style={{fontSize: '30px',}}>9:30~15:00</p>
                            </h2>
                            <hr/>
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                            return (
                                                <li key={item.name}>
                                                    <h2 >
                                                        <a href={item.url} target="_blank" rel="noopener">
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
                        <a className="smoothscroll" href="#about" style={{cursor: 'pointer'}}><i className="icon-down-circle"></i></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}
