var game={
	//出现导致小方块先回到原点再前往新位置，导致跳动情况
	bloWIDTH:0,//小方块的宽
	bloHEIGHT:0,
	maxleft:0,//小方块能到达的最左端
	maxtop:0,
	/*left:null,//小方块的水平位置
	top:null, */
	init:function(){//初始化
		//以下为获得小方块的宽高从而确定小方块活动范围
		this.bloWIDTH=parseFloat($("#pop").css("width"));//getComputedStyle("#pop")||ele.currenStyle()
		//console.log(this.bloWIDTH);//测试
		this.bloHEIGHT=parseFloat($("#pop").css("height"));
		//console.log(this.bloWIDTH);//测试
		this.maxleft=parseFloat($("#outer").css("width"))-this.bloWIDTH;
		//console.log(this.maxleft);//测试
		this.maxtop=parseFloat($("#outer").css("height"))-this.bloHEIGHT;
		//console.log(this.maxtop);//测试
	

	},
		start:function(){//开始运行
		//随机产生一个小方块的定位
		var left=parseFloat(Math.random()*(this.maxleft+1));//新的水平位置
		//console.log(left);//测试
		var top=parseFloat(Math.random()*(this.maxtop+1));
		//console.log(top);//测试
		//给小方块的 left 和 top属性刷上新位置
		$("#pop").css("left",left+"px");
		$("#pop").css("top",top+"px");

		$("#pop").mouseover(
			function(){
				while(true){//当鼠标进入小方块时，触发事件，马上获得当前鼠标坐标，并随机产生新坐标，用当前鼠标坐标与新生成坐标比较确保鼠标没有落在小方块内。
					var X=$(this).offsetX;
					var Y=$(this).offsetY;
					var left=parseFloat(Math.random()*(game.maxleft+1));//新的水平位置
					console.log(left);//测试
					var top=parseFloat(Math.random()*(game.maxtop+1));
					console.log(top);//测试
					if(!(left<=X&&X<=left+game.bloWIDTH&&top<=Y&&Y<=top+game.bloHEIGHT)){
						$("#pop").css("left",left+"px");
						$("#pop").css("top",top+"px");
						break;
					}
				};
		}	
		);
	},
};





	window.onload=function(){
		game.init();
		game.start();
	};