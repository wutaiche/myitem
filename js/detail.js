requirejs.config({
	paths:{
		jquery:"jquery-1.11.1.min"
		
	}
	
	
	
});


requirejs(["jquery","deadline","area"],function($,deadline,area){
	$("#top").load("../html/index.html #top .wrap_1200");
	$("#logo").load("../html/index.html #logo .wrap_1200");
	$("#nav").load("../html/index.html #nav .wrap_1200");
	$("#superfooter").load("../html/index.html #footer")
	
	$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(){
    $("#location").html(remote_ip_info.city);
}); //自动获取客户的地址位置。
	
	$("bottom ul li").mouseenter(function(){
		var index = $(this).index();
		$(".smallimg").find("img").eq(index).show()
		  .siblings("img").hide();
		$(".bigimg").find("img").eq(index).show()
		.siblings().hide();
		
		
		
	})
	$(".smallimg").mouseenter(function(){
		$("#mask").show();
		$(".bigimg").show();
		
		
	});
	
	$(".smallimg").mousemove(function(e){
		var e= e||window.event;
		var x = e.pageX - $(".smallimg").offset().left - $("#mask").outerWidth()/2;
		var y = e.pageY - $(".smallimg").offset().top - $("#mask").outerHeight()/2;
		
		var maxl = $(".smallimg").outerWidth()-$("#mask").outerWidth();
		var maxt = $(".smallimg").outerHeight()-$("#mask").outerHeight();
		//console.log(maxt);
		x = Math.min(maxl,Math.max(x,0));
		y = Math.min(maxt,Math.max(y,0));
		$("#mask").css({
			left:x,
			top:y
			
		});
		//console.log($(".smallimg").find("img").width());
		var precentx = $(".bigimg img").width()/$(".smallimg").width();
		var precenty =$(".bigimg img").height()/$(".smallimg").height();
		px = -x*precentx;
		py = -y*precenty;   //  
		//  420/800 = ? / 350 
		//console.log(precenty);
		$(".bigimg img").css(
			{
			left : px,
			top : py
			}
			
		)
		
		//小图可视区 / 大图可视区 = 小图 / 大图
	})
	$(".smallimg").mouseleave(function(){
		$("#mask").hide();
		$(".bigimg").hide();
		
	})
	
	
	var value = $(".ssale_d_update").attr("endtimevalue");
	
	endtime = parseInt(value)
	
	


	
	
	deadline.deadline(endtime,".day",".hour",".minute",".second");
	$(".tab_trigger li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		$(".tab_content").find(".tab_content_item").eq(index+1).
		  addClass("selected").siblings().removeClass("selected");
		
	});
	
var provinceList =area.provinceList();
//console.log(provinceList);
	
	$(".add").click(function(){
 $(".showadd").show();

})
$(".close").click(function(){
  $(".showadd").hide();

});


$(".showadd").find("li").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
   var index = $(this).index();
   $(".address div").eq(index).addClass("selected").siblings().removeClass("selected");
   })
   
   
   var province=$(".province"),city=$(".city"),town=$(".town");
for(var i=0;i<provinceList.length;i++){
    addEle(province,provinceList[i].name);
}
function addEle(ele,value){
    var optionStr="";
    optionStr=`<a href="javascript:;" data-value="${value}">${value}</a>`;
    ele.append(optionStr);
	}

function removeEle(ele){
    ele.find("a").remove();
   
}
var provinceText,cityText,cityItem,townText;
province.on("click","a",function(){
	$(this).addClass("active").siblings().removeClass("active");
    provinceText=$(this).data("value");
    
	$(".showadd").find("li").first().text(provinceText);
	$(".showadd").find("li").eq(1).text("请选择城市");
	$(".showadd").find("li").eq(2).text("请选择区域 ");
	$(".showadd").find("li").eq(1).addClass("active").siblings().removeClass("active");
	$(".address div").eq(1).addClass("selected").siblings().removeClass("selected");
    $.each(provinceList,function(i,item){
        if(provinceText == item.name){
            cityItem=i;
            return cityItem
        }
    });
    removeEle(city);
    removeEle(town);
    $.each(provinceList[cityItem].cityList,function(i,item){
        addEle(city,item.name)
    })
});
city.on("click","a",function(){
   $(this).addClass("active").siblings().removeClass("active");
    cityText=$(this).data("value");
	$(".showadd").find("li").eq(1).text(cityText);
	$(".showadd").find("li").eq(2).text("请选择区域 ");
	$(".showadd").find("li").eq(2).addClass("active").siblings().removeClass("active");
	$(".address div").eq(2).addClass("selected").siblings().removeClass("selected");
	console.log(cityText);
    removeEle(town);
    $.each(provinceList,function(i,item){
        if(provinceText == item.name){
            cityItem=i;
            return cityItem
        }
    });
    $.each(provinceList[cityItem].cityList,function(i,item){
        if(cityText == item.name){
            for(var n=0;n<item.areaList.length;n++){
                addEle(town,item.areaList[n])
            }
        }
    });
}
);

town.on("click","a",function(){
  $(this).addClass("active").siblings().removeClass("active");
  townText = $(this).data("value");
  $(".showadd").find("li").eq(2).text(townText);
  $(".showadd").hide();
  $(".add .value").text(provinceText+cityText+townText);
   $(".showadd li").first().addClass("active").siblings().removeClass("active");
   $(".address div").first().addClass("selected").siblings().removeClass("selected");
});

	
	
	
	
})
