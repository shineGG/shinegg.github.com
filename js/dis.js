/*讨论区
	作者：吴光远
*/
$("#ipt").keyup(
	function(){
		//console.log($(this).val().length);
		//console.log($(this).val());
		//console.log($(this).val());
		var reg=/^\s+/;//当输入全为空格时
		var regcan=/^\s+[\S]+/;//当输入为空格开头，随后输入为字符时
		var num=0;
		if(regcan.test($("#ipt").val())){
			num=parseInt($("#ipt").val().length);
		}else if(reg.test($("#ipt").val())){
			num=0;
		}else{//其他情况时
			num=parseInt($("#ipt").val().length);
		}

		$("#attend").html(num+"/141");//将书字符长度刷上页面
		if(num>0&&num<=141){//判断字数是否符合要求，符合改变颜色，不符合实时改变回原来颜色
			//console.log("完成发送"+num);
			$(".combtn").css({"background":"#ff8140"});
		}else{
			$(".combtn").css({"background":"#ffc09f"});
			//console.log("不满足要求"+num);
		}
	}
);
function numss(){//创建闭包保存游客发表内容的次数
				var n=0;
				return function(){
					
					return ++n;
				};
};
var nus=numss();

$(".combtn").click(
	function(){
		var btncolor=$(".combtn").css("background-color");//获取当前发布按钮背景颜色
		console.log(btncolor);
		if(btncolor==="rgb(255, 129, 64)"){//判断发布按钮的颜色是否符合要求，是则执行下面步骤
			var data=$("#ipt").val();
		
			console.log("能发送");
			var htm = "<div class='comcten'><!--讨论区-发布后内容区--><div class='cclet'><div>6</div></div><div class='ccrig'><div>游客第次"+nus()+"发布的内容</div><div>"+data+"</div></div><div class='fav'><!--讨论区-评论、转发点赞区--><ul><li><span>收藏</span></li><li><span>转发</span></li><li><span>评论</span></li><li class='six'><span onclick='pic(this)'>点赞</span></li></ul></div><!--讨论区-评论、转发点赞区--></div><!--讨论区-发布后内容区-->";
			$("#dis").append($(htm));//当游客发表的信息符合要求后创建发布后信息节点并将其刷上页面
		}
	}
);


	function pic(e){//绑定点赞点击事件，点击一次赞一次，再次点击将取消赞。
		
		if($(e).html()=="点赞"){
			$(e).html("点赞(1)");
		}else if($(e).html()=="点赞(1)"){
			$(e).html("点赞")	;	
		}
	}


























