import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import {Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const {   Sider } = Layout;

class Sidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Sider width={200} style={{ background: '#fff' }}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <SubMenu key="sub1" title={<span><Icon type="user" /><Link to='/aboutmovie'>影片相关</Link></span>}>
              <Menu.Item key="1"><Link to='/aboutmovie/add'>添加影片</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/aboutmovie/list'>影片列表</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/aboutmovie/info'>影片详情</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="user" /><Link to='/aboutcinema'>影院相关</Link></span>}>
              <Menu.Item key="4"><Link to='/aboutcinema/add'>添加影院</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/aboutcinema/list'>影院列表</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="user" /><Link to='/aboutnews'>资讯相关</Link></span>}>
              <Menu.Item key="6"><Link to='/aboutnews/add'>添加资讯</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/aboutnews/list'>资讯列表</Link></Menu.Item>
              <Menu.Item key="8"><Link to='/aboutnews/info'>咨询详情</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </React.Fragment>
    );
  }
}


export default Sidebar