import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './index.css';
import './reset.css';
import Nav from './component/nav_title';
import ReactRoad from './Route/Route';
import Index from './component/recommend';
import Comic from './containers/comic/comic';



class Cover extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <ReactRoad/>
                {/*首页展示*/}
            </div>

        );
    }
}
ReactDOM.render(<Cover />, document.getElementById('root'));
