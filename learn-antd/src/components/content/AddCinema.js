import React ,{Component} from 'react';
import axios from'axios';


import {
  Form, Input, Button, InputNumber,Select ,Cascader
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const allChildren=['3DIMAX','4D厅','5D厅','36D','巨幕厅','儿童厅','4K厅'];
const children = []
for (let i = 0; i < allChildren.length; i++) {
  children.push(<Option key={i} value={allChildren[i]}>{allChildren[i]}</Option>);
};


const options = [{
    value: '哈尔滨',
    label: '哈尔滨',
    children: [{
		value: '松北区',
   		label: '松北区',
   	},{
   		value:'南岗区',
   		label:'南岗区',
   	}],
}, {
    value: '北京',
    label: '北京',
    children: [{
    	value: '海淀区',
    	label: '海淀区',
    },{
    	value: '朝阳',
    	label: '朝阳',
    }],
}];

class AddCinema extends Component{
	constructor(props){
		super(props);
		this.state={
			num:0,
			name:'',
			address:'',
			brand:'',
			area:'',
			district:'',
			sproom:[],
			hadmovie:[],		
			movie:[],
			allArea:[],
			isEdit:false,
			_id:''
		}
		this.addNum=this.addNum.bind(this);
		this.addName=this.addName.bind(this);
		this.addAddress=this.addAddress.bind(this);
		this.addBrand=this.addBrand.bind(this);
		this.addSproom=this.addSproom.bind(this);
		this.addHadmovie=this.addHadmovie.bind(this);
		this.changeArea=this.changeArea.bind(this);
		this.addCinema=this.addCinema.bind(this);

	};
	addNum(val){
		this.setState({	
		num:val	
		})
	};
	addName(e){
		this.setState({
			name:e.target.value
		})
	};
	addAddress(e){
		this.setState({
			address:e.target.value
		})
	};
	addBrand(val){
		this.setState({
			brand:val
		})
	};
	addSproom(val){
		this.setState({
			sproom:val
		})
	};
	addHadmovie(val){
		this.setState({
			hadmovie:val
		})
	};
	changeArea(val){
		this.setState({
			allArea:val,
			area:val[0],
			district:val[1]
		})
	};
	addCinema(){
		// console.log(this.state);
		 const reg=/(^\s*)|(\s*$)/g;
    	if(this.state.name.replace(reg,'')===''
    		||this.state.address.replace(reg,'')===''
    		||this.state.brand===''
    		||this.state.area===''
    		||this.state.district===''
    		||this.state.hadmovie===''
    		||this.state.sproom===''){
    		return alert('内容填写不完整！');
    	} 
		const data={...this.state};
		axios({
			url:data.isEdit?'http://192.168.1.100:8888/saveeditcinema':'http://192.168.1.100:8888/addcinema',
			method:'post',
			data
		}).then(res=>{
			// console.log(res);
			alert(res.data.msg);
			if(res.data.state==200) return window.location.reload();
			if(res.data.state===300)  return window.location='/aboutcinema/list' 
		}).catch(err=>{
			console.log(err);
		})
	}
	componentWillMount(){
		var that=this;
		axios({
			url:'http://192.168.1.100:8888/addcinema',
			method:'get',
		}).then(res=>{
			// console.log(res);
			const data=res.data.postData;
			let arr=[];
			let movie=[];
			data.forEach(item=>{
				arr.push(item.num+'-'+item.name);
			});
			for (let i = 0; i < arr.length; i++) {
   				movie.push(<Option key={i} value={arr[i]}>{arr[i]}</Option>);
			};
			that.setState({
				movie
			})
		}).catch(err=>{
			console.log(err);
		});
		if(window.location.search){
			const _id=window.location.search.split('=')[1];
			axios({
		        method:'post',
		        url:'http://192.168.1.100:8888/editcinema',
		        data:{_id}
		    }).then(res=>{
		        console.log(res.data);
		        if(res.data.state===200){
		          const data=res.data.res;
		          this.setState({
		            num:data.num,
					name:data.name,
					address:data.address,
					brand:data.brand,
					area:data.area,
					district:data.district,
					sproom:data.sproom,
					hadmovie:data.hadmovie,		
					movie:data.movie,
					allArea:[data.area,data.district],
					isEdit:true,
					_id:data._id
		          })
		        }
		    }).catch(err=>{
		        console.log(err)
		    })
		}
	}

	render(){
		return (
			<div>
				<Form layout='horizontal'>
		            <FormItem label="序号">
			            <InputNumber 
			                min={0} 
			                style={{ width: 360 }} 
			                value={this.state.num}
			                onChange={this.addNum}
			              />
		            </FormItem>
		            <FormItem label="影院名">
			            <Input 
			              placeholder="影院名" 
			              style={{ width: 360 }} 
			              value={this.state.name}
			              onChange={this.addName}
			            />
		            </FormItem>
		            <FormItem label="详细地址">
			            <Input 
			              placeholder="详细地址" 
			              style={{ width: 360 }}
			              value={this.state.address}
			              onChange={this.addAddress} 
			            />
		            </FormItem>
		            <FormItem label="品牌">
			            <Select  style={{ width: 360 }} value={this.state.brand} onChange={this.addBrand}  >
    		        		<Option value="万达影城">万达影城</Option>
    		        		<Option value="华谊兄弟影院">华谊兄弟影院</Option>
    		       	   		<Option value="横店电影城">横店电影城</Option>
    		    		</Select>
		            </FormItem>
		            <FormItem label="特殊影厅">
		    			 <Select
		    			    mode="multiple"
		    			    style={{ width: 360 }}
		    			    placeholder="选择特殊影厅"
		    			    value={this.state.sproom}
			                onChange={this.addSproom}
		    			 >
		    			{children}
		    			</Select>
		            </FormItem>
		            <FormItem label="在售影片">
		    			 <Select
		    			    mode="multiple"
		    			    style={{ width: 360 }}
		    			    placeholder="选择在售影片"
		    			    value={this.state.hadmovie}
		    			    onChange={this.addHadmovie}
		    			 >
		    			{this.state.movie}
		    			</Select>
		            </FormItem>
		            <FormItem label="地区和行政区">
			            <Cascader 
			                options={options}  
			                placeholder="选择地区和行政区"
			                style={{ width: 360 }} 
			                value={this.state.allArea}
			                onChange={this.changeArea}
			            />
		            </FormItem>
		            <FormItem>
			            <Button type="primary" onClick={this.addCinema}>{this.state.isEdit?"保存":"添加"}</Button>
			        </FormItem>
			    </Form>
			</div>
		)
	}
}

export default AddCinema;