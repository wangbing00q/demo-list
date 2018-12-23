import React,{Component} from 'react'
import {Layout, Breadcrumb} from 'antd';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'



import Sidebar from './components/sider/Sider';
import Headerbar from './components/header/Header';
import Contentbar from './components/content/Content';



class App extends Component{
  render(){
    return (
      <Router>
      <Layout>
        <Headerbar />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Contentbar />
        </Layout>
      </Layout>
    </Layout>
    </Router>
    )
  }
}


export default App;
