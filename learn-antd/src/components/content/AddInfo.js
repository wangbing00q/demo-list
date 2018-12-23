import React ,{Component} from 'react';
import {
  Form, Input, Button, InputNumber
} from 'antd';
import axios from 'axios';

const FormItem = Form.Item;
const { TextArea } = Input;

class AddInfo extends Component{
	constructor(props){
		super(props);
		this.state={
			_id:'',
			length:0,
			wantWatch:0,
			bookingOffice:'',
			introduction:'',
			director:'',
			have:[],
			num:0,
			name:''
		};
		this.setHave=this.setHave.bind(this);
		this.editLength=this.editLength.bind(this);
		this.editWantWatch=this.editWantWatch.bind(this);
		this.editBookingOffice=this.editBookingOffice.bind(this);
		this.editIntroduction=this.editIntroduction.bind(this);
		this.editDirector=this.editDirector.bind(this);
		this.editHave=this.editHave.bind(this);
		this.saveEdit=this.saveEdit.bind(this);


	};
	componentWillMount(){
		if(window.location.search){
			axios({
				url:'http://169.254.100.238:8888/editinfo',
				method:'post',
				data:{queryStr:window.location.search}
			}).then(res=>{
				console.log(res);
				const data=res.data.postData;
				this.setState({
					_id:data._id,
					length:data.length,
					wantWatch:data.wantWatch,
					bookingOffice:data.bookingOffice,
					introduction:data.introduction,
					director:data.director,
					have:data.have,
					num:data.num,
					name:data.name
				})
			}).catch(err=>{
				console.log(err);
			})
		}
		
	};
	setHave(){
		var str='';
		this.state.have.forEach(item=>str+=(item+' '));
		return str
	};
	editLength(val){
		this.setState({
			length:val
		})
	};
	editWantWatch(val){
		this.setState({
			wantWatch:val
		})
	};
	editBookingOffice(e){
		this.setState({
			bookingOffice:e.target.value
		})
	};
	editIntroduction(e){
		this.setState({
			introduction:e.target.value
		})
	};
	editDirector(e){
		this.setState({
			director:e.target.value
		})
	};
	editHave(e){
		var val=e.target.value.split('，')
		this.setState({
			have:val
		})
	};
	saveEdit(e){
		e.preventDefault();
		const postData={...this.state};
		axios({
			url:'http://169.254.100.238:8888/saveinfo',
			data:postData,
			method:'post'
		}).then(res=>{
			// console.log(res);
			alert(res.data.msg);
			if(res.data.state==200) return  window.location='/aboutmovie/info'
		}).catch(err=>{
			console.log(err);
		})
	}
	render(){
		return (
			<div>
				<Form layout='horizontal'>
					<FormItem label="序号">
			            <InputNumber 
			            	disabled={true}
			                min={0} 
			                style={{ width: 360 }} 
			                value={this.state.num}
			             />
			        </FormItem>
			        <FormItem label="片名">
			            <Input 
			            	disabled={true}
			                placeholder="片名" 
			                style={{ width: 360 }} 
			                value={this.state.name}
			            />
			        </FormItem>
			        <FormItem label="影片长度">
			            <InputNumber 
			                min={0} 
			                style={{ width: 360 }} 
			                value={this.state.length}
			                onChange={this.editLength}
			             />
			        </FormItem>
			        <FormItem label="想看">
			            <InputNumber 
			                min={0} 
			                style={{ width: 360 }} 
			                value={this.state.wantWatch}
			                onChange={this.editWantWatch}
			             />
			        </FormItem>
			        <FormItem label="票房">
			            <Input 
			                placeholder="票房" 
			                style={{ width: 360 }} 
			                value={this.state.bookingOffice}
			                onChange={this.editBookingOffice}
			            />
			        </FormItem>
			        <FormItem label="影片介绍">
			            <TextArea 
			                placeholder="影片介绍,输入完成后请按enter提交！" 
			                autosize={true}
			                style={{ width: 360,height:100 }} 
			                value={this.state.introduction}
			                onChange={this.editIntroduction}
			            />
			        </FormItem>
			        <FormItem label="导演">
			            <Input 
			                placeholder="导演" 
			                style={{ width: 360 }} 
			                value={this.state.director}
			                onChange={this.editDirector}
			            />
			        </FormItem>
			        <FormItem label="演员">
			            <Input 
			                placeholder="请以'，'分隔演员名字,按enter提交！" 
			                style={{ width: 360 }} 
			                defaultValue={this.state.have}
			                onChange={this.editHave}
			            />
			        </FormItem>
			        <FormItem >
            			<Button type="primary" onClick={this.saveEdit}>保存</Button>
            		</FormItem>
				</Form>
			</div>
		)
	}
}

export default AddInfo