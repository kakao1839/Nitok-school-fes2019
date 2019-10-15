// Resume

import React, {Component} from 'react';
import $ from 'jquery';

window.$ = $;

$(document).ready(function () {
    var zindex = 10;

    $("div.card").click(function (e) {
        e.preventDefault();

        var isShowing = false;

        if ($(this).hasClass("show")) {
            isShowing = true
        }

        if ($("div.cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.show")
                .removeClass("show");

            if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards")
                    .removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                $(this)
                    .css({zIndex: zindex})
                    .addClass("show");

            }

            zindex++;

        } else {
            // no cards in view
            $("div.cards")
                .addClass("showing");
            $(this)
                .css({zIndex: zindex})
                .addClass("show");

            zindex++;
        }

    });
});

export default class Resume extends Component {
    render() {
        return (
            <section id="event">
                <div className="row">
                    <div className="col">
                        <h2>Event</h2>
                        <div className="tabs">
                            <div className="tab">
                                <input type="checkbox" id="chck1"/>
                                <label className="tab-label" htmlFor="chck1">クラス企画</label>
                                <div className="tab-content">

                                    <div className="cards">
                                        <div className="card">

                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?wave" //[../images/member/225x300.jpg]
                                                 alt="wave"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    屋台
                                                    <small>1-1</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?beach" alt="beach"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    お化け屋敷
                                                    <small>1-2</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?beach" alt="beach"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    キャラハン
                                                    <small>1-3</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?mountain"
                                                 alt="mountain"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    屋台
                                                    <small>1-4</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?field" alt="field"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    カジノ
                                                    <small>2-1</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?water" alt="water"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    屋台
                                                    <small>2-2</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?river" alt="river"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    縁日
                                                    <small>2-3</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image" src="https://source.unsplash.com/300x225/?kite"
                                                 alt="kite"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    屋台
                                                    <small>2-4</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?underwater"
                                                 alt="underwater"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    劇
                                                    <small>3-ms</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    縁日
                                                    <small>3-ic</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    ゲームセンター
                                                    <small>3-mi</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    屋台
                                                    <small>3-br</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    ボードゲーム
                                                    <small>4-ms</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    脱出ゲーム
                                                    <small>4-ic</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    映像作品
                                                    <small>4-mi</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    キャラハン
                                                    <small>4-br</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    お化け屋敷
                                                    <small>5-ms</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    カジノ
                                                    <small>5-ic</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    縁日
                                                    <small>5-mi</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card__image"
                                                 src="https://source.unsplash.com/300x225/?desert" alt="desert"/>
                                            <div className="card-title">
                                                <a href="#" className="toggle-info btn">
                                                    <span className="left"></span>
                                                    <span className="right"></span>
                                                </a>
                                                <h2>
                                                    劇
                                                    <small>5-br</small>
                                                </h2>
                                            </div>
                                            <div className="card-flap flap1">
                                                <div className="card-description">
                                                    とてもたのしいよ
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab">
                                <input type="checkbox" id="chck2"/>
                                <label className="tab-label" htmlFor="chck2">体育館 有志企画:タイムテーブル</label>
                                <div className="tab-content2">
                                    <img src="images/Event.JPG"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
