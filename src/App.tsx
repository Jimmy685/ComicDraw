import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import img1 from "./img/blank.jpg";
import img2 from "./img/six.jpg";
import img3 from "./img/nine.jpg";
import img4 from "./img/four.jpg";
import Blank from "./UI/Blank";
import Four from "./UI/Four";
import Six from "./UI/Six";
import Nine from "./UI/Nine";
import "./css/App.css";
import paper from "paper";

let cacheRender = (a: number, b: number) => {
    for (let i = a; i <= b; i++) {
        let canvas: any = document.getElementById("canvas-" + i);
        if (canvas != null) {
            canvas.onmousedown = () => {
                let t: any = document.getElementById('chosenId');
                t.className = i;
            }
            let last: string | null = null;
            let history: string[] | null = JSON.parse(localStorage.getItem("history" + i));
            if (history != null && history.length > 0) {
                last = history.pop();
                if (last != null) {
                    paper.setup(canvas);
                    paper.project.importJSON(last);
                }
                history.push(last);
            }
        } else {
            console.log('can not find ', i);
        }
    }
}
let blank = () => {
    ReactDOM.render(<Blank/>, document.getElementById('root'))
    setTimeout(() => {
        cacheRender(0, 0)
    }, 0);
}
let four = () => {
    ReactDOM.render(<Four/>, document.getElementById('root'))
    setTimeout(() => {
        cacheRender(16, 19)
    }, 0);
}
let six = () => {
    ReactDOM.render(<Six/>, document.getElementById('root'));
    setTimeout(() => {
        cacheRender(1, 6)
    }, 0);
}
let nine = () => {
    ReactDOM.render(<Nine/>, document.getElementById('root'))
    setTimeout(() => {
        cacheRender(7, 15)
    }, 0);
}

// window.addEventListener('click',(e)=>{console.log(e.clientX,e.clientY)})
function App() {
    return (
        <div id={'holder'}>
            <div id={'text'}>Choose a Template</div>
            <img src={img1} alt={'blank'} onClick={blank}/>
            <img src={img2} alt={'six'} onClick={six}/>
            <img src={img3} alt={'nine'} onClick={nine}/>
            <img src={img4} alt={'four'} onClick={four}/>
        </div>
    );
}

export default App;
