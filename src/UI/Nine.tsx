import React from "react";
import {Button, Layout, Popover} from "antd";
import SideBar from "./SideBar";
import "../css/Nine.css";
import {createFromIconfontCN} from "@ant-design/icons";
import {Del, Copy} from '../Tools';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2548978_rsw8vdwshol.js',
});
const {Content} = Layout;
const Nine = () => {

    return (
        <Layout>
            <SideBar/>
            <Content>
                <div id={'chosenId'} className={'0'}/>
                <div id={'container'}>
                    <div id={'nine'} style={{left: 'calc(' + window.innerWidth / 2 + 'px - 320px)'}}>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-7' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-8' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-9' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-10' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-11' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-12' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-13' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-14' className='nineCanvas'/>
                        </Popover>
                        <Popover placement="top" content={
                            <div>
                                <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={() => {
                                    Copy(170, 240)
                                }}/>
                                <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={Del}/>
                            </div>
                        } trigger="click">
                            <canvas id='canvas-15' className='nineCanvas'/>
                        </Popover>

                    </div>
                </div>
            </Content>
        </Layout>

    )
}
export default Nine;