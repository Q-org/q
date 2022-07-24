  var gzNum=0, lineNum=0;
 var currentRoleidURL="";
 var roledivtop=0;

$(document).bind("click",function(e){ //ǩ?»??ߣ????????ֲ??????????????????ⲿ?ֿ?ʵ???Զ????? 
  e = e ? e : window.event; 
  var tag = e.srcElement || e.target; 
   if($(tag).parents("#roleDiv").size()<=0&&$(tag).parents("*[toolsdiv]").size()<=0&&(typeof($(tag).attr("toolsdiv"))=="undefined")){
    $("div[toolsdiv=1]").fadeOut("fast");
  	$("#backgroundPopup").fadeOut("fast");
  }
 });
 
 function scrollDivSelfWin(framename,hiddenAll){
 if($("#roleDiv").size()>0){
	 if(hiddenAll!="0") click_slideUp('all','scroll')
	// alert($(window).width())
	try{
	if($(window).width()<850){
		 $("#dw_name").css({"top":"-14px"})
		 if($("#show_role_td").position().left<$("#role_name").width())//?ж?ǩ?°?ť??λ??
		  $("#role_name").css({"top":"-14px","left":$("#dw_name").width()+20})
		 else
		 $("#role_name").css({"top":"8px","left":"12px"})
	}else{
		$("#dw_name,#role_name").css({"top":"8px"})
		$("#role_name").css({"left":$("#dw_name").width()+20})
	}
	}catch(ex){}
  var height = $("#roleDiv").height()+16;
    var Top =$("#roleDiv").position().top;
    var frameHeight = $(window.parent.document.body).find("#"+framename).height()
    //???ڸ߶?
   var winheight=(document.documentElement.clientHeight<document.body.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight
   winheight=(document.body.scrollHeight<winheight)?winheight:document.body.scrollHeight;
    var divtop=frameHeight+$(this).scrollTop()-height
  $("#roleDiv").css({top:(winheight>divtop)?(divtop):(winheight)})
  return divtop;
	}
}
 //????ѡ????ɫ??
 function do_role($mainFrame,$roleFrame){
	 //$mainFrameΪ?���??ʾ?? $roleFrameΪ??ɫѡ????
	 if($("#bill_position_layer",$($mainFrame)).size()>0&&$('#roleDiv',$($mainFrame)).size()<=0){
	   $($mainFrame).append($($roleFrame).html())
	 $($mainFrame).append('<div id="showCachetPopup"></div><div id="backgroundPopup"></div><div id="backgroundPopup_all"></div>')
	  $("#roleInit",$($mainFrame)).click();
	  }
 }
 
 function buttoncss(){
 	//?????ƶ???ʽ?仯 
	$(".changebg").css({"cursor":"hand"}).click(
    	function(){
    	 $(".changebg").each(function(){
    	 	 $(this).attr("current","0");
    	 	$(this).css({"background-image":$(this).attr('bg1')});
    	 });
    	 if($(this).css("background-image")!=$(this).attr('bg2')){
    	 $(this).css({"background-image":$(this).attr('bg2')});
    	 $(this).attr("current","1");
    	 }
    	}).hover(
    	function(){$(this).css({"background-image":$(this).attr('bg2')})},
    	function(){if($(this).attr("current")!="1")$(this).css({"background-image":$(this).attr('bg1')})})
 }
 
//?????Ͻ?ɫʱѡ????ɫ??
function roleChooseInit(){
	 $("input[init_readonly=1]").attr("init","1"); //??ʼ?????ֶ?????״̬
	  if(window.parent.bottomFrame){//?Ƿ???˰???걨/*????ģʽ*/
	   if($("input[name=isNssb]",$(window.parent.bottomFrame.document.body)).size()>0&&$("input[name=isNssb]",$(window.parent.bottomFrame.document.body)).val()=='1'){
	        $("tr[nssb=show_nssb_0],td[nssb=show_nssb_0],div[nssb=show_nssb_0]").remove();
	   		$("tr[nssb=show_nssb_1],td[nssb=show_nssb_1],div[nssb=show_nssb_1]").show();
	   		 $("input").attr("init","1"); //??ʼ?????ֶ?????״̬
	   }else{
	   	$("#computer_td").hide()
	   }
    }
	 buttoncss(); //?????ƶ???ʽ?仯
	 if($("input[name=zyks]").val()=='1'){$("#show_button_div_2").hide();$("#dybj").hide();}else{$("#show_button_div_2").show();$("#dybj").show()}//??ҵ???? ?ύ?????ɼ???ť????
    if($("input[name=isAllowedCorrect]").val()=='1'){$("#img_tjjscj").attr("src",$("#img_tjjscj").attr("src2"));}else{ $("#img_tjjscj").attr("src",$("#img_tjjscj").attr("src1"));}//??Ŀ?ɽ?ʦ???ĵĻ?Ҫ???? ?????ɼ?????????
  	if($("input[name=hadSubmit]").val()=='1'&&$("input[name=isAllowedCorrect]").val()=='1'){$("#roleDiv").hide();}else{$("#roleDiv").show();}
  	//if($("input[name=hadSubmit]").val()=='1'&&$("input[name=zyks]").val()!='1') $("#role_tools_submitbutton").hide();//ѧ???ύ???ɼ???ʱ???????ڱ???
  	//ǩ?»??߰?ť????????
  	$("input[id=btn_drag_cachet]").hide();
    $("input[id=btn_drag_line]").hide();
   $("input[name=save_data_button]").hide();
    $("input[name=save_data_button2]").hide();
    $("input[name=computeScore_button]").hide();
    var divLeft=45;//(document.body.clientWidth-250)/2;
    $('#roleDiv').css({"left":divLeft });
    if($(window.parent.document).find("input[name=roleScroll]").val()=='1'){//frameset???ù???
    	    scrollDivSelfWin($(window.parent.document).find("input[name=roleScroll]").attr("framename"))
       $(window).scroll(function(){
 			scrollDivSelfWin($(window.parent.document).find("input[name=roleScroll]").attr("framename"))
 		});
 		 $(window).resize(function(){
 		 	scrollDivSelfWin($(window.parent.document).find("input[name=roleScroll]").attr("framename"),"0");
 		 });
 	 }else{//???ø????ں??????ڶ?λ
   	roledivtop=parent.scrollDiv();
   }
    
	$(window).scroll(function(){$('#roleDiv').css({left:$(this).scrollLeft()+divLeft});}); //div????????????
	 $.post($("#check_role_ajax_url").val(),{roleid:$("#roleid").val(),operationid:$("#operationid").val(),cachet_no:$("#cachet_no").val()},function(data){
	if(data=='0'){
	var newParams = getParams();
	 $.post($("#params").attr("chooseurl")+newParams,{},function(data){
		$("#showCachetPopup").html(data);
		$("#role_choose_table",$("#showCachetPopup")).show() 
		$("#showCachetPopup").cssDialog("400px",$("#role_choose_table",$("#showCachetPopup")).height());
		$("#showCachetPopup").centerDialog($('#roleDiv').position().top/2);
		$("#showCachetPopup").loadDialog("400px",$("#role_choose_table",$("#showCachetPopup")).height());
	     },"html");
	  currentRoleidURL=newParams;
	 } //ֻ??
			if(data=="2")
			{
				$("input").attr('readonly','readonly'); 
				 noWriteAlter()//û??дȨ??
				$("input[name=save_data_button]").hide();
				//????ȷ?????µĹ???
				if($("input[name=save_cachet_button]").size()<=0)
				$("form").eq(0).append("<input name='save_cachet_button' type='hidden' value='ȷ??????' onclick='do_save_cachet()'>");
			}else
			if(data=="1"){
			 $("input").attr('readonly',''); 
			 $("input").unbind("keydown",foo);
			  $("input[init=1]").attr('readonly','readonly'); 
			  
			  $("input[name=save_cachet_button]").remove();
			 $("input[name=save_data_button]").hide();
			 document.getElementsByName("save_data_button")[0].style.visibility = "visible";
			}
	});
}
	var foo = function(){
	    if((event.keyCode>48 && event.keyCode<57)||(event.keyCode>65 && event.keyCode<90)||(event.keyCode>97 && event.keyCode<122))
		netinnetAlert('?Բ????????ܽ?????д??????ԭ??????Ϊ????????\n\n1.Ŀǰ??ɫû??дȨ?ޣ??????С???????ɫ??????\n2.?ý?ɫ???????????Ѹ??£????޷?д?롣????Ҫ?????޸ģ???????????');
		 }
//û??дȨ??
function noWriteAlter(){
	
		$("input").bind("keydown",foo);
}
///???ؽ?ɫѡ????
function roleChoose(open){
	var newParams = getParams();
	  if(newParams!=currentRoleidURL){
		$.post($("#params").attr("chooseurl")+newParams,{},function(data){
		 $("#role_choose_info_div").html(data);
		 if(open!="0"){do_choose_role()}
		  },"html");
	     currentRoleidURL=newParams;
	}else{	  do_choose_role()}
	 $("a[linkroleid="+$.trim($("#roleid").val())+"]").click();
}
 function do_role_cachet(showByRole){
 	 /*д??ǩ??div*/
 	 //???ؽ?ɫѡ????
    //$("#dragCanvas").show()
 
   if($("#role_choose_table").size()<=0)  roleChoose('0')
 	$("a[linkroleid="+$.trim($("#roleid").val())+"]").click();
 	click_slideUp('role_cachet_div_view');
 	//alert($("#role_cachet_div_view").css("display"))
 	if($("#role_cachet_div_view").css("display")!="block"){
     if($("#role_cachet_div_view").size()<=0){
     __MM_toggleDiv("role_cachet_div_view");
  	}else{
	 	$("#role_cachet_div_view").css({"background-color":"#FBFBFB","border":"2px solid #ececec"});
		$("div[ROLEID="+$("#roleid").val()+"]",$("#role_cachet_div_view")).show();
		 click_slideUp('role_cachet_div_view','1') 
	}
    //??Ӧ??ɫ??????ʾ
    /*д??????ʹ?õ?ǩ????Ϣ*/
    $("#role_cachet_div_view").showLoading('25');
    if($(".wxts",$("#role_cachet_div_view")).size()<=0) //д????ܰ??ʾ
    $("<div class=wxts style='color:#666;position:relative;top:0;font:14px;height:22px;background:#C3DDE9;'>??ܰ??ʾ:?϶???Ҫ?ǵ?ǩ?µ???Ӧ??λ??,??????ǩ??</span>").appendTo($("#role_cachet_div_view"));
 	else
 	$(".wxts",$("#role_cachet_div_view")).show();
 	
 	$("div[isDoCachet=0][drag_area!="+$("input[name=drag_area]").val()+"]").remove();//ɾ???????????????? 
 	 $.post($("#role_cachet_url").val()+currentRoleidURL,{roleid:$("#roleid").val(),drag_area:$("input[name=drag_area]").val()},function(data){
 			$(data).find("record").each(function(i){
 			 gzNum++;
 			 var cachetInfo =""; var gzInfo=""; var gz_x=""; var gz_row=0; var gz_w="";	 var gz_y="";  var gz_no="";
 			  $(this).children().each(function(){
 			  cachetInfo+=$(this).attr("colname")+"='"+$.trim($(this).text())+"' ";
 			 	if($(this).attr("colname")=="CACHET_ID") gzInfo+="[CACHET_ID"+"="+$.trim($(this).text())+"]";
 			 	if($(this).attr("colname")=="CACHET_NO"){
 			 		 gzInfo+="[CACHET_NO"+"="+$.trim($(this).text())+"]";
 			 		 gz_no=$.trim($(this).text());
 			 		 }
 			 	if($(this).attr("colname")=="PAGENO") gzInfo+="[PAGENO"+"="+$.trim($(this).text())+"]";
 			 	if($(this).attr("colname")=="W") gzInfo+="[W"+"="+$.trim($(this).text())+"]";
 			 	if($(this).attr("colname")=="H") gzInfo+="[H"+"="+$.trim($(this).text())+"]";
 			 	if($(this).attr("colname")=="W") gz_w=$.trim($(this).text());
 			  });
 			 
 			  gz_x = ($("div[isDoCachet=0][roleid="+$("#roleid").val()+"]:last").size()>0)?$("div[isDoCachet=0][roleid="+$("#roleid").val()+"]:last").position().left-(-$("div[isDoCachet=0][roleid="+$("#roleid").val()+"]:last").attr("W"))-(-30):"30"
 			  gz_row = ((gz_x-(-gz_w))>$("#role_cachet_div_view").width())?(gz_row+1):(gz_row);
 			  gz_y = (gz_row*100)+0;
 			  gz_x = ((gz_x-(-gz_w))>$("#role_cachet_div_view").width())? "0":gz_x
 			 
 			  if($("div"+gzInfo).size()<=0){
 			       $cachet="<div id='gz"+gz_no+"10' show='0' isDoCachet='0' style='z-index:1200;position:relative;left:"+gz_x+"px;top:"+gz_y+"px;' "+cachetInfo+" ></div>";
 			 //ǩ???϶?div relative
			var $dragCachetDiv=do_drag_info();
			$($cachet).html($dragCachetDiv).appendTo($("#role_cachet_div_view"));//$("#bill_position_layer")
			}
 		 });
 		 	 
     $("#role_cachet_div_view").closeLoading();
     //???û?????div
    $("div[id^=gz][show=0]",$("#role_cachet_div_view")).each(function(){
    draw_gz($(this).attr("id"),isBlank($(this).attr("SHAPE")),isBlank($(this).attr("CONTENT")),isBlank($(this).attr("CHCHET_CONTENT_ARC")),
	 				isBlank($(this).attr("CHCHET_CONTENT_ARC_FONT")),
		 			isBlank($(this).attr("CHCHET_CONTENT_BOTTOM")),isBlank($(this).attr("CHCHET_CONTENT_BOTTOM_FONT")),
	 				isBlank($(this).attr("w"))-0,isBlank($(this).attr("h"))-0,
	 				isBlank($(this).attr("font")),isBlank($(this).attr("color")),isBlank($(this).attr("dynamicText")),isBlank($(this).attr("cachet_yj")));
	 $(this).attr("show","1");
   });
   $("div[id^=gz]",$("#role_cachet_div_view")).each(function(){
   		$(this).find("div[name=drag_cachet_div]").width($(this).attr("W")).height($(this).attr("H"));
   		 
   })
   $("div[id^=gz]",$("#role_cachet_div_view")).hide();//ȫ??????????
  $("div[ROLEID="+$("#roleid").val()+"]",$("#role_cachet_div_view")).show();//??Ӧ??ɫ??????ʾ
   },"xml");
 	}else{
 	click_slideUp("all");
 	}
}
function __MM_toggleDiv(divName,iswrite,bgshowmode){ 
	 var $objDiv="<div id='"+divName+"' toolsdiv='1' style='z-index:2001;position:absolute;height:150px;width:85%;background:#FBFBFB;border:2px solid #ececec;'></div>"
   	 $($objDiv).hide().appendTo($("body"));
   	 if(iswrite!='1')
   	 __MM_toggleDiv_height(divName,bgshowmode)
 }
 function __MM_toggleDiv_height(divName,bgshowmode){
 	 new_x=$("#roleDiv").position().left;
	 new_y=$("#roleDiv").position().top-$("#"+divName).height()-15;
	 $("#"+divName).css({"left":new_x,"top":new_y}).fadeIn("slow");
	 if(bgshowmode=="1"){	bgShowAll()}else{
	  $("#backgroundPopup").css({
			"opacity": "0.6",
			"top":new_y-6,
			"left":new_x-6,
			"width":$("#"+divName).width()+16,
			"height":$("#"+divName).height()-(-16)
			}).fadeIn("slow");
		}
 }
function bgShowAll(){
	$("#backgroundPopup_all").css({
			"opacity": "0.6",
			"top":"0",
			"left":"0",
			"width":document.body.clientWidth,
			"height":(document.documentElement.clientHeight<document.body.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight
			}).fadeIn("slow");
}
function do_drag_info(){
    var drag_info="<div style=\"z-index:901;cursor:hand;width:20px;height:20px;position:absolute;top:0px;left:0px;\"><image name=\"cachet_gif\" style=\"display:none\"  src=\"images/qzjs.gif\" width='20' height='20'></div><div name=\"drag_cachet_div\" class=\"drag_cachet\" style=\"z-index:1000;cursor:hand;width:100px;height:100px;position:absolute;top:-10px;left:-10px;background:#fefefe;filter:alpha(opacity=1)\"></div>";
	 $("div[cachet_init=0]").each(function(){
		 $(drag_info).appendTo($(this));
		 var w=($(this).attr("W")<=10)?"50":$(this).attr("W")-(-10);
		 var h=($(this).attr("H")<=10)?"30":$(this).attr("H")-(-10);
		  $(this).find("div[name=drag_cachet_div]").width(w).height(h);
	});
	return drag_info;
	}
 
/*??ʾɾ??????ͼ??X*/
function del_cachet_show(){
	click_slideUp('all');
	if($(event.srcElement).text()=="[ɾ??ǩ??]"&&$("div[roleid="+$.trim($("#roleid").val())+"]").size()>=1){
	 $("div[cachet_init=0][roleid="+$.trim($("#roleid").val())+"]").each(function(){
	$(this).css("z-index","3000")
	$("<div name='show' style=\"z-index:1003;cursor:hand;width:40px;height:40px;position:absolute;top:20px;left:-10px;\"  onclick=\"do_del_cachet()\"><image name=\"del_cachet_gif\" style=\"display:block\"  src=\"images/del.gif\"></div>").appendTo($(this));
	});
	$(event.srcElement).text("[????ɾ????־]");
	}else{$(event.srcElement).text("[ɾ??ǩ??]");
		 $("div[cachet_init=0]").css("z-index","1003").find("div[name=show]").remove(); }
 
}

function del_line_show(){
 	click_slideUp('all');
 	if($(event.srcElement).text()=="[ɾ??????]"){
	 $("div[line_init=0]").each(function(){
	 $(this).css("z-index","3000")
	$("<div name='show' style=\"z-index:1003;width:40px;height:40px;position:absolute;top:"+$(this).attr("line_y2")+"px;left:"+$(this).attr("line_x2")+"px;\"  onclick=\"do_del_line()\"><image name=\"del_line_gif\" style=\"display:block;z-index:2000\"  src=\"images/del.gif\"></div>").appendTo($(this));
	});
	$(event.srcElement).text("[????ɾ????־]");
	$("#dragCanvas").hide();
	}else{
	$(event.srcElement).text("[ɾ??????]");
	 $("div[line_init=0]").css("z-index","1003").find("div[name=show]").remove(); 
	 }
 }

function do_del_cachet(c_obj){
	//????ǩ?¶???
	if(typeof(c_obj)=="undefined")
	var $cachet=$(event.srcElement.parentElement.parentElement);
	else
	var $cachet=c_obj;
	 
	 
	$.post($("#del_role_cachet_url").val(),{operationid:$("#operationid").val(),cachet_id:$($cachet).attr("cachet_id"),cachet_no:$($cachet).attr("CACHET_NO"),roleid:$($cachet).attr("ROLEID"),pageno:$("input[name=PageNo]").val()},function(data){
		 if(data=="1"){//??ǩ?¶???????delete
			 $("div[id="+$($cachet).attr("id")+"]").remove();
		}else{netinnetAlert('??û??ɾ??ǩ?µ?Ȩ?ޣ?????ɾ????????ɫ??ǩ??')}
		},"html");
}

function do_del_line(){
	//???û??߶???
	 var $line=$(event.srcElement.parentElement.parentElement);
	$.post($("#del_role_line_url").val(),{operationid:$("#operationid").val(),line_no:$($line).attr("line_no")},function(data){
		if(data=="1"){//??ǩ?¶???????delete
			 $("div[id="+$($line).attr("id")+"]").remove();
		}
		},"html");
}

function do_choose_role(){
	 click_slideUp('role_choose_div_view');
	if($("#role_choose_div_view").size()<=0){
	  __MM_toggleDiv("role_choose_div_view","1");
	 /*д??ǩ????Ϣ*/
	 var h = ($("#showCachetPopup").innerHeight()>$("#role_choose_table",$("#role_choose_info_div")).innerHeight())?$("#showCachetPopup").innerHeight():$("#role_choose_table",$("#role_choose_info_div")).innerHeight()
	  //alert($("#role_choose_table",$("#role_choose_info_div")).html())
	  $("#role_choose_table").appendTo($("#role_choose_div_view")).show();
	  $("#role_choose_div_view").height(h+0)
	   __MM_toggleDiv_height("role_choose_div_view");
	  }
	 else{click_slideUp('role_choose_div_view','1')}
}

function do_save_cachet(){
	 if($("div[isDoCachet=1]").size()>=1){
	   _MM_DoSaveCachetLine();//ѧ??????????ǩ?»?????Ϣ
	   $.post($('#cachet_dto').attr("action"),$('#cachet_dto').serialize(),function(data){
	   	 if(data=='1'){netinnetAlert('?????ɹ???'); roleChooseInit()}
	   },"html"); 
    }else{	netinnetAlert('?????ɹ???');}
}

function do_choose_role_ajax(url,roleid,cachet_no,min_cachet_no){
	  $("div[line_init=0]").find("div[name=show]").remove(); 
	  $("div[cachet_init=0]").find("div[name=show]").remove(); 
	  $('#former').html('');$('#toer').html('');
	 var $roleDiv = event.srcElement;
	$.post(url,{},function(data){
		if(data=="1"||data=="2"){
			 //ֻ??
			if(data=="2")
			{
				noWriteAlter()//û??дȨ??
				$("input").attr('readonly','readonly'); 
				$("input[name=save_data_button]").hide();
				//????ȷ?????µĹ???
				if($("input[name=save_cachet_button]").size()<=0)
				$("form").eq(0).append("<input name='save_cachet_button' type='hidden' value='ȷ??????' onclick='do_save_cachet()'>");
			}
			if(data=="1"){
			$("input").attr('readonly',''); 
			$("input").unbind("keydown",foo);
			 $("input[init=1]").attr('readonly','readonly'); 
			  
			  $("input[name=save_cachet_button]").remove();
			 $("input[name=save_data_button]").hide();
			 document.getElementsByName("save_data_button")[0].style.visibility = "visible";
			}
			//??һ?ν?ɫΪ?յ?ʱ?????????ύ
			var showRoleChange = ($("#roleid").val()==""||$("#roleid").val()==roleid)?false:true
			$("#roleid").val(roleid);
			$("input[name=roleid]").val(roleid);
			$("input[name=cachet_no]").val(cachet_no);
			 //?ı?????ʾ?????޸?
			$(".roleChoose").css({"border":"#BCBCBC 0px solid"});
			$($roleDiv).css({"border":"#BCBCBC 3px solid"});
			 //?????л???ɫ
			  //??ɫͷ??????
			 if($("#dw_name").text()!=$($roleDiv).attr("dw_name"))
			$("#dw_name").text($($roleDiv).attr("dw_name"));
		 	$("img[name=roleimg]").attr("src",$($roleDiv).attr("src"));
		 	$("#role_name").text($($roleDiv).attr("role_name"))
 	
			if(popupStatus==0) click_slideUp("all");
            else $("#showCachetPopup").disableDialog();
			 
			//?޸Ľ?ɫѡ??????Դ?ļ?
			if(parent.parent.role_tools)
			$("#roleDiv",parent.parent.role_tools.document.body).html($("#roleDiv").html()) 
			else if(parent.role_tools)
			$("#roleDiv",parent.role_tools.document.body).html($("#roleDiv").html()) 
 
		    $('.changebg').css({'background-image':$(this).attr('bg1')})
		 }else{
			if(data=="0") alert("ǰ?滷?ڻ??в???δ???ɣ?????ʹ?ñ???ɫ???в?????\r\n\r\n???????ɸý?ɫ???£????ȵ????????????ݡ???ť??");
			if(data=="2") alert("??ѡ????ְ????ɫ\r\n\r\n???ܲ?????ǰ???ݣ???????ѡ????");
		}
	},"html");
	
}

function do_role_line(){
	if($("#dragCanvas").css("display") == "none"){
		 click_slideUp('role_choose_line_view')
		 if($("#role_choose_line_view").size()<=0){
		 	__MM_toggleDiv("role_choose_line_view");
			 /*д??ǩ????Ϣ*/ 
		 	$("#line_choose_table").show();
		 	$("#line_choose_table").find("td[name^=line_td_]").css({"font-size":"14px"}).height("25")
		 	$("#role_choose_line_view").append($("#line_choose_table"));
		 	  }
		 else{	click_slideUp('role_choose_line_view','1') }
	 }else{$("#line_button_img").attr("src","images/role_choose/rolehx.gif"); doBtnDragLine($("#line_show"))}
}

/*˫??????*/
function do_draw_line(line_x1,line_y1,line_x2,line_y2){
	 line_no=$("div[id^=line]").size()+1;
	 var pageNo=$("input[name=PageNo]").val();
	 var drag_area=($(this).attr('drag_area')=='default'||typeof($(this).attr('drag_area'))=='undefined')?'':$(this).attr("drag_area");
     var $line ="<div id='line"+line_no+"' isDoLine=1 line_color='"+$("input[name=line_color][checked]").val()+"' line_no='' line_type='"+$("input[name=line_type][checked]").val()+"'  line_init='0' line_x1='"+(line_x1+38)+"' line_y1='"+(line_y1+14)+"' line_x2='"+(line_x2+38)+"' line_y2='"+line_y2+"' pageNo='"+pageNo+"'  drag_area='"+drag_area+"' style='position:relative;z-index:1001;'></div>";  
	 $($line).prependTo($("#bill_position_layer"));
	    
	 /*?ѻ?????Ϣ???????ݿ? ???ҷ???line_no*/
	  var line_x1_sim = ($($line).attr("line_x1")-$($line).attr("line_x2")>0)?$($line).attr("line_x2"):$($line).attr("line_x1");
	 var line_x2_sim = ($($line).attr("line_x1")-$($line).attr("line_x2")>0)?$($line).attr("line_x1"):$($line).attr("line_x2");
	 var line_y1_sim = ($($line).attr("line_x1")-$($line).attr("line_x2")>0)?$($line).attr("line_y2"):$($line).attr("line_y1");
	 var line_y2_sim = ($($line).attr("line_x1")-$($line).attr("line_x2")>0)?$($line).attr("line_y1"):$($line).attr("line_y2");
	 $.post($("#role_line_url").val(),{operationid:$("#operationid").val(),pageNo:pageNo,drag_area:drag_area,line_color:$($line).attr("line_color"),line_type:$($line).attr("line_type"),line_x1:line_x1_sim-5,line_x2:line_x2_sim-5,line_y1:line_y1_sim,line_y2:line_y2_sim},function(data){
	 	if(data!=""){
	 		 $("div[id=line"+line_no+"][isDoLine=1]").attr("line_no",data);
	 		   draw_line($($line).attr("id"),line_x1_sim-0,line_y1_sim-0,line_x2_sim-0,line_y2_sim-0,$("input[name=line_color][checked]").val(),$("input[name=line_type][checked]").val(),'0');
           }
	 },"html");
	 _btnDrag_hasFirstLine=false;
	$("#line_button_img").attr("src","images/role_choose/rolehx.gif"); doBtnDragLine($("#line_show"));//??ԭ???߱?ʶ edit by yph 2011-07-11
}

function return_init(){//??ʼ????ɫѡ???? ???ս?ɫ
	//????ѡ????ɫ$("#roleid").val("");
	if(parent.parent.role_tools){
	$("img[name=roleimg]",parent.parent.role_tools.document.body).attr("src","images/role_choose/norole.gif")
	 $("#roleid",parent.parent.role_tools.document.body).val("");
    $("#dw_name",parent.parent.role_tools.document.body).text($("#dw_name",parent.parent.role_tools.document.body).attr("none"));
    $("#role_name",parent.parent.role_tools.document.body).text($("#role_name",parent.parent.role_tools.document.body).attr("none"));
    }else if(parent.role_tools){
    $("img[name=roleimg]",parent.role_tools.document.body).attr("src","images/role_choose/norole.gif")
    $("#roleid",parent.role_tools.document.body).val("");
    $("#dw_name",parent.role_tools.document.body).text($("#dw_name",parent.role_tools.document.body).attr("none"));
    $("#role_name",parent.role_tools.document.body).text($("#role_name",parent.role_tools.document.body).attr("none"));
    }   
}
 
function isBlank(val){
	if(val=='') return '';
	else return val;
}

function return_xml(url){}

function showOrHideRoleBar(){//??ɫͷ??????????/??ʾ
	$("div[toolsdiv=1]").fadeOut("fast");
    $("#backgroundPopup").fadeOut("fast");
	$("#roleMainTable").toggle();
}

/*????Ч??*/
function click_slideUp($div,istoggle,bgshowmode){
  if(istoggle=='1'){//??div??ʾ
   new_x=$("#roleDiv").position().left
	new_y=$("#roleDiv").position().top-$("#"+$div+"").height()-15
	 $("#"+$div+"").css({"top":new_y,"left":new_x});
 	 if(bgshowmode=="1"){	bgShowAll()}else{
	  $("#backgroundPopup").css({
			"opacity": "0.6",
			"top":new_y-6  ,
 			"left":new_x-6,
 			"width":$("#"+$div+"").width()+16,
 			"height":$("#"+$div+"").height()+16 });}
		  if($("#"+$div+"").css("display")=="none" ) 
	 	 {
	 	 	 $("#"+$div+"").fadeIn("slow");
	 	 	 $("#backgroundPopup").fadeIn("slow");
	 	 }
	 	else{
	 	     $("#"+$div+"").fadeOut("fast");
	 	     $("#backgroundPopup").fadeOut("fast");
	 	} 
 	}else{//????????div
 		 $("div[toolsdiv=1][id!="+$div+"]").fadeOut("fast");
 		  $("#backgroundPopup").fadeOut("fast");
 	}
}

/*??ȡ????????*/
function getParams(){
	  var params=($("#params").val().indexOf("&amp;")<0)?$("#params").val().split("&"):$("#params").val().split("&amp;");
    var newParams ="";
     $.each(params,function(i,val){
	 	 if(val.toLowerCase().indexOf("pageno=")<0)
	 	 newParams+="&"+val;
	 });
	 newParams+="&pageno="+$("input[name=pageno]").val()
	 return newParams;
 }

function roleLineMode(){//?ж??Ƿ???ͨģʽ false 
	if($("#roleDiv").size()>0) return true;
	return false;
}

/*===================div?϶? begin========================*/
var dragapproved=false;
var resizeapproved=false;
var z,x,y,t;
var mark;
var $current;
function move(){  
   if (event.button==1&&dragapproved){
	 z.style.pixelLeft=temp1+event.clientX-x ;
	 z.style.pixelTop =temp2+event.clientY-y ;
	return false;
	}
}
function drags(){
	 if(roleLineMode())
	 do_drag_info();
	if (!document.all)  return;
	if (event.srcElement.className=='drag'){
	 dragapproved=true;
	z=event.srcElement.parentElement;
	temp1=z.style.pixelLeft;
	temp2=z.style.pixelTop;
	x=event.clientX;
	y=event.clientY;
	document.onmousemove=move;
	}
	if (event.srcElement.className=='drag_cachet'){//ʵѵʱ??ɫ????
	//???ý?ɫid ֻ???Լ??Ľ?ɫ???ܲ????Լ??ǵ?ǩ?? 
	if($.trim($(event.srcElement.parentElement).attr("roleid"))==$.trim($("#roleid").val())){
	mark="cachet";
	dragapproved=true;
	z=event.srcElement.parentElement;
	
	 /*????????Ϊ͸?? isDoCachet????Ϊ1 ????ǩ??????*/
	$("#role_choose_div_view").hide();
	$(".wxts",$("#role_cachet_div_view")).hide();//??ʾ????
   
	$("#backgroundPopup").fadeOut("fast");
	$("#role_cachet_div_view").css({"background-color":"","border":"0px"});
	$(z).attr("isDoCachet","1");
	$("div[id^=gz]",$("#role_cachet_div_view")).filter("div[id!="+$(z).attr("id")+"]").hide();
	 $("image[name=cachet_gif]",$(z)).show();/*????ǩ???Ǹ?gif????*/
	temp1=z.style.pixelLeft;
	temp2=z.style.pixelTop;
	x=event.clientX;
	y=event.clientY;
	document.onmousemove=function(){move()};
	}
	}
	//**============//ְҵ?ж?ѡ???? begin================**//
	if(event.srcElement.className=="drag_zypd_td"){
		dragapproved=true;
		z=document.getElementsByName("bill_sub_main")[0];
		 temp1=z.style.pixelLeft;
		temp2=z.style.pixelTop;
		x=event.clientX;
		y=event.clientY;
		document.onmousemove=move;
	}
	//**============//ְҵ?ж?ѡ???? end================**//
	//*=============//ְҵ?ж?ǩ?? begin==================*//
	  if(event.srcElement.className=="drag_doZypdCachet"){//ְҵ?ж?ǩ??
	 
	  	mark="zypdCachet";//??ͣ??ʾ
	    dragapproved=true;
		z=event.srcElement.parentElement;
		 
		if($(z).parents("div[name=bill_sub_main]").size()>0){
		var cachetLeft = $(z).parents("div[name=bill_sub_main]").position().left+$(z).parents("div[id=showZypdCachetPopup]").position().left+12+$(z).parent().position().left+z.style.pixelLeft-$("#bill_position_layer").offset().left;
		 var cachetTop =  $(z).parents("div[name=bill_sub_main]").position().top+$(z).parents("div[id=showZypdCachetPopup]").position().top+10+$(z).parent().position().top+z.style.pixelTop-$("#bill_position_layer").offset().top; 
		 $(z).css({"left":cachetLeft,"top":cachetTop})
		 var $c =$(z);
		$(z).remove();//??ǩ???Ƴ?div
		/*-------------??ǩ??????ɾ???¼?-------------*/ 
		$($c).css("z-index","3000")
		$("<div name='showdel' style=\"display:none;z-index:1003;cursor:hand;width:20px;height:20px;position:absolute;top:20px;left:-10px;\"  onclick=\"do_del_zypd_cachet(this)\"><image name=\"del_zypd_cachet_gif\" style=\"display:block\"  src=\"images/del.gif\"></div>").appendTo($($c));
	    $($c).bind("mouseover",function(){$(this).find("div[name=showdel]").show()}).bind("mouseout",function(){$(this).find("div[name=showdel]").hide()}) 
 
		 
		 $($c).prependTo($("#bill_position_layer"));
		 $current=$c;//Ϊstop?????ṩǩ?¶??? ??ȡx y
		 hideChooseZypd();//????ְҵ?ж?ѡ????
		 }else{
		 	$current=$(z)
		 }
		temp1=z.style.pixelLeft;
		temp2=z.style.pixelTop;
		x=event.clientX;
		y=event.clientY;
	 
		document.onmousemove=function(){move()};
	 }
	 //*=============//ְҵ?ж?ǩ?? end==================*//
}

function stop(){
	if(mark=="cachet"&&dragapproved){
		 dragapproved=false;
		//?Ƿ???Ҫclone???���body
		 doCachetPosition();
		 $("#role_cachet_div_view").slideUp("slow");
	  }else if(mark=="zypdCachet"&&dragapproved){//????ְҵ?ж?ajax??ǩ??д?????ݿ?
	   
	  	var pageNo=$("input[name=PageNo]").val();
		var drag_area=($("input[name=drag_area]").size()>0)?$("input[name=drag_area]").val():"";
		$($current).attr("pageno",pageNo);
	 	$($current).attr("drag_area",drag_area);
	   var cachetLeft = $($current).position().left;
	 	var cachetTop = $($current).position().top;
	 	 
	 	 var sxid=$("input[name=current_sxid]").val(); 
	 	var operationid=$("input[name=current_operationid]").val(); //????ְҵ?ж???Ŀ??id
	 	var cachet_id=$("input[name=operationid]").val();//???????ݵ?operationid??Ϊcachetid
	 	$($current).attr("stu_cachetid",cachet_id);
	 	var cachet_no=$($current).attr("inputname");//inputname a?Ϊ????no
	 	var param = "&cachet_no="+cachet_no+"&operationid="+operationid+"&cachet_id="+cachet_id+"&sxid="+sxid+"&drag_area="+drag_area+"&pageno="+pageNo+"&x="+cachetLeft+"&y="+cachetTop
	 	var zypd_continue=0;
	 
	 	$.post("do?action=kj_operation_zypd&start=setCachetStu"+param,{},function(data){
	 		if(data=="") netinnetAlert('ǩ??ʧ?ܣ??????ԣ?');
	 		if(data!="") {
	 			 if(data.split('$$$$$')[1]=='1') zypd_continue=1;
	 			 window.parent.parent.parent._MM_forInsertCachetInfo(cachet_no,data.split('$$$$$')[0],zypd_continue); //???½?ǩ???Ѹ???Ϣ???ص?ÿ?????ر???????????
	 		 }
        },"html");
	 	mark="";
	  }else{dragapproved=false;}
}

//***=========ְҵ?ж?ǩ??ɾ?????? begin=============**//
function do_del_zypd_cachet(obj){
		 var sxid=$("input[name=current_sxid]").val(); 
	 	var operationid=$("input[name=current_operationid]").val(); //????ְҵ?ж???Ŀ??id
	 	var cachet_no=$(obj).parents("div[id^=ZYPDGZ]").attr("inputname");//inputname a?Ϊ????no
	 	var param = "&cachet_no="+cachet_no+"&operationid="+operationid+"&sxid="+sxid;
	   	if($("a[stu_zypd_continue=1][stu_zypd_cachet_no!="+cachet_no+"]").size()<=0&&$("input[name=stu_zypd_finish]",parent.parent.parent.document.body).val()=="2"){//ѧ???Ѿ????? ?Ƿ????ڼ?????д??һ?ε??ݵ?????
	  		if(netinnetConfirm('??ѡ?????漰??Ҫ??д??һ?????ݣ????Ƿ?????ɾ??????????ɾ????ϵͳ?????Զ??????????????ݣ?')){
	  			$.post("do?action=kj_operation_zypd&start=delCachetStuAndSx&orginal_operationid="+$("input[name=orginal_operationid]",parent.parent.parent.document.body).val()+param,{},function(data){
			 		if(data=="1") {
			 			$(obj).parents("div[id^=ZYPDGZ]").remove();
			 			window.parent.parent.parent._MM_forDelToResetCachet(cachet_no); //???½?ǩ?¼??ص?ÿ?????ر???????????
			 			$("div[name=_Div_ZypdBackTo]",parent.parent.parent.document.body).remove(); 
			 			$("input[name=stu_zypd_finish]",parent.parent.parent.document.body).val("");
			 		}
			 	},"html");
	  		}
	    }else{
	       $.post("do?action=kj_operation_zypd&start=delCachetStu"+param,{},function(data){
	        if(data=="1") {
	 			$(obj).parents("div[id^=ZYPDGZ]").remove();
	 			 
	 			window.parent.parent.parent._MM_forDelToResetCachet(cachet_no); //???½?ǩ?¼??ص?ÿ?????ر???????????
	 		}
	 	},"html");
	 	}
}



//***=========ְҵ?ж?ǩ??ɾ?????? end=============**//
function doCachetPosition(){
	var  windowWidth = $(document.body).attr("scrollWidth")-30
	var  windowHeight = $("#bill_position_layer").attr("offsetHeight");//
 
     if($(z).parent().attr("id")=="role_cachet_div_view"){	//ӡ?»??ڽ?ɫӡ?¿?????
			var cachetLeft = $(z).parent().position().left+$(z).position().left-$("#bill_position_layer").offset().left;
		 	var cachetTop = $(z).parent().position().top+$(z).position().top-$("#bill_position_layer").offset().top; 
		 }else{//?Ѿ??ǵ?ǩ??
		 	var cachetLeft = $(z).position().left;
		 	var cachetTop = $(z).position().top; 
		 }
		 
	//alert(windowWidth+"@"+windowHeight+"@"+cachetLeft+"@"+cachetTop+"@"+$(z).attr("W")+"#"+$(z).attr("H"))
	//?淶ǩ?ºϷ???Χ??????????ʾ
	
	 var pageNo=$("input[name=PageNo]").val(); //????Ϊ????λ?? ?????ñ���pageNo=''  drag_area=''
	 var drag_area=($("input[name=drag_area]").val()=="")?"default":$("input[name=drag_area]").val();
	 $(z).css({"left":cachetLeft,"top":cachetTop}).attr("PAGENO",pageNo).attr("DRAG_AREA",drag_area);
	 //????λ??ƫ?Ʊ??浽???ݿ? ǩ?µ?һ??+14px
	  var cachetLeft = cachetLeft+$(z).attr("W")/2;//-14
	 var cachetTop = cachetTop+$(z).attr("H")/2;//-14
	  $(z).attr("cachetLeft",cachetLeft).attr("cachetTop",cachetTop);
	 var $c =$(z);
	 $(z).remove();//??ǩ???Ƴ?div
	 $($c).prependTo($("#bill_position_layer"));
	  $("image[name=cachet_gif]",$(z)).hide();
	  if(((cachetLeft-(-$(z).attr("W")))>=windowWidth||cachetLeft<0)||((cachetTop-(-$(z).attr("H")))>=windowHeight||cachetTop<0)){
	netinnetAlert('??ǰǩ??λ?ò??ڵ??ݷ?Χ?ڣ?ϵͳ????ǩ?????????????½ǣ???????ѡ??ǩ??λ??');
	 
	$($c).css({"left":0,"top":$("#bill_position_layer").attr("offsetHeight")-80-$(z).attr("H")})
	//do_del_cachet($($c));
    } 
	  
}
document.onmousedown=drags;
document.onmouseup=stop;
/*div?ϵ?end*/

/*??????ť?¼?*/
function do_list(arg){
	  if(window.parent.menuLeft) $("a[name=img_"+$.trim($("#operationid").val())+"_"+arg+"]",$(parent.menuLeft.document.body)).click();/*??ͨģʽ*/
	if(window.parent.menuTop)$("a[name=img_"+$.trim($("#operationid").val())+"_"+arg+"]",$(parent.menuTop.document.body)).click();
	 if(window.parent.bottomFrame)$("input[name="+arg+"_button]",$(parent.bottomFrame.document.body)).click();/*????ģʽ*/
}
function do_all(arg){
	if(window.parent.menuLeft)var a_obj=$("a[name="+arg+"]",$(parent.menuLeft.document.body)).click();
	if(window.parent.menuTop)var a_obj=$("a[name="+arg+"]",$(parent.menuTop.document.body)).click();
	if(window.parent.bottomFrame) $("a[name="+arg+"]",$(parent.bottomFrame.document.body)).click(); /*????ģʽ*/
}
function do_bill(arg_name,dotype){ //?Ѿ???????˰?걨??
	 $("input[name=button_doType]").val(dotype);
	 $("input[name="+arg_name+"]").click();
}
 //======================for ????ְҵ?ж? ==========================//
function _MM_SetBgPosition(){
	  var $mainObj = $("div[name=bill_sub_main]");//?޸Ĵ???main??ʽ
	      $mainObj.height($mainObj.find("div[name=choose_bill_main_div]").height()+20) 
		  $mainObj.width(($mainObj.find("div[name=choose_bill_main_div]>table").width()>250)?$mainObj.find("div[name=choose_bill_main_div]>table").width()+50:250)
		  $mainObj.find("table[name=bill_sub_title]").width($mainObj.width())
		  $mainObj.find("table[name=bill_sub_bottom]").each(function(){
		  	$(this).width($mainObj.width())
		  	$(this).find("td[name=bill_sub_bottom_td]").width($mainObj.width()-10);
		   }); 
	   $mainObj.find("table[name=bill_sub_table]").each(function(){//???ñ???ͼƬ??position ??ǰ????table??????һ??tdʱ Ϊ $($choose_table).height()/2   ????Ϊ????һ??ʱ
	    var stepName = $(this).attr("step");
	    $("td[stepname="+stepName+"]:first").each(function(){//??һ??????
	  		var h = $(this).height() ;
	  		 $(this).css({"background-position":"10px "+h/2+"px"});
	 		$(this).css({"background-image": "url('images/zypd_image/line_bg.gif')"});
	 		if($(this).find("*[name=addTag]").size()<=0)
	 		$('<img style="cursor:hand" src="images/877.gif" name="addTag" onClick="_MM_AddNewTag()"  style="display:none" > ').insertBefore($(this).find("*[name=addStep]"))
	   }); 	
 		$("td[stepname="+stepName+"]").each(function(i){//??2-n??????
 			 if(i>0) $(this).css({"background-position":"10px -20px"})
 		 }) 
 		  $("td[stepname="+stepName+"]:last").each(function(){//??n??????
 			if($("td[stepname="+stepName+"]").size()<=1)	var h = -900;
 		 	else var h =  $(this).height()/2-800 ;//800Ϊ????ͼƬ?߶?
 			 $(this).css({"background-position":"10px "+h+"px"})
 		 }) 
      })
	 doAutoFixIframeBymultiTags();
}
function showChooseZypd(first){//????ְҵ?жϵĿ???
	   $("#showZypdCachetPopup").show();	 //?޸Ĵ???main??ʽ
	  var $mainObj = $("div[name=bill_sub_main]");
	  if(first=="1")  $("#showZypdCachetPopup").css({"top":"20","left":"20"});	 
	  else 
	  $mainObj.find("div[name=choose_bill_main_div]").show();
		  $mainObj.height($mainObj.find("div[name=choose_bill_main_div]").height()+20) 
		  $mainObj.width(($mainObj.find("div[name=choose_bill_main_div]>table").width()>250)?$mainObj.find("div[name=choose_bill_main_div]>table").width()+50:250)
		  $mainObj.find("table[name=bill_sub_title]").width($mainObj.width())
		  $mainObj.find("table[name=bill_sub_bottom]").each(function(){
		  	$(this).width($mainObj.width())
		  	$(this).find("td[name=bill_sub_bottom_td]").width($mainObj.width()-10);
		   }); 
	$("#showZypdCachetPopup").css({"border":"0px","background":""});
	doAutoFixIframeBymultiTags();
   window.setTimeout("_MM_SetBgPosition()",200); 
	zypdLinkShow();
}

function hideChooseZypd(){
	$("#showZypdCachetPopup").css({"top":"20","left":"20"});
 	$("div[name=bill_sub_main],#showZypdCachetPopup").find("table[name=bill_sub_title],table[name=bill_sub_bottom]").andSelf().animate({ 
    width: "250",height:  "20",top:"10"}, 500,function(){$("div[name=bill_sub_main]").find("div[name=choose_bill_main_div]").hide()} ); 
}

function doAutoFixIframeBymultiTags(){//????????????BymultiTagsȥ????ҳ?Ҳ??????? main document.body.scrollHeight
	if($("#showZypdCachetPopup").size()>0){
	 var toolsHeight=($("div[name=bill_sub_main]").height()+$("#showZypdCachetPopup").position().top+50);//ѡ??ְҵ?жϿ?ʱ?޸?body?ĸ߶?
	   if($(window).height()<toolsHeight){ $(window).height(toolsHeight);
	     if(parent.bill) $("#bill",parent.document.body).height(toolsHeight); //?޸?bill frame ???ܵĸ߶?
	   	 } }
   _MM_autoFixIframeBymultiTags(parent.parent.parent,$(window).height()+30);
}
function zypdLinkShow(){//ְҵ?ж?ѡ????ʱ????ʾtitle
	 $("a[stu_zypd_cachet_no]").hover(function(){
	 	var $a = $(this);
	 	$("div[name=bill_sub_main]").find("div[name=cachetInfo_main]").html("<div name=cachetInfo_sub>"+$($a).attr('showtitle')+"</div>");
	 	
	 	$("div[name=bill_sub_main]").find("div[name=cachetInfo_main]").css({"top":$($a).position().top+10,"left":$($a).position().left+20}).show();
	 	$("div[name=bill_sub_main]").find("div[name=cachetInfo_main]").height($("div[name=bill_sub_main]").find("div[name=cachetInfo_sub]").height());
	 	},function(){$("div[name=bill_sub_main]").find("div[name=cachetInfo_main]").hide()});
}
//ҳ?????ص?ʱ??ȥ????????ְҵ?жϿ???
$(document).ready(function(){
try{
	 if(window.parent.parent.parent.document.getElementById("zypdFrame")){//?Ƿ?Ϊְҵ?ж?
		 window.onmousewheel=document.onmousewheel=scrollFuncDoBill; //?????ж??Ƿ?BymultiTags??Ҫ?????????? 
		 $(document.body).append($("#showZypdDiv",$(window.parent.parent.parent.document.body)).html());
		 
		 $("#showZypdCachetPopup").cssDialog();
		 doAutoFixIframeBymultiTags();
 		 showChooseZypd("1");//????ְҵ?жϿ?
 		   hideChooseZypd();
 		 
		var view_start = ($("input[name=view_standard]").val()==1)?"cachetStandard":"cachetStu";//?ж??Ƿ?Ϊ?鿴??׼????
		var cachet_move=($("input[name=cachet_move]").val()==1)?true:false;
		  $.post("do?action=kj_operation_zypd&start="+view_start,{sxid:$("input[name=current_sxid]").val(),zypd_operationid:$("input[name=current_operationid]").val()},function(data){
	    	 $(data).find("record").each(function(i){
	    	 	 if($("input[name=view_standard]").val()==1&&$(this).find("ZYPD_RIGHT").text()!="1"){//??ʦ??׼???? ?????? ??????
	    		 }else{
	    	 	var cachet_no=$.trim($(this).find("CACHET_NO").text())
	    	 	var $z=$("#ZYPDGZ"+cachet_no);
	    	 	var stepname= $z.parents("td[stepname]").eq(0).attr("stepname");
	    	 	$($z).clone().css({"left":"0","top":"0"})
	    	 	 var $c = $($z);
	    		 $($z).remove();
	    		 $($c).css({
	    		 	"left":$.trim($(this).find("X").text()),
	    		 	"top":$.trim($(this).find("Y").text())
	    		 });
	    		 $($c).attr("stu_cachetid",$.trim($(this).find("STU_CACHETID").text()));
	    	   $($c).attr("pageno",$.trim($(this).find("STU_PAGENO").text()));
			 	$($c).attr("drag_area",$.trim($(this).find("STU_DRAGAREA").text()));
			 	var stu_dragarea=$.trim($(this).find("STU_DRAGAREA").text())==""?"default":$.trim($(this).find("STU_DRAGAREA").text());
			 	 var drag_area = ($("input[name=drag_area]").val()=="")?"default":$("input[name=drag_area]").val();
			 	 drag_area=(typeof(drag_area)=="undefined")?"default":drag_area;
			  if(drag_area!=stu_dragarea)$($c).hide();
			 	$($c).css("z-index","3000");
	    		if(cachet_move){//????ģʽ????ɾ??ǩ??
				$("<div name='showdel' style=\"display:none;z-index:1003;cursor:hand;width:20px;height:20px;position:absolute;top:20px;left:-10px;\"  onclick=\"do_del_zypd_cachet(this)\"><image name=\"del_zypd_cachet_gif\" style=\"display:block\"  src=\"images/del.gif\"></div>").appendTo($($c));
	    		$($c).bind("mouseover",function(){$(this).find("div[name=showdel]").show()}).bind("mouseout",function(){$(this).find("div[name=showdel]").hide()}) 
	    		}
	    		 if($("input[name=operationid]").val()!=$.trim($(this).find("STU_CACHETID").text())||$("input[name=pageno]").val()!=$.trim($(this).find("STU_PAGENO").text())) $($c).hide();//?????????????ݼ????ε?
	    		
	    		 $($c).prependTo($("#bill_position_layer"));
	    		 var cachet_info=$(this).find("OPERATIONLABEL").text()+(($(this).find("PAGE_TITLE"+$(this).find("STU_PAGENO").text()).text()!="")?"("+$(this).find("PAGE_TITLE"+$(this).find("STU_PAGENO").text()).text()+")":"");//д??ǩ??????λ??+????
	    		 if($(this).find("ZYPD_CACHET_ANYWHERE").text()=="1") cachet_info+="??ѡ?????ѱ???????:<br>ѡ???????Ը?????һ??????";//??ȷ????ʹ??
	    		if($(this).find("ZYPD_CONTINUE").text()=="1") cachet_info+="<br>ѡ??????Ҫ??????д????";
	    		if($(this).find("ZYPD_RIGHT").text()=="1") cachet_info+="<br>ѡ????Ϊ?÷???";
	    		 $("input[inputname="+cachet_no+"]").parents("td[name=input_step_td]").eq(0).height("50");
	    		  $("input[inputname="+cachet_no+"]").next("span").eq(0).html("<span style='color:#ff0000'><a  showtitle='"+cachet_info+"' stu_zypd_cachet_no='"+$(this).find("CACHET_NO").text()+"' stu_zypd_continue='"+$(this).find("STU_ZYPD_CONTINUE").text()+"'  style='font-size:12px;color:#ff0000;cursor:hand' nowarp>"+$("input[inputname="+cachet_no+"]").val()+"(?Ѹ?)</a></span>");
	        	 while(stepname!="a0"){//ѭ????ʾ???ڽ׶?
	        	 	if($("input[tagname="+stepname+"]").attr("checked")==false)
	    		 	 $("input[tagname="+stepname+"]").click(); //???ڽ׶?
	    		 	 stepname=$("input[tagname="+stepname+"]").parents("td[name=input_step_td]").eq(0).attr("stepname");
	    		  }
	    		  }
	        });
	         
	      },"xml"); 
	   } 
	 }catch(ex){
	 }
});

function _MM_doZypdCachetSet(){//??ʦ????ǩ?µ?ʱ??д??ְҵ?жϿ?
}
function outside_bill_interface(flag){//?л??���????????ʱ???????Ƿ?????ְҵ?жϵ???
   $("#bill_position_layer").find("div[id^=ZYPDGZ]").each(function(){
   		$(this).css("display", "none");
   	    if($("input[name=operationid]").val()==$.trim($(this).attr("stu_cachetid"))&&flag == 1 && ($(this).attr("drag_area")=="default"||$(this).attr("drag_area") == "")){$(this).css("display", "block");}
        if($("input[name=operationid]").val()==$.trim($(this).attr("stu_cachetid"))&&flag == 2 && $(this).attr("drag_area") == "2"){$(this).css("display", "block");}
   });
}