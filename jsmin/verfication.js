define(function(){return{drag:function(e){var s,d=!1;e.html('<div class="drag_bg"></div><div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div><div class="handler handler_bg"></div>');var n=e.find(".handler"),t=e.find(".drag_bg"),a=e.find(".drag_text"),i=e.width()-2-n.width();n.mousedown(function(e){d=!0,s=e.pageX-parseInt(n.css("left"),10)}),$(document).mousemove(function(o){var c=o.pageX-s;d&&(c>0&&c<=i?(n.css({left:c}),t.css({width:c})):c>i&&(t.css("width",e.width()),n.css("left",i),n.removeClass("handler_bg").addClass("handler_ok_bg"),a.text("验证通过"),e.css({color:"#fff"}),n.unbind("mousedown"),$(document).unbind("mousemove"),$(document).unbind("mouseup")))}).mouseup(function(e){d=!1,e.pageX-s<i&&(n.css({left:2}),t.css({width:0}))})}}});