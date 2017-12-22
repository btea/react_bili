import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import Nav from './component/nav_title';



// function throttle(func,wait){
//     let startTime = new Date(),timeout;
//     return function(){
//         let currentTime = new Date();
//         let context = this, args = arguments;
//         if(currentTime - startTime > wait){
//             func.apply(context,args)
//         }
//     }
// }

// 简单的节流函数
function throttle(func, wait, mustRun) {
    let timeout,
        startTime = new Date();

    return function() {
        let context = this,
            args = arguments,
            curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if(curTime - startTime >= mustRun){
            func.apply(context,args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        }else{
            timeout = setTimeout(func, wait);
        }
    };
};
// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
    let scrollTop = document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
    if(scrollTop > 800){
        document.getElementById('toTop').style.display = 'block';
    }else{
        document.getElementById('toTop').style.display = 'none';
    }
}
// 采用了节流函数
window.addEventListener('scroll',throttle(realFunc,500,800));

// 滚动到顶部
function toTop(){
    document.documentElement.scrollTop = 0;
}
class Cover extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                {/*首页展示*/}
                <div id="toTop" onClick={toTop}></div>
            </div>
        );
    }
}
ReactDOM.render(<Cover />, document.getElementById('root'));
