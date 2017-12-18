import React from 'react';
import Containers from './container';
import View from '../../component/comic/smallView';
import './comic.css';


export default class Comic extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="comic">
                <Containers/>
                <View/>
            </div>
        )
    }
}