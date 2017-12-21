import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './nav_title.css';
import Index from './recommend';
import Comic from '../containers/comic/comic';
import Fanju from '../containers/fanju';
import Guochuang from '../containers/guochuang';
import Yinyue from '../containers/yinyue';


export default class NavTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            left: 0.02,
            information: ['首页','动画','番剧','国创','音乐'],
            link: ['/','comic','fanju','guochaung','yinyue']
        }
    }
    $click(e){
        let target = e.target.parentNode;
        let _index = +target.getAttribute('id');
        this.setState({
            index: _index ,
            left: 0.2*_index + 0.02
        })

    }
    render(){
        return(
            <div className="index_top_area">
                <div className="index_topArea">
                    <a href="" className="index_logo">
                        <img src="https://s1.hdslb.com/bfs/static/mult/images/logo.png" alt=""/>
                    </a>
                    <a href="https://m.bilibili.com/search.html" className="index_searchIcon">
                        <svg className="icon_index_recommend">
                            <use xlinkHref="#icon-sousuo"></use>
                        </svg>
                    </a>
                    <a href="" className="index_myspace"></a>
                </div>
                <Router>
                    <div>
                    <ul id="header">
                    {
                        this.state.information.map((item,index) => {
                            return (
                                <li key={index} onClick={e => {this.$click(e)}} className= {index === this.state.index ? 'active-title' : 'title'}  id={index}>
                                    <Link to={this.state.link[index]} key={index}>{item} </Link>
                                </li>
                            )
                        })
                    }
                    <div className="border-bottom" style={{left: this.state.left * 100 +'%'}}></div>
                    </ul>
                        <Route exact path="/" component={Index}/>
                        <Route path="/comic" component={Comic}/>
                        <Route path="/fanju" component={Fanju}/>
                        <Route path="/guochaung" component={Guochuang}/>
                        <Route path="/yinyue" component={Yinyue}/>
                    </div>
                </Router>
            </div>
        );
    }
}