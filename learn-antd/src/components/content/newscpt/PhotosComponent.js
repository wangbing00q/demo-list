import React ,{Component} from 'react';
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


class Photos extends Component{
	constructor(props){
		super(props);
		this.state={
			data:{...this.props.postData}
		}
	}
	render(){
		return (
			<div>
				<FormItem label="内容块">
			            <TextArea 
			                placeholder="内容块" 
			                autosize={true}
			                style={{ width: 360,height:100 }} 
			            />
			        </FormItem>
		          <FormItem label="图片">
		            <Upload {...props}>
		              <Button>
		                <Icon type="upload" /> 上传图片
		              </Button>
		            </Upload>
		          </FormItem>
			</div>
		)
	}
}

export default Photos;