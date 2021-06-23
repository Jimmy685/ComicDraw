import React, {Component} from 'react';
import {Button, Popover} from "antd";
import {createFromIconfontCN} from "@ant-design/icons";

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2548978_12qa50n91nv.js',
});

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // left:props.Left,
            // top:props.Top,
            // width:props.Width_,
            // height:props.Height_

        }
    }

    copy = () => {
        console.log(this.props);
    }
    delete = () => {
    }

    render() {
        return (
            <div>
                <Popover placement="top" content={
                    <div>
                        <Button icon={<IconFont type="icon-copyhover"/>} type={"text"} onClick={this.copy}/>
                        <Button icon={<IconFont type="icon-delete"/>} type={"text"} onClick={this.delete}/>
                    </div>
                } trigger="click">
                    <canvas style={{background: "white", border: '3px solid black', position: 'absolute',}}/>
                </Popover></div>
        )
    }
}

export default Grid;