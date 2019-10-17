import React, {Component} from 'react';


export default class Testimonials extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                            <h1 style={{color: 'rgb(106,99,101)'}}>StageEvent</h1>
                            <h3 style={{
                                fontFamily: 'kakulogotype',
                                fontSize: '40px',
                                color: 'rgb(106,99,101)'
                            }}>体育館</h3>
                        </div>
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    {
                                        resumeData.testimonials && resumeData.testimonials.map((item) => {
                                            return (
                                                <li >
                                                    <blockquote>
                                                        <p></p>
                                                        <h1 style={{
                                                            fontFamily: 'kakulogotype',
                                                            color: 'white',
                                                            fontSize: '60px',
                                                            textAlign: 'center'
                                                        }}>
                                                            {item.description}
                                                        </h1>
                                                        <cite style={{fontFamily: 'logotype', textAlign: 'center'}}>[{item.name}]</cite>
                                                    </blockquote>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            {/* div.flexslider ends */}
                        </div>
                        {/* div.flex-container ends */}
                    </div>
                    {/* row ends */}
                </div>
                {/* text-container ends */}
            </section>
        );
    }
}
