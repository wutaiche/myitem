requirejs.config({
	paths:{
		jquery:"jquery-1.11.1.min"
	}
	
	
});

requirejs(["jquery","page"],function($,page){
	$("#top").load("../html/index.html #top .wrap_1200");
	$("#logo").load("../html/index.html #logo .wrap_1200");
	$("#nav").load("../html/index.html #nav .wrap_1200");
	$("#superbanner").load("../html/index.html #banner");
	$(".floor").load("../html/index.html .floor_box");
	$("#superfooter").load("../html/index.html #footer");
	var flag =true;
	$(".right").click(function(){
		if(flag){
			flag = false;
		$(".img").find("li:first").clone().appendTo($(".img"));
		//$(".img").css("left",301);
		$(".img").animate({left:-301},500,function(){
			$(".img").find("li:first").remove();
			$(".img").css("left",0);
			flag=true;
			
		});
		}
		
	})
	$(".left").click(function(){
		if(flag){
			flag= false;
		$(".img").find("li:last").clone().prependTo($(".img"));
		$(".img").css("left",-301);
		$(".img").animate({left:0},500,function(){
			$(".img").find("li:last").remove();
			
			flag=true;
			
		})
			
			
		}
		
		
	});
	
	
	function  pageindex(page,callback){
	$.ajax({
		type:"get",
		url:"../json/list.json",
		success:function(json){
			var str="";
			
			var pageNum = json.length/4;
		//	console.log(pageNum);
			for(var i= (page-1)*4;i<page*4;i++){
		  str += 
		  `<li>
		 				<img src="${json[i].image}" alt="" />
		 				<p class="dec"><a href="#">${json[i].name}</a></p>
		 				<p>  <span class="newPrice">${json[i].price} </span><span class="oldPrice">${json[i].oldprice}</span></p>
		 				<div class="fl">
		 					<input type="text" value=2 class="fl"/>
		 					<a  class="fr upnum" href="javascript:;">+</a>
		 					<a  class="fr downnum" href="javascript:;">-</a>
		 					
		 					
		 				</div>
		 				<a href="javascript:;" class="fl addcart">加入购物车</a>
		 				<a href="javascript:;" class="fl addfav">收藏</a>
		 				
		 			</div>
		 			
		 			
		 			
		 		</li>`
		  
				
				
			}
			
			$(".goodslist ul").html(str);
			callback(pageNum);
		}
	});
	}
	pageindex(1,function(pageNum){
		page.page(1,pageNum,5);
		$(".page").on("click","a",function(){
      // $(this).addClass("active").siblings().removeClass("active");
     page.page($(this).data("id"),pageNum,5);
     pageindex($(this).data("id"),function(){});
 });
	$(".prev").click(function(){
		if($(".page").find("a.current").data("id")==1){
			page.page(1,pageNum,5);
			
		}else{
		current = $(".page").find("a.current").data("id")-1;
		page.page(current,pageNum,5);
		}
		 pageindex($(".page").find("a.current").data("id"),function(){});
	});
	$(".first").click(function(){
		
		page.page(1,pageNum,5);
		pageindex(1,function(){});
	})
	
	$(".last").click(function(){
		page.page(pageNum,pageNum,5);
		pageindex(pageNum,function(){});
	})
	
	$(".next").click(function(){
		if($(".page").find("a.current").data("id")==10){
			page.page(10,pageNum,5);
			
		}else{
		current = $(".page").find("a.current").data("id")+1;
		page.page(current,pageNum,5);
		}
		 pageindex($(".page").find("a.current").data("id"),function(){});
	});	
		
	});
	//console.log(pageNum);
	
	
	
	
	
	
	
	
	
	
	
	
});
