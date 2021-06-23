import React from "react";
import {Layout, Popover, Button} from "antd";
import SideBar from "./SideBar";
import "../css/Six.css";
import {createFromIconfontCN} from "@ant-design/icons";
import {Del, Copy} from '../Tools';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2548978_rsw8vdwshol.js',
});
const {Content} = Layout;
const Six = () => {

    return (
        <Layout>
            <SideBar/>
            <Content>
                {/*<Grid text={'xxx'}/>*/}
                <div id={'chosenId'} className={'0'}/>
                <div id={'container'}>
                    <div id={'six'} style={{left: 'calc(' + window.innerWidth / 2 + 'px - 320px)'}}>
                        <div className={'line'}>
                            <Popover placement="top" content={
                                <div>
                                    <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                        Copy(250, 240)
                                    }}/>
                                    <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                                </div>
                            } trigger="click">
                                <canvas id='canvas-1' className='sixCanvas'/>
                            </Popover>
                            <Popover placement="top" content={
                                <div>
                                    <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                        Copy(250, 240)
                                    }}/>
                                    <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                                </div>
                            } trigger="click">
                                <canvas id='canvas-2' className='sixCanvas'/>
                            </Popover>
                        </div>
                        <div className={'line'}>
                            <Popover placement="top" content={
                                <div>
                                    <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                        Copy(250, 240)
                                    }}/>
                                    <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                                </div>
                            } trigger="click">
                                <canvas id='canvas-3' className='sixCanvas'/>
                            </Popover>
                            <Popover placement="top" content={
                                <div>
                                    <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                        Copy(250, 240)
                                    }}/>
                                    <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                                </div>
                            } trigger="click">
                                <canvas id='canvas-4' className='sixCanvas'/>
                            </Popover>
                        </div>
                        <div className={'line'}>
                            <Popover placement="top" content={
                                <div>
                                    <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                        Copy(250, 240)
                                    }}/>
                                    <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                                </div>
                            } trigger="click">
                                <canvas id='canvas-5' className='sixCanvas'/>
                            </Popover>
                            <Popover placement="top" content={
                                <div>
                                    <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                        Copy(250, 240)
                                    }}/>
                                    <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                                </div>
                            } trigger="click">
                                <canvas id='canvas-6' className='sixCanvas'/>
                            </Popover>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}
export default Six;