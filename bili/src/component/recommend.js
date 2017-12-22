import React from 'react';
import Cal from '../containers/carousel';
import RecommendData from './recommendData';
import './recommend.css';


export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columnWords: [ '热门推荐','动画','番剧','国创','音乐','舞蹈','科技','游戏','娱乐','鬼畜','电影','电视剧','纪录片','影视','时尚','生活','广告'],
            left: ['bianjituijian','zhibo','fanju','guochuang','yinle','wudao','keji','youxi','yule','guixu','dianying','dianshiju','fanjutuijian','yingshi','shishang','shenghuo','guanggao'],
            rightWords: ['排行榜','查看更多'],
            isRank: ['true','false'],
            rid: [null,1,13,167,3,129,36,4,5,119,23,11,177,181,155,160,165]
        }
    }
    render(){
        let state = this.state;
        return(
            <div className="index_recommend">
                <Cal />
                {
                    this.state.columnWords.map((item,index) => {
                        return <RecommendData key={index} columnWords={item} left={state.left[index]} rightWords={index > 0 ? state.rightWords[1] : state.rightWords[0]} rid={state.rid[index]} isRank={index > 0 ? state.isRank[1] : state.isRank[0]}/>
                    })
                }
            </div>
        )
    }
}
