import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import './reset.css';
import Nav from './component/nav_title';
import showCal from './reducers/carousel';
import Animate from './component/recommend';
import Comic from './containers/comic/comic';


let store = createStore(showCal);
class Cover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }
    render(){
        return(
                <div>
                    {/*页头导航栏*/}
                    <Nav/>
                    {/*首页展示*/}
                    <Animate columnWords="热门推荐" left="bianjituijian" rightWords="排行榜" url="http://api.bilibili.com/x/web-interface/ranking/index?day=3"/>
                    <Animate columnWords="动画" left="zhibo" rightWords="查看更多" url="https://api.bilibili.com/x/web-interface/dynamic/region?rid=1&jsonp=jsonp"/>
                    {/*<Comic/>*/}
                </div>
        );
    }

}

ReactDOM.render(<Cover />, document.getElementById('root'));
