$("#men li").click(function(){
	var id=$(this).attr("href");
	console.log(id);
	$("#content").children().removeClass();
	$(id).siblings().addClass("hid");
	$(this).siblings().attr("style","#fff");//�ڵ�ǰԪ�����޷�����������ɫ��class�����ȼ����⣿

	$(this).attr("style","color:#74d7e1;");

	$(id).attr("class","act");

}

);


























