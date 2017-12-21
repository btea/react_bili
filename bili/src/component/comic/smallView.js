import React from 'react';

export default class  SmallView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let source = this.props.source;
        let play = source.stat ? source.stat.view : source.play;
        let danmaku = source.stat ? source.stat.danmaku : source.review;
        return(
                <a className={(+this.props.id % 2) === 0 ? 'recd_show' : 'margin recd_show'}  href={"http://m.bilibili.com/video/av" + this.props.mid + ".html"}>
                    <div className="recd_news">
                        <img className="default_picture" src="https://s1.hdslb.com/bfs/static/mult/images/tv.png" alt=""/>
                        <img className="cover_picture" src={source.pic} alt=""/>
                        <div className="details">
                            <div className="details_left">
                                <svg className="icon_index_recommend">
                                    <use xlinkHref="#icon-bofangshu"></use>
                                </svg>
                                <span className="play">{+play > 10000 ? (play / 10000).toFixed(1) + '万' : play}</span>
                            </div>
                            <div className="details_right">
                                <svg className="icon_index_recommend">
                                    <use xlinkHref="#icon-danmushu"></use>
                                </svg>
                                <span className="danmaku">{+danmaku > 10000 ? (danmaku / 10000).toFixed(1) + '万' : danmaku}</span>
                            </div>
                        </div>
                    </div>
                    <div className="describe">{source.title}</div>
                    {/*<div className="type">{source.typename}</div>*/}
                </a>
        )
    }
}