import React from "react";
import {Button, Layout, Popover} from "antd";
import SideBar from "./SideBar";
import "../css/Four.css";
import {createFromIconfontCN} from "@ant-design/icons";
import {Del, Copy} from '../Tools';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2548978_rsw8vdwshol.js',
});
const {Content} = Layout;
const Four = () => {

    return (
        <Layout>
            <SideBar/>
            <Content>
                <div id={'chosenId'} className={'0'}/>
                <div id={'container'}>
                    <div id={'four'}>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(520, 480)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-16' className='fourCanvas-1'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-17' className='fourCanvas-2'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-18' className='fourCanvas-2'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-19' className='fourCanvas-2'/>
                        </Popover>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}
export default Four;