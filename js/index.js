requirejs.config({
	paths:{
		jquery:"jquery-1.11.1.min"
		
	}
	
})

requirejs(["jquery","slider1","deadline"],function($,slider1,deadline){
	$(".top_menu").mouseenter(function(){
		$(this).find("div").show();
		
	}).mouseleave(function(){
		$(this).find("div").hide();
		
	});
	
	$(".cateMenu li").mouseenter(function(){
		$(this).find(".cate-tag").addClass("on").find("span").
	css("background-position-x",-35)
		              .end().end().siblings().
		       find(".cate-tag").removeClass("on").find("span")
    .css("background-position-x",0);
		
		$(this).find(".list-item").show().end().
		siblings().find(".list-item").hide();
		
		
		
	}).mouseleave(function(){
		$(this).find(".cate-tag").removeClass("on").find("span").
		css("background-position-x",0);
		$(this).find(".list-item").hide();
		
		
	});
	
	slider1.slider1(".slides",".flex-direction-nav",".bannerCtrl","fade");
	slider1.slider1(" .floor_box_content:first .carousel",".direction",null,"left");
    slider1.slider1(" .floor_box_content:eq(1) .carousel",".direction",null,"left");
    slider1.slider1(" .floor_box_content:eq(2) .carousel",".direction",null,"left");
    slider1.slider1(" .floor_box_content:eq(3) .carousel",".direction",null,"left");
    slider1.slider1(" .floor_box_content:eq(4) .carousel",".direction",null,"left");
    
	
	
	var date =new Date();
	date.setHours(14);
	date.setMinutes(0);
	date.setSeconds(0);
	console.log("date",date);
	deadline.deadline(date,null,".houn",".min",".sec");
	var value = $(".deadline_time").attr("end");
	//console.log(value);
	var date1 = new Date(value);
	console.log(date1);
	//date1.setDate(date1.getDate()+3);
	deadline.deadline(date1,".day",".hour",".minute",".second");
	                             
	
	
	
})
