import React, {Component} from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="greeting">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt=""/>
                    </div>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>校長挨拶</h2>
                            <p className="address">
                                校長先生の挨拶
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
