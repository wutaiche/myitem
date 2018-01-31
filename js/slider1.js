define(function(){
	return{
		slider1:function(slide,direction,bannerCtrl,effect){
			//console.log(1);
			var $timer;
			var $effect = effect;
			
			var $over = true;
			 var $index = 0;
			var $playSpeed=1000;
			var slideli=$(slide).children("li")
			var num = slideli.length;
			  if(bannerCtrl!=null){
			 var bannerHtml  = "";
			
			for (var i =0; i<num;i++){
				bannerHtml +='<li data-value="' + i + '"></li>';
				
			}
			$(bannerCtrl).append(bannerHtml);
			ctrlli = $(bannerCtrl).children();
			ctrlli.first().addClass('active');}
			if ($effect == 'left') {
           var $moveVal = slideli.width();
           var $moveArgs1 = {
                left: $moveVal
            }
           var $moveArgs2 = {
                left: -$moveVal
            }
           var $moveArgs3 = {
                left: 0
            }
            initAllLi();
            picMoveChange();
        } else if ($effect == 'top') {
          var  $moveVal = slideli.height();
           var $moveArgs1 = {
                top: $moveVal
            }
           var $moveArgs2 = {
                top: -$moveVal
            }
           var $moveArgs3 = {
                top: 0
            }
            initAllLi();
            picMoveChange();
        } else {
          var  $moveArgs1 = {
                'opacity': 0
            }
         var   $moveArgs2 = {
                'opacity': 1
            }
            initAllLi();
            picFadeChange();
        }
        
		function initAllLi(){
        	 slideli.each(function(index, el) {
                if (index > 0) {//第一个不变，其它的都要隐藏。
                    $(el).css($moveArgs1);
                }
            });
        		
        		
        };	
		
		function picMoveChange() {
        $(direction).on('click', 'li', function() {
            //event.preventDefault();
            if ($(this).find("a").attr('class') == "flex-prev") {
                if ($over) {//根据$over来判断是否运行这个移动，以免点击太快，而出现溢 出问题。
                	overFunc(false);
                    slideli.eq($index).stop().animate($moveArgs1,$playSpeed);//先氢当前index隐藏
                    $index--;
                    $index < 0 ? $index = num - 1 : $index;//判断是否越界。
                    slideli.eq($index).css($moveArgs2).stop().animate($moveArgs3, $playSpeed, function() {
                        overFunc(true); //先把后面的图片变成css 后面，在运行的animate向moveArgs3运行。
                    });  
                    	console.log($effect);
                      libsChange($index);
                    
                }
                
            } else if ($(this).find("a").attr('class') == 'flex-next') {
                if ($over) {
                	overFunc(false);
                    moveNext();
                }
               }
            })
         if(bannerCtrl!=null){
        $(bannerCtrl).on("mouseenter","li",function(){
        	
                	
                    var $that = $(this).attr('data-value');
                    if ($that > $index) {//根据前后改变图息的移动方向。
                        slideli.eq($index).stop().animate($moveArgs2, $playSpeed);
                        slideli.eq($that).css($moveArgs1);
                    } else if ($that < $index) {
                        slideli.eq($index).stop().animate($moveArgs1, $playSpeed);
                        slideli.eq($that).css($moveArgs2);
                    }
                    $index = $that;
                    slideli.eq($index).stop().animate($moveArgs3, $playSpeed);
                       
                    
                      libsChange($index);
                    
                
        	
        	
        })
        }
        }
		 
		  function picFadeChange() {
            $(direction).on('click', 'li', function(event) {
                if ($(this).find("a").attr('class') == "flex-prev") {
                    if ($over) {
                    	overFunc(false);
                        slideli.eq($index).stop().animate($moveArgs1, $playSpeed);
                        --$index;
                        $index < 0 ? $index = num - 1 : $index;
                        slideli.eq($index).stop().animate($moveArgs2, $playSpeed, function() {
                            overFunc(true);
                        });
                       
                            libsChange($index);
                        
                    }
                    
                } else if ($(this).find("a").attr('class') == 'flex-next') {
                    if ($over) {
                    	 overFunc(false);
                        fadeNext();
                    }
                   
                } });
                 if(bannerCtrl!=null){
                 $(bannerCtrl).on("mouseenter","li",function(){
                  
                        
                       
                        slideli.eq($index).stop().animate($moveArgs1, $playSpeed);
                       
                        $index = $(this).attr('data-value');
                        slideli.eq($index).stop().animate($moveArgs2, $playSpeed);
                          
           
                        
                            libsChange($index);
                        
                    
                   
                
            });
        }
		  }
		   autoPlay();
		     function autoPlay() {
            clearInterval($timer);
            $timer = setInterval(function() {
                if ($effect == 'fade') {
                    fadeNext();
                } else {
                    moveNext();
                }
            }, 3000);

        }
		     
		 $(slide).parent().hover(function() {
         	if(bannerCtrl!=null){ $(direction).show();}
            clearInterval($timer);
        }, function() {
        if(bannerCtrl!=null){	 $(direction).hide();}
            clearInterval($timer);
           
                autoPlay();
            
        });
        
              function moveNext() {
            slideli.eq($index).stop().animate($moveArgs2, $playSpeed);
            $index++;
            $index %= num;
            slideli.eq($index).css($moveArgs1).stop().animate($moveArgs3, $playSpeed, function() {
                overFunc(true);
            });
            
                libsChange($index);
            
        }
        //右淡入淡出点击箭头
        function fadeNext() {
            slideli.eq($index).stop().animate($moveArgs1, $playSpeed);
            $index++;
            $index %= num;
            slideli.eq($index).stop().animate($moveArgs2, $playSpeed, function() {
                overFunc(true);
            });
           
                libsChange($index);
            
        }
        
          //lib改变
        function libsChange(val) {
        	 if(bannerCtrl!=null){
            ctrlli.removeClass('active').eq(val).addClass('active');}
        }
        //节流
        function overFunc(val) {
            $over = val;
        }
        	
        	
                
		
		
		
		
		
			
			
			
			
		}
		
		
		
		
		
		
	}
});
