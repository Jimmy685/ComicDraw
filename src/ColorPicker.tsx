import React, {Component} from 'react';
import {Button, Popover} from 'antd';
import {ChromePicker} from 'react-color'
import {createFromIconfontCN} from "@ant-design/icons";

/**
 * 调色板
 */
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2548978_ewbor2p2p3l.js',
});

class App extends Component {
    state = {
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
        }
    }
    handleChangeComplete = (color: any) => {
        this.setState({
            color: color.rgb
        });
    };
    Color = () => {
        return `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
    }

    render() {
        return (
            <Popover placement="rightTop" title={"Brush"} content={
                <div>
                    <div
                        style={{width: '225px', height: '50px', background: this.Color()}}
                        id={'colorPicker'}
                    >
                    </div>
                    <ChromePicker
                        color={this.Color()}
                        onChangeComplete={this.handleChangeComplete}
                    /></div>
            } trigger="click">
                <Button shape="circle" icon={<IconFont type="icon-palette"/>} size={'large'}/>
            </Popover>
        );
    }
}

export default App;
