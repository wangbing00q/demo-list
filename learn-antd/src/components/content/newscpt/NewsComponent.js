import React ,{Component} from 'react';
import ReactDOM from'react-dom';
import {
  Form, Input, Button, InputNumber,Select ,DatePicker ,Upload, Icon,Divider
} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

const fileList=[];
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};

class News extends Component{
	constructor(props){
		super(props);
		this.state={
			data:{...this.props.postData},
			el:[],
			index:[],
		};
		this.addInfoModule=this.addInfoModule.bind(this);
		this.addPicModule=this.addPicModule.bind(this);
		this.addNum=this.addNum.bind(this);
		this.addTitle=this.addTitle.bind(this);
		this.addAuthor=this.addAuthor.bind(this);
		this.addText=this.addText.bind(this);
		this.addPic=this.addPic.bind(this);
		this.removePic=this.removePic.bind(this);
		this.addNews=this.addNews.bind(this);
		this.showRealDom=this.showRealDom.bind(this);
	};
	showRealDom(){
		ReactDOM.findDOMNode(this.textRef.tip)
	}
	addInfoModule(){
		let newEl=this.state.el;
		newEl.push(
			<FormItem label="内容块">
			    <TextArea 
			        placeholder="内容块" 
			        autosize={true}
			        style={{ width: 360,height:100 }} 
			        ref={el=>this.textRef=el}
			        onBlur={this.addText}
			    />
			</FormItem>
		)
		this.setState({
			el:newEl
		})
	}
	addPicModule(){
		let newEl=this.state.el;
		newEl.push(
			<FormItem label="图片">
	            <Upload {...props} onChange={this.addPic} onRemove={this.removePic}>
	              <Button>
	                <Icon type="upload" /> 上传图片
	              </Button>
	            </Upload>
	        </FormItem>
		)
		this.setState({
			el:newEl
		})
	};
	addNum(val){
		let data=Object.assign({},this.state.data,{num:val})
		this.setState({
			data
		})
	};
	addTitle(e){
		let data=Object.assign({},this.state.data,{title:e.target.value})
		this.setState({
			data
		})
	};
	addAuthor(e){
		let data=Object.assign({},this.state.data,{author:e.target.value})
		this.setState({
			data
		})
	};
	addText(e){
		const reg=/(^\s*)|(\s*$)/g;
		var newInfo=this.state.data.info;
		newInfo.push(e.target.value.replace(reg,''))
		newInfo=Array.from(new Set(newInfo))
		let data=Object.assign({},this.state.data,{info:newInfo})
		this.setState({
			data
		})
	};
	addPic(file){
		// console.log(file)
		if(file.event){
			var newInfo=this.state.data.info;
			newInfo.push({src:file.file.thumbUrl});
			let data=Object.assign({},this.state.data,{info:newInfo})
	    	this.setState({
	        	data
	    	})
		}				
    };
    removePic(file){
    	// console.log(file.thumbUrl);
    	let newInfo=this.state.data.info;
    	for(var i=0;i<newInfo.length;i++){
    		// console.log(typeof(newInfo[i]))
    		if(typeof(newInfo[i])=='object'){
    			if(newInfo[i].src==file.thumbUrl){
    				newInfo.splice(i,1);
    			}
    		}
    	};
    	let data=Object.assign({},this.state.data,{info:newInfo})
    	this.setState({
	        data
	    })
    }
    addNews(){
    	console.log(this.state.data);
    }
	render(){
		return (
			<React.Fragment>
				<FormItem>
		            <Input 
		              placeholder="作者" 
		              style={{ width: 360,color:'red' }} 
		              value='请严格按照文章顺序添加内容块和图片块！！！'
		              disabled={true}
		            />
		          </FormItem>
				<Form layout='horizontal'>
		          <FormItem label="序号">
		             <InputNumber 
		                min={0} 
		                style={{ width: 360 }} 
		                value={this.state.data.num}
		                onChange={this.addNum}
		              />
		          </FormItem>
		          <FormItem label="作者">
		            <Input 
		              placeholder="作者" 
		              style={{ width: 360 }} 
		              value={this.state.data.author}
		              onChange={this.addAuthor}
		            />
		          </FormItem>
		           <FormItem label="标题">
		            <Input 
		              placeholder="标题" 
		              style={{ width: 360 }} 
		              value={this.state.data.title}
		              onChange={this.addTitle}
		            />
		          </FormItem>
		          {this.state.el}
		          <div >
		            <Button onClick={this.addInfoModule}>添加内容</Button>
		            <Divider type="vertical" />
		            <Button onClick={this.addPicModule}>添加图片</Button>
		          </div>
		          <Divider  />
		          <FormItem >
		            <Button type="primary" onClick={this.addNews}>添加</Button>
		          </FormItem>
		        </Form>
			</React.Fragment>
		)
	}
}

export default News;