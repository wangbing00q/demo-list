import React ,{Component} from 'react';


class Prevideo extends Component{
	constructor(props){
		super(props);
		this.state={
			data:{...this.props.postData}
		}
	}
	render(){
		return (
			<div>
				{this.state.data.title}
			</div>
		)
	}
}

export default Prevideo;