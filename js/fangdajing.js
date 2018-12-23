
var data=[{img:"images/5b8fc94aN80aa6106.jpg"},
		{img:"images/5b8fc94bN3b06c86c.jpg"},
		{img:"images/5b8fc94cN733fc854.jpg"},
		{img:"images/5b8fc94dN3e9a96b0.jpg"},
		{img:"images/970adadd473ff485.jpg"}]

var str=""
data.forEach(function(item,index){
	str+=`<li><img src="${item.img}" alt=""></li>`
})
ul1.innerHTML=str
img1.innerHTML=str
img3.innerHTML=str
var lis1=ul1.getElementsByTagName('li')
var lis2=img1.getElementsByTagName('img')
var lis3=img3.getElementsByTagName('img')
lis2[4].style.opacity=1
for(let i=0;i<lis1.length;i++){
		lis1[i].index=i
	lis1[i].onclick=function(ev){
		for(let b=0;b<lis2.length;b++){
			lis2[b].style.opacity="0"
			lis3[b].style.opacity="0"
		}
		console.log(this.index)
		lis2[this.index].style.opacity="1"
		lis3[this.index].style.opacity="1"
	}
}

box.onmouseover=function(ev){
	little.style.display="block";
	img2.style.display="block";
		var x=ev.offsetX
		var y=ev.offsetY
		if(x>50){
			x=50
			if(y>50){
				y=50
			}else if(y<50){
				y=50
			}
		}else if(y>50){
			y=50
			if(x>50){
				x=50
			}else if(x<50){
				x=50
			}
		}else if(x<50){
			x=50
			if(y>50){
				y=50
			}else if(y<50){
				y=50
			}
		}else if(y<50){
			y=50
			if(x>50){
				x=50
			}else if(x<50){
				x=50
			}
		}
	box.onmousemove=function(ev){
		little.style.left=ev.clientX+"px"
		little.style.top=ev.clientY+"px"
		console.log(ev.clientX)
		img3.style.left="-"+(ev.clientX-x)*4+"px"
		img3.style.top="-"+(ev.clientY-y)*4+"px"
				console.log(little.offsetLeft)
		if(little.offsetLeft>200){
			little.style.left="250px"
			img3.style.left="-800px"
			if(little.offsetTop>200){
				little.style.top="250px"
				img3.style.top="-800px"
			}else if(little.offsetTop<0){
				little.style.top="50px"
				img3.style.top="0px"
			}
		}else if(little.offsetTop>200){
			little.style.top="250px"
			img3.style.top="-800px"
			if(little.offsetLeft>200){
				little.style.left="250px"
				img3.style.left="-800px"
			}else if(little.offsetLeft<0){
				little.style.left="50px"
				img3.style.left="0px"
			}
		}else if(little.offsetLeft<0){
			little.style.left="50px"
			img3.style.left="0px"
			if(little.offsetTop<0){
				little.style.top="50px"
				img3.style.top="0px"
			}else if(little.offsetTop>200){
				little.style.top="250px"
				img3.style.top="-800px"
			}
		}else if(little.offsetTop<0){
			little.style.top="50px"
			img3.style.top="0px"
			if(little.offsetLeft<0){
				little.style.left="50px"
				img3.style.top="0px"
			}else if(little.offsetLeft>200){
				little.style.left="250px"
				img3.style.left="-800px"
			}
		}

		box.onmouseout=function(ev){
		little.style.display="none"
		img2.style.display="none"
	}
	}

	
}

