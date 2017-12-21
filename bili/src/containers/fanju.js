import React from 'react';

export default class Fanju extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return <div className="router">fanjuqu</div>
    }
}