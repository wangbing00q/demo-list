import React,{Component} from 'react'
import {
  Layout, Menu
} from 'antd';


const { Header } = Layout;

class Headerbar extends Component{
	render(){
		return (
		    <Header className="header">
	        	<div className="logo" >猫眼后台管理</div>
	        	<Menu
	          		theme="dark"
	          		mode="horizontal"
	         		 defaultSelectedKeys={['2']}
	          		style={{ lineHeight: '64px' }}
	        	>
	          		<Menu.Item key="1" disabled >功能区域</Menu.Item>
	       		</Menu>
	        </Header>
		)
	}
}

export default Headerbar

