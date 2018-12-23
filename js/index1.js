var pages=document.getElementsByClassName('lbpage')
		var lus1=document.getElementsByClassName('lbimgs')
		var lunboimg=document.getElementById('lunboimg')
		var lunbol=document.getElementById('lunbol')
		var i=0
		//轮播图与页码
		var bdata=[{img:"images/banner1.jpg",pgname:"首冲壕礼",url:"#"},
		{img:"images/banner2.jpg",pgname:"夺宝行动",url:"#"},
		{img:"images/banner3.jpg",pgname:"乐游服务",url:"#"},
		{img:"images/banner4.png",pgname:"推理解谜",url:"#"},
		{img:"images/banner5.jpg",pgname:"同人征集",url:"#"},
		{img:"images/banner1.jpg",url:"#"}]


		var str1=""
		var str2=""
		bdata.forEach(function(item){
			str1+=`<li class="lbimgs" index="1"><a href=${item.url}><img src=${item.img} alt=""></a></li>`
			str2+=`<li><a class="lbpage">${item.pgname}</a></li>`
		})
		lunboimg.innerHTML=str1
		lunbol.innerHTML=str2
		pages[0].style.background="#8f8175"
		pages[0].style.color="#000"
		var timer1=setInterval(function(){
			i++;
			if(i===6){i=0;}
			pageBg()
			move(lunboimg,"left",-742*i)

			
		},5000)

		for(let j=0;j<pages.length;j++){
				pages[j].onclick=function(){
				lunboimg.style.left=-742*j+"px"
				i=j
				pageBg()
			}
		}
		//右侧GO区域跳转
		var bright1=document.getElementById('bright1')
		var bright2=document.getElementById('bright2')
		function tiaozhuan(href){
			window.open(href)
		}
		
		bright1.onclick=function(){
			tiaozhuan("http://www.sanguosha.com/Home/newsInfo/a_id/20180913_4065_2911")
		}
		bright2.onclick=function(){
			tiaozhuan("http://www.sanguosha.com/Home/events")
		}
		//下载跳转
		var download=document.getElementById('download')
		download.onclick=function(){
			tiaozhuan("http://www.sanguosha.com/Home/download")
		}
		//加号跳转
		var em1=document.getElementsByClassName('em1')
		em1[0].onclick=function(){
			tiaozhuan("https://www.sanguosha.com/Home/newsList/id/1000")
		}
		//新闻资讯选项卡
		//新闻资讯标题
		var newstopdata=[{server:"[新服]",type:"[活动]",content:"9月22日-30日 花好月圆夜 中秋福利满",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_1260_2316"}]
		var newstop=newstopdata[0].server+newstopdata[0].type+newstopdata[0].content
		topnews.innerHTML=newstop
		topnews.onclick=function(){
			tiaozhuan(newstopdata[0].url)
		}
		//综合数据
		var newsdata1=[{server:"[新服]",type:"[公告]",content:"9月23日11：00临时停服维护公告",date:"09-23",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180923_4019_5310"},
		{server:"[新服]",type:"[公告]",content:"9月23日7:00新三国杀临时维护公告",date:"09-22",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180922_3545_1623"},
		{server:"[新服]",type:"[公告]",content:"9月22日《新三国杀》登录异常通知",date:"09-22",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180922_9998_4719"},
		{server:"[新服]",type:"[资讯]",content:"皮肤收藏册PV曝光！纵然战火纷飞，终有——花好月圆！",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180921_4061_0719"},
		{server:"[新服]",type:"[活动]",content:"八个解说一台戏 身份局表演赛预告",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180921_2831_5217"},
		{server:"[新服]",type:"[活动]",content:"9月22日-30日 花好月圆夜 中秋福利满",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_1260_2316"}]
		//资讯数据
		var newsdata2=[{server:"[新服]",type:"[资讯]",content:"皮肤收藏册PV曝光！纵然战火纷飞，终有——花好月圆！",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180921_4061_0719"},
		{server:"[OL]",type:"[资讯]",content:"十一去哪里？报名深圳赛，一起打《三国杀》！",date:"09-20",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180919_3389_3816"},
		{server:"[新服]",type:"[资讯]",content:"杭州武林广场庆典活动完美落幕！",date:"09-17",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180917_7476_5521"},
		{server:"[OL]",type:"[资讯]",content:"寻找“三国杀头号玩家” 找齐所有彩蛋赢大奖",date:"09-14",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180916_4267_2214"},
		{server:"[OL]",type:"[资讯]",content:"三国杀王者之战丨妖都广州站开始报名啦",date:"09-13",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180913_8604_5821"},
		{server:"[OL]",type:"[资讯]",content:"小杀收藏册宝箱概率一览",date:"09-13",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180913_4901_4016"}]
		//活动数据
		var newsdata3=[{server:"[新服]",type:"[活动]",content:"八个解说一台戏 身份局表演赛预告",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180921_2831_5217"},
		{server:"[新服]",type:"[活动]",content:"9月22日-30日 花好月圆夜 中秋福利满",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_1260_2316"},
		{server:"[新服]",type:"[活动]",content:"老玩家公会入驻福利，呼朋唤友一起领奖啦！",date:"09-21",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180917_4739_2614"},
		{server:"[OL]",type:"[活动]",content:"中秋福利，经典版三国杀充值大返利",date:"09-20",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_8152_0614"},
		{server:"[OL]",type:"[活动]",content:"绰约多姿，佳期若梦 夺宝行动之中秋月圆夜",date:"09-20",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_7133_3117"},
		{server:"[OL]",type:"[活动]",content:"月满中秋，春华秋实",date:"09-20",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180919_5035_1922"}]
		//公告数据
		var newsdata4=[{server:"[新服]",type:"[公告]",content:"9月23日11：00临时停服维护公告",date:"09-23",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180923_4019_5310"},
		{server:"[新服]",type:"[公告]",content:"9月23日7:00新三国杀临时维护公告",date:"09-22",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180922_3545_1623"},
		{server:"[新服]",type:"[公告]",content:"9月22日《新三国杀》登录异常通知",date:"09-22",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180922_9998_4719"},
		{server:"[新服]",type:"[公告]",content:"9月21日7:00《新三国杀》停服维护公告",date:"09-20",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_8819_1921"},
		{server:"[OL]",type:"[公告]",content:"中秋活动宝箱概率一览",date:"09-20",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_4335_2420"},
		{server:"[新服]",type:"[公告]",content:"9月20日19:00《新三国杀》临时停服公告",date:"09-20",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180920_7713_3218"}]
		var str3=""
		newsdata1.forEach(function(item){
			str3+=`<li><a href=${item.url}>${item.server}${item.type}${item.content}<span>${item.date}</span></a></li>`
			newslist.innerHTML=str3
		})
		var nlis=tab1.getElementsByTagName('li')
		nlis[0].onclick=function(){
			str3=""
			newsdata1.forEach(function(item){
			str3+=`<li><a href=${item.url}>${item.server}${item.type}${item.content}<span>${item.date}</span></a></li>`
			newslist.innerHTML=str3
			for(var nlisa=0;nlisa<nlis.length;nlisa++){
				nlis[nlisa].style.color="#444"
			}
		})
			this.style.color="#cd6c12"
		}

		nlis[1].onclick=function(){
			str3=""
			newsdata2.forEach(function(item){
			str3+=`<li><a href=${item.url}>${item.server}${item.type}${item.content}<span>${item.date}</span></a></li>`
			newslist.innerHTML=str3
			for(var nlisa=0;nlisa<nlis.length;nlisa++){
				nlis[nlisa].style.color="#444"
			}
		})
			this.style.color="#cd6c12"
		}

		nlis[2].onclick=function(){
			str3=""
			newsdata3.forEach(function(item){
			str3+=`<li><a href=${item.url}>${item.server}${item.type}${item.content}<span>${item.date}</span></a></li>`
			newslist.innerHTML=str3
			for(var nlisa=0;nlisa<nlis.length;nlisa++){
				nlis[nlisa].style.color="#444"
			}
		})
			this.style.color="#cd6c12"
		}
		nlis[3].onclick=function(){
			str3=""
			newsdata4.forEach(function(item){
			str3+=`<li><a href=${item.url}>${item.server}${item.type}${item.content}<span>${item.date}</span></a></li>`
			newslist.innerHTML=str3
			for(var nlisa=0;nlisa<nlis.length;nlisa++){
				nlis[nlisa].style.color="#444"
			}
		})
			this.style.color="#cd6c12"
		}
		//新手指引跳转
		gmiddle2.onclick=function(){
			tiaozhuan("http://www.sanguosha.com/Home/newsInfo/a_id/20140415_1948_1720")
		}
		//右侧身份点击事件
		var sfbtn=shenfencard.getElementsByTagName('b')
		var sfimg=gright.getElementsByTagName('img')
		for(var i=0;i<sfbtn.length;i++){
			sfbtn[i].onmouseover=function(){
				for(let sfi=0;sfi<sfbtn.length;sfi++){
			 	sfbtn[sfi].style.backgroundPosition=""}
			var num=parseInt(this.getAttribute("index"))
			for(var k=0;k<sfimg.length;k++){
			sfimg[k].style.opacity=0;
			}
			sfimg[num].style.opacity=1
			sfbtn[num].style.backgroundPosition="-41px "+"-"+num*48+"px";
		}

	}

		//福利中心跳转
		var fulis=fuli.getElementsByTagName('li')
		fulis[0].onclick=function(){
			tiaozhuan("https://www.sanguosha.com/Home/newsInfo/a_id/20140415_1948_1720")
		}
		fulis[1].onclick=function(){
			tiaozhuan("https://www.sanguosha.com/Home/newsInfo/a_id/20180816_6433_1411")
		}
		fulis[2].onclick=function(){
			tiaozhuan("http://mingren.sanguosha.com/")
		}
		fulis[3].onclick=function(){
			tiaozhuan("http://club.sanguosha.com/")
		}
		fulis[4].onclick=function(){
			tiaozhuan("http://pay.sanguosha.com/")
		}
		fulis[5].onclick=function(){
			tiaozhuan("http://www.yokagames.com/kf")
		}

		//武将系列点击事件
		var wjbtn=wjitul.getElementsByTagName('b')
		var wjimg=wjintro.getElementsByTagName('img')
		var wjs=wjintro.getElementsByClassName('wjs')
		for(var i=0;i<wjbtn.length;i++){
			wjbtn[i].onclick=function(){
				for(let sfi=0;sfi<wjbtn.length;sfi++){
			 	wjbtn[sfi].style.backgroundPosition=""
			 	wjs[sfi].style.display="none"}
			var num1=parseInt(this.getAttribute("index"))
			for(var k=0;k<wjimg.length;k++){
			wjimg[k].style.opacity=0;
			}
			wjs[num1].style.left=-120+"px"
			wjimg[num1].style.opacity=1
			wjbtn[num1].style.backgroundPosition="-"+(num1*75)+"px"+" -70px ";
			wjs[num1].style.display="block"
			console.log(wjbtn[num1])
			var timer2=setInterval(function(){
				wjs[num1].style.left=wjs[num1].offsetLeft+19+"px"
				if(wjs[num1].offsetLeft>=38){
					wjs[num1].style.left=38+"px"
					clearInterval(timer2)
				}
			},20)
		}
	}

			//武将em点击跳转
			var em2=wjintro.getElementsByClassName('em1')
			em2[0].onclick=function(){
				alert('敬请期待！')
			}
			//右侧四格点击
			var fourcors=fourcor.getElementsByTagName('li')
			fourcors[0].onclick=function(){
				tiaozhuan("http://king.sanguosha.com/")
			}
			fourcors[3].onclick=function(){
				tiaozhuan("http://www.zhuoyou.com/")
			}
			fourcors[2].onclick=function(){
				alert('敬请期待！')
			}
			fourcors[1].onclick=function(){
				alert('敬请期待！')
			}
			//快捷导航跳转
			var fnavlis=fnav1.getElementsByTagName("li")
			fnavlis[0].onclick=function(){
				tiaozhuan("http://pwd.dobest.cn/")
			}
			fnavlis[1].onclick=function(){
				tiaozhuan("http://ss.sanguosha.com/")
			}
			fnavlis[2].onclick=function(){
				tiaozhuan("http://login.dobest.cn/sdo/Login/LoginSDO.php?appArea=1&appId=299&areaId=1&service=http%3A%2F%2Fsplus.dobest.cn%2Findex.php&type=sso")
			}
			fnavlis[3].onclick=function(){
				tiaozhuan("https://www.sanguosha.com/Home/newsInfo/a_id/20140620_9396_1316")
			}
			fnavlis[4].onclick=function(){
				tiaozhuan("http://www.yokagames.com/jiazhang/")
			}
			fnavlis[5].onclick=function(){
				tiaozhuan("http://www.sanguosha.com/act/yhxy/regservice.html")
			}
			fnavlis[6].onclick=function(){
				tiaozhuan("https://www.sanguosha.com/Home/newsInfo/a_id/20180810_6397_3116")
			}
			fnavlis[7].onclick=function(){
				tiaozhuan("https://www.sanguosha.com/Home/newsInfo/a_id/20180810_6397_3116")
			}
			//社区专栏数据
			var comdata1=[{content:"我爸爸是陆逊！我有四“限定技”！我还会觉醒！我是陆抗",url:"http://club.sanguosha.com/thread-412264-1-1.html"},
							{content:"[小说故事] 天雷滚滚的收山之作：三国十二钗",url:"http://club.sanguosha.com/thread-412230-1-1.html"},
							{content:"【获奖名单】神之试炼第5期 · 团结就是力量！",url:"http://club.sanguosha.com/thread-412073-1-1.html"},
							{content:"【获奖名单】新三国杀 全新起航",url:"http://club.sanguosha.com/thread-412049-1-1.html"},
							{content:"【社区活动】新三国秀随你搭•第8期•中秋团圆夜",url:"http://club.sanguosha.com/thread-411978-1-1.html"},
							{content:"【十万强兵无一人，义师翻得叛臣名。】雷·毌丘俭攻略",url:"http://club.sanguosha.com/thread-411937-1-1.html"}]
			var str4=""
			comdata1.forEach(function(item,index){
				str4+=`<li><a href="${item.url}">${item.content}</a></li>`
			})
			comul.innerHTML=str4
			var em3=community.getElementsByTagName('em')
			em3[0].onclick=function(){
				tiaozhuan("http://club.sanguosha.com/")
			}
			//同人专区数据
			var djdata1=[{content:"郭嘉 · 天生郭奉孝，豪杰冠群英。",url:"http://club.sanguosha.com/thread-399783-1-1.html",img:"images/5b718ef7cb3d1.jpg"},
			{content:"陆逊 · 三分自是多英俊，又显江南陆逊高",url:"http://club.sanguosha.com/thread-399795-1-1.html",img:"images/5b718f08f20ee.jpg"},
			{content:"小乔 · 东吴名将推公瑾，南国佳人说小乔",url:"http://club.sanguosha.com/thread-399796-1-1.html",img:"images/5b718f0f274e9.jpg"},
			{content:"孙尚香 · 谁知一女轻天下， 欲易刘郎鼎峙心",url:"http://club.sanguosha.com/thread-399808-1-1.html",img:"images/5b718eeda8ea7.jpg"},
			{content:"孙策 · 却将江左业，分付紫髯郎",url:"http://club.sanguosha.com/thread-399801-1-1.html",img:"images/5b718f007feb8.jpg"},
			{content:"曹丕 · 一双眼光射寒星，两弯眉浑如刷漆",url:"http://club.sanguosha.com/thread-399812-1-1.html",img:"images/5b718f1502ec4.jpg"}]

			var str5=""
			djdata1.forEach(function(item,index){
				str5+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				djul2.innerHTML=str5

			})
			//同人COS数据
			var djdata1=[{content:"郭嘉 · 天生郭奉孝，豪杰冠群英。",url:"http://club.sanguosha.com/thread-399783-1-1.html",img:"images/5b718ef7cb3d1.jpg"},
			{content:"陆逊 · 三分自是多英俊，又显江南陆逊高",url:"http://club.sanguosha.com/thread-399795-1-1.html",img:"images/5b718f08f20ee.jpg"},
			{content:"小乔 · 东吴名将推公瑾，南国佳人说小乔",url:"http://club.sanguosha.com/thread-399796-1-1.html",img:"images/5b718f0f274e9.jpg"},
			{content:"孙尚香 · 谁知一女轻天下， 欲易刘郎鼎峙心",url:"http://club.sanguosha.com/thread-399808-1-1.html",img:"images/5b718eeda8ea7.jpg"},
			{content:"孙策 · 却将江左业，分付紫髯郎",url:"http://club.sanguosha.com/thread-399801-1-1.html",img:"images/5b718f007feb8.jpg"},
			{content:"曹丕 · 一双眼光射寒星，两弯眉浑如刷漆",url:"http://club.sanguosha.com/thread-399812-1-1.html",img:"images/5b718f1502ec4.jpg"}]
			var djlis=djul1.getElementsByTagName('li')
			djlis[0].onclick=function(){
				for(var i=0;i<djlis.length;i++){
					djlis[i].style.color=""
				}
				this.style.color="#a69280"
			var str5=""
			djdata1.forEach(function(item,index){
				str5+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				djul2.innerHTML=str5
			})
			}
			//手绘漫画数据
			var djdata2=[{content:"101五强海报来啦",url:"http://club.sanguosha.com/thread-395051-1-1.html",img:"images/5b718f634b6b4.jpg"},
			{content:"三国杀同人绘画 左慈",url:"http://club.sanguosha.com/thread-367617-1-4.html",img:"images/5b718f5ea30c7.jpg"},
			{content:"三国杀同人绘画-甄姬",url:"http://club.sanguosha.com/thread-345222-1-10.html",img:"images/5b718f5ab9aa5.jpg"},
			{content:"一波可爱的三国杀同人Q版",url:"http://club.sanguosha.com/thread-397877-1-1.html",img:"images/5b718f55e75d9.jpg"},
			{content:"山水画意晨辉东映——东靖晨 结尾附彩蛋",url:"http://club.sanguosha.com/thread-346921-1-3.html",img:"images/5b718f51ebe8e.jpg"},
			{content:"三国杀同人绘画-黄月英",url:"http://club.sanguosha.com/thread-333618-1-1.html",img:"images/5b718f3dbcb6a.jpg"}]
			djlis[1].onclick=function(){
				for(var i=0;i<djlis.length;i++){
					djlis[i].style.color=""
				}
				this.style.color="#a69280"
			var str6=""
			djdata2.forEach(function(item,index){
				str6+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				djul2.innerHTML=str6
			})
			}
			//玩家风采数据
			var djdata3=[{content:"3/7/8 妄抒 认证",url:"http://club.sanguosha.com/thread-278514-1-10.html",img:"images/5b71913b4f58c.jpg"},
			{content:"闲云潭影日悠悠 物换星移几度秋",url:"http://club.sanguosha.com/thread-394562-1-1.html",img:"images/5b71912b47d87.jpg"},
			{content:"求认证！万箭齐发【4/5区】",url:"http://club.sanguosha.com/thread-213675-1-7.html",img:"images/5b7191152db17.jpg"},
			{content:"找个能跟我一起开黑的师傅",url:"http://club.sanguosha.com/thread-213448-1-6.html",img:"images/5b71910e7c7ae.jpg"},
			{content:"9区 朝如青丝暮成雪",url:"http://club.sanguosha.com/thread-394510-1-1.html",img:"images/5b718f8ab9a7c.jpg"},
			{content:"九区 灬谷雨丶素衣",url:"http://club.sanguosha.com/thread-393328-1-1.html",img:"images/5b718f83463f5.jpg"}]
			djlis[2].onclick=function(){
				for(var i=0;i<djlis.length;i++){
					djlis[i].style.color=""
				}
				this.style.color="#a69280"
			var str7=""
			djdata3.forEach(function(item,index){
				str7+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				djul2.innerHTML=str7
			})
			}
			//同人小说数据
			var djdata4=[{content:"【贾辛CP】心倾君兮许佳颜",url:"http://club.sanguosha.com/thread-371777-1-1.html",img:"images/5b91f19636336.png"},
			{content:"不论苍生论鬼神:蜀国篇上（领衔主演：刘皇叔）附有奖竞猜",url:"http://club.sanguosha.com/thread-335807-1-1.html",img:"images/5b71985b9bbdc.jpg"},
			{content:"【浮生半世】杯酒还泪江边祭",url:"http://club.sanguosha.com/thread-358530-1-6.html",img:"images/5b7197ea82b9b.jpg"},
			{content:"【散文传记】一纸罄香，焚书取暖",url:"http://club.sanguosha.com/thread-364733-1-6.html",img:"images/5b719750d4f75.jpg"},
			{content:"殊途同归的诸葛一族",url:"http://club.sanguosha.com/thread-367938-1-5.html",img:"images/5b7196d108781.jpg"},
			{content:"弃魏投蜀，余生恨否？",url:"http://club.sanguosha.com/thread-395938-1-2.html",img:"images/5b91f620ddc32.jpg"}]
			djlis[3].onclick=function(){
				for(var i=0;i<djlis.length;i++){
					djlis[i].style.color=""
				}
				this.style.color="#a69280"
			var str8=""
			djdata4.forEach(function(item,index){
				str8+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				djul2.innerHTML=str8
			})
			}
			//同人em点击跳转
			var em4=doujin.getElementsByTagName('em')
			em4[0].onclick=function(){
				tiaozhuan("http://club.sanguosha.com/forum-74-1.html")
			}
			//视频中心数据
			var vcentdata=[{content:"花式吊打 好施者们的默契",url:"http://club.sanguosha.com/thread-399092-1-1.html",img:"images/5b7192ecca7f0.jpg"},
			{content:"循序渐进 一连到终",url:"http://club.sanguosha.com/thread-393291-1-1.html",img:"images/5b724144c8de6.jpg"},
			{content:"一张牌引发的血案",url:"http://club.sanguosha.com/thread-390789-1-1.html",img:"images/5b7241d187107.jpg"},
			{content:"自书己见 大刷特刷",url:"http://club.sanguosha.com/thread-382578-1-1.html",img:"images/5b7242af1be16.jpg"},
			{content:"没有忠臣的四月就要来了",url:"http://club.sanguosha.com/thread-375063-1-1.html",img:"images/5b72433c51c7f.jpg"},
			{content:"第五反贼：蔡文丕",url:"http://club.sanguosha.com/thread-373442-1-1.html",img:"images/5b7243cd5d615.jpg"},
			{content:"智慧岂能少得了装身份？",url:"http://club.sanguosha.com/thread-369164-1-1.html",img:"images/5b72442f3f63c.jpg"}]

			var str9=""
			$.each(vcentdata,function(index,item){
				if(index===0){
					str9+=`<li style="width:361px;height:255px;"><a href=${item.url}><img src=${item.img} style="width:361px;height:255px;"><span style="width:361px;">${item.content}</span><i></i></a></li>`
				}else{
					str9+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				}
				$("#vcen2").html(str9)
			})
			//攻略集锦数据
			var vcentdata=[{content:"花式吊打 好施者们的默契",url:"http://club.sanguosha.com/thread-399092-1-1.html",img:"images/5b7192ecca7f0.jpg"},
			{content:"循序渐进 一连到终",url:"http://club.sanguosha.com/thread-393291-1-1.html",img:"images/5b724144c8de6.jpg"},
			{content:"一张牌引发的血案",url:"http://club.sanguosha.com/thread-390789-1-1.html",img:"images/5b7241d187107.jpg"},
			{content:"自书己见 大刷特刷",url:"http://club.sanguosha.com/thread-382578-1-1.html",img:"images/5b7242af1be16.jpg"},
			{content:"没有忠臣的四月就要来了",url:"http://club.sanguosha.com/thread-375063-1-1.html",img:"images/5b72433c51c7f.jpg"},
			{content:"第五反贼：蔡文丕",url:"http://club.sanguosha.com/thread-373442-1-1.html",img:"images/5b7243cd5d615.jpg"},
			{content:"智慧岂能少得了装身份？",url:"http://club.sanguosha.com/thread-369164-1-1.html",img:"images/5b72442f3f63c.jpg"}]

			
			var vcenlis=vcen1.getElementsByTagName('li')
			vcenlis[0].onclick=function(){
				for(var i=0;i<vcenlis.length;i++){
					vcenlis[i].style.color=""
				}
				this.style.color="#a69280"
				var str9=""
			$.each(vcentdata,function(index,item){
				if(index===0){
					str9+=`<li style="width:361px;height:255px;"><a href=${item.url}><img src=${item.img} style="width:361px;height:255px;"><span style="width:361px;">${item.content}</span><i></i></a></li>`
				}else{
					str9+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				}
				$("#vcen2").html(str9)
			})
			}
			//同人创作数据
			var vcentdata2=[{content:"手书：三国杀XDRRR!!",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180911_8285_4509",img:"images/5b971e750e5b1.jpg"},
			{content:"【司马嘉-玄亮-策瑜-丕植】建安烟云录(同人剧情歌)",url:"http://download.sanguosha.com/sgs/cg.mp4",img:"images/5b8d041db423c.png"},
			{content:"《建安烟云录》(同人剧情歌)",url:"http://download.sanguosha.com/sgs/cg.mp4",img:"images/5b7d0573816fa.jpg"},
			{content:"左慈的神秘讲座",url:"http://club.sanguosha.com/thread-387108-1-1.html",img:"images/5b7254f8d86ac.jpg"},
			{content:"水手——那个男人",url:"http://club.sanguosha.com/thread-361028-1-1.html",img:"images/5b724dbf27323.jpg"},
			{content:"三国杀诗朗诵——短歌行",url:"http://club.sanguosha.com/thread-217105-1-1.html",img:"images/5b724d5a438eb.jpg"},
			{content:"一首 三国杀 生日歌献给你",url:"http://club.sanguosha.com/thread-344937-1-1.html",img:"images/5b7247c5754be.jpg"}]

			
			var vcenlis=vcen1.getElementsByTagName('li')
			vcenlis[1].onclick=function(){
				for(var i=0;i<vcenlis.length;i++){
					vcenlis[i].style.color=""
				}
				this.style.color="#a69280"
				var str10=""
			$.each(vcentdata2,function(index,item){
				if(index===0){
					str10+=`<li style="width:361px;height:255px;"><a href=${item.url}><img src=${item.img} style="width:361px;height:255px;"><span style="width:361px;">${item.content}</span><i></i></a></li>`
				}else{
					str10+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				}
				$("#vcen2").html(str10)
			})
			}
			//赛事视频数据
			var vcentdata3=[{content:"2018SCL春季赛TOP5【第六期】",url:"http://club.sanguosha.com/thread-404460-1-1.html",img:"images/5b7d015437da9.jpg"},
			{content:"2018SCL春季赛TOP5【第七期】",url:"http://club.sanguosha.com/thread-404459-1-1.html",img:"images/5b7d016b07b57.jpg"},
			{content:"三国杀百万奖金千人大赛冠军诞生",url:"http://download.sanguosha.com/sgs/4.mp4",img:"images/5b7cf7f94eb1f.jpg"},
			{content:"三国杀十周年嘉年华颜值玩家一览",url:"http://download.sanguosha.com/sgs/3.mp4",img:"images/5b7cf7dfa3a7e.jpg"},
			{content:"三国杀百万奖金千人大赛选手入场",url:"http://download.sanguosha.com/sgs/2.mp4",img:"images/5b7cf7b35c107.jpg"},
			{content:"三国杀十周年嘉年华现场",url:"http://download.sanguosha.com/sgs/1.mp4",img:"images/5b7cfac13da3e.jpg"},
			{content:"三国杀十周年千人面杀全程回顾",url:"http://download.sanguosha.com/sgs/5.mp4",img:"images/5b7ce6951d585.jpg"}]

			
			var vcenlis=vcen1.getElementsByTagName('li')
			vcenlis[2].onclick=function(){
				for(var i=0;i<vcenlis.length;i++){
					vcenlis[i].style.color=""
				}
				this.style.color="#a69280"
				var str11=""
			$.each(vcentdata3,function(index,item){
				if(index===0){
					str11+=`<li style="width:361px;height:255px;"><a href=${item.url}><img src=${item.img} style="width:361px;height:255px;"><span style="width:361px;">${item.content}</span><i></i></a></li>`
				}else{
					str11+=`<li><a href=${item.url}><img src=${item.img} style="opacity:1"><span>${item.content}</span><i></i><strong></strong></a></li>`
				}
				$("#vcen2").html(str11)
			})
			}

			//视频中心em跳转
			var em5=vcenter.getElementsByTagName('em')
			em5[0].onclick=function(){
				tiaozhuan('https://www.sanguosha.com/Home/video')
			}
			//合作区数据
			var hezuodata=[{name:"智能电视网",url:"https://www.znds.com/"},
							{name:"战旗直播",url:"http://www.zhanqi.tv/"},
							{name:"太平洋游戏网",url:"http://www.pcgames.com.cn/"},
							{name:"游侠网页游戏",url:"http://web.ali213.net/"},
							{name:"全球电竞新游频道",url:"http://xin.ooqiu.com/"},
							{name:"游戏狗三国杀",url:"http://sanguosha.gamedog.cn/"},
							{name:"巴士三国杀",url:"http://sgs.tgbus.com/"},
							{name:"NBOPEN",url:"http://www.nbochina.cn/"},
							{name:"小皮发号",url:"http://fahao.xiaopi.com/"},
							{name:"多游开服网",url:"http://www.duouoo.com/"},
							{name:"40407游戏开服",url:"https://kf.40407.com/"},
							{name:"狼人杀社区",url:"http://fans.lr.yokagames.com/"},
							{name:"40407",url:"https://www.40407.com/"},
							{name:"07073游戏网",url:"http://www.07073.com/"},
							{name:"桌游圈",url:"http://www.zhuoyou.com/"},
							{name:"狼人对决 - 1V1卡牌对战手游",url:"http://lr.yokagames.com/"},
							{name:"智能电视网",url:"https://www.znds.com/"},
							{name:"战旗直播",url:"http://www.zhanqi.tv/"},
							{name:"太平洋游戏网",url:"http://www.pcgames.com.cn/"},
							{name:"游侠网页游戏",url:"http://web.ali213.net/"},
							{name:"全球电竞新游频道",url:"http://xin.ooqiu.com/"},
							{name:"游戏狗三国杀",url:"http://sanguosha.gamedog.cn/"},
							{name:"巴士三国杀",url:"http://sgs.tgbus.com/"},
							{name:"NBOPEN",url:"http://www.nbochina.cn/"},
							{name:"小皮发号",url:"http://fahao.xiaopi.com/"},
							{name:"多游开服网",url:"http://www.duouoo.com/"},
							{name:"40407游戏开服",url:"https://kf.40407.com/"},
							{name:"狼人杀社区",url:"http://fans.lr.yokagames.com/"},
							{name:"40407",url:"https://www.40407.com/"},
							{name:"07073游戏网",url:"http://www.07073.com/"},
							{name:"桌游圈",url:"http://www.zhuoyou.com/"},
							{name:"智能电视网",url:"https://www.znds.com/"},
							{name:"狼人对决 - 1V1卡牌对战手游",url:"http://lr.yokagames.com/"}]

					var str12=""
					var timer3=""
					hezuodata.forEach(function(item,index){
						str12+=`<li><a href=${item.url}>${item.name}</a></li>`
						hezuoul.innerHTML=str12
					})
					var hezuoul1=document.getElementById('hezuoul')
					var u=-2
					timer3=setInterval(function(){
					u++;
					more1.onclick=function(){
						u++
						hezuoul1.style.top=-33*u+"px";
					}					
					if(u>=15){u=-2;}
					move2(hezuoul1,-33*u)
					},1000)
					hezuoul1.onmouseover=function(){
						clearInterval(timer3)
						timer3=""					
					}
					hezuoul1.onmouseout=function(){
					timer3=setInterval(function(){
					u++;
					more1.onclick=function(){
						u++
						hezuoul1.style.top=-33*u+"px";
					}					
					if(u>=15){u=-2;}
					move2(hezuoul1,-33*u)
					},1000)
					}
					var soubtn=ssxc.getElementsByClassName('soubtn')
					var soutxt=ssxc.getElementsByTagName('input')
					for(var i=0;i<soubtn.length;i++){
						soubtn[i].onclick=function(){
							if(this.previousElementSibling.value===""){
								alert('请输入关键字')
							}else{
							tiaozhuan("https://www.sanguosha.com/Home/newsList/id/8000/keyword/"+this.previousElementSibling.value)
							}
						}
					}
					//伸缩相册数据
					var gongluedata=[{server:"[OL]",model:"[模式玩法]",content:"【神之试炼】春夏组防首跪指南",url:"http://club.sanguosha.com/thread-376206-1-1.html",date:"09-07"},
									{server:"[OL]",model:"[模式玩法]",content:"【神之试炼】秋冬组通关技术指南",url:"http://club.sanguosha.com/thread-383802-1-1.html",date:"09-07"},
									{server:"[新服]",model:"[模式玩法]",content:"标准武将突破界限攻略！",url:"http://club.sanguosha.com/thread-408208-1-1.html",date:"09-07"},
									{server:"[OL]",model:"[萌新引导]",content:"【十周年内测】新界限武将的技能解析（规则集版)",url:"http://www.sanguosha.com/detail/20180906_5324_3618.html",date:"09-07"},
									{server:"[OL]",model:"[萌新引导]",content:"三国杀小技巧系列之锦囊牌篇",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_8699_5918",date:"09-07"},
									{server:"[OL]",model:"[萌新引导]",content:"三国杀小技巧系列之基本牌篇",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_4914_1519",date:"09-07"}]
					var str13=""
					gongluedata.forEach(function(item,index){
						str13+=`<li><a href="${item.url}">${item.server}${item.model}${item.content}</a><span>${item.date}</span></li>`
						gonglue1.innerHTML=str13
					})
					var yindaodata=[{server:"[OL]",model:"[萌新引导]",content:"【十周年内测】新界限武将的技能解析（规则集版)",url:"http://www.sanguosha.com/detail/20180906_5324_3618.html",date:"09-07"},
									{server:"[OL]",model:"[萌新引导]",content:"三国杀小技巧系列之锦囊牌篇",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_8699_5918",date:"09-07"},
									{server:"[OL]",model:"[萌新引导]",content:"三国杀小技巧系列之基本牌篇",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_4914_1519",date:"09-07"},
									{server:"[OL]",model:"[萌新引导]",content:"三国杀术语大科普",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180904_6727_5616",date:"09-04"},
									{server:"[OL]",model:"[萌新引导]",content:"三国杀新手玩家怎么玩",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20140611_3340_2619",date:"09-04"},
									{server:"[OL]",model:"[萌新引导]",content:"三国杀新手内奸怎么玩 身份技术攻略",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20140528_3089_5810",date:"09-04"}]
					var str14=""
					yindaodata.forEach(function(item,index){
						str14+=`<li><a href="${item.url}">${item.server}${item.model}${item.content}</a><span>${item.date}</span></li>`
						gonglue2.innerHTML=str14
					})
					var wanfadata=[{server:"[OL]",model:"[模式玩法]",content:"【神之试炼】春夏组防首跪指南",url:"http://club.sanguosha.com/thread-376206-1-1.html",date:"09-07"},
									{server:"[OL]",model:"[模式玩法]",content:"【神之试炼】秋冬组通关技术指南",url:"http://club.sanguosha.com/thread-383802-1-1.html",date:"09-07"},
									{server:"[新服]",model:"[模式玩法]",content:"标准武将突破界限攻略！",url:"http://club.sanguosha.com/thread-408208-1-1.html",date:"09-07"},
									{server:"[OL]",model:"[模式玩法]",content:"身份局反贼该怎么盲？怎么演？",url:"http://www.sanguosha.com/detail/20180906_8034_2519.html",date:"09-07"},
									{server:"[OL]",model:"[模式玩法]",content:"【驱鬼逐邪】盘点打鬼的十大组合＆三大神装",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_4378_4019",date:"09-07"},
									{server:"[OL]",model:"[模式玩法]",content:"反贼杀环境与忠胆模式的意义",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_4250_4819",date:"09-07"}]
					var str15=""
					wanfadata.forEach(function(item,index){
						str15+=`<li><a href="${item.url}">${item.server}${item.model}${item.content}</a><span>${item.date}</span></li>`
						gonglue3.innerHTML=str15
					})
					var wujiangdata=[{server:"[新服]",model:"[武将攻略]",content:"星火燎原-天相-周鲂：诱敌制胜",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180904_9797_5309",date:"09-04"},
									{server:"[OL]",model:"[攻略]",content:"一将成名2011武将：徐盛攻略文",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20161221_4498_3916",date:"12-21"},
									{server:"[OL]",model:"[攻略]",content:"界限突破武将：赵云攻略文",url:"http://www.sanguosha.com/detail/20161221_1251_3914.html",date:"12-21"},
									{server:"[OL]",model:"[攻略]",content:"SP武将：司马朗攻略文",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20161215_2688_2416",date:"12-15"},
									{server:"[OL]",model:"[攻略]",content:"界限突破武将：甘宁攻略文",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20161215_1639_5415",date:"12-15"},
									{server:"[OL]",model:"[攻略]",content:"一将成名2011武将：法正攻略文",url:"http://www.sanguosha.com/detail/20161205_9021_5212.html",date:"12-05"}]
					var str16=""
					wujiangdata.forEach(function(item,index){
						str16+=`<li><a href="${item.url}">${item.server}${item.model}${item.content}</a><span>${item.date}</span></li>`
						gonglue4.innerHTML=str16
					})
					var jieshuodata=[{server:"[OL]",model:"[视频解说]",content:"刘琦主公局打法解析",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_7457_3710",date:"09-06"},
									{server:"[OL]",model:"[视频解说]",content:"朱家三废进化！朱家双雄！",url:"http://www.sanguosha.com/detail/20180906_8344_3810.html",date:"09-06"},
									{server:"[OL]",model:"[视频解说]",content:"三国杀军八买将攻略指南，新手适用。",url:"http://www.sanguosha.com/detail/20180906_7808_4010.html",date:"09-06"},
									{server:"[OL]",model:"[视频解说]",content:"火树流国战打法解析",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_4531_4610",date:"09-06"},
									{server:"[OL]",model:"[视频解说]",content:"BDD国战攻略:强行苟活,大魏杀手！",url:"http://www.sanguosha.com/Home/newsInfo/a_id/20180906_1656_4610",date:"09-06"}]
					var str17=""
					jieshuodata.forEach(function(item,index){
						str17+=`<li><a href="${item.url}">${item.server}${item.model}${item.content}</a><span>${item.date}</span></li>`
						gonglue5.innerHTML=str17
					})
					var em6=sstxt1.getElementsByTagName('em')
					em6[0].onclick=function(){
						tiaozhuan("https://www.sanguosha.com/Home/newsList/id/8000/keyword/攻略")
					}
					var em7=sstxt2.getElementsByTagName('em')
					em7[0].onclick=function(){
						tiaozhuan("https://www.sanguosha.com/Home/newsList/id/8000/keyword/玩法攻略")
					}
					var em8=sstxt3.getElementsByTagName('em')
					em8[0].onclick=function(){
						tiaozhuan("https://www.sanguosha.com/Home/newsList/id/8000/keyword/武将攻略")
					}
					var em9=sstxt4.getElementsByTagName('em')
					em9[0].onclick=function(){
						tiaozhuan("https://www.sanguosha.com/Home/newsList/id/8000/keyword/攻略视频")
					}
					var em10=sstxt5.getElementsByTagName('em')
					em10[0].onclick=function(){
						tiaozhuan("https://www.sanguosha.com/Home/newsList/id/8000/keyword/进阶攻略")
					}
					$(".shensuoimg").click(function(){
						$(this).parent().stop().animate({width:"504px"},300)
						$(this).parent().siblings(".ssxcson").stop().animate({width:"142px"},300)
					})