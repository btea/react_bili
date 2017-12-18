import React from  'react';
export default class Cal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            element: [],
            index: 0
        }
    }
    fetchCarousel = () => {
        let url = 'https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695';
        // let url = 'https://bird.ioliu.cn/v1?url=https://api.bilibili.com/nav';
        return fetch(url);
    }

    datas = () =>{
        this.fetchCarousel().then(response => {
            response.json().then(res => {
                console.log(res);
                res.data.forEach((item,index) => {
                     this.state.element.push(<li key={index}>
                        <a href={item.url}>
                            <img src={item.pic} alt=""/>
                        </a>
                    </li>)
                });
                this.setState({
                    data: res
                })
            })
        })
    }

    componentWillMount(){
        this.datas();
    }

    componentDidUpdate(){
        let obj = {
            cycle: 3000,
            index: this.state.index
        };
        timer(obj,this);
    }
    render(){
        let $data = this.state.data;
        if($data.constructor === Array){
            return (
                    <div>loading...</div>
                )
        }else{
            return(
                <div className="carousel">
                    <ul className="cal">
                        {
                            this.state.element.map(item => {
                                return item;
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}

function timer(obj,_this){
    let ul = document.querySelector('.carousel .cal');
    let style = window.getComputedStyle ? window.getComputedStyle(ul.parentNode,null): ul.parentNode.currentStyle;
    let w = style.width;
    let timer = setInterval(() => {
        if(_this.state.index < 4){
            _this.state.index++;
        }else{
            _this.state.index = 0;
        }
        ul.style.marginLeft = - w.split('px')[0] * _this.state.index + 'px';
        _this.render();
    },obj.cycle);
    let node = document.querySelectorAll('.carousel li');
}
