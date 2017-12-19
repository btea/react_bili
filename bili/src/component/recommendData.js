import React from 'react';
import Fetch from '../fetch/fetch';
import Template from './template';

export default class RecommendData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    getData = () => {
        let url;
        if(this.props.isRank === 'true'){
            url = "http://api.bilibili.com/x/web-interface/ranking/index?day=3";
        }else{
            url = "https://api.bilibili.com/x/web-interface/dynamic/region?rid=" + this.props.rid + "&jsonp=jsonp";
        }
        Fetch('get',url).then(
            response => response.json().then(
                res => {
                    if(this.props.isRank === 'true'){
                        this.setState({
                            data: res.data
                        })
                    }else{
                        this.setState({
                            data: res.data.archives
                        })
                    }
                }
            )
        )
    }

    componentWillMount(){
        this.getData();
    }

    render(){
        if(!this.state.data){
            return (<div>loading...</div>)
        }else{
            let skipUrl;
            if(this.props.isRank === 'true'){
                skipUrl = "https://m.bilibili.com/ranking.html";
            }else{
                skipUrl = "https://m.bilibili.com/channel/" + this.props.rid + '.html';
            }
            return(
                    <div className="recommend">
                        <div className="index_title_home_recommend">
                            <div className="index_icon_home_recommend">
                                <svg className="icon_index_recommend">
                                    <use xlinkHref={`#icon-${this.props.left}`}></use>
                                </svg>
                            </div>
                            <p className="index_hot_recommend">{this.props.columnWords}</p>
                        </div>
                        <a href={skipUrl} className="index_icon1_recommend">
                            <div className="index_icon_rank" style={{display: this.props.isRank === 'true' ? 'block': 'none'}}>
                                <svg className="icon_index_recommend_paihangbang1">
                                    <use xlinkHref="#icon-paihangbang1"></use>
                                </svg>
                            </div>
                            <div className="index_words_rank">
                                <p>{this.props.rightWords}</p>
                            </div>
                            <div className="index_icon_more">
                                <svg className="icon_index_recommend_gengduo">
                                    <use xlinkHref="#icon-gengduo"></use>
                                </svg>
                            </div>
                        </a>
                        <div className="index_content_recommend">
                            {
                                this.state.data.map((item,index) => {
                                    if(index < 4){
                                        return <Template key={index} source={item} id={index} mid={item.aid}/>
                                    }
                                })
                            }
                        </div>
                    </div>
            )
        }
    }

}