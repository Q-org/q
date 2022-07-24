 
var popupStatus = 0;

$.fn.extend({
	centerDialog:function(t,l){     
     	//alert($(this).html());   
     	//request data for centering
		var windowWidth = document.body.clientWidth;
		var windowHeight =  (document.documentElement.clientHeight<document.body.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
		 var popupHeight = $(this).height();
		var popupWidth = $(this).width();
		 //centering
		$(this).css({
			"position": "absolute",
			"z-index":"4001",
			"top": (t)?t:(windowHeight/2-popupHeight/2),
			"left":(l)?l:(windowWidth/2-popupWidth/2)
		 });
		 
		//only need force for IE6
		$("#backgroundPopup").css({
			"background":"#cfcfcf",
			"top":"0",
			"left":"0",
			 "width":windowWidth,
			"height":  (document.documentElement.clientHeight<document.body.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight
			
	});  
	$("#backgroundPopup_all").css({
			"background":"#cfcfcf",
			"top":"0",
			"left":"0",
			 "width":windowWidth,
			"height":  (document.documentElement.clientHeight<document.body.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight
			
	});  
	
    }
 });     

$.fn.extend({
	    loadDialog:function(w,h,bg){
    	if(popupStatus==0){
		$("#backgroundPopup,#backgroundPopup_all").css({
			"opacity": "0.3"
		});
		$("#backgroundPopup,#backgroundPopup_all").fadeIn("slow");
		$(this).fadeIn("slow");
		popupStatus = 1;
		}
		$(this).cssDialog(w,h,bg);
    }
	});     
$.fn.extend({
	    disableDialog:function(){
	    	if(popupStatus==1){
	    	
			$("#backgroundPopup,#backgroundPopup_all").css({"z-index":"1001"}).fadeOut("fast");
			 $(this).css({"z-index":"1001"}).fadeOut("fast");
				popupStatus = 0;
			}
			//window.location.href="www.baidu.com"
    }
	});  
$.fn.extend({
	 cssDialog:function(w,h,bg,p){
	   $(this).css({
	 		//"position":"fixed",
			"position":"absolute", 
			"height":(h)?h:"300px",
			"width":(w)?w:"400px",
			"background":(bg)?bg:"#FBFBFB",
			"border":"2px solid #cecece",
			"z-index":"2001",
			"padding":(p)?p:"0px"
		 });
	 	}
	 }); 
$.fn.extend({
	addDivDialog:function(){
				var $DialogClose=$("<a></a>")
			.html("T")
			.css({
				"font-size":"14px",
				"line-height":"16px",
				"right":"6px",
				"top":"4px",
				"position":"absolute",
				"color":"#7B7B7B",
				"font-weight":"700",
				"display":"block",
				"font-family":"Wingdings 2",
				"cursor":"hand"
				})
			 .prependTo($(this)); 
			 
		$DialogClose.click(function(){
				$(this).parent().disableDialog();
			})
		
	}
	});	
$.fn.extend({
	methodDialog:function(w,h,bg){
			$(this).addDivDialog();
			$(this).centerDialog();
			$(this).loadDialog(w,h,bg);
		}
	});
 
/* $(document).ready(function(){
	$("#popupContact").cssDialog();
	$("#popupContact2").cssDialog();
	
	$("#button").click(function(){
		 $("#popupContact").methodDialog();
    });
	
	$("#button2").click(function(){
	   $("#popupContact2").methodDialog();
   });
});*/
