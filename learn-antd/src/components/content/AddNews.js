import React ,{Component} from 'react';
import News from './newscpt/NewsComponent';
import Photos from './newscpt/PhotosComponent';
import Prevideo from './newscpt/PrevideoComponent';



import {
  Select ,Divider
} from 'antd';

// const FormItem = Form.Item;
const Option = Select.Option;

class AddNews extends Component{
	constructor(props){
		super(props);
		this.state={
			newsCase:'资讯',
			news:{
				num:0,
				author:'',
				title:'news',
				info:[],
			},
			photos:{
				title:'photos',
				intr:'',
				pics:[]
			},
			prevideo:{
				title:'prevideo',
				video:null,
				num:0
			}
		};
		this.chooseCase=this.chooseCase.bind(this);
		this.getComponentCase=this.getComponentCase.bind(this);

	};
	chooseCase(val){
		this.setState({
			newsCase:val
		})
	};
	getComponentCase(){
		switch(this.state.newsCase){
			case '资讯':return (<News postData={this.state.news} />) ;break;
			case '图集':return (<Photos postData={this.state.photos} />) ;break;
			case '预告片':return (<Prevideo postData={this.state.prevideo} />) ;break;
		}
	};
	render(){
		return (
			<div>
				<div>
				    <Select value={this.state.newsCase} style={{ width: 240 }} onChange={this.chooseCase}>
						<Option value="资讯">资讯</Option>
						<Option value="图集">图集</Option>
						<Option value="预告片">预告片</Option>
					</Select>
				</div>
				<Divider />
				{this.getComponentCase()}
			</div>
		)
	}
}


export default AddNews;