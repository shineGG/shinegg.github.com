var game={
	//���ֵ���С�����Ȼص�ԭ����ǰ����λ�ã������������
	bloWIDTH:0,//С����Ŀ�
	bloHEIGHT:0,
	maxleft:0,//С�����ܵ���������
	maxtop:0,
	/*left:null,//С�����ˮƽλ��
	top:null, */
	init:function(){//��ʼ��
		//����Ϊ���С����Ŀ�ߴӶ�ȷ��С������Χ
		this.bloWIDTH=parseFloat($("#pop").css("width"));//getComputedStyle("#pop")||ele.currenStyle()
		//console.log(this.bloWIDTH);//����
		this.bloHEIGHT=parseFloat($("#pop").css("height"));
		//console.log(this.bloWIDTH);//����
		this.maxleft=parseFloat($("#outer").css("width"))-this.bloWIDTH;
		//console.log(this.maxleft);//����
		this.maxtop=parseFloat($("#outer").css("height"))-this.bloHEIGHT;
		//console.log(this.maxtop);//����
	

	},
		start:function(){//��ʼ����
		//�������һ��С����Ķ�λ
		var left=parseFloat(Math.random()*(this.maxleft+1));//�µ�ˮƽλ��
		//console.log(left);//����
		var top=parseFloat(Math.random()*(this.maxtop+1));
		//console.log(top);//����
		//��С����� left �� top����ˢ����λ��
		$("#pop").css("left",left+"px");
		$("#pop").css("top",top+"px");

		$("#pop").mouseover(
			function(){
				while(true){//��������С����ʱ�������¼������ϻ�õ�ǰ������꣬��������������꣬�õ�ǰ�������������������Ƚ�ȷ�����û������С�����ڡ�
					var X=$(this).offsetX;
					var Y=$(this).offsetY;
					var left=parseFloat(Math.random()*(game.maxleft+1));//�µ�ˮƽλ��
					console.log(left);//����
					var top=parseFloat(Math.random()*(game.maxtop+1));
					console.log(top);//����
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