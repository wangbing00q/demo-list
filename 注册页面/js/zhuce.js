//选项卡
mobile1.onclick=function(){
	this.style.backgroundColor="#c9242a"
	email1.style.backgroundColor="#222"
	personal1.style.backgroundColor="#222"
	mopage.style.display="block"
	mailpage.style.display="none"
	perpage.style.display="none"
	mobile1si.style.display="block"
	email1si.style.display="none"
	personal1si.style.display="none"
}
email1.onclick=function(){
	this.style.backgroundColor="#c9242a"
	mobile1.style.backgroundColor="#222"
	personal1.style.backgroundColor="#222"
	mopage.style.display="none"
	mailpage.style.display="block"
	perpage.style.display="none"
	mobile1si.style.display="none"
	email1si.style.display="block"
	personal1si.style.display="none"
}
personal1.onclick=function(){
	this.style.backgroundColor="#c9242a"
	mobile1.style.backgroundColor="#222"
	email1.style.backgroundColor="#222"
	mopage.style.display="none"
	mailpage.style.display="none"
	perpage.style.display="block"
	mobile1si.style.display="none"
	email1si.style.display="none"
	personal1si.style.display="block"
}
//手机注册

//手机号码
var sjreg1=/^\d{11}$/
sjhm.onfocus=function(){
	sjhm.style.backgroundPosition=""
	sjtishi.style.display="block"
	sjwtishi1.style.display="none"
	sjwtishi2.style.display="none"
}
sjhm.onblur=function(){
	sjtishi.style.display="none"
	sjwtishi1.style.display="none"
	sjwtishi2.style.display="none"
	if(sjreg1.test(sjhm.value)){
	sjhm.style.backgroundPosition="-2px -530px"
}else if(sjhm.value===""){
	sjwtishi1.style.display="block"
}else{
	sjwtishi2.style.display="block"
}
}
//图片验证码
		var ary=[1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
		imgnum.innerHTML=ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]

function imgyz1(ev){
		var ary=[1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
		imgnum.innerHTML=ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]}
		imgnum.addEventListener('click',imgyz1)

yanzhengma1.onfocus=function(){
	yanzhengma1.style.backgroundPosition=""
	imgyztishi.style.display="block"
	imgyzwtishi1.style.display="none"
	imgyzwtishi2.style.display="none"
	imgyzwtishi3.style.display="none"
}
yanzhengma1.onblur=function(){
	imgyztishi.style.display="none"
	imgyzwtishi1.style.display="none"
	imgyzwtishi2.style.display="none"
	imgyzwtishi3.style.display="none"
	if(yanzhengma1.value===imgnum.innerHTML){
	yanzhengma1.style.backgroundPosition="-2px -805px"
}else if(yanzhengma1.value===""){
	imgyzwtishi1.style.display="block"
}else if(yanzhengma1.value.length!=6){
	imgyzwtishi2.style.display="block"
}else{
	imgyzwtishi3.style.display="block"
}
}
//模拟短信验证码
var num1=""
var timer1=""
monum.onclick=function(){
	num1=60
	clearInterval(timer1)
	timer1=setInterval(function(){
		monum.innerHTML=num1+"(s)"
		num1--
	if(num1==55){
		clearInterval(timer1)
		duanxinyz()
	}
	},1000)
}
function duanxinyz(ev){
		var ary2=[1,2,3,4,5,6,7,8,9,0]
		monum.innerHTML=""
		monum.innerHTML=ary2[parseInt(10*Math.random())]+""+ary2[parseInt(10*Math.random())]+""+ary2[parseInt(10*Math.random())]+""+ary2[parseInt(10*Math.random())]+""+ary2[parseInt(10*Math.random())]+""+ary2[parseInt(10*Math.random())]}

yanzhengma2.onfocus=function(){
	yanzhengma2.style.backgroundPosition=""
	mesyztishi.style.display="block"
	mesyzwtishi1.style.display="none"
	mesyzwtishi2.style.display="none"
	mesyzwtishi3.style.display="none"
}
yanzhengma2.onblur=function(){
	mesyztishi.style.display="none"
	mesyzwtishi1.style.display="none"
	mesyzwtishi2.style.display="none"
	mesyzwtishi3.style.display="none"
	if(yanzhengma2.value===monum.innerHTML){
	yanzhengma2.style.backgroundPosition="-2px -805px"
}else if(yanzhengma2.value===""){
	mesyzwtishi1.style.display="block"
}else if(yanzhengma2.value.length!=6){
	mesyzwtishi2.style.display="block"
}else{
	mesyzwtishi3.style.display="block"
}
}
//静态密码区域
jtpas1.onfocus=function(){
	jtpas1.style.backgroundPosition=""
	pastishi1.style.opacity="1"
	pastishi2.style.opacity="0"
	paswtishi1.style.opacity="0"
	paswtishi2.style.opacity="0"
	paswtishi3.style.opacity="0"
	paswtishi4.style.opacity="0"
}
jtpas2.onfocus=function(){
	jtpas1.style.backgroundPosition=""
	pastishi2.style.opacity="1"
	pastishi1.style.opacity="0"
	paswtishi1.style.opacity="0"
	paswtishi2.style.opacity="0"
	paswtishi3.style.opacity="0"
	paswtishi4.style.opacity="0"
}

	var flag=0
yincangpas1.onclick=function(){
	pastishi1.style.opacity="1"
	pastishi2.style.opacity="0"
	paswtishi1.style.opacity="0"
	paswtishi2.style.opacity="0"
	paswtishi3.style.opacity="0"
	paswtishi4.style.opacity="0"
	flag++
	if(flag%2==yincangpas1.getAttribute("index")){
		pastishi1.style.opacity="0"
		pastishi2.style.opacity="1"
		jtpas2.value=jtpas1.value
		jtpas1.style.display="none"
		jtpas2.style.display="block"
	}else{
		pastishi1.style.opacity="1"
		pastishi2.style.opacity="0"
		jtpas1.value=jtpas2.value
		jtpas1.style.display="block"
		jtpas2.style.display="none"
	}
}
yincangpas2.onclick=function(){
	pastishi1.style.opacity="1"
	pastishi2.style.opacity="0"
	paswtishi1.style.opacity="0"
	paswtishi2.style.opacity="0"
	paswtishi3.style.opacity="0"
	paswtishi4.style.opacity="0"
	flag++
	if(flag%2==yincangpas1.getAttribute("index")){
		pastishi1.style.opacity="0"
		pastishi2.style.opacity="1"
		jtpas2.value=jtpas1.value
		jtpas1.style.display="none"
		jtpas2.style.display="block"
	}else{
		jtpas1.value=jtpas2.value
		pastishi1.style.opacity="1"
		pastishi2.style.opacity="0"
		jtpas1.style.display="block"
		jtpas2.style.display="none"
	}
}

jtpas1.onblur=function(){
	var str1=jtpas1.value
	var arr3=str1.split("")
	pastishi1.style.opacity="0";
	paswtishi1.style.opacity="0";
	paswtishi2.style.opacity="0"
	paswtishi3.style.opacity="0"
	paswtishi4.style.opacity="0"
	if(jtpas1.value.length<6&&jtpas1.value.length!=0){
	paswtishi3.style.opacity="1"
	return
}else if(jtpas1.value===""){
	paswtishi1.style.opacity="1"
	return
}else if(jtpas1.value.length>30){
	paswtishi4.style.opacity="1"
	return
}	
	for(var i=0;i<arr3.length;i++){
		for(var j=i+1;j<arr3.length;j++){
			if(arr3[i]==arr3[j]){
				arr3.splice(j,1)
				j--			
	if(arr3.length!=1){
		jtpas1.style.backgroundPosition="-2px -530px"
		}else{
		paswtishi2.style.opacity="1"
		jtpas1.style.backgroundPosition=""			
		}}
	}
	}

}

jtpas2.onblur=function(){
	var str1=jtpas2.value
	var arr3=str1.split("")
	pastishi1.style.opacity="0";
	pastishi2.style.opacity="0";
	paswtishi1.style.opacity="0";
	paswtishi2.style.opacity="0"
	paswtishi3.style.opacity="0"
	paswtishi4.style.opacity="0"
	if(jtpas2.value.length<6&&jtpas2.value.length!=0){
	paswtishi3.style.opacity="1"
	return
}else if(jtpas2.value===""){
	paswtishi1.style.opacity="1"
	return
}else if(jtpas2.value.length>30){
	paswtishi4.style.opacity="1"
	return
}	
	for(var i=0;i<arr3.length;i++){
		for(var j=i+1;j<arr3.length;j++){
			if(arr3[i]==arr3[j]){
				arr3.splice(j,1)
				j--			
	if(arr3.length!=1){
		jtpas2.style.backgroundPosition="-2px -530px"
		}else{
		paswtishi2.style.opacity="1"
		jtpas2.style.backgroundPosition=""			
		}}
	}
	}

}


jtpas1.onkeydown=function(){
	if (jtpas1.value.length<12) {
		zhong1.style.backgroundColor=""
		zhong2.style.backgroundColor=""
		qiang1.style.backgroundColor=""
		qiang2.style.backgroundColor=""
		ruo1.style.backgroundColor="#2689b4"
		ruo2.style.backgroundColor="#2689b4"
	}else if(jtpas1.value.length>=12&&jtpas1.value.length<15
		){
		zhong1.style.backgroundColor="#2689b4"
		zhong2.style.backgroundColor="#2689b4"
		qiang1.style.backgroundColor=""
		qiang2.style.backgroundColor=""
		ruo1.style.backgroundColor=""
		ruo2.style.backgroundColor=""
	}else if(jtpas1.value.length>=15){
		zhong1.style.backgroundColor=""
		zhong2.style.backgroundColor=""
		qiang1.style.backgroundColor="#2689b4"
		qiang2.style.backgroundColor="#2689b4"
		ruo1.style.backgroundColor=""
		ruo2.style.backgroundColor=""
	}
}

jtpas2.onkeydown=function(){
	if (jtpas2.value.length<10) {
		zhong1.style.backgroundColor=""
		zhong2.style.backgroundColor=""
		qiang1.style.backgroundColor=""
		qiang2.style.backgroundColor=""
		ruo1.style.backgroundColor="#2689b4"
		ruo2.style.backgroundColor="#2689b4"
	}else if(jtpas2.value.length>=10&&jtpas2.value.length<15
		){
		zhong1.style.backgroundColor="#2689b4"
		zhong2.style.backgroundColor="#2689b4"
		qiang1.style.backgroundColor=""
		qiang2.style.backgroundColor=""
		ruo1.style.backgroundColor=""
		ruo2.style.backgroundColor=""
	}else if(jtpas2.value.length>=15){
		zhong1.style.backgroundColor=""
		zhong2.style.backgroundColor=""
		qiang1.style.backgroundColor="#2689b4"
		qiang2.style.backgroundColor="#2689b4"
		ruo1.style.backgroundColor=""
		ruo2.style.backgroundColor=""
	}
}
//真实姓名填写
var namereg1=/^[\u4e00-\u9fa5]{2,4}$/
name1.onfocus=function(){
	name1.style.backgroundPosition=""
	nametishi.style.display="block"
	namewtishi1.style.display="none"
	namewtishi2.style.display="none"
}
name1.onblur=function(){
	nametishi.style.display="none"
	namewtishi1.style.display="none"
	namewtishi2.style.display="none"
	if(namereg1.test(name1.value)){
	name1.style.backgroundPosition="-2px -530px"
}else if(name1.value===""){
	namewtishi1.style.display="block"
}else{
	namewtishi2.style.display="block"
}
}
//身份证号码
var idreg1=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
id1.onfocus=function(){
	id1.style.backgroundPosition=""
	idtishi.style.display="block"
	idwtishi1.style.display="none"
	idwtishi2.style.display="none"
}
id1.onblur=function(){
	idtishi.style.display="none"
	idwtishi1.style.display="none"
	idwtishi2.style.display="none"
	if(idreg1.test(id1.value)){
	id1.style.backgroundPosition="-2px -530px"
}else if(id1.value===""){
	idwtishi1.style.display="block"
}else{
	idwtishi2.style.display="block"
}
}

var num2=0
check.onclick=function(){
	num2++}

tijiao.onclick=function(){
	if(num2%2===0){
		alert("请阅读并同意用户协议")
	}else{
		alert("注册成功！")
	}
}

//邮箱注册
//邮箱输入
var yxreg1=/^\w{1,}@[a-z0-9]{2,5}(.com|.cn|.net|.org){1,4}$/
sjhm1.onfocus=function(){
	sjhm1.style.backgroundPosition=""
	sjtishi1.style.display="block"
	sjwtishi11.style.display="none"
	sjwtishi21.style.display="none"
}
sjhm1.onblur=function(){
	sjtishi1.style.display="none"
	sjwtishi11.style.display="none"
	sjwtishi21.style.display="none"
	if(yxreg1.test(sjhm1.value)){
	sjhm1.style.backgroundPosition="-2px -530px"
}else if(sjhm1.value===""){
	sjwtishi11.style.display="block"
}else{
	sjwtishi21.style.display="block"
}
}
//邮箱静态密码
jtpas11.onfocus=function(){
	jtpas11.style.backgroundPosition=""
	pastishi11.style.opacity="1"
	pastishi21.style.opacity="0"
	paswtishi11.style.opacity="0"
	paswtishi21.style.opacity="0"
	paswtishi31.style.opacity="0"
	paswtishi41.style.opacity="0"
}

jtpas21.onfocus=function(){
	jtpas21.style.backgroundPosition=""
	pastishi21.style.opacity="1"
	pastishi11.style.opacity="0"
	paswtishi11.style.opacity="0"
	paswtishi21.style.opacity="0"
	paswtishi31.style.opacity="0"
	paswtishi41.style.opacity="0"
}

	var flag1=0
yincangpas11.onclick=function(){
	pastishi11.style.opacity="1"
	pastishi21.style.opacity="0"
	paswtishi11.style.opacity="0"
	paswtishi21.style.opacity="0"
	paswtishi31.style.opacity="0"
	paswtishi41.style.opacity="0"
	flag1++
	if(flag1%2==yincangpas11.getAttribute("index")){
		pastishi11.style.opacity="0"
		pastishi21.style.opacity="1"
		jtpas21.value=jtpas1.value
		jtpas11.style.display="none"
		jtpas21.style.display="block"
	}else{
		pastishi11.style.opacity="1"
		pastishi21.style.opacity="0"
		jtpas11.value=jtpas2.value
		jtpas11.style.display="block"
		jtpas21.style.display="none"
	}
}
yincangpas21.onclick=function(){
	pastishi11.style.opacity="1"
	pastishi21.style.opacity="0"
	paswtishi11.style.opacity="0"
	paswtishi21.style.opacity="0"
	paswtishi31.style.opacity="0"
	paswtishi41.style.opacity="0"
	flag1++
	if(flag1%2==yincangpas11.getAttribute("index")){
		pastishi11.style.opacity="0"
		pastishi21.style.opacity="1"
		jtpas21.value=jtpas11.value
		jtpas11.style.display="none"
		jtpas21.style.display="block"
	}else{
		jtpas11.value=jtpas21.value
		pastishi11.style.opacity="1"
		pastishi21.style.opacity="0"
		jtpas11.style.display="block"
		jtpas21.style.display="none"
	}
}

jtpas11.onblur=function(){
	var str2=jtpas11.value
	var arr4=str2.split("")
	pastishi11.style.opacity="0";
	pastishi21.style.opacity="0";
	paswtishi11.style.opacity="0";
	paswtishi21.style.opacity="0"
	paswtishi31.style.opacity="0"
	paswtishi41.style.opacity="0"
	if(jtpas11.value.length<6&&jtpas11.value.length!=0){
	paswtishi31.style.opacity="1"
	return
}else if(jtpas11.value===""){
	paswtishi11.style.opacity="1"
	return
}else if(jtpas11.value.length>30){
	paswtishi41.style.opacity="1"
	return
}	
	for(var i=0;i<arr4.length;i++){
		for(var j=i+1;j<arr4.length;j++){
			if(arr4[i]==arr4[j]){
				arr4.splice(j,1)
				j--			
	if(arr4.length!=1){
		jtpas11.style.backgroundPosition="-2px -530px"
		}else{
		paswtishi21.style.opacity="1"
		jtpas11.style.backgroundPosition=""			
		}}
	}
	}

}

jtpas21.onblur=function(){
	var str2=jtpas21.value
	var arr4=str2.split("")
	pastishi11.style.opacity="0";
	pastishi21.style.opacity="0";
	paswtishi11.style.opacity="0";
	paswtishi21.style.opacity="0"
	paswtishi31.style.opacity="0"
	paswtishi41.style.opacity="0"
	if(jtpas21.value.length<6&&jtpas21.value.length!=0){
	paswtishi31.style.opacity="1"
	return
}else if(jtpas21.value===""){
	paswtishi11.style.opacity="1"
	return
}else if(jtpas21.value.length>30){
	paswtishi41.style.opacity="1"
	return
}	
	for(var i=0;i<arr4.length;i++){
		for(var j=i+1;j<arr4.length;j++){
			if(arr4[i]==arr4[j]){
				arr4.splice(j,1)
				j--			
	if(arr4.length!=1){
		jtpas21.style.backgroundPosition="-2px -530px"
		}else{
		paswtishi21.style.opacity="1"
		jtpas21.style.backgroundPosition=""			
		}}
	}
	}

}
jtpas11.onkeydown=function(){
	if (jtpas11.value.length<12) {
		zhong11.style.backgroundColor=""
		zhong21.style.backgroundColor=""
		qiang11.style.backgroundColor=""
		qiang21.style.backgroundColor=""
		ruo11.style.backgroundColor="#2689b4"
		ruo21.style.backgroundColor="#2689b4"
	}else if(jtpas11.value.length>=12&&jtpas11.value.length<15
		){
		zhong11.style.backgroundColor="#2689b4"
		zhong21.style.backgroundColor="#2689b4"
		qiang11.style.backgroundColor=""
		qiang21.style.backgroundColor=""
		ruo11.style.backgroundColor=""
		ruo21.style.backgroundColor=""
	}else if(jtpas11.value.length>=15){
		zhong11.style.backgroundColor=""
		zhong21.style.backgroundColor=""
		qiang11.style.backgroundColor="#2689b4"
		qiang21.style.backgroundColor="#2689b4"
		ruo11.style.backgroundColor=""
		ruo21.style.backgroundColor=""
	}
}

jtpas21.onkeydown=function(){
	if (jtpas21.value.length<10) {
		zhong11.style.backgroundColor=""
		zhong21.style.backgroundColor=""
		qiang11.style.backgroundColor=""
		qiang21.style.backgroundColor=""
		ruo11.style.backgroundColor="#2689b4"
		ruo21.style.backgroundColor="#2689b4"
	}else if(jtpas21.value.length>=10&&jtpas21.value.length<15
		){
		zhong11.style.backgroundColor="#2689b4"
		zhong21.style.backgroundColor="#2689b4"
		qiang11.style.backgroundColor=""
		qiang21.style.backgroundColor=""
		ruo11.style.backgroundColor=""
		ruo21.style.backgroundColor=""
	}else if(jtpas21.value.length>=15){
		zhong11.style.backgroundColor=""
		zhong21.style.backgroundColor=""
		qiang11.style.backgroundColor="#2689b4"
		qiang21.style.backgroundColor="#2689b4"
		ruo11.style.backgroundColor=""
		ruo21.style.backgroundColor=""
	}
}

//真实姓名填写
var namereg11=/^[\u4e00-\u9fa5]{2,4}$/
name11.onfocus=function(){
	name11.style.backgroundPosition=""
	nametishi1.style.display="block"
	namewtishi11.style.display="none"
	namewtishi21.style.display="none"
}
name11.onblur=function(){
	nametishi1.style.display="none"
	namewtishi11.style.display="none"
	namewtishi21.style.display="none"
	if(namereg11.test(name11.value)){
	name11.style.backgroundPosition="-2px -530px"
}else if(name11.value===""){
	namewtishi11.style.display="block"
}else{
	namewtishi21.style.display="block"
}
}
//身份证号码
var idreg11=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
id11.onfocus=function(){
	id11.style.backgroundPosition=""
	idtishi1.style.display="block"
	idwtishi11.style.display="none"
	idwtishi21.style.display="none"
}
id11.onblur=function(){
	idtishi1.style.display="none"
	idwtishi11.style.display="none"
	idwtishi21.style.display="none"
	if(idreg11.test(id11.value)){
	id11.style.backgroundPosition="-2px -530px"
}else if(id11.value===""){
	idwtishi11.style.display="block"
}else{
	idwtishi21.style.display="block"
}
}

var num3=0
check1.onclick=function(){
	num3++}

tijiao1.onclick=function(){
	if(num3%2===0){
		alert("请阅读并同意用户协议")
	}else{
		alert("注册成功！")
	}
}
//图片验证码区域
var ary1=[1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
		imgnum1.innerHTML=ary1[parseInt(62*Math.random())]+ary1[parseInt(62*Math.random())]+ary1[parseInt(62*Math.random())]+ary1[parseInt(62*Math.random())]+ary1[parseInt(62*Math.random())]+ary1[parseInt(62*Math.random())]

		imgnum1.addEventListener('click',imgyz1)

yanzhengma11.onfocus=function(){
	yanzhengma11.style.backgroundPosition=""
	imgyztishi1.style.display="block"
	imgyzwtishi11.style.display="none"
	imgyzwtishi21.style.display="none"
	imgyzwtishi31.style.display="none"
}
yanzhengma11.onblur=function(){
	imgyztishi1.style.display="none"
	imgyzwtishi11.style.display="none"
	imgyzwtishi21.style.display="none"
	imgyzwtishi31.style.display="none"
	if(yanzhengma11.value===imgnum1.innerHTML){
	yanzhengma11.style.backgroundPosition="-2px -805px"
}else if(yanzhengma11.value===""){
	imgyzwtishi11.style.display="block"
}else if(yanzhengma11.value.length!=6){
	imgyzwtishi21.style.display="block"
}else{
	imgyzwtishi31.style.display="block"
}
}


//个性注册
//个性账号
var perreg1=/^[a-zA-Z]{1}[a-zA-Z0-9]{3,15}$/
var perreg2=/^[a-zA-Z]{1}$/
sjhm2.onfocus=function(){
	sjhm2.style.backgroundPosition=""
	sjtishi2.style.display="block"
	sjwtishi12.style.display="none"
	sjwtishi22.style.display="none"
	sjwtishi32.style.display="none"
	sjwtishi42.style.display="none"
}
sjhm2.onblur=function(){
	sjtishi2.style.display="none"
	sjwtishi12.style.display="none"
	sjwtishi22.style.display="none"
	if(perreg1.test(sjhm2.value)){
	sjhm2.style.backgroundPosition="-2px -530px"
}else if(sjhm2.value===""){
	sjwtishi12.style.display="block"
}else if(sjhm2.value.length<4){
	sjwtishi22.style.display="block"
}else if(sjhm2.value.length>16){
	sjwtishi42.style.display="block"
}else if(perreg2.test(sjhm2.value[0])==false){
	sjwtishi32.style.display="block"
}
}

//注册手机号码
sjhm3.onfocus=function(){
	sjhm3.style.backgroundPosition=""
	sjtishi3.style.display="block"
	sjwtishi13.style.display="none"
	sjwtishi23.style.display="none"
}
sjhm3.onblur=function(){
	sjtishi3.style.display="none"
	sjwtishi13.style.display="none"
	sjwtishi23.style.display="none"
	if(sjreg1.test(sjhm3.value)){
	sjhm3.style.backgroundPosition="-2px -530px"
}else if(sjhm3.value===""){
	sjwtishi13.style.display="block"
}else{
	sjwtishi23.style.display="block"
}
}

//注册邮箱
sjhm4.onfocus=function(){
	sjhm4.style.backgroundPosition=""
	sjtishi4.style.display="block"
	sjwtishi14.style.display="none"
	sjwtishi24.style.display="none"
}
sjhm4.onblur=function(){
	sjtishi4.style.display="none"
	sjwtishi14.style.display="none"
	sjwtishi24.style.display="none"
	if(yxreg1.test(sjhm4.value)){
	sjhm4.style.backgroundPosition="-2px -530px"
}else if(sjhm4.value===""){
	sjwtishi14.style.display="block"
}else{
	sjwtishi24.style.display="block"
}
}

//静态密码
jtpas12.onfocus=function(){
	jtpas12.style.backgroundPosition=""
	pastishi12.style.opacity="1"
	pastishi22.style.opacity="0"
	paswtishi12.style.opacity="0"
	paswtishi22.style.opacity="0"
	paswtishi32.style.opacity="0"
	paswtishi42.style.opacity="0"
}
jtpas22.onfocus=function(){
	jtpas12.style.backgroundPosition=""
	pastishi22.style.opacity="1"
	pastishi12.style.opacity="0"
	paswtishi12.style.opacity="0"
	paswtishi22.style.opacity="0"
	paswtishi32.style.opacity="0"
	paswtishi42.style.opacity="0"
}


	var flag2=0
yincangpas12.onclick=function(){
	pastishi12.style.opacity="1"
	pastishi22.style.opacity="0"
	paswtishi12.style.opacity="0"
	paswtishi22.style.opacity="0"
	paswtishi32.style.opacity="0"
	paswtishi42.style.opacity="0"
	flag2++
	if(flag2%2==yincangpas12.getAttribute("index")){
		pastishi12.style.opacity="0"
		pastishi22.style.opacity="1"
		jtpas22.value=jtpas12.value
		jtpas12.style.display="none"
		jtpas22.style.display="block"
	}else{
		pastishi12.style.opacity="1"
		pastishi22.style.opacity="0"
		jtpas12.value=jtpas22.value
		jtpas12.style.display="block"
		jtpas22.style.display="none"
	}
}
yincangpas22.onclick=function(){
	pastishi12.style.opacity="1"
	pastishi22.style.opacity="0"
	paswtishi12.style.opacity="0"
	paswtishi22.style.opacity="0"
	paswtishi32.style.opacity="0"
	paswtishi42.style.opacity="0"
	flag2++
	if(flag2%2==yincangpas12.getAttribute("index")){
		pastishi12.style.opacity="0"
		pastishi22.style.opacity="1"
		jtpas22.value=jtpas12.value
		jtpas12.style.display="none"
		jtpas22.style.display="block"
	}else{
		jtpas12.value=jtpas22.value
		pastishi12.style.opacity="1"
		pastishi22.style.opacity="0"
		jtpas12.style.display="block"
		jtpas22.style.display="none"
	}
}

jtpas12.onblur=function(){
	var str3=jtpas12.value
	var arr5=str3.split("")
	pastishi12.style.opacity="0";
	paswtishi12.style.opacity="0";
	paswtishi22.style.opacity="0"
	paswtishi32.style.opacity="0"
	paswtishi42.style.opacity="0"
	if(jtpas12.value.length<6&&jtpas12.value.length!=0){
	paswtishi32.style.opacity="1"
	return
}else if(jtpas12.value===""){
	paswtishi12.style.opacity="1"
	return
}else if(jtpas12.value.length>30){
	paswtishi42.style.opacity="1"
	return
}	
	for(var i=0;i<arr5.length;i++){
		for(var j=i+1;j<arr5.length;j++){
			if(arr5[i]==arr5[j]){
				arr5.splice(j,1)
				j--			
	if(arr5.length!=1){
		jtpas12.style.backgroundPosition="-2px -530px"
		}else{
		paswtishi22.style.opacity="1"
		jtpas12.style.backgroundPosition=""			
		}}
	}
	}

}


jtpas22.onblur=function(){
	var str3=jtpas22.value
	var arr5=str3.split("")
	pastishi12.style.opacity="0";
	pastishi22.style.opacity="0";
	paswtishi12.style.opacity="0";
	paswtishi22.style.opacity="0"
	paswtishi32.style.opacity="0"
	paswtishi42.style.opacity="0"
	if(jtpas22.value.length<6&&jtpas22.value.length!=0){
	paswtishi32.style.opacity="1"
	return
}else if(jtpas22.value===""){
	paswtishi12.style.opacity="1"
	pastishi22.style.opacity="0"
	return
}else if(jtpas22.value.length>30){
	paswtishi42.style.opacity="1"
	return
}	
	for(var i=0;i<arr5.length;i++){
		for(var j=i+1;j<arr5.length;j++){
			if(arr5[i]==arr5[j]){
				arr5.splice(j,1)
				j--			
	if(arr5.length!=1){
		jtpas22.style.backgroundPosition="-2px -530px"
		}else{
		paswtishi22.style.opacity="1"
		jtpas22.style.backgroundPosition=""			
		}}
	}
	}

}


jtpas12.onkeydown=function(){
	if (jtpas12.value.length<12) {
		zhong12.style.backgroundColor=""
		zhong22.style.backgroundColor=""
		qiang12.style.backgroundColor=""
		qiang22.style.backgroundColor=""
		ruo12.style.backgroundColor="#2689b4"
		ruo22.style.backgroundColor="#2689b4"
	}else if(jtpas12.value.length>=12&&jtpas12.value.length<15
		){
		zhong12.style.backgroundColor="#2689b4"
		zhong22.style.backgroundColor="#2689b4"
		qiang12.style.backgroundColor=""
		qiang22.style.backgroundColor=""
		ruo12.style.backgroundColor=""
		ruo22.style.backgroundColor=""
	}else if(jtpas12.value.length>=15){
		zhong12.style.backgroundColor=""
		zhong22.style.backgroundColor=""
		qiang12.style.backgroundColor="#2689b4"
		qiang22.style.backgroundColor="#2689b4"
		ruo12.style.backgroundColor=""
		ruo22.style.backgroundColor=""
	}
}

jtpas22.onkeydown=function(){
	if (jtpas22.value.length<10) {
		zhong12.style.backgroundColor=""
		zhong22.style.backgroundColor=""
		qiang12.style.backgroundColor=""
		qiang22.style.backgroundColor=""
		ruo12.style.backgroundColor="#2689b4"
		ruo22.style.backgroundColor="#2689b4"
	}else if(jtpas22.value.length>=10&&jtpas22.value.length<15
		){
		zhong12.style.backgroundColor="#2689b4"
		zhong22.style.backgroundColor="#2689b4"
		qiang12.style.backgroundColor=""
		qiang22.style.backgroundColor=""
		ruo12.style.backgroundColor=""
		ruo22.style.backgroundColor=""
	}else if(jtpas22.value.length>=15){
		zhong12.style.backgroundColor=""
		zhong22.style.backgroundColor=""
		qiang12.style.backgroundColor="#2689b4"
		qiang22.style.backgroundColor="#2689b4"
		ruo12.style.backgroundColor=""
		ruo22.style.backgroundColor=""
	}
}

//真实姓名填写
name12.onfocus=function(){
	name12.style.backgroundPosition=""
	nametishi2.style.display="block"
	namewtishi12.style.display="none"
	namewtishi22.style.display="none"
}
name12.onblur=function(){
	nametishi2.style.display="none"
	namewtishi12.style.display="none"
	namewtishi22.style.display="none"
	if(namereg1.test(name12.value)){
	name12.style.backgroundPosition="-2px -530px"
}else if(name12.value===""){
	namewtishi12.style.display="block"
}else{
	namewtishi22.style.display="block"
}
}
//身份证号码
id12.onfocus=function(){
	id12.style.backgroundPosition=""
	idtishi2.style.display="block"
	idwtishi12.style.display="none"
	idwtishi22.style.display="none"
}
id12.onblur=function(){
	idtishi2.style.display="none"
	idwtishi12.style.display="none"
	idwtishi22.style.display="none"
	if(idreg1.test(id12.value)){
	id12.style.backgroundPosition="-2px -530px"
}else if(id12.value===""){
	idwtishi12.style.display="block"
}else{
	idwtishi22.style.display="block"
}
}

var num4=0
check2.onclick=function(){
	num4++}

tijiao2.onclick=function(){
	if(num4%2===0){
		alert("请阅读并同意用户协议")
	}else{
		alert("注册成功！")
	}
}
//选填邮箱
sjhm5.onfocus=function(){
	sjhm5.style.backgroundPosition=""
	sjtishi5.style.display="block"
	sjwtishi15.style.display="none"
	sjwtishi25.style.display="none"
}
sjhm5.onblur=function(){
	sjtishi5.style.display="none"
	sjwtishi15.style.display="none"
	sjwtishi25.style.display="none"
	if(yxreg1.test(sjhm5.value)){
	sjhm5.style.backgroundPosition="-2px -530px"
}else if(sjhm5.value===""){
	sjhm5.style.backgroundPosition="-2px -530px"
}else{
	sjwtishi25.style.display="block"
}
}
//图片验证码
imgnum2.innerHTML=ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]+ary[parseInt(62*Math.random())]

imgnum2.addEventListener('click',imgyz1)

yanzhengma12.onfocus=function(){
	yanzhengma12.style.backgroundPosition=""
	imgyztishi2.style.display="block"
	imgyzwtishi12.style.display="none"
	imgyzwtishi22.style.display="none"
	imgyzwtishi32.style.display="none"
}
yanzhengma12.onblur=function(){
	imgyztishi2.style.display="none"
	imgyzwtishi12.style.display="none"
	imgyzwtishi22.style.display="none"
	imgyzwtishi32.style.display="none"
	if(yanzhengma12.value===imgnum2.innerHTML){
	yanzhengma12.style.backgroundPosition="-2px -805px"
}else if(yanzhengma12.value===""){
	imgyzwtishi12.style.display="block"
}else if(yanzhengma12.value.length!=6){
	imgyzwtishi22.style.display="block"
}else{
	imgyzwtishi32.style.display="block"
}
}