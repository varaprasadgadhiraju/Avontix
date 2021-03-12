import React, { useState } from "react"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const Hover=()=>{
 
    const { SubMenu } = Menu;

    return(
        <Menu  style={{ width: 256 }} mode="vertical">
             <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default Hover