import React from 'react';

export default class  SmallView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let source = this.props.source;
        return(
                <a className={(+this.props.id % 2) === 0 ? 'recd_show' : 'margin recd_show'}  href={"http://m.bilibili.com/video/av" + this.props.mid + ".html"}>
                    <div className="recd_news">
                        <img className="default_picture" src="https://s1.hdslb.com/bfs/static/mult/images/tv.png" alt=""/>
                        <img className="cover_picture" src={source.pic} alt=""/>
                        <div className="details">
                            <span className="play">{+source.play > 10000 ? (source.play / 10000).toFixed(1) + '万' : source.play}</span>
                            <span className="danmaku">{+source.review > 10000 ? (source.review / 10000).toFixed(1) + '万' : source.review}</span>
                        </div>
                    </div>
                    <div className="describe">{source.title}</div>
                    <div className="type">{source.typename}</div>
                </a>
        )
    }
}