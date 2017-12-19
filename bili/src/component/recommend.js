import React from 'react';
import Cal from '../containers/carousel';
import RecommendData from './recommendData';
import './recommend.css';


export default class Animate extends React.Component{
    render(){
        let skipUrl = "https://m.bilibili.com/channel/" + 13 + ".html";
        return(
            <div className="index_recommend">
                <Cal />
                <RecommendData columnWords="热门推荐" left="bianjituijian" rightWords="排行榜" isRank="true"/>
                <RecommendData  columnWords="动画" left="zhibo" rightWords="查看更多" rid="1" isRank="false"/>
                <RecommendData columnWords="番剧" left="fanju" rightWords="查看更多" rid="13" isRank="false"/>
                <RecommendData columnWords="国创" left="guochuang" rightWords="查看更多" rid="167" isRank="false"/>
            </div>
        )
    }
}