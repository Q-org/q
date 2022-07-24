/*
 * 记账凭证和账本红笔相关操作
 */

//点击时，根据页面上笔的状态，设置颜色
function _zbpz_operNodeClick(ele_pen,arr_penoper){
	
for( j=0;j<arr_penoper.length;j++){
	
	var arr_operNode = document.getElementsByName(arr_penoper[j].operNode);
	var arr_markNode = document.getElementsByName(arr_penoper[j].markNode);
	
	for(i=0;i<arr_operNode.length;i++){
   		var v_input = arr_operNode[i];
   		var v_hidden = arr_markNode[i];

   		v_hidden.value=="0"||v_hidden.value==''?v_input.style.color="#000000":v_input.style.color="#FF0000";
   		v_input.setAttribute("bIndex",i);
		v_input.setAttribute("markHidden",arr_penoper[j].markNode);
		
		v_input.onclick=function(){
		var pen_state = ele_pen.getAttribute('pen_state');
		if(pen_state=='0'){
			this.style.color="#000000";
			set_hidden(this.getAttribute("markHidden"),this.getAttribute("bIndex"),'');
		}else{
			this.style.color="#FF0000";	
			set_hidden(this.getAttribute("markHidden"),this.getAttribute("bIndex"),'-1');
		}
	   }
   }
}
}

//设置存放笔颜色的隐藏字段
function set_hidden(v_nname,v_i,v_value){
	document.getElementsByName(v_nname)[v_i].value=v_value;
}

//提交前将没有填写数据的比状态清空
function _zbpz_beforeSubmit(arr_penoper){
	
	for(var k=0;k<arr_penoper.length;k++){
		var arr_inputNode = document.getElementsByName(arr_penoper[k].operNode);
		var arr_hiddenNode = document.getElementsByName(arr_penoper[k].markNode);
		
		for(i=0;i<arr_inputNode.length;i++){
   			var v_input = arr_inputNode[i];
   			var v_hidden = arr_hiddenNode[i];
			
			if(v_input.value=='') v_hidden.value='';
		}
	}
	
	return true;
}

