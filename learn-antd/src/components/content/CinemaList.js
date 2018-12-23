import React,{Component} from 'react';
import { Table,Button,Popconfirm, Select,Collapse,Divider   } from 'antd';
import axios from 'axios';

const Option = Select.Option;
const Panel = Collapse.Panel;

const columns = [{
  title: '序号',
  dataIndex: 'num',
  key: 'num',
  align:'center',
  width:80
}, {
  title: '影院名',
  dataIndex: 'name',
  key: 'name',
  align:'center',
  width:180
}, {
  title: '详细地址',
  dataIndex: 'address',
  key: 'address',
  align:'center',
  width:200,
},{
  title: '品牌',
  dataIndex: 'brand',
  key: 'brand',
  align:'center',
  width:160
},{
  title: '特殊厅',
  dataIndex: 'sproom',
  key: 'sproom',
  align:'center',
  width:80,
  render:sproom=>(
	  <Collapse defaultActiveKey={['1']} style={{ width: 180 }} >
	    <Panel showArrow={false} header="点击展开" key="2">
	      {sproom.map(sproom => <p>{sproom}</p>)}
	    </Panel>
	  </Collapse>
  )
},{
  title: '在售影片',
  dataIndex: 'hadmovie',
  key: 'hadmovie',
  align:'center',
  render:hadmovie=>(
	  <Collapse defaultActiveKey={['1']} style={{ width: 180 }} >
	    <Panel showArrow={false} header="点击展开" key="2">
	      {hadmovie.map(hadmovie => <p>{hadmovie}</p>)}
	    </Panel>
	  </Collapse>
  )
},{
  title: '城市',
  dataIndex: 'area',
  key: 'area',
  align:'center',
  width:100
}, {
  title: '城区',
  key: 'district',
  dataIndex: 'district',
  align:'center',
  width:120
}, {
  title: '操作',
  key: '_id',
  dataIndex: '_id',
  align:'center',
  render: _id => (
    <Button type="primary">
      <a href={`/aboutcinema/editcinema?_id=${_id}`} >编辑</a>
    </Button>
  ),
}]
class CinemaList extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[],
			selectedRowKeys: [], // Check here to configure the default column
			where:'全部',
			allWhere:[],
		};
		this.chooseWhere=this.chooseWhere.bind(this);
	};
	onSelectChange = (selectedRowKeys) => {
	    this.setState({ selectedRowKeys });
	};
	delMovie = () => {
		let postData=[];
		const keys=this.state.selectedRowKeys;
		const data=this.state.data;
		for(var i=0;i<keys.length;i++){
			postData.push(data[keys[i]]._id);
		}
		// console.log(postData);
	    axios({
	    	url:'http://192.168.1.100:8888/delcinema',
	    	method:'post',
	    	data:{postData}
	    }).then(res=>{
	    	// console.log(res);
	    	alert(res.data.msg);
	    	if(res.data.state===200) return window.location='/aboutcinema/list';
	    	alert('删除异常，已删除'+res.data.err+'条数据');
	    	window.location='/aboutcinema/list';
	    }).catch(err=>{
	    	console.log(err);
	    })
	};
	chooseWhere(val){
		this.setState({
			where:val
		})
		axios({
	    	url:'http://192.168.1.100:8888/getcinema',
	    	method:'post',
	    	data:{where:val}
	    }).then(res=>{
	    	// console.log(res.data);
	    	const data=res.data.postData;
	    	var arr=[];
	    	data.forEach(item=>{
	    		arr.push(item.area);
	    	})
	    	arr=Array.from(new Set(arr));
	    	this.setState({
	    		data:[...data]
	    	})
	    }).catch(err=>{
	    	console.log(err);
	    })
	}
	componentWillMount(){
		const where=this.state.where
		axios({
	    	url:'http://192.168.1.100:8888/getcinema',
	    	method:'post',
	    	data:{where}
	    }).then(res=>{
	    	// console.log(res.data);
	    	const data=res.data.postData;
	    	var arr=[];
	    	data.forEach(item=>{
	    		arr.push(item.area);
	    	})
	    	arr=Array.from(new Set(arr));
	    	this.setState({
	    		data:[...data],
	    		allWhere:arr
	    	})
	    }).catch(err=>{
	    	console.log(err);
	    })
	}
	render(){
		const {  selectedRowKeys } = this.state;
	    const rowSelection = {
	      selectedRowKeys,
	      onChange: this.onSelectChange,
	    };
	    const hasSelected = selectedRowKeys.length > 0;
		return (
			<div>
				<div>
				    <Select value={this.state.where} style={{ width: 240 }} onChange={this.chooseWhere}>
						<Option value="全部">全部</Option>
						{this.state.allWhere.map(where => <Option value={where}>{where}</Option>)}
					</Select>
				</div>
				<Divider />
				<div style={{ marginBottom: 16 }}>
	        		<Popconfirm title="确认删除？"  onConfirm={this.delMovie} okText="Yes" cancelText="No">
		            	<Button type="danger" disabled={!hasSelected}>删除 </Button>
	          		</Popconfirm>
	            	<span style={{ marginLeft: 8 }}>
	            		{hasSelected ? `删除选中 ${selectedRowKeys.length} 条数据` : ''}
	            	</span>
	            </div>
	            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
			</div>
		)
	}
}


export default CinemaList