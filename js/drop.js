var isDown;
var relX;
var relY;
$("#drop").mousedown(function(event){
	var e= event;
	relX=e.offsetX;
	relY=e.offsetY;
	 isDown= true;
	
});
$("#drop").mouseup(function(event){
	
	 isDown= false;
	
});
$(document).mousemove(function(event){
		var winX=event.clientX;
		var winY=event.clientY;
		if(isDown){
			console.log(winX);//测试
			var lef=winX-relX;
			var top=winY-relY;
			$("#drop").css({"left":lef+"px","top":top+"px"});
		}
	});

$(".close").click(function(){
	$("#drop").css({"display":"none"})
});
















