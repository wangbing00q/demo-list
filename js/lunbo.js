function move(ele,dir,end){
		clearInterval(ele.timer);
		if(dir==="left"){
			ele.timer=setInterval(function(){
			ele.style.left=ele.offsetLeft-35+"px";
			if(ele.offsetLeft<=end){
				ele.style.left=end+"px";
				clearInterval(ele.timer)	
			}
		},20)
		}else{
			ele.timer=setInterval(function(){
			ele.style.left=ele.offsetLeft+35+"px";
			if(ele.offsetLeft>=end){
				ele.style.left=end+"px";
				clearInterval(ele.timer)
			}
		},20)
		}	
	}
function move2(ele,end){
	clearInterval(ele.timer);
	ele.timer=setInterval(function(){
		ele.style.top=ele.offsetTop-3+"px"
		if(ele.offsetTop<=end){
			ele.style.top=end+"px";
			clearInterval(ele.timer)
		}
	},30)
}
function pageBg(){
	for(var k=0;k<pages.length;k++){
		pages[k].style.background=""
		pages[k].style.color="#8c8c8c"
	}
	pages[i===5?0:i].style.background="#8f8175"
	pages[i===5?0:i].style.color="#000"
}