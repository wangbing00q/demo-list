import React,{Component} from 'react';
import { Table, Tag, Button,Popconfirm,  } from 'antd';
import axios from 'axios';


const columns = [{
  title: '序号',
  dataIndex: 'num',
  key: 'num',
  align:'center',
  width:80
}, {
  title: '片名',
  dataIndex: 'name',
  key: 'name',
  align:'center',
}, {
  title: '销售状态',
  dataIndex: 'Selling',
  key: 'Selling',
  align:'center',
  width:100
},{
  title: '评分',
  dataIndex: 'score',
  key: 'score',
  align:'center',
  width:60
},{
  title: '地区',
  dataIndex: 'area',
  key: 'area',
  align:'center',
  width:60
},{
  title: '上映日期',
  dataIndex: 'date',
  key: 'date',
  align:'center',
},{
  title: '3DIMAX',
  dataIndex: 'is3DIMAX',
  key: 'is3DIMAX',
  align:'center',
  width:100
}, {
  title: '类型',
  key: 'type',
  dataIndex: 'type',
  align:'center',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: '海报',
  dataIndex: 'pic',
  key: 'pic',
  align:'center',
  render: src => (
    <span>
      <img src={src} alt='海报' width='48' height='48'  />
    </span>
  ),
},{
  title: '操作',
  key: '_id',
  dataIndex: '_id',
  align:'center',
  render: _id => (
    <Button type="primary">
      <a href={`/aboutmovie/editmovie?_id=${_id}`} >编辑</a>
    </Button>
  ),
}];


class MovieList extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[],
			selectedRowKeys: [], // Check here to configure the default column
		}
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
	    	url:'http://169.254.100.238:8888/delmovie',
	    	method:'post',
	    	data:{postData}
	    }).then(res=>{
	    	// console.log(res);
	    	alert(res.data.msg);
	    	if(res.data.state===200) return window.location='/aboutmovie/list';
	    	alert('删除异常，已删除'+res.data.err+'条数据');
	    	window.location='/aboutmovie/list';
	    }).catch(err=>{
	    	console.log(err);
	    })
	};
	onSelectChange = (selectedRowKeys) => {
	    this.setState({ selectedRowKeys });
	};
	getData(){
		axios({
			url:'http://169.254.100.238:8888/movielist',
			method:'get',
		}).then(res=>{
			this.setState({
				data:[...res.data]
			})
		}).catch(err=>{
			console.log(err);
		})
	}


	componentWillMount(){
		this.getData();
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
	    );
	}
}


export default MovieList;


