import React from 'react';
import SmallView from './smallView';
import Fetch from '../../fetch/fetch';
import '../recommend.css';

export default class View extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            obtainData: ''
        }
    }

    obtain = () =>{
        Fetch('get','https://www.bilibili.com/index/catalogy/1-recommend.json')
            .then(
                res => {
                    res.json().then(response => {
                        console.log(response);
                        this.setState({
                            obtainData: response.recommend.list
                        })
                        console.log(this.state);
                    })
                }
            )
    }

    componentWillMount(){
        this.obtain();
    }

    render(){
        if(this.state.obtainData){
            return <div className={this.props.name}>
                {
                    this.state.obtainData.map((item,index) =>{
                        return <SmallView key={index} id={index} mid={item.mid} source={item} />
                    })
                }

            </div>
        }else{
            return(
                <div>2333333</div>
            )
        }
    }

}