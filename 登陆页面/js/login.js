iknow.onclick=function(){
	gonggao.style.display="none"
	mengceng.style.display="none"
}
closegg.onclick=function(){
	gonggao.style.display="none"
	mengceng.style.display="none"
}
guide3.onclick=function(){
	mengceng.style.display="block"
	gonggao.style.display="block"
}
check.onclick=function(){
	if(this.getAttribute("flag")=="false"){
		this.setAttribute("flag","true")
		this.style.backgroundPosition="0px -22px"
	}else if(check.getAttribute("flag")=="true"){
		this.setAttribute("flag","false")
		this.style.backgroundPosition="0 0"
	}
}
login2.onmousedown=function(){
	this.style.backgroundPosition="0px -56px"
	this.onmouseup=function(){
		login2.style.backgroundPosition=""
	}
}
check2.onclick=function(){
	if(this.getAttribute("flag")=="false"){
		this.setAttribute("flag","true")
		this.style.backgroundPosition="0px -22px"
	}else if(this.getAttribute("flag")=="true"){
		this.setAttribute("flag","false")
		this.style.backgroundPosition="0 0"
	}
}
other.onclick=function(){
	otherlogin.style.display="none"
	motherlogin.style.display="block"
}
shouqi.onclick=function(){
	otherlogin.style.display="block"
	motherlogin.style.display="none"
}

login2.onclick=function(){
	tishi.style.display="none"
	wtishi1.style.display="none"
	wtishi2.style.display="none"
	wtishi3.style.display="none"
	wtishi4.style.display="none"
	if(check2.getAttribute("flag")=="true"){
		if(username2.value==""){
			wtishi2.style.display="block"
		}else if(pas2.value==""){
			wtishi3.style.display="block"
		}
	var ajax=new XMLHttpRequest;
	ajax.open("get","js/1.php?user="+username2.value+"&password="+pas2.value,true)
	ajax.send(null);
	ajax.onreadystatechange=function(){
		if(ajax.readyState===4&&ajax.status===200){
			var a=JSON.parse(ajax.responseText)
			if(a.code==0){
				wtishi1.style.display="block"
			}else if(a.code==1){
				tishi.style.display="block";
			}else{
				wtishi4.style.display="block"
			}
		}
	}
	}else{
		alert("您未同意用户协议，请仔细阅读，同意后勾选选框按钮")
	}
}


