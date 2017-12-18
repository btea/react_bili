import React from 'react';
import Template from './template';
import Cal from '../containers/carousel';
import './recommend.css';
import Fetch from '../fetch/fetch';


export default class Animate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    getData = () => {
        // let url = 'https://bird.ioliu.cn/v1?url=https://api.imjad.cn/bilibili/v2/?get=recommend';
        // let url = 'https://bird.ioliu.cn/v1?url=http://api.bilibili.com/x/web-interface/ranking/index?day=3';
        let url = this.props.url;
        Fetch('get',url).then(
            response => response.json().then(
                res => {
                    console.log(res);
                    if(Array.isArray(res.data)){
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
            console.log(this.state.data);
            return(
                <div className="index_recommend">
                    <Cal />
                    <div className="recommend">
                        <div className="index_title_home_recommend">
                            <div className="index_icon_home_recommend">
                                <svg className="icon_index_recommend">
                                    <use xlinkHref={`#icon-${this.props.left}`}></use>
                                </svg>
                            </div>
                            <p className="index_hot_recommend">{this.props.columnWords}</p>
                        </div>
                        <a href="https://m.bilibili.com/ranking.html" className="index_icon1_recommend">
                            <div className="index_icon_rank">
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
                </div>
            )
        }
    }
}