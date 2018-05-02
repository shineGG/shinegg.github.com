/*
	自定义一个简单的类似方向一的“替换”
	作者：吴光远
*/

function angu(id,scop){
	var v=$("[gn-contr="+id+"]").html();
		for(var k in scop){//遍历scop对象
		var r="{{"+k+"}}";
		var reg=new RegExp(r,"g");//每遍历一次scop对象创建一个正则对象
		v=v.replace(reg,scop[k]);//每遍历一次scop对象查找一次scop对象中相对应的成员并替换，再将本次替换结果保存，下次从此处开始
		};
//console.log(v);
$("[gn-contr="+id+"]").html(v);//再将最终替换结果替换页面内容（自定义属性范围内的）
};




