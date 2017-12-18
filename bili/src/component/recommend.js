import React from 'react';
import Cal from '../containers/carousel';
import RecommendData from './recommendData';
import './recommend.css';


export default class Animate extends React.Component{
    render(){
        return(
            <div className="index_recommend">
                <Cal />
                <RecommendData columnWords="热门推荐" left="bianjituijian" rightWords="排行榜" url="http://api.bilibili.com/x/web-interface/ranking/index?day=3"/>
                <RecommendData  columnWords="动画" left="zhibo" rightWords="查看更多" url="https://api.bilibili.com/x/web-interface/dynamic/region?rid=1&jsonp=jsonp"/>
            </div>
        )
    }
}