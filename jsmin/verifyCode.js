define(function(){return{verifyCode:function(t,e){function n(t,e){return Math.floor(Math.random()*(e-t)+t)}function r(t,e){return"rgb("+n(t,e)+","+n(t,e)+","+n(t,e)+")"}var o=l();function l(){var t=document.getElementById(e),o=t.width,l=t.height,i=t.getContext("2d");i.textBaseline="bottom",i.fillStyle=r(180,240),i.fillRect(0,0,o,l);for(var a="ABCEFGHJKLMNPQRSTWXY123456789",f="",u=1;u<=4;u++){var c=a[n(0,a.length)];f+=c,i.fillStyle=r(50,160),i.font=n(15,40)+"px SimHei";var h=20*u,d=n(25,35),g=n(-30,30);i.translate(h,d),i.rotate(g*Math.PI/180),i.fillText(c,0,0),i.rotate(-g*Math.PI/180),i.translate(-h,-d)}for(u=0;u<3;u++)i.strokeStyle=r(40,180),i.beginPath(),i.moveTo(n(0,o/2),n(0,l/2)),i.lineTo(n(0,o/2),n(0,l)),i.stroke();for(u=0;u<50;u++)i.fillStyle=r(255),i.beginPath(),i.arc(n(0,o),n(0,l),1,0,2*Math.PI),i.fill();return f}return document.getElementById(t).onclick=function(t){return t.preventDefault(),o=l()},o}}});