/*������
	���ߣ����Զ
*/
$("#ipt").keyup(
	function(){
		//console.log($(this).val().length);
		//console.log($(this).val());
		//console.log($(this).val());
		var reg=/^\s+/;//������ȫΪ�ո�ʱ
		var regcan=/^\s+[\S]+/;//������Ϊ�ո�ͷ���������Ϊ�ַ�ʱ
		var num=0;
		if(regcan.test($("#ipt").val())){
			num=parseInt($("#ipt").val().length);
		}else if(reg.test($("#ipt").val())){
			num=0;
		}else{//�������ʱ
			num=parseInt($("#ipt").val().length);
		}

		$("#attend").html(num+"/141");//�����ַ�����ˢ��ҳ��
		if(num>0&&num<=141){//�ж������Ƿ����Ҫ�󣬷��ϸı���ɫ��������ʵʱ�ı��ԭ����ɫ
			//console.log("��ɷ���"+num);
			$(".combtn").css({"background":"#ff8140"});
		}else{
			$(".combtn").css({"background":"#ffc09f"});
			//console.log("������Ҫ��"+num);
		}
	}
);
function numss(){//�����հ������οͷ������ݵĴ���
				var n=0;
				return function(){
					
					return ++n;
				};
};
var nus=numss();

$(".combtn").click(
	function(){
		var btncolor=$(".combtn").css("background-color");//��ȡ��ǰ������ť������ɫ
		console.log(btncolor);
		if(btncolor==="rgb(255, 129, 64)"){//�жϷ�����ť����ɫ�Ƿ����Ҫ������ִ�����沽��
			var data=$("#ipt").val();
		
			console.log("�ܷ���");
			var htm = "<div class='comcten'><!--������-������������--><div class='cclet'><div>6</div></div><div class='ccrig'><div>�ο͵ڴ�"+nus()+"����������</div><div>"+data+"</div></div><div class='fav'><!--������-���ۡ�ת��������--><ul><li><span>�ղ�</span></li><li><span>ת��</span></li><li><span>����</span></li><li class='six'><span onclick='pic(this)'>����</span></li></ul></div><!--������-���ۡ�ת��������--></div><!--������-������������-->";
			$("#dis").append($(htm));//���οͷ������Ϣ����Ҫ��󴴽���������Ϣ�ڵ㲢����ˢ��ҳ��
		}
	}
);


	function pic(e){//�󶨵��޵���¼������һ����һ�Σ��ٴε����ȡ���ޡ�
		
		if($(e).html()=="����"){
			$(e).html("����(1)");
		}else if($(e).html()=="����(1)"){
			$(e).html("����")	;	
		}
	}


























