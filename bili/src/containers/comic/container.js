import React from 'react';

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: ["推荐","MAD·AMV","MMD·3D","短片·手书·配音","综合"],
            index: 0
        }
    }

    render(){
        return <div className="container">
                <div className="scrollContainer">
                    {
                        this.state.title.map((item,index) =>{
                            return <a className={index === this.state.index ? 'active title' : 'title'} key={index}>{item}</a>
                        })
                    }
                </div>
                <div className="index_line"></div>
        </div>
    }
}