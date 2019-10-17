import React, {Component} from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="greeting">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/koucyou.jpg" alt=""/>
                    </div>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>校長挨拶</h2>
                            <p className="address">
                                ようこそ、沖縄高専 高専際へ！
                                今年は「高専らしくをあたらしく～15th KOSEN Festival～」をテーマに、第15 回目の高専祭を開催します。
                                ご存知のように、現在、第４次産業革命とも呼ばれる大変革が進行しています。即ち、IoT(Internet of Things)、AI（人工知能）やロボット等の格段の進歩により2030年半ばまでに今ある職業の半分は現在まだ出現していない職業に取って代わるとの予測があります。皆さんが沖縄高専で時代の大きな変革の流れを幅広く勉強し、自分の目標を探してチャレンジしてほしいと思います。
                                沖縄高専は、４つの専門学科を設置して、機械、情報通信、メディアそして生物の工学分野へ、皆さんの挑戦を後押しします。
                                さあ、今年の高専祭に来て、将来の新しい選択のきっかけを探してみてください。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
