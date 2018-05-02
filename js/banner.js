/*封装$*/
/*window.$=HTMLElement.prototype.$=function(selector){
    var elems=(this==window?document:this)
        .querySelectorAll(selector);
    return elems.length==0?null:elems.length==1?elems[0]:elems;
}*/
/*广告图片数组*/
var imgs=[
	{"i":0,"img":"img/a.png"},
    {"i":1,"img":"img/b.png"},
    {"i":2,"img":"img/c.png"},
    {"i":3,"img":"img/d.png"},
    {"i":4,"img":"img/e.png"},
];


var adv={
	LIWIDTH:670,
	DURATION:500,//规定手动移动的动画总时长
	WAIT:1500,//自动轮播之间等待的时长
	STEPS:100,//动画移动的总步数
	timer:null,//保存当前正在播放的定时器序号
	canAuto:true,//设置是否可以自动轮播

	init:function(){
		
		var self=this;
		self.updateView();
		//当鼠标进出广告时，禁用或启用自动轮播
		$("#slider").mouseover(function(){
			self.canAuto=false;
		});
		$("#slider").mouseout(function(){
			self.canAuto=true;
		});

		self.automove();//初始化时，就启动自动轮播

		//找到id为indexs的ul，绑定鼠标进入事件 
		$("#indexs").mouseover(function(){
			var e=window.event||arguments[0];
			var target=e.srcElement||e.target;
			if(target.nodeName=="LI"&&target.innerHTML-1!=imgs[0].i){
				$("#indexs>.hover")[0].className="";
				target.className="hover";
				var n=target.innerHTML-1-imgs[0].i;
				self.move(n);
			};
		})
	},
	//在移动前后，将imgs数组的内容刷新到页面
	updateView:function(){
		$("#imgs")[0].style.width=//计算ul总宽度
			this.LIWIDTH*imgs.length+"px";
		for(var i=0,idxs=[],lis=[];i<imgs.length;i++){
			lis[i]="<li data-i='"+imgs[i].i+"'><img src='"
			+imgs[i].img+"'></li>";

			idxs[i]="<li>"+(i+1)+"</li>";
		};
		$("#imgs")[0].innerHTML=lis.join("");
		$("#indexs")[0].innerHTML=idxs.join("");

		//$("#indexs>.hover").className="";
		$("#indexs>li")[imgs[0].i].className="hover";
	},
	automove:function(){
		//启动一次性定时器
		var self=this;
		self.timer=setTimeout(function(){
			if(self.canAuto){
				self.moveStep(1)
			}else{
				self.automove();
			};
		},self.WAIT);
	},
		//移动任意个Li的方法---手动轮播
	move:function(n){//n表示要移动的Li个数，左移为正，下同
		var self=this;
		clearTimeout(self.timer);
		self.timer=null;
		//如果右移
		if(n<0){
			imgs=imgs.splice(imgs.length+n,-n).concat(imgs);
			self.updateView();
			$("#imgs")[0].style.left=n*self.LIWIDTH+"px";
		};
		self.moveStep(n);
	},
	//将ul移动一步
	moveStep:function(n){
		var self=this;
		var step=self.LIWIDTH*n/self.STEPS;
		var style=getComputedStyle($("#imgs")[0]);
		var left=parseFloat(style.left)-step;
		$("#imgs")[0].style.left=left+"px";
		if(n>0&&left>-self.LIWIDTH*n||n<0&&left<0){
			self.timer=setTimeout(function(){
				self.moveStep(n);},self.DURATION/self.STEPS);
		}else{
			$("#imgs")[0].style.left="0px";
			self.automove();
			if(n>0){
				imgs=imgs.concat(imgs.splice(0,n));
				self.updateView();
			};
		};
	},
};
window.addEventListener("load",function(){
	adv.init();
},false);
























