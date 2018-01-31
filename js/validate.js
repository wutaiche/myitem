define(function(){
	return{
		checkName:function(name){
			var reg=/^\d{11}$/;
			return reg.test(name);
			
		},
		checkPsw:function(psw){
			var reg = /(?![0-9]+$)[a-z0-9]{6,8}/;
			return reg.test(psw);
		},
		checkverify:function(ver,val){
			
			
			return ver.toLowerCase()==val.toLowerCase();
			
		}
		
		
	}
	
	
});
