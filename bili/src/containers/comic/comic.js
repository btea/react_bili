import React from 'react';
import Containers from './container';
import View from '../../component/comic/screenTemplate';
import './comic.css';


export default class Comic extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="recommend">
                <Containers/>
                <View/>
            </div>
        )
    }
}