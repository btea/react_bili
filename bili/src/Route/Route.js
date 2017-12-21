import React from 'react';
import {BrowserRouter as Router,HashRouter,Route} from 'react-router-dom';
import Index from '../component/recommend';
import Comic from '../component/comic/screenTemplate';
import Fanju from '../containers/fanju';
import Guochuang from '../containers/guochuang';
import Yinyue from '../containers/yinyue';

export default class ReactRoad extends React.Component{
    render() {
        return (

               <Router>
                    <div>
                        <Route path="/" component={Index}/>
                        <Route path="/comic" component={Comic}/>
                        <Route path="/fanju" component={Fanju}/>
                        <Route path="/guochaung" component={Guochuang}/>
                        <Route path="/yinyue" component={Yinyue}/>
                    </div>
                </Router>
        )
    }
}