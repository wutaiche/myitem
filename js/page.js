define(function(){
	return{
		page:function (cur_pc,totalpage,showpage)
{
  var curentpage=cur_pc;  //curent page count
  var totalpage=totalpage;  //total page count
  var showpage=showpage;  //show page count
  var beginpage;      //begin page count
  var endpage;      //end page count
  if(showpage%2==0) showpage=showpage+1;   //this process need an odd number
  var dp=Math.floor(showpage/2); //each side count to show
  var dif=totalpage-showpage;  //check weather it have enough page to make mid-show
  var f=curentpage-dp;   //to check weather it has enough page to make mid-show from the begin
  var g=totalpage-(curentpage+dp); //to check weather it has enough page to make mid-show from the end
  if(showpage && dif>=0)
  {
    if(g>0)
    {
      if(f>0)
      { 
        beginpage=f; 
        endpage=curentpage+dp; 
      }
      else
      { 
        beginpage=1; 
        endpage=2*dp+1; 
      }
    }
    else
    { 
      beginpage=totalpage-2*dp; 
      endpage=totalpage; 
    }  
  }
  else
  { 
    beginpage=1; 
    endpage=totalpage; 
  }
  var buf=[];
  for(var i=beginpage;i<=endpage;i++)
  {
    if(i==cur_pc)
    {
      buf.push("<a href='javascript:;' class='current active' data-id='"+i+"'>"+i+"</a>");
    }
    else
    {
      buf.push("<a href='javascript:;' class='normal' data-id='"+i+"'>"+i+"</a>");
    }
  }
    $(".page").html(buf);
	
	
}
		
		
	}
	
	
	
})
