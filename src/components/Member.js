//memver

import React, {Component} from 'react';

export default class Porfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <details open>
                            <summary>MEMBER</summary>
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                {
                                    resumeData.portfolio && resumeData.portfolio.map((item) => {
                                        return (
                                            <div className="columns portfolio-item">
                                                <div className="item-wrap">
                                                    <a href="#modal-01">
                                                        <img src={`${item.imgurl}`} className="item-img"/>
                                                        <div className="overlay">
                                                            <div className="portfolio-item-meta">
                                                                <h5>{item.name}</h5>
                                                                <h5>{item.position}</h5>
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        );
    }
}
