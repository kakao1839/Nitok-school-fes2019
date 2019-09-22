// Resume

import React, {Component} from 'react';
export default  class Resume extends Component {
    render() {
        return (
            <section id="event">

                <div className="row">
                    <div className="col">
                        <h2>Event</h2>
                        <div className="tabs">
                            <div className="tab">
                                <input type="checkbox" id="chck1" />
                                    <label className="tab-label" htmlFor="chck1">クラス企画</label>
                                    <div className="tab-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                                    </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" id="chck2"/>
                                    <label className="tab-label" htmlFor="chck2">有志企画</label>
                                    <div className="tab-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
