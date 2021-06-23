import React from "react";
import SideBar from "./SideBar";
import {Layout} from "antd";
import "../css/Blank.css";

const {Content} = Layout;
const Blank = () => {
    return (
        <Layout>
            <SideBar/>
            <Content>
                <div id={'chosenId'} className={'0'}/>
                <div id={'container'}>
                    <canvas
                        id="canvas-0"
                        style={{
                            left: 'calc(' + window.innerWidth / 2 + 'px - 320px)',
                            height: 'calc(' + window.innerHeight + 'px - 10px)'
                        }}
                    >
                    </canvas>
                </div>
            </Content>
        </Layout>
    )
}
export default Blank;