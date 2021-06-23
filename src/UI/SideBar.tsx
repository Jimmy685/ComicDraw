import React from 'react';
import {Button, Tooltip, Layout} from "antd";
import PenMenu from "../component/Pen";
import ColorPicker from "../ColorPicker";
import {ToolMove, ToolEditPath, DrawGrid} from "../Tools";
import {createFromIconfontCN} from "@ant-design/icons";
import "../css/SideBar.css";
import {Redo, Undo} from "../UndoAndRedo";

const {Sider} = Layout;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2548978_rsw8vdwshol.js',
});

const SideBar = () => {
    return (
        <Sider
            style={{background: "#E8E8EC", height: '100vh'}}
            width={'65px'}
            breakpoint="md"
            collapsedWidth="0"
            theme={"light"}
        >
            <div className="SideIcon">
                <div className={'p'}><Tooltip title="Pen">
                    <PenMenu/>
                </Tooltip></div>
                <div className={'p'}><Tooltip title="Palette">
                    <ColorPicker/>
                </Tooltip></div>
                <div className={'p'}><Tooltip title="Grid">
                    <Button shape="circle" icon={<IconFont type="icon-rectangle"/>} size={'large'} onClick={DrawGrid}/>
                </Tooltip></div>
                <div className={'p'}><Tooltip title="Undo">
                    <Button shape="circle" icon={<IconFont type="icon-undo"/>} size={'large'} onClick={Undo}/>
                </Tooltip></div>
                <div className={'p'}><Tooltip title="Redo">
                    <Button shape="circle" icon={<IconFont type="icon-redo"/>} size={'large'} onClick={Redo}/>
                </Tooltip></div>
                <div className={'p'}><Tooltip title="Choose">
                    <Button shape="circle" icon={<IconFont type="icon-Hand"/>} size={'large'} onClick={ToolEditPath}/>
                </Tooltip></div>
                <div className={'p'}><Tooltip title="Move">
                    <Button shape="circle" icon={<IconFont type="icon-hand"/>} size={'large'} onClick={ToolMove}/>
                </Tooltip></div>
            </div>
        </Sider>
    )
}
export default SideBar;