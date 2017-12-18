import React from 'react';

export default class NavTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            left: 0.02
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
            <ul id="header">
                <li className= {0 === this.state.index ? 'active-title' : 'title'} onClick={(e) => this.$click(e)} id="0">首页</li>
                <li className= {1 === this.state.index ? 'active-title' : 'title'} onClick={(e) => this.$click(e)} id="1">动画</li>
                <li className= {2 === this.state.index ? 'active-title' : 'title'} onClick={(e) => this.$click(e)} id="2">番剧</li>
                <li className= {3 === this.state.index ? 'active-title' : 'title'} onClick={(e) => this.$click(e)} id="3">国创</li>
                <li className= {4 === this.state.index ? 'active-title' : 'title'} onClick={(e) => this.$click(e)} id="4">音乐</li>
                <div className="border-bottom" style={{left: this.state.left * 100 +'%'}}></div>
            </ul>
        );
    }
}
