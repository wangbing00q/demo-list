import React,{Component} from 'react';
import axios from'axios';
import {
  Select , Button,Table, Tag,Divider,Collapse
} from 'antd';

const Option = Select.Option;
const Panel = Collapse.Panel;

const columns=[{
	title: '序号',
    dataIndex: 'num',
    key: 'num',
    align:'center',
    width:80
},{
	title: '片名',
    dataIndex: 'name',
    key: 'name',
    align:'center',
},{
	title: '长度',
    dataIndex: 'length',
    key: 'length',
    align:'center',
    render:length=>(<span>{length+'分钟'}</span>)
},{
	title: '想看',
    dataIndex: 'wantWatch',
    key: 'wantWatch',
    align:'center',
    width:100
},{
	title: '票房',
    dataIndex: 'bookingOffice',
    key: 'bookingOffice',
    align:'center',
},{
	title: '介绍',
    dataIndex: 'introduction',
    key: 'introduction',
    align:'center',
    width:240,
    render:introduction=>(
	  <Collapse defaultActiveKey={['1']} style={{ width: 180 }} >
	    <Panel showArrow={false} header="点击展开" key="2">
	       <p>{introduction}</p>
	    </Panel>
	  </Collapse>
  )
},{
	title: '导演',
    dataIndex: 'director',
    key: 'director',
    align:'center',
    width:100
},{
	title: '演员',
    dataIndex: 'have',
    key: 'have',
    align:'center',
    render:have=>(<span>{have+' '} </span>)
},{
    title: '操作',
    key: '_id',
    align:'center',
    render: record => (
    	<Button type="primary">
        	<a href={`/aboutmovie/editinfo?_id=${record._id}&&num=${record.num}`} >编辑</a>
    	</Button>
  ),
}]


class MovieInfo extends Component{
	constructor(props){
		super(props);
		this.state={
			sel:'在售',
			data:[]
		};
		this.changeSel=this.changeSel.bind(this);
	};
	changeSel(val){
		this.setState({
			sel:val
		});	
		this.getData(val)
	};
	getData(data){
		axios({
			url:'http://169.254.100.238:8888/getinfo',
			method:'post',
			data:{
				selType:data
			}
		}).then(res=>{
			this.setState({
				data:[...res.data]
			});
		}).catch(err=>{
			console.log(err);
		})
	}
	componentWillMount(){
		this.getData(this.state.sel);
	}
	// componentWillUpdate(){
	// 	console.log(1);
	// 	axios({
	// 		url:'http://192.168.1.100:8888/getinfo',
	// 		method:'post',
	// 		data:{
	// 			selType:this.state.sel
	// 		}
	// 	}).then(res=>{
	// 		this.setState({
	// 			data:[...res.data]
	// 		})
	// 	}).catch(err=>{
	// 		console.log(err);
	// 	})
	// }
	render(){
		return (
			<div>
				<div>
				    <Select value={this.state.sel} style={{ width: 240 }} onChange={this.changeSel}>
				      <Option value="在售">在售</Option>
				      <Option value="预售">预售</Option>
				      <Option value="售空">售空</Option>
				    </Select>
				</div>
				<Divider />
				<Table columns={columns} dataSource={this.state.data} />
			</div>
		)
	}
}


export default MovieInfo;
