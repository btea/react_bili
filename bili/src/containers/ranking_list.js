import React from 'react';

export default class RankList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="comprehensive">综合</div>
                <div className="ranking-list">
                    <i></i>
                    排行
                </div>
            </div>
        )
    }
}