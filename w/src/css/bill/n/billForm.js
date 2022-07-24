/**
desc:?Ա���?ύǰ???г???У?鴦????
version: 1.0
author:xiejs
Date:2008-6-7
**/
var init_returnValue=0;
var preTextInput=null;
//??ʼ???���֮ǰ
function bill_beforeInitForm(){
	try{
		//????Ϊ?���????????????ǰ????????Ҫ????һ???¼?Ϊ?���?????д??????¼??????¼?д?ڱ���jspҳ??
		//edit by xiejs at 2008-11-20
		var ret = beforeInitForm(document.getElementsByTagName('form')[0]);
		if(ret == false) return;
		//֧Ʊ?൥?ݳ?ʼ??ʾ??????
		if($.trim($("input[name=PageNo]").val())=='1')
		click_cg_fm((document.getElementsByName("drag_area_hidden")[0].value=='')?'1':'2')
		else
		click_zl_fm((document.getElementsByName("drag_area_hidden")[0].value=='')?'1':'2')
 	
		
	}
	catch(ex_0){;}	

	 //??ʼ????ʱ?? ?????µ?b?ֶ? ?????Ŵ洢??Ҫ??ʼ???Ķ?Ӧ b?ֶ? ????b1-b50 ??ֹ??ֵ???ɹ? edit by yangph at 2010-02-02
	 //??Ϊ???ݿ??洢??b1?ֶ? ?���?????ܲ????? ?????ָ?ֵ???ɹ?
	try{
	  var fbox = document.getElementsByTagName('form')[0];
	  if(fbox.type.value == '3' ){
	  	 var init_b = "";
	    for(var i=1;i<=50;i++) 
	    	init_b+="<input objname='init_b"+i+"' name='b"+i+"' type='text'  id='b"+i+"' size=14>";
	 	$("form").eq(0).prepend("<div id='div_init_b' style='display:none'>"+init_b+"</div>");
 	  }
 	}catch(init_ex_0){;}
 	//?���??????frame?߶?
 	if($('#swf_view').size()>0){
 	var swfHeight=(parent.menuRight)?parent.menuRight.document.body.offsetHeight:'100%'
 	 $('#swf_view').flash({
		// test.swf is the flash document
		swf: $("#swf_view").attr("swf_url"),
		width:'100%',
		height:swfHeight
	});
 	}
 	
 	///////////////////////////////////////////////////////////////////////////////////////
	try{
		__MM_BillForm_logoImg_beforeInit(fbox);//????logoImg
	}
	catch(ex_1){;}
}
 
//ʵʼ???���֮??
function bill_afterInitForm(){
	try{
    	//????Ϊ?���???????????ݺ?????????Ҫ????һ???¼?Ϊ?���?????д??????¼??????¼?д?ڱ���jspҳ??
    	//edit by xiejs at 2008-11-20
    	afterInitForm(document.getElementsByTagName('form')[0]);
    }
    catch(ex_1){;}
    
    //---ģ????????ʱ??input???Բ鿴title-----//
    try{
    	var fbox = document.getElementsByTagName('form')[0];
	 	 if(fbox.type.value == '2' ){
	 	 var title_info='<div name="title_info_div" style="display:none;z-index:1000;cursor:hand;width:200px;height:25px;position:absolute;top:30px;left:30px;border:1px solid #a0a0a0;background:#fefefe;filter:alpha(opacity=80)\">2<div>' 
	 	 $(title_info).appendTo($("form").eq(0));
	 	  $("*[name^=a],*[name^=b]").click(function(){
	 	  	var $obj = $(this);
	 	    $("form").eq(0).find("div[name=title_info_div]").css({"top":$($obj).offset().top+$(this).height(),"left":$($obj).offset().left+30}).html("<span>"+$($obj).val()+"</span>").show();
	 	    $("form").eq(0).find("div[name=title_info_div]").height($("form").eq(0).find("div[name=title_info_div]>span").height()+10)
	 	 }).blur(function(){
	 	  $("form").eq(0).find("div[name=title_info_div]").hide();
	 	 });
    	}
    }catch(ex_2){;}
    
    //-----------??????ȷ??????ʱ??????????---------------------//
    try{
    	var fbox = document.getElementsByTagName('form')[0];
	 	 if(fbox.type.value == '11' ){
	 	 		var cachet_info ="<div name=\"cachet_info_div\" style=\"display:none;z-index:1000;cursor:hand;width:150px;height:150px;position:absolute;top:30px;left:30px;border:2px solid #333333;background:#fefefe;filter:alpha(opacity=80)\">2</div>"
	 	 		 var drag_info="<div name=\"drag_cachet_div\" class=\"drag_cachet\" style=\"z-index:1000;cursor:hand;width:150px;height:150px;position:absolute;top:0px;left:0px;background:#fefefe;filter:alpha(opacity=80)\">1</div>";
				$("div[cachet_init=0]").each(function(){
					var $cachet=$(this);
					 var w=$(this).attr("w")
					 var h=$(this).attr("h");
					 var top=$(this).position().top;
					 var left=$(this).position().left;
					 var center_top=$(this).attr("ry");
					 var center_left=$(this).attr("rx");
					$(drag_info).width(w).height(h).hover(function(){
							//????
							//alert($($cachet).position().top)
							$("div[name=cachet_info_div]",$($cachet)).show();
							},function(){
							//?Ƴ?
							$("div[name=cachet_info_div]",$($cachet)).hide();
							}).appendTo($(this));
					var info= "???ĵ?????Ϊ:("+center_left+","+center_top+")"+"<br>????:<br>??:"+top+"??:"+(top-(-h))+"<br>??:"+left+"??:"+(left-(-w))
					
				 	$(cachet_info).html(info).appendTo($(this));
				});
				
	 	 }
    }catch(ex_cachet){
    }
    
    try{
	  var fbox = document.getElementsByTagName('form')[0];
	  if(fbox.type.value == '3' ){
	 
    //--------------------------------begin  ??ʼ????ÿһ??---------------------------- //
    //?????µ?b?ֶ? ?????Ŵ洢??Ҫ??ʼ???Ķ?Ӧ b?ֶ? edit by yangph at 2010-02-02
    var init_b = "";
    for(var i=1;i<=50;i++){
    	init_b+="<input objname='init_b"+i+"' name='init_b"+i+"' type='hidden'  size=14>";
    }
    
    $("form").eq(0).append(init_b);
    $("form").eq(0).append("<input name='all_init_b' type='hidden'>");
    $("input[name=save_data_button]").css("display","none");
    $("form").eq(0).append("<input name='save_data_button_2' type='button' value='?? ??' style='height:30'>");
      //-----------------------------ԭ?ȳ?ʼ?????ݱ??? ??ǰ?汾????--------------------//
 	 if($("*[name^=b]").css("background-color","#88FFAA").filter(function(){return $.trim($(this).val())=='1'||$.trim($(this).val())=='??';}).size()>0){
 	
	 	for(var i=1;i<=50;i++){
	 	    //alert($("*[name^=b]").css("background-color","#88FFAA").filter(function(){return $(this).val()=='1'||$(this).val()=='??';}).size())
			var init_b = $.trim($("*[name=b"+i+"]").eq(0).val());
			$("*[name=b"+i+"]").val(init_b);
	 	 }
	  }else{
	 
    	//------------init_b? ??ȡ?????????? ת???? ÿ???ո?Ϊ 1------------------//
	 	$("*[name^=b]").css("background-color","#88FFAA").filter(function(index){
	 		return $.trim($(this).val())!="";
			}).each(function(){
			 var init_val = $("*[name=all_init_b]").val();
	 		if(init_val!='') init_val+=","
	 		$("*[name=all_init_b]").val(init_val+$(this).val());
	 	});
	 	 
	 	var view_init_b_array = $("input[name=all_init_b]").val().split(",");
	 	 
	 	$.each(view_init_b_array,function(index,value){
	 		//ȡ??b1[0]
	 		if(value.indexOf("[")>0){
	 		 var b_name = value.split("[")[0];
	 		 var eq_index = value.split("[")[1].slice(0,-1)-(-1);//??1??ԭ??????Ϊ??bill_beforeInitForm()?м???b1-b50 ??ֹ??ֵ???ɹ?
	 	     $("*[name="+b_name+"]").eq(eq_index).val("1");
	 	     }
	 	});
 	}
 
 	$("input[name=save_data_button_2]").bind("click",function(){
 		//$("*[name=all_init_b]").val("");
 		var all_init_b_array = new Array();
 		$("#div_init_b").empty(); 
 		  $("*[name^=b]").filter(function(index){
 			 return ($.trim($(this).val())=='1'||$.trim($(this).val())=='??')&&(typeof($(this).attr("objname"))=="undefined");
			}).each(function(){
    	 	var init_obj = $(this).attr("name");
    		var init_index = $("*[name="+$(this).attr("name")+"]").index($(this));
    		//var init_val = $("*[name=all_init_b]").val();
    		//if(init_val!='') init_val+=","
    		//$("*[name=all_init_b]").val(init_val+init_obj+"["+init_index+"]");
    		all_init_b_array[all_init_b_array.length]=(init_obj+"["+init_index+"]");
    	  });
    	  
    	  $("*[objname^=init_b]").val("");
    	 // var all_init_b_array = $("*[name=all_init_b]").val().split(",");
    	   $.each(all_init_b_array,function(index,value){
    	  		var use_b = parseInt(index/8)+1;
    	  		var $input_b =$("*[objname=init_b"+use_b+"]");
    	  		var init_val =$input_b.val();
    	  		if(init_val!='') init_val+=",";
    	  		$input_b.val(init_val+value);
    	    });
    	 $("input[name=save_data_button]").click();
 	});
 	}
 	}catch(init_ex_1){alert("??ʼ????ֵ????!????ԭ??:"+init_ex_1);}
    //--------------end ??ʼ????ÿһ?? ?ύǰ????--------------//
    try{
	    //??typeΪ5/61/7/8/9/21/?Ǿ?ֻ?????Ұ?ť???? edit by xiejs at 2008-12-16
	    var fbox = document.getElementsByTagName('form')[0];
	    if(fbox.type.value == '5' ||
				 fbox.type.value == '61' ||
	             fbox.type.value == '7' ||
	             fbox.type.value == '8' ||
	             fbox.type.value == '9' ||
	             fbox.type.value == '21'){
	         var elements = fbox.elements;
	         for(var i=0,len=elements.length;i<len;i++){
	         	elements[i].readOnly = true;
	         	if(elements[i].name == "save_data_button"){
	         		elements[i].style.display = "none";
	         		elements[i].style.visibility = "hidden";
	         	}
	         }
	    }
	    else{
	    	//??ť??ʽ?ع?ԭ??
	    	var elements = fbox.elements;
	         for(var i=0,len=elements.length;i<len;i++){
	         	if(elements[i].type == "button"){
	         		with(elements[i]){
	         			style.width = "auto";
	         			style.border = "1px ridge pink";
	         		}	         		
	         	}
	         }
	    }
	    //??zyks??ʱ?????ύ??ť????????
	      if(fbox.zyks.value == '1'){
	      	$("input[name=computeScore_button]").hide();
	      }
	}
	catch(ex2){;}

	try{
		//ѧ??ʵѵʱ??????p_writer?????ж??Ƿ???????д????
		var fbox = document.getElementsByTagName('form')[0];
		if(fbox.type.value == '6' && 
				typeof(_bill_form_type_6_p_writer) != "undefined" && 
				_bill_form_type_6_p_writer == ""){//ֻ??
			 var elements = fbox.elements;
	         for(var i=0,len=elements.length;i<len;i++){
	         	elements[i].readOnly = true;
	         	if(elements[i].name == "save_data_button"){//???????ݰ?ť????
	         		elements[i].style.display = "none";
	         		elements[i].style.visibility = "hidden";
	         	}
	         }
		}
	}
	catch(ex3){;}
	
	//????ͳ??ͼ
	try{__MM_initBillGraph(fbox);}catch(ex4){;};
	//????ģ????????????
	try{__MM_initBillDimSelect(fbox);}catch(ex5){;};
	////////////////////////////////////////////////////////////////////////////////////////
		try{
			//?????¼??????û??ı??????ݶ?δ????ʱ??????ʾ??
			//edit by xiejs at 2008-11-13
	        if(fbox && (fbox.type.value == '1' || //??ȷ????
		             	fbox.type.value == '2' || //ģ??????
		             	fbox.type.value == '3' || //??ʼ??
		             	fbox.type.value == '4' || //?ؼ???
		             	fbox.type.value == '6' || //ѧ??ʵѵ
		             	fbox.type.value == '20')){//????????¼??
				//???ñ���???¼?
				_MM_BillForm_InitFieldBoxEvents();
	        }
        }
        catch(ex_1){;}
        
        try{//?????¼?????ȡ?û?????ĳ???���???¼?,????ģ??????????
	        if(fbox && (fbox.type.value == '2')){//ģ??????
				var boxs = document.getElementsByTagName("input");
				if(!boxs || !boxs.length) return;
				for(var i=0,len=boxs.length;i<len;i++){
					var box = boxs[i];
					if(!box || box.type != 'text') continue;
					$(box).bind("focus", function(){
  						preTextInput = event.srcElement;
					});
	        	}
	        	var textareaboxs = document.getElementsByTagName("textarea");
	        	if(!textareaboxs || !textareaboxs.length)	return;
	        	for(var i=0,len=textareaboxs.length;i<len;i++){
					var textareabox = textareaboxs[i];
					if(!textareabox) continue;
					$(textareabox).bind("focus", function(){
  						preTextInput = event.srcElement;
					});
	        	}
        	}
        }catch(e){;}    
        
        ///////////////////////////////////////////////////////////////////////////////////////
		try{
			__MM_BillForm_logoImg_afterInit(fbox);//????logoImg
		}
		catch(ex_1){;}
}

//ͳ??ͼ????Ҫjquery??֧??
function __MM_initBillGraph(fbox){
	//??ȡxml????
	var xml = $("#xml_graph")[0];
	if(!xml) return;
	var isDraw = false;
	$(xml).find("datas>data").each(function(i){
		var name = $(this).attr("name");
		var row  = $(this).attr("row");
		//var box = $("input[name='"+name+"'],textarea[name='"+name+"'],select[name='"+name+"']")[row];
		var box = $("*[name='"+name+"']",$("form"))[row];
		if(!box) return;
		$(box).attr("graph", $(this).text());
		isDraw = true;
	});	
	
	if(isDraw){
		window.status = "ͳ??ͼ??....";
		//??ʾdiv
		$("div").each(function(i){
			if(!$(this).attr("graph")) return;
			$(this).css("display","block");
		});
		window.setTimeout("try{NinGraph.draw();NinGraph.redraw();}catch(exp){window.status+=exp.message;};", 1000);
	}
}

///////////////////////////////////ĳһ??????ֵ?Ƿ??б仯??ʵ??ͨ??onFocs/onBlurʱֵ?ı仯???ж?////////////
//-- edit by xiejs at 2008-11-13
//???????????????????˽????е?????һ??fieldBox?Ƿ?ֵ???ı???
var __MM_BillForm_fieldValue_isChange = false;
//????onFocusʱ??ֵ
var __MM_BillForm_fieldValue_onFocus = null;
function _MM_BillForm_InitFieldBoxEvents()
{
	var boxs = document.getElementsByTagName("input");
	if(!boxs || !boxs.length) return;
	for(var i=0,len=boxs.length;i<len;i++){
		var box = boxs[i];
		if(!box || box.type != 'text' || box.onkeydown) continue;
		box.onkeydown=function(){//????????
			if(event.keyCode=='38'){;}//???ϼ?ͷ??֪??ôʵ??
			else if(event.keyCode=='40' || event.keyCode=='13'){event.keyCode='9';}
			else{;}
		}
		//??ȡ????ʱ????
		box.onfocus=function(){
			if(__MM_BillForm_fieldValue_isChange) return;
			__MM_BillForm_fieldValue_onFocus = _MM_BillForm_getFormFieldValue(event.srcElement);
		}
		//?뿪????ʱ????
		box.onblur=function(){
			if(__MM_BillForm_fieldValue_isChange) return;
			var tmpValue = _MM_BillForm_getFormFieldValue(event.srcElement);
			if(__MM_BillForm_fieldValue_onFocus != null && 
					__MM_BillForm_fieldValue_onFocus != tmpValue){//ֵ????ͬ??
				__MM_BillForm_fieldValue_isChange = true;
			}
		}
		
		try{
			box.removeAttribute("maxLength");//ɾ????????????
		}catch(ex_5){;}
	}
		
	//Ϊwindow?趨onbeforeunload?¼??????ڷ???
 window.onbeforeunload=function(){
	  if(_MM_BillForm_getFieldValueIsChange()){ 
	      if($("div[isDoCachet=1]").size()>=1){
			   _MM_DoSaveCachetLine();//ѧ??????????ǩ?»?????Ϣ
			   $.post($('#cachet_dto').attr("action"),$('#cachet_dto').serialize(),function(data){
			   	 if(data=='1') 
			   	 {
			   	  event.returnValue = "\r\n\t???????????ѱ??޸ģ???δ???档ȷʵ??????????\r\n\r\n???豣?棬?밴??ȡ??????Ȼ???㱣?????????ݡ?\r\n";}
			   },"html");
			   }else{
			      event.returnValue ="\r\n\t???????????ѱ??޸ģ???δ???档ȷʵ??????????\r\n\r\n???豣?棬?밴??ȡ??????Ȼ???㱣?????????ݡ?\r\n";
			    }
		}
	}
}

//????ʹ?õĺ??????жϱ���????ֵ?Ƿ????ı???
function _MM_BillForm_getFieldValueIsChange()
{
	return __MM_BillForm_fieldValue_isChange;
}

//?????????ж??Ƿ????޸Ĺ?
function _MM_BillForm_resetFieldValueIsChange()
{
	__MM_BillForm_fieldValue_isChange = false;
	__MM_BillForm_fieldValue_onFocus = null;
}
/*
* ??ȡĳ???���????ֵ???���????????textbox,textarea,radio,checkbox,select
*/
function _MM_BillForm_getFormFieldValue(formField)
{
	if(!formField) return null;
    if(formField.type == 'select-one' || formField.type == 'select-multiple'){
        return formField.options[formField.options.selectedIndex].value;
    }
    else if(formField.type == 'checkbox'){
        if(formField.checked) return formField.value;
        else return null;
    }
    else if(formField.type == 'radio'){
        var radlist = document.getElementsByName(formField.name);
        for(var i=0;i<radlist.length;i++){
            if(radlist[i].checked){
            	return radlist[i].value;
            }
            else{
            	continue;
            }
        }
        return null;
    }
    else if(formField.type == 'image'){
        return formField.src;
    }
    else{
        return formField.value;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////
/*
* ????ĳ???���????ֵ???���????????textbox,textarea,radio,checkbox,select
*/
function _MM_BillForm_setFormFieldValue(formField,value)
{
    if(!formField) return;
    if(formField.type == 'select-one' || formField.type == 'select-multiple'){
        var len1=formField.options.length;
        var isSelected = false;//?????ж??Ƿ???Ҫ??????
        for(var i=0;i<len1;i++){
            var opvalue = formField.options[i].value;
            if(opvalue == value){
                isSelected=true;//???ڱ?ѡ?е???
                formField.options[i].selected = true;
                formField.fireEvent("onchange");
                break;
            }
        }
        if(!isSelected){//??ֵ???????в?????,???ж??Ƿ???Ҫ???Ӵ???
            try{
                if(formField.append != null){//????select?к???append????,??׷??
                    var newOption = new Option();
                    newOption.value = value;
                    newOption.text = value
                    formField.options[len1]=newOption;
                    formField.options[len1].selected = true;
                }
            }catch(appendex){}
        }
    }
    else if(formField.type == 'checkbox'){
        if(formField.value == value) formField.checked = true;
        else formField.checked = false;
    }
    else if(formField.type == 'radio'){
        var radlist = document.getElementsByName(formField.name);
        for(i=0;i<radlist.length;i++){
            if(radlist[i].type=='radio' && radlist[i].value == value){
                radlist[i].checked = true;
                break;
            }
        }
    }
    else if(formField.type == 'image'){
        formField.src = value;
    }
    else{
        formField.value = value;
    }
}

//????ֻ??????-????button,submit,reset,image,checkbox,radio,select???????⴦??
function __MM_BillForm_setFieldReadOnly(formField)
{
	if(!formField) return;
    if(formField.type == 'select-one' || formField.type == 'select-multiple'){
        
    }
    else if(formField.type == 'checkbox' && 
    		formField.style.display != "none"){
        formField.style.display = "none";
        formField.insertAdjacentHTML("beforeBegin","&nbsp;"+(formField.checked?"[??]":"[&nbsp;]"));
    }
    else if(formField.type == 'radio'){
        
    }
    else if(formField.type == 'button' || formField.type == 'submit' || formField.type == 'reset'){
        
    }
    else{
        formField.readOnly = true;
        //////////////////////////////////////////////////
	    formField.onfocus = function(){return false;};
	    formField.onblur = function(){return false;};
	    formField.onkeydown = function(){return false;};
	    formField.onkeyup = function(){return false;};
	    formField.onclick = function(){return false;};
	    formField.ondblclick = function(){return false;};
    }
}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
var __MM_checkBillForm_isInit = false;
var __MM_checkBillForm_maxLenArray = new Array();
//??????֤????
function checkBillForm(fbox)
{
    fbox = (fbox) ? fbox : document.forms[0];
    __MM_checkBillForm_init(fbox);
    //???????????ص?ab?е?ֵ ??Ӧ?ڵ??ӱ?˰?ȼ??㹫ʽ??ʦ??????ѧ?????ⵥ?ݲ?ͬ
    
    	 
   if(_checkBillFormStep_2(fbox)){
	    if($("div[id=roleDiv]").size()>=1){//????ɫ??ֵ,cachet_no
	    	$("input[name=roleid]").val($("#roleid").val());
	    	 
	    	if($.trim($("input[name=cachet_no]").val())!="")
	    	fbox.action=fbox.action+"&roleid="+$.trim($("input[name=roleid]").val())+"&cachet_no="+$.trim($("input[name=cachet_no]").val());
	        //?ύҳ?? ????Ҫ??????ɫ ??ɫѡ????ҪĬ??Ϊ??
	    	//return_init();
	    }
	   
    	//?Ƿ????ϱ?˰ϵͳ ???ҽ?ʦ??????ȷ????
    	if($("input[name=issbcx]").size()>=1&&($("input[name=type]").val()=="1")){
    	 //???и?ֵ????
    	JEGS_Eval();//????????
		sbnrResult();//?걨????
		 var sbsjResult ='';
			$("input[sbsj_input=1]").each(function(index){
				if(index>0) sbsjResult+='??';
				sbsjResult += $.trim($(this).val());
			});
		$.post("do?action=nssb_course_main&start=init_nssb_tea",{operationid:$("input[name=operationid]").val(),sbbmc:encodeURI($("input[name=sbbmc]").val()),sbnr:encodeURI($("input[name=sbnr]").val()),nsje:$("input[name=nsje]").val(),sbsj:encodeURI(sbsjResult)},function(data){
			if(data=='1')__MM_submitForm(fbox);
         },"html");
    	}else if($("input[name=issbcx]").size()>=1&&$("input[name=button_doType]").val()=="1"){//ѧ???ύ??˰????
    		//???и?ֵ????
	    	JEGS_Eval();//????????
			sbnrResult();//?걨????
			var sbsjResult ='';
			$("input[sbsj_input=1]").each(function(index){
				if(index>0) sbsjResult+='??';
				sbsjResult += $.trim($(this).val());
			});
		 
			$.post("do?action=nssb_course_main&start=init_nssb_stu",{sxid:$("input[name=sxid]").val(),operationid:$("input[name=operationid]").val(),sbbmc:encodeURI($("input[name=sbbmc]").val()),sbnr:encodeURI($("input[name=sbnr]").val()),issbcx:$("input[name=issbcx]").val(),nsje:$("input[name=nsje]").val(),sbsj:encodeURI(sbsjResult)},function(data){
			if(data=='1'){
			 if(window.parent.bottomFrame){//?Ƿ???˰???걨/*????ģʽ*/
			 $("input[name=isNssb]",$(window.parent.bottomFrame.document.body)).val("1")
			 }
			 __MM_submitForm(fbox);
			 }
			else netinnetAlert('???Ѿ??????걨??!?޷??ٴ??걨')
         	},"html");
    	
    	}else{
    		  if($("div[isDoCachet=1]").size()>=1){
		    _MM_DoSaveCachetLine();//ѧ??????????ǩ?»?????Ϣ
		     $.post($('#cachet_dto').attr("action"),$('#cachet_dto').serialize(),function(data){
		    	  if(data=='1')   __MM_submitForm(fbox);
		    },"html");
		   }else{
		    return true;
		   }
   		}
   	}
}

function  _checkBillFormStep_2(fbox){
 
	try{
		    	//????Ϊ??֤?���ǰ????????Ҫ????һ???¼?Ϊ?���?????д??????¼??????¼?д?ڱ���jspҳ??
		    	//edit by xiejs at 2008-11-20
		    	var ret = beforeCheckForm(fbox);
		    	if(ret == false){//????????falseʱ????????ִ??
		    		return false;
		    	}
		    }
		    catch(ex_1){;}
		    
		    if(!checkForm(fbox)){
		    	return false;
		    }
		    
		     //???????ñ���???ݱ??޸Ĺ??¼? -- edit by xiejs at 2008-11-13
		    _MM_BillForm_resetFieldValueIsChange();
	 	    try{
		    	//????Ϊ??֤?���??????????Ҫ????һ???¼?Ϊ?���?????д??????¼??????¼?д?ڱ���jspҳ??
		    	//edit by xiejs at 2008-11-20
		    	var ret = afterCheckForm(fbox);
		    	if(ret == false){//????????falseʱ????????ִ??
		    		return false;
		    	}
		    }
		    catch(ex_2){;}
		    
		    return true;
    	 }

/*?ύ?���*/
function __MM_submitForm(fbox){
	
	 fbox.submit(); 
}
//??ʼ???���?????е??????????????????ȣ???checkFillForm????
function __MM_checkBillForm_init(fbox)
{
    if(__MM_checkBillForm_isInit) return true;
    __MM_checkBillForm_isInit = true;
    __MM_checkBillForm_initMaxLenArray();
    
    var fields = fbox.elements;
    for(var i=0;i<fields.length;i++){
        var field = fields[i];
        if(!field) continue;
        var fieldName = field.name;
        if(!fieldName) continue;
        
        //??????????????a/b/t
        if(!(/^(A|a|B|b|T|t)[1-9][0-9]{0,2}$/ig.test(fieldName))) continue;
        
        //???ڱ????ֻ?е?type=1??6ʱ?Ŵ???-- edit by xiejs at 2008-10-15
        if(fbox.type.value == '2' ||
             fbox.type.value == '3' || 
             fbox.type.value == '4' || 
             fbox.type.value == '5' || 
             fbox.type.value == '6' || 
             fbox.type.value == '7' || 
             fbox.type.value == '8' || 
             fbox.type.value == '9' ||
             fbox.type.value == '61'){
            if(field.getAttribute("isnull")) field.isnull = "null";
        }
        
        
        var fieldType = field.type;
        //ֻ??????¼???Ŀ????ı??????ı???????
        if(!(/^(text|textarea)$/ig.test(fieldType))) continue;
        
        var maxlen = __MM_checkBillForm_maxLenArray[fieldName.toLowerCase()];
        if(!maxlen) maxlen = "20";
        field.maxlen = maxlen;
        field.caption = (!field.caption) ? fieldName : field.caption;
        
        
    }
    
    return true;
}

//========================================================
var __DimSelect_PopupWindow = null  //?????Ĵ??ڶ???
var __DimSelect_FocusField = null  //??ǰ????
//????ģ?????????趨??ֵ??=! or =@??ͷ?ģ???Ϊѡ??
function __MM_initBillDimSelect(fbox){
	var xml = $("#xml_dimSelect")[0];
	if(!xml) return;
	$(xml).find("datas>data").each(function(i){
		var name = $(this).attr("name");
		var row  = $(this).attr("row");
		var box = $("*[name='"+name+"']",$("form"))[row];
		if(!box) return;
		if($(box).attr("readonly") == true) return;
		$(box).attr("data_dim", $(this).text());
		//$(box).css({ color: "#000", background: "#fff" }); 
		$(box).bind("click", __MM_Bill_CreateOption); 
		$(box).attr("readonly", "true");
	});	
}

function __MM_Bill_CreateOption(){
	var box = event.srcElement;
	if(!box) return;
	try{
		var str = $(box).attr("data_dim");
		if(!box || !str) return;
		//alert(str);
		
		__DimSelect_FocusField = box;
		if(__DimSelect_PopupWindow == null){
			__DimSelect_PopupWindow = window.createPopup();
			__DimSelect_PopupWindow.document.write("<body style='margin:0px;background-color:#EBEBEB;'>");
			__DimSelect_PopupWindow.document.write("<div id='tableOptions'></div>");
			__DimSelect_PopupWindow.document.write("<body>");
		}
		
		var temp_options = str.split("=!");
		var len = temp_options.length;
		var tables = "<table bordercolor='#003333' cellspacing='2' bordercolorlight='#336633' bordercolordark='#D3D0C8' cellpadding='0' border=1 style='cursor:hand;line-height:20px;font-size:12px;border-left:0;border-right:0;color:' width='100%'>";
		for(var i=len-1;i>=0;i--){
		 	tables += "<tr onmouseover=\"this.style.background='#C0C0C0';\" onmouseout=\"this.style.background='none';\"><td width='5px'>&nbsp;</td>" + 
		 			"<td width='99%' onClick=\"parent.__DimSelect_FocusField.value=(this.innerText==' '?'':this.innerText);parent.__DimSelect_PopupWindow.hide();\">" + 
		 			(!temp_options[i] ? "&nbsp;" : temp_options[i]) + 
		 			"</td></tr>";
		}
		tables += "</table>";
		//alert(tables);
		__DimSelect_PopupWindow.show(1, box.offsetHeight, box.offsetWidth+50, len*26, box);
		__DimSelect_PopupWindow.document.getElementById("tableOptions").innerHTML = tables;
	}
	catch(ex){$(box).attr("readonly", "false");};
}

////////////////////////////////////////////////////////////////////////
//?????ĸ??ֶεĳ???????
function __MM_checkBillForm_initMaxLenArray()
{
    for(var i=1;i<=70;i++){
        var index = "a" + i;
        __MM_checkBillForm_maxLenArray[index] = "60";
    }
    for(var i=71;i<=95;i++){
        var index = "a" + i;
        __MM_checkBillForm_maxLenArray[index] = "20";
    }
    for(var i=96;i<=99;i++){
        var index = "a" + i;
        __MM_checkBillForm_maxLenArray[index] = "800";
    }
    for(var i=100;i<=100;i++){
        var index = "a" + i;
        __MM_checkBillForm_maxLenArray[index] = "1000";
    }
    
    ////////////////////////////////////////////////////
    
    for(var i=1;i<=19;i++){
        var index = "b" + i;
        __MM_checkBillForm_maxLenArray[index] = "60";
    }
    for(var i=20;i<=39;i++){
        var index = "b" + i;
        __MM_checkBillForm_maxLenArray[index] = "100";
    }
     for(var i=40;i<=45;i++){
        var index = "b" + i;
        __MM_checkBillForm_maxLenArray[index] = "300";
    }
    for(var i=46;i<=50;i++){
        var index = "b" + i;
        __MM_checkBillForm_maxLenArray[index] = "1000";
    }
    
    /////////////////////////////////
    for(var i=1;i<=3;i++){
        var index = "t" + i;
        __MM_checkBillForm_maxLenArray[index] = "60";
    }
    for(var i=4;i<=6;i++){
        var index = "t" + i;
        __MM_checkBillForm_maxLenArray[index] = "300";
    }
    __MM_checkBillForm_maxLenArray["t7"] = "500";
    __MM_checkBillForm_maxLenArray["t8"] = "1000";
    
} 

//----------------------------------------------
//----------------------------------------------
//???£????߰?ťedit by xiejs at 100108
var _btnDrag_cachet_line = "";
var _btnDrag_hasFirstLine = false;
function doBtnClearCanvas(){
	$("#drag_line_pen1").css("display" , "none");	
	$("#drag_line_pen2").css("display" , "none");	
	$("#drag_cachet_pen").css("display" , "none");
	$("#btn_drag_cachet_manage").css("display" , "none");
	$("#btn_drag_line_manage").css("display" , "none");
	//$("#btn_drag_cachet").attr("value" , " ???? ");
	//$("#btn_drag_line").attr("value" , " ???? ");
	$("#btn_drag_cachet_line_memo").css("display" , "none");
	_btnDrag_hasFirstLine = false;
}
function doBtnDrag(btn, cachet_line){
 
	 if(_btnDrag_cachet_line != cachet_line){
		$("#btn_drag_cachet,#btn_drag_line").each(function(i){
			$(this).attr("class","");
			$(this).css("background-color", "buttonface");
			doBtnClearCanvas();
		});	
	}
	
	if($(btn).attr("class") != "btnDragDone"){
		$(btn).attr("class", "btnDragDone");
		$(btn).css("background-color", "buttonhighlight");
		//$(btn).attr("value" , "ȡ??"+(cachet_line=='line'?'????':'????'));	
		//???? id='bill_position_layer'?Ŀ??ȸ߶ȣ????ƻ????Ŀ??ȸ߶?
		$("#dragCanvas").css({"cursor" : "crosshair",
							  "display": "block",
							  "top": "0px",
							  "left": "0px",
							  "width"  : ($(document.body).attr("scrollWidth")-30)+"px",
							  "height" : $("#bill_position_layer").attr("offsetHeight")+"px",
							  "z-index":"3004"
							  });
		$("#btn_drag_"+cachet_line+"_manage").css("display" , "block");
		$("#btn_drag_cachet_line_memo").css("display" , "block");
		_btnDrag_cachet_line = cachet_line;
	}
	else{
		$(btn).attr("class", "");
		$(btn).css("background-color", "buttonface");
		//$(btn).attr("value" , (cachet_line=='line'?' ???? ':' ???? '));	
		$("#dragCanvas").css({"cursor" : "normal",
							  "display": "none"
							  });
		$("#btn_drag_"+cachet_line+"_manage").css("display" , "none");
		$("#btn_drag_cachet_line_memo").css("display" , "none");
		_btnDrag_cachet_line = "";	
	}
	
	if($("#dragCanvas").css("display") == "none"){
		doBtnClearCanvas();
	}
}
function doBtnDragCachet(btn){	
	doBtnDrag(btn, "cachet");
	$("#btn_drag_cachet_line_memo").html("&nbsp;???????Ƶ???Ҫǩ?µ?λ?ã?Ȼ??˫????????????");
}
function doBtnDragLine(btn){
	doBtnDrag(btn, "line");
	$("#btn_drag_cachet_line_memo").html("&nbsp;???????Ƶ???Ҫ???ߵ?λ?ã?˫??????????ȷ??һ?㣬Ȼ?????????ƶ?????һ??˫????");
}
function doDragCanvasdblClick(div){
	if(_btnDrag_cachet_line == "line"){
		if(!_btnDrag_hasFirstLine){//
			_btnDrag_hasFirstLine = true;
			$("#drag_line_pen1").css("left" , event.offsetX-6);
			$("#drag_line_pen1").css("top" , event.offsetY-28);	
			$("#drag_line_pen1").css("display" , "block");
		}
		else{
			$("#drag_line_pen1").css("left" , $("#drag_line_pen1").css("left").replace(/px/ig,"")-32);
			$("#drag_line_pen1").css("top" ,  $("#drag_line_pen1").css("top").replace(/px/ig,"")-0+14);	
			$("#drag_line_pen1").css("display" , "none");	
			$("#drag_line_pen2").css("left" , event.offsetX-68);
			$("#drag_line_pen2").css("top" , event.offsetY);
			$("#drag_line_pen2").dblclick();
		}
	}
	else{
		$("#drag_cachet_pen").css("left" , event.offsetX - 15);
		$("#drag_cachet_pen").css("top" , event.offsetY + 11);
		$("#drag_cachet_pen").dblclick();
	}
}
function doBtnDragCachetManage(btn){
	$("#drag_cachet_pen").dblclick();
}
function doBtnDragLineManage(btn){
	$("#drag_line_pen2").dblclick();
}

//????/չ??????
function doToggleTitle(){
	//alert($("#title_tr").css("display")=="none")
	if($("#title_tr").css("display")=="none"){
	$("#ToggleTitle").html("<<????????")
	//$(event.srcElement).html("<<????????")
	}else{
	$("#ToggleTitle").html("<<չ??????")
	//$(event.srcElement).html("<<չ??????")
	}
	 $("*[id^=title_tr]").toggle();
}

<!-- 
function _MM_Body_Hotkey() 
{ 
	var a=window.event.keyCode; 
	 
	if(a==49&&event.ctrlKey) //Ctrl+1 ????
	{ 
		//?ύ????target???浽BillSaveWin 
		 document.getElementsByTagName("form")[0].target="BillSaveWin";
		 $("input[name=save_data_button]").click();
	} 
	
	if(a==50&&event.ctrlKey) //Ctrl+2 ??ʾ????????
	{ 
	doToggleTitle();
	} 

}// end _MM_Body_Hotkey 


document.onkeydown = _MM_Body_Hotkey; 
 
 /*
var inputObjArray=new Array();

function inputObjInfo(){
	this.dim=null;
	this.init=null;
	this.key=null;
	 
}

inputObjInfo.prototype={
	setdim:function(dim){
		this.dim=dim;
		return this;
	},
	setinit:function(init){
		this.init=init;
		return this;
	},
	setkey:function(key){
		this.key=key;
		return this;
	}
}

inputObjArray[0]=new inputObjInfo();
inputObjArray[1]=new inputObjInfo();
 
inputObjArray[0].setdim(1).setinit(2).setkey(3);
*/
 
//??onkeydown ?¼?????ʱ????hotkey???? 
//--> 
//-----??ȷ??????ʱ???鿴??Ӧ??ģ?????????Ҷ?Ӧ??ʼ????input?߿???ʾΪ??ɫ
 /*  var text = 'B1[10]';
  var reg = /\[[0-9]{1,}]/ig;
  var reg_input = /[bB][0-9]{1,}/ig;
  var result = text.match(reg)[0];
  
 result = result.slice(result.indexOf('[') + 1, -1)
 */
var isShowBillFormInfo=0;
function clickBillFormShowInfo(){
    var fbox = event.srcElement.form;
  
  if($(event.srcElement).val()=="?鿴??????Ϣ"){
   if(isShowBillFormInfo==0){//??һ?ε?????ťʱ????ʱ??
		if(fbox.type.value=="1"){
		isShowBillFormInfo=1;
		  $.post("do?action=content_kj_operation&start=query_type_1_dim_a&operationid="+$("input[name=operationid]").val(),{},function(data){
				$(data).find("*[colname^=DIM_A]").each(function(){
					var objname=$(this).attr("colname").replace("DIM_","");
					$("*[name="+objname.toLowerCase()+"]").attr("diminfo",$(this).text());
				});
			},"xml");
			$.post("do?action=content_kj_operation&start=query_type_1_dim_b&operationid="+$("input[name=operationid]").val(),{},function(data){
				 $(data).find("data").find("record").each(function(row){
				 	 $(this).find("*[colname^=DIM_B]").each(function(){
				 	 	var objname=$(this).attr("colname").replace("DIM_","");
						$("*[name="+objname.toLowerCase()+"]").eq(row).attr("diminfo",$(this).text());
					  });
				 });
			},"xml");
				$.post("do?action=content_kj_operation&start=query_type_1_init_key&operationid="+$("input[name=operationid]").val(),{},function(data){
				 $(data).find("data").find("record").each(function(row){
				 	/*=====???ó?ʼ????Ϣ=====*/
				 	 $(this).find("*[colname^=INIT_A]").each(function(){
				 	 	var objname=$(this).attr("colname").replace("INIT_","");
				 	 	if($(this).text()=="1")
						$("*[name="+objname.toLowerCase()+"]").eq(row).css({"border":"#ff0000 2px solid"});
						$("*[name="+objname.toLowerCase()+"]").eq(row).attr("initinfo",($(this).text()=="1")?"?ѳ?ʼ??":"");
					  });
					    var  init_b_info="";
					   $(this).find("*[colname^=INIT_B]").each(function(){
					   var objname=$(this).attr("colname").replace("INIT_","").toLowerCase();
					 	init_b_info+=($(this).text()=="1")?objname+"["+row+"],":$(this).text();
					 	 if($(this).attr("colname")=="INIT_B50"){
					 	   var init_b_arr = init_b_info.split(",");
					 		$.each(init_b_arr,function(i,val){
					 			if(val!=""){
					 			var reg = /\[[0-9]{1,}]/ig;
					 			var reg_input = /[bB][0-9]{1,}/ig;
					 			var match = val.match(reg)[0];
					 			var match_input = val.match(reg_input)[0];
					 			 var eqrow = match.slice(match.indexOf('[')+1,-1);
					 			$("*[name="+match_input+"]").eq(eqrow).css({"border":"#ff0000 2px solid"});
					 			$("*[name="+match_input+"]").eq(eqrow).attr("initinfo","?ѳ?ʼ??");
					 			}
					 		}); 
					 	}
					 	});
					 	/*====???ó?ʼ????Ϣ end====*/
					  $(this).find("*[colname^=KEY_B]").each(function(){	
					  	 var objname=$(this).attr("colname").replace("KEY_","").toLowerCase();
					  	 if($(this).text()=="1"){
						  	 $("*[name="+objname+"]").eq(0).attr("keyinfo","?????????ùؼ???");
						  	 $("*[name="+objname+"]").eq(0).css({"background-color":"#88ffaa"});
					  	 }
					  });
				 });
			},"xml");
			
			 var title_info='<div name="title_info_div" style="display:none;z-index:1000;cursor:hand;width:200px;height:35px;position:absolute;top:30px;left:30px;border:1px solid #a0a0a0;background:#fefefe;filter:alpha(opacity=80)\">2<div>' 
		 	 $(title_info).appendTo($("form").eq(0));
		 	  $("*[name^=a],*[name^=b]").click(function(){
		 	  	if($("input[name=show_info_button]").val()=="?ر???????Ϣ"){//??ǰ״̬?ɲ鿴??Ϣ
		 	  	var $obj = $(this);
		 	    $("form").eq(0).find("div[name=title_info_div]").css({"top":$($obj).offset().top+$(this).height(),"left":$($obj).offset().left+30}).html("<span>"+$($obj).attr("diminfo")+"<br>"+((typeof($($obj).attr("initinfo"))!="undefined")?$($obj).attr("initinfo"):"")+"<br>"+((typeof($($obj).attr("keyinfo"))!="undefined")?$($obj).attr("keyinfo"):"")+"</span>").show();
		 	 	$("form").eq(0).find("div[name=title_info_div]").height($("form").eq(0).find("div[name=title_info_div]>span").height()+10)
		 	 	}
		 	 }).blur(function(){
		 	  $("form").eq(0).find("div[name=title_info_div]").hide();
		 	 });
		}
	}else{//??2+?β鿴??????Ϣ
		 $("*[initinfo=?ѳ?ʼ??]").css({"border":"#ff0000 2px solid"});
		 $("*[keyinfo=?????????ùؼ???]").css({"background-color":"#88ffaa"});
	}
	}else{//"?ر???????Ϣ"
		$("*[initinfo=?ѳ?ʼ??]").css({"border":"#ff0000 0px solid"});
		 $("*[keyinfo=?????????ùؼ???]").css({"background-color":""});
	}
	 $(event.srcElement).val(($(event.srcElement).val()=="?鿴??????Ϣ")?"?ر???????Ϣ":"?鿴??????Ϣ");
}
//========================================================
//?????趨Ϊ??ֻ???ÿ?д????Ŀ
function clickBillFormSetAll(){
	var fbox = event.srcElement.form;
	
	var value //= window.prompt("?????룺","");
	if($("#setAllValueDiv").size()<=0)
	$('<div id="setAllValueDiv"></div>').html("??????:<input id='setAllValueInput' type='text' style='border:1px #ffffff solid;background-color:#ffffff'><input type='button' value='ȷ??' onclick=clickBillFormSetAllInput($(\'#setAllValueInput\').val())>").appendTo($("body"))
	 $("#setAllValueDiv").cssDialog('160px','80px');
	 $("#setAllValueDiv").methodDialog('160px','80px',"#F0f0f0");
	//alert($("body").size())

}
function clickBillFormSetAllInput(value){
	fbox=document.getElementsByTagName('form')[0];
	if(value == null) return;
	var fields = fbox.elements;
	 for(var i=0,len=fields.length;i<len;i++){
		var box = fields[i];
		if("text,textarea".indexOf(box.type) < 0) continue;
		if(box.readOnly || box.disabled) continue;
		if((box.value).replace(/(^\s*)|(\s*$)/g,"") != '') continue;
		box.value = value;
	}
	$("#setAllValueInput").val("");
	$("#setAllValueDiv").disableDialog();
}

function clickBillFormClearHiddenAll(){
  if(!confirm("ȷʵҪ??????ȫ??????????")) return;
  //??????hidden???õ?0.00????Ϊ""?? 
	$("input[name^=a]:hidden,input[name^=b]:hidden").val("");
	netinnetAlert('?????ɹ?');
}


function clickBillFormSetHiddenAll(){
	 	var fbox = event.srcElement.form;
	 var value; //= window.prompt("?????룺","");
	if($("#setAllValueDiv").size()<=0)
	$('<div id="setAllValueDiv"></div>').html("??????:<input id='setAllValueInput' type='text' style='border:1px #ffffff solid;background-color:#ffffff'><input type='button' value='ȷ??' onclick=clickBillFormSetHiddenAllDo($(\'#setAllValueInput\').val())>").appendTo($("body"))
	 $("#setAllValueDiv").cssDialog('160px','80px');
	 $("#setAllValueDiv").methodDialog('160px','80px',"#F0f0f0");
 }
function clickBillFormSetHiddenAllDo(value){

 //??????hidden???õ?0.00????Ϊvalue
	$("input[name^=a]:hidden,input[name^=b]:hidden").val(value);
	$("#setAllValueInput").val("");
	$("#setAllValueDiv").disableDialog();
	netinnetAlert('?????ɹ?');
}
//ȫ?????գ?ֻ???տ?д????Ŀ
function clickBillFormClearAll(){
	if(!confirm("ȷʵҪȫ??????????")) return;
	var fbox = event.srcElement.form;
	var fields = fbox.elements;
	for(var i=0,len=fields.length;i<len;i++){
		var box = fields[i];
		if("text,textarea".indexOf(box.type) < 0) continue;
		if(box.readOnly || box.disabled) continue;
		
		box.value = "";
	}
	try{//???Ե??ӱ?˰?��� ???յ?ʱ???Զ?????
	common_init_zreo()
	}catch(ex){}
}

//============================================
//?���?ϴ?ͼ??
function _MM_BillForm_uploadImage(formParams, img_no, formAction){
	var url = "dojsp?jsp=bill_common/bill_uploadImage.jsp&" + formParams + "&img_no=" + img_no + "&action=" + formAction;
	var params = "dialogWidth:400px;dialogHeight:180px;help:no;status:no;resizable:yes;";
	var retu = window.showModalDialog(url, window, params);
	if(!retu) return;
	$(event.srcElement).attr("src", "do?action=" + formAction + "&start=query_img&img_no=" + img_no + "&" + formParams);
}

//=============================================
//?ڱ���?ϼ?һ??logoͼ??Ĭ??ʹ??t8?ֶα???????
//?????���???Ѿ?????t8?ֶ??ˣ?????????????????
__MM_VAR_logoImg_isAllow = false;
__MM_VAR_logoImg_isdblclick = false;//??һ??ʱ????????ʽ????2?ε???????
function __MM_BillForm_logoImg_beforeInit(fbox){
	if(fbox.t8 || fbox.T8) return;//?Ѿ?ʹ?????????ֶΣ????????���??logImg
	$(fbox).append("<input type='hidden' name='t8' value=''>"); 
	__MM_VAR_logoImg_isAllow = true;
}
function __MM_BillForm_logoImg_afterInit(fbox){
	if(!__MM_VAR_logoImg_isAllow) return;//??????
	var box = fbox.t8;
	box = (!box) ? fbox.T8 : box;
	if(!box) return;
	var value = box.value;
	//--------------------------------------------------
	var isNew = false;//?Ƿ??¼ӣ??????ǣ?????ʹ??Ĭ?ϵ?
	var type = fbox.type.value;//????type == 1ʱ???ó???ͼƬ????????????Ҫ????
	if(type == 1 || type == 20){//?????ñ?׼??????????????ʱ??????????????
		if(!value || value.indexOf("logoImg=") != 0){
			value = "logoImg=default_blank.gif,50,25,10,10,100";
			isNew = true;
		}
	}
	else{
		if(!value || value.indexOf("logoImg=") != 0) return;
	}
	
	//value?ĸ?ʽΪ???ļ?????????·????,width,height,top,left,opacity
	var values = value.substr(8).split(",");
	var logo_img = "<div id='div_logo_img_111' src='"+values[0]+"' opacity='"+values[5]+"'" + 
					" style='position:absolute;z-index:999;width:"+values[1]+";height:"+values[2]+";" + 
					" top:"+values[3]+";left:"+values[4]+";border:0px;'>" + 
						"<img src='bill_common/logo_img/"+values[0]+"' style='filter:alpha(opacity="+values[5]+");' width='100%' height='100%' border=0>" + 	
					"</div>";		
	//alert(logo_img);			
	$("#bill_position_layer").prepend(logo_img);
	
	//---------------
	if(type == 1 || type == 20){		
		$("#div_logo_img_111").addClass("drag_resize");
		$("#div_logo_img_111").attr("title", "˫???ı?ͼƬ??С????˫??ѡ????????ͼƬ??????͸????");
		
		$("#div_logo_img_111").bind("click", function(){//???浽t8?ֶ???
			var src = $(this).attr("src");
			if(!src || src == "default_blank.gif") return;
			var opacity = $(this).attr("opacity");
			var width = $(this).css("width");
			var height = $(this).css("height");
			var top = $(this).css("top");
			var left = $(this).css("left");
			fbox.t8.value = "logoImg="+src+","+width+","+height+","+top+","+left+","+opacity+"";
		}) ;
		
		$("#div_logo_img_111").bind("dblclick", function(){//ѡ??ͼƬ
			if(!__MM_VAR_logoImg_isdblclick){
				__MM_VAR_logoImg_isdblclick = true;
				//????span???ڴ????϶????ı???С
				var temp_span = "<span class='north-west-resize'></span>" + 
								"<span class='north-resize'></span>" + 
								"<span class='north-east-resize'></span>" + 
								"<span class='west-resize'></span>" + 
								"<span class='east-resize'></span>" + 
								"<span class='south-west-resize'></span>" + 
								"<span class='south-resize'></span>" + 
								"<span class='south-east-resize'></span>";
				$("#div_logo_img_111").prepend(temp_span);	
				$("#div_logo_img_111").find('span').mousedown(function(e){
					new Resize($("#div_logo_img_111")[0]).start(e, this.className.replace('-resize', ''));
				});	
				item_drag($("#div_logo_img_111")[0]);//???϶?
				return;
			}
		
			var object = new Object();object.window=window;
			var src = $(this).attr("src");
			var opacity = $(this).attr("opacity");
			var params = "dialogWidth:400px;dialogHeight:400px;resizable:yes;";
			var retu = window.showModalDialog("dojsp?jsp=bill_common/logo_img_select.jsp&src="+src+"&opacity="+opacity,object,params);
			if(!retu) return;
			if(retu.isClear){//??ʾ????
				$(this).find("img").attr("src", "bill_common/logo_img/default_blank.gif");
				fbox.t8.value = "";
				return;
			}
			$(this).attr("src", retu.src);
			$(this).attr("opacity", retu.opacity);
			$(this).find("img").attr("src", "bill_common/logo_img/" + retu.src);
			$(this).find("img").css("filter", "alpha(opacity="+retu.opacity+")");
			if(isNew){//?¼?ʱ??????ʹ??Ĭ?ϵ?
				$(this).css("width", retu.width);
				$(this).css("height", retu.height);
			}
			$(this).click();
		}) ;
	}
}

//??ǩ?»??߸?ֵ ???ص?form?ύ
function _MM_DoSaveCachetLine(){
	$("form[id=cachet_dto]").remove();
	//?ύҳ?? ????Ҫ??????ɫ ??ɫѡ????ҪĬ??Ϊ??
	// return_init();
	var $cachetForm = "<form id='cachet_dto'  name='cachet_dto' action='"+$("#form_cachet_line_url").val()+"&operationid="+$("#operationid").val()+"'  method='post' target='BillSaveWin'></form>";
	var $cachetDiv="";
	$("div[isDoCachet=1]").each(function(){
	 
		var drag_area=($(this).attr('drag_area')=='default'||typeof($(this).attr('drag_area'))=='undefined')?'':$(this).attr("drag_area");
		$cachetDiv+="<div><input type='hidden' name='pageNo' value='"+$(this).attr("pageNo")+"'/><input type='hidden' name='drag_area' value='"+drag_area+"'/><input type='hidden' name='CACHET_ID' value='"+$(this).attr("CACHET_ID")+"'/><input type='hidden' name='CACHET_NO' value='"+$(this).attr("CACHET_NO")+"'/><input type='hidden' name='y' value='"+$(this).attr('cachetTop')+"'/><input type='hidden' name='x' value='"+$(this).attr('cachetLeft')+"'/></div>";
	});
	//alert($cachetDiv)
	$($cachetForm).appendTo($("body")).append($($cachetDiv));
 	
}

function dim_set_click(){
	if(preTextInput == null || preTextInput.readOnly) return;
	try{
		preTextInput.value += event.srcElement.innerText;
		preTextInput.focus();
		var range =preTextInput.createTextRange();
		range.moveStart("character", preTextInput.value.length);
		range.collapse(true);
		range.select();
	}
	catch(ex){;}
}
 
function item_drag(dragobj){
	if (typeof dragobj == "string") dragobj = document.getElementById(dragobj);
	dragobj.orig_index = dragobj.style.zIndex;
	dragobj.style.cursor = "move";
		
	
	dragobj.onmousedown = function(wevent)
	{
		this.style.cursor = "move";
		this.style.zIndex = 10000;
		var doc = document;
		if(!wevent) wevent = window.event;

		//??סԭ????λ??
		var ox = wevent.clientX;
		var oy = wevent.clientY;
		//??סԭ??????λ??
		var oleft = dragobj.style.pixelLeft;
		var otop  = dragobj.style.pixelTop;

		doc.ondragstart = "return false;"
		doc.onselectstart = "return false;"
		doc.onselect = "document.selection.empty();"
				
		if(dragobj.setCapture)
			dragobj.setCapture();
		else if(window.captureEvents)
			window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);

		doc.onmousemove = function(wevent)
		{
			if(!wevent) wevent = window.event;
			//????ԭ?е?λ?? + ?????ƶ???λ??
			dragobj.style.pixelLeft = oleft + (wevent.clientX - ox)
			dragobj.style.pixelTop  = otop  + (wevent.clientY - oy);
			
			dragobj.moveFlag = true;//??ס?ƶ?????????ʱ?ж?Щֵ?????????棩
			
			try{showPosition("??ǰ????Ϊ??x="+dragobj.style.pixelLeft+",y="+dragobj.style.pixelTop);}catch(exd){;}
		}

		doc.onmouseup = function()
		{
			if(dragobj.releaseCapture)
				dragobj.releaseCapture();
			else if(window.captureEvents)
				window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
			doc.onmousemove = null;
			doc.onmouseup = null;
			doc.ondragstart = null;
			doc.onselectstart = null;
			doc.onselect = null;
			dragobj.style.zIndex = dragobj.orig_index;
		}
	}
}

var Resize = function (target, options) {
	this.init.apply(this, arguments);
};
Resize.prototype = {
	target	: null,
	parentOffset: {left:0,top:0},
	info : {left:0,top:0,width:0,height:0,pageLeft:0,pageTop:0},
	option : {
		direction :'',
		minWidth : 20,
		minHeight: 20,
		boundLeft	: 0,
		boundTop	: 0,
		boundRight	: 9999,
		boundBottom : 9999,
		resizing : null,
		complete : null
	},
    init : function(target, options) {
		this.target = target;
		this.parentOffset = $(this.target.offsetParent).offset();
		this.option.boundLeft	= this.parentOffset.left;
		this.option.boundTop	= this.parentOffset.top;
		this.option.boundRight	= this.parentOffset.left + $(target.offsetParent).width();
		this.option.boundBottom = this.parentOffset.top + $(target.offsetParent).height();
		$.extend(this.option, options);
		this.resizingHendler = this.eventMethod(this, 'onResizing');
		this.completeHendler = this.eventMethod(this, 'onComplete');
	},
	start:function(e, direction) {
		if(!this.setDirection(direction || this.option.direction)) {
			return false;
		}
		var o = $(this.target).offset();
		this.oPos = {x:o.left, y:o.top};
		this.iPos = {x:this.oPos.x + $(this.target).width(), y:this.oPos.y + $(this.target).height()};
		$(document).bind('mousemove', this.resizingHendler);
		$(document).bind('mouseup'	, this.completeHendler);
		e.stopPropagation();
		e.preventDefault();
	},
	stop: function() {this.onComplete();},
	setDirection : function(direction) {
		switch(direction) {
		case 'west'	:this.vector = {x:-1,y: 0};break;
		case 'east'	:this.vector = {x: 1,y: 0};break;
		case 'north':this.vector = {x: 0,y:-1};break;
		case 'south':this.vector = {x: 0,y: 1};break;
		case 'north-west':this.vector = {x:-1,y:-1};break; 
		case 'south-west':this.vector = {x:-1,y: 1};break; 
		case 'north-east':this.vector = {x: 1,y:-1};break; 
		case 'south-east':this.vector = {x: 1,y: 1};break;
		default:return false;
		}
		return true;
	},
	// left,top??parentOffsetΪԭ??
	resize: function(left, top, width, height) {
		this.info = {'left':left, 'top':top, 'width':width, 'height':height,pageLeft:this.oPos.x,pageTop:this.oPos.y};
		$(this.target).css({'left':left, 'top':top,	'width':width,'height':height});
		if($.isFunction(this.option.dragging)) this.option.dragging(this.info);
		
	},
	onResizing: function(e){
		var x = Math.max(Math.min(e.pageX, this.option.boundRight), this.option.boundLeft);
		var y = Math.max(Math.min(e.pageY, this.option.boundBottom), this.option.boundTop); 
		if(this.vector.x == -1) this.oPos.x = Math.min(x, this.iPos.x - this.option.minWidth);
		if(this.vector.x ==  1) this.iPos.x = Math.max(x, this.oPos.x + this.option.minWidth);
		if(this.vector.y == -1) this.oPos.y = Math.min(y, this.iPos.y - this.option.minHeight);
		if(this.vector.y ==  1) this.iPos.y = Math.max(y, this.oPos.y + this.option.minHeight);
		this.resize(this.oPos.x - this.parentOffset.left, this.oPos.y-this.parentOffset.top, this.iPos.x - this.oPos.x, this.iPos.y - this.oPos.y);
		
		this.target.resizeFlag = true;//??ס?ƶ?????????ʱ?ж?Щֵ?????????棩
		
		return false;
	},
	onComplete: function() {
		$(document).unbind('mousemove', this.resizingHendler);
		$(document).unbind('mouseup'  , this.completeHendler);
		if($.isFunction(this.option.complete)) this.option.complete(this.info);
		return false;
	},
	eventMethod: function(instance, method) {return function(event) { return instance[method](event, this); };}
};

//=============================================
//?ڱ���?ϼ?һ??logoͼ??Ĭ??ʹ??t8?ֶα???????
//?????���???Ѿ?????t8?ֶ??ˣ?????????????????
__MM_VAR_logoImg_isAllow = false;
__MM_VAR_logoImg_isdblclick = false;//??һ??ʱ????????ʽ????2?ε???????
function __MM_BillForm_logoImg_beforeInit(fbox){
	if(fbox.t8 || fbox.T8) return;//?Ѿ?ʹ?????????ֶΣ????????���??logImg
	$(fbox).append("<input type='hidden' name='t8' value=''>"); 
	__MM_VAR_logoImg_isAllow = true;
}
function __MM_BillForm_logoImg_afterInit(fbox){
	if(!__MM_VAR_logoImg_isAllow) return;//??????
	var box = fbox.t8;
	box = (!box) ? fbox.T8 : box;
	if(!box) return;
	var value = box.value;
	//--------------------------------------------------
	var isNew = false;//?Ƿ??¼ӣ??????ǣ?????ʹ??Ĭ?ϵ?
	var type = fbox.type.value;//????type == 1ʱ???ó???ͼƬ????????????Ҫ????
	if(type == 1 || type == 20){//?????ñ?׼??????????????ʱ??????????????
		if(!value || value.indexOf("logoImg=") != 0){
			value = "logoImg=default_blank.gif,50,25,10,10,100";
			isNew = true;
		}
	}
	else{
		if(!value || value.indexOf("logoImg=") != 0) return;
	}
	
	//value?ĸ?ʽΪ???ļ?????????·????,width,height,top,left,opacity
	var values = value.substr(8).split(",");
	var logo_img = "<div id='div_logo_img_111' src='"+values[0]+"' opacity='"+values[5]+"'" + 
					" style='position:absolute;z-index:999;width:"+values[1]+";height:"+values[2]+";" + 
					" top:"+values[3]+";left:"+values[4]+";border:0px;'>" + 
						"<img src='bill_common/logo_img/"+values[0]+"' style='filter:alpha(opacity="+values[5]+");' width='100%' height='100%' border=0>" + 	
					"</div>";		
	//alert(logo_img);			
	$("#bill_position_layer").prepend(logo_img);
	
	//---------------
	if(type == 1 || type == 20){		
		$("#div_logo_img_111").addClass("drag_resize");
		$("#div_logo_img_111").attr("title", "˫???ı?ͼƬ??С????˫??ѡ????????ͼƬ??????͸????");
		
		$("#div_logo_img_111").bind("click", function(){//???浽t8?ֶ???
			var src = $(this).attr("src");
			if(!src || src == "default_blank.gif") return;
			var opacity = $(this).attr("opacity");
			var width = $(this).css("width");
			var height = $(this).css("height");
			var top = $(this).css("top");
			var left = $(this).css("left");
			fbox.t8.value = "logoImg="+src+","+width+","+height+","+top+","+left+","+opacity+"";
		}) ;
		
		$("#div_logo_img_111").bind("dblclick", function(){//ѡ??ͼƬ
			if(!__MM_VAR_logoImg_isdblclick){
				__MM_VAR_logoImg_isdblclick = true;
				//????span???ڴ????϶????ı???С
				var temp_span = "<span class='north-west-resize'></span>" + 
								"<span class='north-resize'></span>" + 
								"<span class='north-east-resize'></span>" + 
								"<span class='west-resize'></span>" + 
								"<span class='east-resize'></span>" + 
								"<span class='south-west-resize'></span>" + 
								"<span class='south-resize'></span>" + 
								"<span class='south-east-resize'></span>";
				$("#div_logo_img_111").prepend(temp_span);	
				$("#div_logo_img_111").find('span').mousedown(function(e){
					new Resize($("#div_logo_img_111")[0]).start(e, this.className.replace('-resize', ''));
				});	
				item_drag($("#div_logo_img_111")[0]);//???϶?
				return;
			}
		
			var object = new Object();object.window=window;
			var src = $(this).attr("src");
			var opacity = $(this).attr("opacity");
			var params = "dialogWidth:400px;dialogHeight:400px;resizable:yes;";
			var retu = window.showModalDialog("dojsp?jsp=bill_common/logo_img_select.jsp&src="+src+"&opacity="+opacity,object,params);
			if(!retu) return;
			if(retu.isClear){//??ʾ????
				$(this).find("img").attr("src", "bill_common/logo_img/default_blank.gif");
				fbox.t8.value = "";
				return;
			}
			$(this).attr("src", retu.src);
			$(this).attr("opacity", retu.opacity);
			$(this).find("img").attr("src", "bill_common/logo_img/" + retu.src);
			$(this).find("img").css("filter", "alpha(opacity="+retu.opacity+")");
			if(isNew){//?¼?ʱ??????ʹ??Ĭ?ϵ?
				$(this).css("width", retu.width);
				$(this).css("height", retu.height);
			}
			$(this).click();
		}) ;
	}
}

//?ֽ??ռ??˵???excel????
function importExcel(path){
 
	var url = "dojsp?jsp=bill_common/import_excel_dialog.jsp&billpath="+$("input[name=bill_path]").val();
	var params = "dialogWidth:840px;dialogHeight:330px;help:no;status:no;resizable:yes;";
	var retu = window.showModalDialog(url, window, params);
	if(!retu) return;
}

function replace_execlXml(objxml){
	//ԭ????xml?????޸ĳ?billForm_xml_bak
	 $("xml").each(function(){
		if($(this).attr("name")=="billForm_xml")
		$(this).attr("name","billForm_xml_bak");
	});
 	
	//????????inputѡ??ֵ
	$("input[name^=b]").val("");
	$(".input_like_checkbox").val("");
	
	//?????µ?billForm_xml
	 $("body").after($(objxml));
	 _MM_BillForm_InitFormByRowSet();
	 if($("input[name^=b]").filter(function(){return $.trim($(this).val())!=''}).size()==0){
	 	alert("????????ʧ?ܣ???????Excel??ʽ");
	 }
}

//????????:ֵ????????ɫ??ֻ????
function __MM_BillForm_setFieldProperty(box,value,bgcolor,readonly)
{
 
    if(!box) return;
    try{
    
        if(value != null){
            _MM_BillForm_setFormFieldValue(box,value);
        }
    }
    catch(ex){}
    
    try{
        //????ɫ
        if(bgcolor){
            box.style.background = bgcolor;
        }
    }
    catch(ex){}
    
    try{
        //ֻ??
        if(readonly != null){
            if(readonly.toLowerCase() == 'true'){
            	__MM_BillForm_setFieldReadOnly(box);
            }
        }
    }
    catch(ex){}
}

//??ȡxml????
function __MM_BillForm_getXmlDoc()
{
	//????xml
        var xmltags = document.getElementsByTagName("xml");
        
        var xmldoc = null;
        for(var i=0;xmltags&&i<xmltags.length;i++){
        	if(xmltags[i] && xmltags[i].name == 'billForm_xml'){
        		xmldoc = xmltags[i];
        		break;
        	}
        }
        //alert(xmldoc);
        return xmldoc;
}
//???ڴ?????ʼ???���?б���????
function _MM_BillForm_InitFormByRowSet()
{
    //********???ó?ʼ???���********/
    try{
		var fbox = document.getElementsByTagName('form')[0];
		
		try{
        	//????Ϊ?���????????????ǰ????????Ҫ????һ???¼?Ϊ?���?????д??????¼??????¼?д?ڱ���jspҳ??
        	//edit by xiejs at 2008-11-20
        	var ret = beforeInitForm(fbox);
        	if(ret == false) return;
         }
        catch(ex_0){;}		
		///////////////////////////////////////////////////////////////////////////////////////
		try{
			__MM_BillForm_logoImg_beforeInit(fbox);//????logoImg
		 }
		catch(ex_1){;}
		
		///////////////////////////////////////////////////////////////////////////////////////
		try{
			__MM_BillForm_RebuildButtonStyle(fbox);
		 }
		catch(ex_2){;}
		        
        ///////////////////////////////////////////////////////////////////////////////////////
        try{
        	//?????ݱ?????Ϊcheckboxʱ?Ĵ??���?????ڳ?ʼ??ֵ֮ǰ???ꡣ
        	if(fbox && (fbox.type.value == '3')){//ֻ?ڳ?ʼ??ʱ????
        		__MM_BillForm_RebuildField2TextBox(fbox);
        	 }
        }
        catch(ex_3){window.status='ex_3' + ex_3.message;}
        
		//////////////////////////////////////////////////////////////////
		////////////////????Ϊ??ʼ???���????????
		//////////////////////////////////////////////////////////////////
        try{
	        //xml
	        var xmldoc = __MM_BillForm_getXmlDoc();
	        
	        if(!xmldoc) return;
	        var nodes = xmldoc.selectNodes("/data/fields/field");
	       //  alert(document.getElementsByName("b49").length)
	           //alert($("*[name=b49][objname^=init_b]").size())
	        for(var x=0;nodes&&nodes.length&&x<nodes.length;x++){
	        	
	            var node = nodes[x];
	            var name = node.getAttribute("name");
	            if(!name) continue;
	            
	            var rowno = node.getAttribute("no");
	            if(!rowno) continue;
	             if(parseInt(rowno)>=$("*[name="+name+"]").not("[objname]").size()){
	                try{
	                if(node.text!="")
	               $("input[name=add][value=????]",document.body).click()
	               }catch(ex){
	            	continue;
	            	 }
	           }
	         //   var $box =    $("*[name="+name+"]").not("[objname]").eq(parseInt(rowno));
	           //alert(parseInt($("*[name="+name+"]").index($box)))
	            if(fbox &&  fbox.type.value == '3'  ){ 
	           var box = document.getElementsByName(name)[parseInt(rowno)+1];
				}else{
				var box = document.getElementsByName(name)[parseInt(rowno)];
				}
	 		  //????value,bgcolor,readonly
			  if(!box) continue;
	 		  //????value,bgcolor,readonly
                __MM_BillForm_setFieldProperty(box,
                							   node.text,
                							   node.getAttribute("bgcolor"),
                							   node.getAttribute("readonly"));              							   	                
	        }
	        
	        //??????????
	        var regexp_nodes = xmldoc.selectNodes("/data/regexp-fields/regexp-field");
	        for(var x=0;regexp_nodes&&regexp_nodes.length&&x<regexp_nodes.length;x++){
	            var regexp_node = regexp_nodes[x];
	            var name_regexp = regexp_node.getAttribute("name_regexp");
	            var bgcolor     = regexp_node.getAttribute("bgcolor");
	            var readonly	= regexp_node.getAttribute("readonly");
	            
	            var regexp = new RegExp(name_regexp,"ig");
	            var boxs = fbox.elements;
	            var already_list = ",";
	            for(var k=0,len=boxs.length;k<len;k++){
	            	var fieldName = boxs[k].name;
	            	if(!fieldName) continue;
	            	if(already_list.indexOf(','+fieldName+',')>=0) continue;
	            	already_list += fieldName + ',';
	            	
	            	var tmp_boxs = document.getElementsByName(fieldName);
	            	for(var jj=0;tmp_boxs&&tmp_boxs.length&&jj<tmp_boxs.length;jj++){
		            	if((fieldName+"["+jj+"]").search(regexp) >= 0){
			                __MM_BillForm_setFieldProperty(tmp_boxs[jj],null,bgcolor,readonly);		            		
		            	}
	            	}//end for
	            }//end for
	        }//end form
	    }
	    catch(ex){window.status=ex.message;}

		////////////////////////////////////////////////////////////////////////////////////////
		try{
			//?????¼??????û??ı??????ݶ?δ????ʱ??????ʾ??
			//edit by xiejs at 2008-11-13
	        if(fbox && (fbox.type.value == '1' || //??ȷ????
		             	fbox.type.value == '2' || //ģ??????
		             	fbox.type.value == '3' || //??ʼ??
		             	fbox.type.value == '4' || //?ؼ???
		             	fbox.type.value == '6' || //ѧ??ʵѵ
		             	fbox.type.value == '20')){//????????¼??
				//???ñ���???¼?
				_MM_BillForm_InitFieldBoxEvents();
	        }
        }
        catch(ex_1){;}
        
        ///////////////////////////////////////////////////////////////////////////////////////
        try{
        	//????Ϊ?���???????????ݺ?????????Ҫ????һ???¼?Ϊ?���?????д??????¼??????¼?д?ڱ���jspҳ??
        	//edit by xiejs at 2008-11-20
        	afterInitForm(fbox);
        }
        catch(ex_2){;}
        ///////////////////////////////////////////////////////
		//????ͳ??ͼ
		try{__MM_initBillGraph(fbox);}catch(ex4){;};
		//????ģ????????????
		try{__MM_initBillDimSelect(fbox);}catch(ex5){;};
		///////////////////////////////////////////////////////
		try{
			__MM_BillForm_logoImg_afterInit(fbox);//????logoImg
		}
		catch(ex_1){;}
		///////////////////////////////////////////////////////
     }
    catch(ex){window.status=ex.message;}
}

var show_hidden_button=0;
function clickBillFormShowHidden(){
	$("input[name^=a]:hidden").show()
	 $("input[name^=b]").show().css({"background-color":"#ff0000","display":"block"})
}
