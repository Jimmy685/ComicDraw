import React, {Component} from 'react';
import {Button, Menu, Popover,} from 'antd';
import {createFromIconfontCN} from "@ant-design/icons";
import {FreePen, Clear} from '../Tools'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2548978_ewbor2p2p3l.js',
});

class App extends Component {
    state = {
        inputValue: 1,
    }

    onChange = (value: number) => {
        this.setState({
            inputValue: value,
        });
    };
    onClick = () => {

    }

    render() {
        return (
            <Popover content={
                <div style={{width: '200px'}}>
                    <Menu
                        onSelect={(e) => {
                            if (e.key === '1') {
                                FreePen();
                            } else if (e.key === '2') {
                                Clear();
                            }
                        }}
                    >
                        <Menu.Item key='1'>Free pen</Menu.Item>
                        <Menu.Item key='2'>Clear</Menu.Item>
                    </Menu>
                    {/*<Divider/>*/}
                    {/*<Row>*/}
                    {/*    <Col span={12}>*/}
                    {/*        <Slider*/}
                    {/*            min={1}*/}
                    {/*            max={20}*/}
                    {/*            onChange={this.onChange}*/}
                    {/*            value={this.state.inputValue}*/}
                    {/*            id={'slider-1'}*/}
                    {/*        />*/}
                    {/*    </Col>*/}
                    {/*    <Col span={4}>*/}
                    {/*        <InputNumber*/}
                    {/*            min={1}*/}
                    {/*            max={20}*/}
                    {/*            style={{margin: '0 5px', width: '60px'}}*/}
                    {/*            value={this.state.inputValue}*/}
                    {/*            onChange={this.onChange}*/}
                    {/*        />*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </div>
            } title={'Pen'} placement="rightTop" trigger="click">
                <Button
                    shape="circle"
                    icon={<IconFont type="icon-pen"/>}
                    size={'large'}
                    onClick={this.onClick}
                />
            </Popover>
        );
    }
}

export default App;
