import React ,{Component} from 'react';
import axios from'axios';


import {
  Form, Input, Button, InputNumber,Select ,DatePicker ,Upload, Icon
} from 'antd';

import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const FormItem = Form.Item;
const Option = Select.Option;

const allChildren=['爱情','喜剧','恐怖','惊悚','动画','动作','犯罪','冒险','战争'];
const children = []
for (let i = 0; i < allChildren.length; i++) {
  children.push(<Option key={i} value={allChildren[i]}>{allChildren[i]}</Option>);
};

const fileList=[];
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};




class AddMovie extends Component{
  constructor(props){
    super(props);
    this.state={
      num:0,
      is3DIMAX:'是',
      name:'',
      Selling:'在售',
      score:0,
      type:[],
      area:'内地',
      date:'',
      pic:'',
      preview:false,
      predate:false,
      btn:false,
      _id:''
    };
    this.addName=this.addName.bind(this);
    this.addNo=this.addNo.bind(this);
    this.addScore=this.addScore.bind(this);
    this.addIS3D=this.addIS3D.bind(this);
    this.addSelling=this.addSelling.bind(this);
    this.addArea=this.addArea.bind(this);
    this.addType=this.addType.bind(this);
    this.addDate=this.addDate.bind(this);
    this.addPic=this.addPic.bind(this);
    this.addMovie=this.addMovie.bind(this);

  };
  addName(e){
    // console.log(e.target.value);
    this.setState({
      name:e.target.value
    })
  };
  addNo(val){
    // console.log(val)
    this.setState({
      num:val
    })
    // console.log(this.state.No)
  };
  addScore(val){
    this.setState({
      score:val
    })
  };
  addIS3D(val){
    this.setState({
      is3DIMAX:val
    })
  };
  addSelling(val){
    this.setState({
      Selling:val
    })
  };
  addArea(val){
    this.setState({
      area:val
    })
  };
  addType(val){
    this.setState({
      type:val
    })
    // console.log(this.state.type)
  };
  addDate(val){
    if(val){
      this.setState({
        date:val._d.toLocaleDateString(),
        predate:false
      })
    }else {
      this.setState({
        date:''
      })
    }
  };
  addPic(file){
    this.setState({
      preview:false,
      pic:file.file.thumbUrl
    })
  };
  addMovie(e){
    e.preventDefault();
    const reg=/(^\s*)|(\s*$)/g;
    if(this.state.name.replace(reg,'')===''||this.state.date===''||this.state.pic===''||this.state.type.length===0) return alert('内容填写不完整！');
    const postData={...this.state}
    axios({
      url:postData.btn?'http://169.254.100.238:8888/savemovie':'http://169.254.100.238:8888/addmovie',
      method:'post',
      data:postData,
    }).then(res=>{
      alert(res.data.msg);
      if(res.data.state===200)  return this.props.history.push('/aboutmovie/add');
      if(res.data.state===300)  return this.props.history.push('/aboutmovie/list') 
    }).catch(err=>{
      console.log(err)
    })
  }
  componentWillMount(){
    if(window.location.search){
      const _id=window.location.search.split('=')[1];
      axios({
        method:'post',
        url:'http://169.254.100.238:8888/edit',
        data:{_id}
      }).then(res=>{
        // console.log(res.data);
        if(res.data.state===200){
          const data=res.data.res;
          this.setState({
            num:data.num,
            is3DIMAX:data.is3DIMAX,
            name:data.name,
            Selling:data.Selling,
            score:data.score,
            type:data.type,
            area:data.area,
            date:data.date,
            pic:data.pic,
            preview:true ,
            predate:true,
            btn:true,
            _id:_id
          })
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  }

  render() {
    return (
      <div>
        <Form layout='horizontal'>
          <FormItem label="序号">
             <InputNumber 
                min={0} 
                style={{ width: 360 }} 
                value={this.state.num} 
                onChange={value=>this.addNo(value)} 
              />
          </FormItem>
          <FormItem label="片名">
            <Input 
              placeholder="片名" 
              style={{ width: 360 }} 
              value={this.state.name} 
              onChange={this.addName} 
            />
          </FormItem>
          <FormItem label="是否为3DIMAX">
            <Select  style={{ width: 360 }} value={this.state.is3DIMAX} onChange={this.addIS3D} >
              <Option value={'是'}>是</Option>
              <Option value={'否'}>否</Option>
            </Select>
          </FormItem>
          <FormItem label="销售状态">
    		    <Select  style={{ width: 360 }} value={this.state.Selling} onChange={this.addSelling} >
    		      <Option value="在售">在售</Option>
    		      <Option value="预售">预售</Option>
    		      <Option value="售空">售空</Option>
    		    </Select>
          </FormItem>
          <FormItem label="评分">
            <InputNumber 
              min={0} max={10}  
              style={{ width: 360 }} 
              step={0.1}  
              value={this.state.score} 
              onChange={value=>this.addScore(value)} 
            />
          </FormItem>
          <FormItem label="类型">
    			  <Select
    			    mode="multiple"
    			    style={{ width: 360 }}
    			    placeholder="选择影片类型"
              value={this.state.type}
              onChange={this.addType}
    			  >
    			    {children}
    			  </Select>
          </FormItem>
          <FormItem label="地区">
            <Select style={{ width: 360 }} value={this.state.area} onChange={this.addArea}>
              <Option value="欧美">欧美</Option>
              <Option value="内地">内地</Option>
              <Option value="港台">港台</Option>
              <Option value="日韩">日韩</Option>
              <Option value="印度">印度</Option>
            </Select>
          </FormItem>
          <FormItem label="上映日期">
            {this.state.predate&&<div><Input disabled={true} style={{ width: 360 }} value={this.state.date}/> </div>}
            <DatePicker 
              locale={locale} 
              placeholder="上映日期" 
              style={{ width: 360 }}
              onChange={this.addDate} 
            />
          </FormItem>
          <FormItem label="海报">
            <Upload {...props} onChange={this.addPic}>
              <Button>
                <Icon type="upload" /> 上传图片
              </Button>
            </Upload>
            {this.state.preview&&<div><img src={this.state.pic} width='48' height='48' /></div>}
          </FormItem>
          <FormItem >
            <Button type="primary" onClick={e=>this.addMovie(e)}>{this.state.btn?'保存':'添加'}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}


export default AddMovie





