import React from 'react';
// import {
//     BrowserRouter,
//     Route,
//     Link
// } from 'react-router-dom';
import './nav_title.css';


export default class NavTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            left: 0.02,
            information: ['首页','动画','番剧','国创','音乐'],
            link: ['/','comic','fanju','guochaung','yinyue'],
            Components: ['Index','Comic','Guochuang','Yinyue']
        }
    }
    $click(e){
        let target = e.target;
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
                <ul id="header">
                    {
                        this.state.information.map((item,index) => {
                            return <li key={index} className= {index === this.state.index ? 'active-title' : 'title'} onClick={(e) => this.$click(e)} id={index}>{item}</li>
                        })
                    }
                    <div className="border-bottom" style={{left: this.state.left * 100 +'%'}}></div>
                </ul>
            </div>
        );
    }
}

// export default  class NavRouter extends React.Component{
//     render(){
//         retunr(
//             <BrowserRouter>
//                 <NavTitle/>
//             </BrowserRouter>
//         )
//
//     }
// }
