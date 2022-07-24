/*????ҳ??ʱ????*/
$.fn.extend({
	showLoading:function(h){
		var h=(h)?h:$(this).position().top+$(this).height()/2;
		var $loading = 
			$("<div id='loadingDiv'></div>")
			.css({
			"position":"absolute", 
			"height":"60px",
			"width":"100px",
			"background":"#F4F7FB",
			"border":"2px solid #cccccc",
			"z-index":"2001",
			"padding":"5px",
			"opacity": "0.7",
			"top":h
		 }).html("<img src='images/loading.gif' style='float:left'/><div  style='float:left;'>??????</div>").appendTo(this);
	}
});
$.fn.extend({
 	closeLoading:function(){
		$(this).find("#loadingDiv").remove();
	}
});