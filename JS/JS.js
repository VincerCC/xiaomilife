window.onload=function(){
	//js代码
	var getli=document.querySelectorAll(".seckill .seckill-nav li");
	var getul=document.querySelectorAll(".seckill .seckill-goods ul");
	var seckillNav=document.querySelector(".seckill-nav");
	for(var i=0;i<getli.length;i++){
		getli[i].index=i;//设置下标
		getli[i].onclick=function(){	
			for(var i=0;i<getli.length;i++){
			var index=this.index;//获取当前点击的下标
			if(i!=index){//设置除了index的其他元素
				getli[index].parentNode.children[i].className="";
				getul[index].parentNode.children[i].className="clearfix"
			}else{
				getli[index].className="active";
				getul[index].className="clearfix show"
			}
			}
		};
	}

window.onscroll=function(){
		var scroll=document.documentElement.scrollTop||/*（解决兼容性问题）*/document.body.scrollTop;;//263
		if(scroll>260){
		seckillNav.className="seckill-nav seckill-navfixed";
	}else{
		seckillNav.className="seckill-nav";
	}
}
	
//function showlist(){
//	for(var i=0;i<getli.length;i++){
//		if(getli[i]===this){
//			getli[i].className="active";	
//			getul[i].className="clearfix show"
//		}else{
//			getli[i].className="";	
//			getul[i].className="clearfix"
//		}
//	}
//}


}

//JQuery方法
//$(function(){
//	$(".seckill .seckill-nav li").click(function(){
//		$(this).addClass("active");
//		$(this).siblings().removeClass("active");
//		var flag=$(this).index();
//		$(".seckill .seckill-goods ul").eq(flag).show();
//		$(".seckill .seckill-goods ul").eq(flag).siblings().hide();
//	})
//})
