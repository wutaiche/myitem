requirejs.config({
	paths:{
		jquery:"jquery-1.11.1.min",
		cookie:"jquery.cookie"
	}
	
}
	
	
);


requirejs(["jquery","verfication","verifyCode","cookie","validate"],function($,verfication,verifyCode,cookie,validate){
	$("#go_reg").click(function(){
$("#login").animate({"right":-340,
                     "opacity":0
   },1000);
$("#register").css({right:386,opacity:0}).animate({"right":46,"opacity":1},1000);
		
		
	});
	$("#go_login").click(function(){
$("#register").animate({"right":-340,
                     "opacity":0
   },1000);
$("#login").css({right:386,opacity:0}).animate({"right":46,"opacity":1},1000);
		
		
	});
 // console.log	(verfication.verfy($("#drag")));
verfication.drag($("#drag"));
//	console.log(verifyCode.verifyCode("changeImg","canvas2"));
	
	
	var flagName;
	$("#account").blur(function(){
	  if(validate.checkName($(this).val())){
	  	   flagName= true;
	  	  // $("#DIVLoginMsg span").text("");
	  }else{
	  	$("#DIVLoginMsg span").text("帐号输入有误");
	  	flagName = false;
	  }
		
		
	});
	
	var flagPsw;
	$("#password").blur(function(){
		if(validate.checkPsw($(this).val())){
			flagPsw=true;
			
		}else{
			$("#DIVLoginMsg span").text("密码必须包含字母和数字");
			flagPsw=false;
		}
		
	});
	verfication.drag($("#drag"));
	function getDraged(){
		if ($("#drag").find('.handler').hasClass("handler_ok_bg")){
			return true;
		}
		  return false;
		
	}
	$("#LoginForm").submit(function(){
		
		var flagDrag = getDraged();
		
		console.log(flagDrag);
		if (!flagDrag){
			$("#DIVLoginMsg span").text("请将滑块拖到右边，解锁登录");
		}
		if( flagName && flagPsw && flagDrag ){
			var user = JSON.parse($.cookie("userlist"));
		     console.log(user);
		 	if ($("#account").val()==user.userName&&
		 	    $("#password").val()==user.psw)
		 	{
		 		
		 	  location.href="index.html";
		 		
		 		
		 		
		 	}
		 	
		 
		     
		
		}
		$("#DIVLoginMsg span").text("帐号或密吗错误");
		return false;
		
	})
	 var flagName1;
	$("#account1").blur(function(){
	  if(validate.checkName($(this).val())){
	  	   flagName1= true;
	  	  // $("#DIVLoginMsg span").text("");
	  }else{
	  	$("#DIVRegisterMsg span").text("帐号输入有误");
	  	flagName1 = false;
	  }
		
		
	});
	var flagPsw1;
	$("#password1").blur(function(){
		if(validate.checkPsw($(this).val())){
			flagPsw1=true;
			
		}else{
			$("#DIVRegisterMsg span").text("密码必须包含字母和数字");
			flagPsw1=false;
		}
		
	});
	var flagVerfy;
	
	var val=verifyCode.verifyCode("changeImg","canvas2");
	//console.log(val);
	$("#verfy").blur(function(){
		
		if(validate.checkverify(val,$(this).val())){
		           	console.log(1);
		           	flagVerfy =true;
		           	
		           }else{
		           	$("#DIVRegisterMsg span").text("验证码错误");
		           	flagVerfy= false;
		           	console.log(val);
		           	console.log(2);
		           }
		
		
	})
	$("#changeImg").click(function(){
		val =verifyCode.verifyCode("changeImg","canvas2");
		console.log(val);
		
	})
	
	$("#RegisterForm").submit(function(){
		
		
		
		if( flagName1 && flagPsw1 && flagVerfy ){
			
			
			var ujson = {
				"userName" : $("#account1").val(),
				"psw" : $("#password1").val()
			}
			
		   $.cookie('userlist',JSON.stringify(ujson), { expires: 7, path: '/' });
		 	   console.log($.cookie("userlist"));
		 	   (function(){
$("#register").animate({"right":-340,
                     "opacity":0
   },1000);
$("#login").css({right:386,opacity:0}).animate({"right":46,"opacity":1},1000);
		 		
		 	})();
		 	return false;		 		 	     			
	}
		
		$("#DIVRegisterMsg span").text("帐号或密吗错误");
		return false;
		
		})
	
})
