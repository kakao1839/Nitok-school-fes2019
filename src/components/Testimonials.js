// 横にスクロールしてるやつ
import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials" >
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <h2 id='event' style={{
                              background: "initial",
                            }}>
                              {item.description}
                            </h2>
                            <cite style={{ fontFamily: 'yasasisa'}}>{item.place}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}
