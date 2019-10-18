import React, {Component} from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">

                    <div className="three columns">

                        <img className="profile-pic" src="images/profilepic.jpg" alt=""/>

                    </div>

                    <div className="nine columns main-col">

                        <div className="row">

                            <div className="columns contact-details">

                                <h2>Access</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>
                                    {resumeData.address}
                                    </span>
                                    <br></br>
                                  <a href={resumeData.website} target="_blank">
                                    <span>{resumeData.website}</span></a>
                                </p>
                            </div>
                            <div class="mapresponsiv" style={{

                            }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3569.8313869741496!2d128.0288078!3d26.5255468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e454d1fcc2e3e9%3A0xc3cbc45f1bee410d!2z5rKW57iE5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1569084046702!5m2!1sja!2sjp"
                                    width="400" height="350"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
