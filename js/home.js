$("#men li").click(function(){
	var id=$(this).attr("href");
	console.log(id);
	$("#content").children().removeClass();
	$(id).siblings().addClass("hid");
	$(this).siblings().attr("style","#fff");//在当前元素上无法穿上设置颜色的class，优先级问题？

	$(this).attr("style","color:#74d7e1;");

	$(id).attr("class","act");

}

);


























