/*
***************************copy right of netinnet.cn ***************************
                           ver 20050826
*/
/*??listBox_a??ѡ?еļ?¼?Ƶ?listBox_b*/
function moveSelected(listbox_a,listbox_b)  
{ //test in win ie6 ok 
   for(var i=listbox_a.options.length - 1; i>=0; i--)  
   {
     if(listbox_a.options[i].selected && listbox_a.options[i].value != "")  
	 {
        var v_row = new Option();
        v_row.value = listbox_a.options[i].value
        v_row.text = listbox_a.options[i].text
        listbox_b.options[listbox_b.options.length] = v_row;
        listbox_a.options[i] = null;
     }
   }
   //BumpUp(fbox);
   //SortD(tbox);
}
/*????listbox ?? value="" ???? */
function clearNullValueRow(box)  
{//test in win ie6 ok 
   var temp_opts = new Array();
   var v_count=0;
   for(var i=0; i<box.options.length; i++)  
   { //???ǿյ?options???浽 temp_opts????
      if(box.options[i].value == ""  ) continue;  
      temp_opts[v_count] = box.options[i];
      v_count++;
   }
   for(var i=box.options.length-1;i>=0; i--)  
      box.options[i]=null;  
   for(var i=0;i<v_count; i++)
      box.options[i]=temp_opts[i];
 }
/*????option.text ??listbox ???????? */
function sortByText(arg_listbox)  
{//test in win ie6 ok
  var temp_opts = new Array()
  var temp = new Object()
  for(var i=0; i<arg_listbox.options.length; i++)  
     temp_opts[i] = arg_listbox.options[i]
  //ð?ݷ?????
  for(var x=0; x<temp_opts.length-1; x++)  
  {
    for(var y=(x+1); y<temp_opts.length; y++)  
    {
      if(temp_opts[x].text > temp_opts[y].text)  
      {
        temp_text = temp_opts[x].text;
		    temp_value= temp_opts[x].value;
        temp_opts[x].text = temp_opts[y].text;
		    temp_opts[x].value = temp_opts[y].value;
        temp_opts[y].text = temp_text;
		    temp_opts[y].value = temp_value;
      }
    }
  }
  for(var i=0; i<arg_listbox.options.length; i++)  
  {
     arg_listbox.options[i].value = temp_opts[i].value
     arg_listbox.options[i].text  = temp_opts[i].text
  }
}
/*ѡ?? listbox????????*/
function selectAll(arg_listBox)
{//test in win ie6 ok
    for(var i=0; i<arg_listBox.options.length; i++)
        arg_listBox.options[i].selected = true;
}
/*ȡ?? listbox????????ѡ?е??? */
function unSelectAll(arg_listBox)
{//test in win ie6 ok
    for(var i=0; i<arg_listBox.options.length; i++)
        arg_listBox.options[i].selected = false;
}
/*??ȡ??һ??ѡ?м?¼?? options.text ֵ*/
function getFirstSelectedValue(arg_listbox)
{//test in win ie6 ok 
	var v_ret="";
	for(var i=0;i<arg_listbox.options.length;i++)
	{
		if(arg_listbox.options[i].selected)
		{
			v_ret=arg_listbox.options[i].value;
      return v_ret;
		}
	}
	return "";
}
/*??ȡ??һ??ѡ?м?¼?? options.value ֵ*/
function getFirstSelectedText(arg_listbox)
{//test in win ie6 ok 
	var v_ret="";
	for(var i=0;i<arg_listbox.options.length;i++)
	{
		if(arg_listbox.options[i].selected)
		{
			v_ret=arg_listbox.options[i].text;
      return v_ret;
		}
	}
	return "";
}
/*????һ????¼??ѡ??*/
function addOneOption(listbox,value,text)
{//test in win ie6 ok 
	  var v_o = new Option();
    v_o.value =value;
    v_o.text = text;
	  v_o.selected=true;
    listbox.options[listbox.options.length] = v_o;
}

/*ɾ??listbox ?? ĳvalue ֵ????????(һ?ο??ܶ???) */
function dropByValue(listbox,val)
{//test in win ie6 ok 
	var ops = 0;
	var flag = false;
	for(var i=listbox.options.length-1;i>=0;i--)
	{
		if(listbox.options[i].value == val)
	   {
			ops = i;
			flag = true;
			listbox.options[i]=null;
		}
	}
	if((flag)&(ops<listbox.options.length))
	{
		listbox.options[ops].selected = true;
	}
}
/*ɾ??listbox ?? ĳtext ֵ????????(һ?ο??ܶ???) */
function dropByText(listbox,arg_text)
{
	var ops = 0;
	var flag = false;
	for(var i=listbox.options.length-1;i>=0;i--)
	{
		if(listbox.options[i].text == arg_text)
	   {
			ops = i;
			flag = true;
			listbox.options[i]=null;
		}
	}
	if((flag)&(ops<listbox.options.length))
	{
		listbox.options[ops].selected = true;
	}
}


/*ɾ?? listbox ?????е? options */
function deleteAllOption(listbox)
{ //test in win ie6 ok 
	for(var i=arg_listbox.options.length-1;i>=0;i--)
	{
		listbox.options[i]=null;
	}
}
function hasValue(arg_listbox,arg_value)
{ //test in win ie6 ok 
	for(var i=0;i<arg_listbox.options.length;i++)
    if (arg_listbox.options[i].value==arg_value) return true;
  return false;
}
function hasText(arg_listbox,arg_text)
{ //test in win ie6 ok 
	for(var i=0;i<arg_listbox.options.length;i++)
    if (arg_listbox.options[i].text==arg_text) return true;
  return false;
}
/*????ֵѡ??ĳ?У???????ȡ??ѡ?? */
function selectRow(listbox,arg_value)
{ //test ok in win ie6 ok 
	for(var i=0;i<listbox.options.length;i++)
	{
		if(listbox.options[i].value == arg_value)
			listbox.options[i].selected = true;
    else
			listbox.options[i].selected = false;
	}
}
/*ɾ??listbox ??value ???????? */
function dropIterance(listbox)
{ //test in win ie6 ok 
	var len1=listbox.options.length;
	for(var i=0;i<len1;i++)
	{
		var value=listbox.options[i].value;
		for(var j=i+1;j<len1;)
		{
			if(listbox.options[j].value==value)
			{
				listbox.options[j]=null;
				len1--;
			}
			else
			{
				j++;
			}
		}
	}
}
/*ɾ??listbox_drop ?е??У????е?ֵ??????listbox_compare?У?*/
function dropRowsInOtherListbox(listbox_drop,listbox_compare)
{//test in win ie6 ok 
	if(!listbox_compare) return;
	if(!listbox_drop) return;
	var len1 = listbox_compare.options.length;
	var len2 = listbox_drop.options.length;
	var val1;
	var val2;
	for(var i=0;i<len1;i++){
		val1 = listbox_compare.options[i].value;
		for(var j=0;j<len2;){
			val2 = listbox_drop.options[j].value;
			if(val1 == val2){
				listbox_drop.options[j] = null;
				len2 --;
			}
			else{
				j++;
			}
		}
	}
}

/*??????valueΪָ??ֵ?ļ?¼?е?text ?ó???ֵ 
  ͬʱѡ????Щ??
*/
function modifyOptionByValue(listbox,value,text)
{
	for(var i=listbox.length-1;i>=0;i--)
	{
		if(listbox.options[i].value == value)
    {
			listbox.options[i].text = text;
			listbox.options[i].selected = true;
		}
    else
      	listbox.options[i].selected = false;
	}
}
/*??????textΪָ??ֵ?ļ?¼?е?value ?ó???ֵ 
  ͬʱѡ????Щ??
*/
function modifyOptionByValue(listbox,value,text)
{
	for(var i=listbox.length-1;i>=0;i--)
	{
		if(listbox.options[i].value == value)
    {
			listbox.options[i].text = text;
			listbox.options[i].selected = true;
		}
    else
      	listbox.options[i].selected = false;
	}
}

//=====================????Ϊ checkbox ???���??==================================

/*?????? ????Ϊ ָ???? ??checkbox ȫ??ѡ??(checked) */
function selectedAllCheckBox(arg_chkboxname)
{
	var inputbox = document.all.tags("input");
	for(var i=0;i<inputbox.length;i++)
  {
		var chkbox = inputbox[i];
		if((chkbox.type == "checkbox")&&(chkbox.name == arg_chkboxname))
    {
			chkbox.checked = true;
		}
	}//for
}
/*?????? ????Ϊ ָ???? ??checkbox ȫ????Ϊδѡ??(checked=false) */
function deselectAllCheckBox(arg_chkboxname)
{
	var inputbox = document.all.tags("input");
	for(var i=0;i<inputbox.length;i++)
  {
		var chkbox = inputbox[i];
		if((chkbox.type == "checkbox")&&(chkbox.name == arg_chkboxname))
    {
			chkbox.checked = false;
		}
	}//for
}
/*???? ȡĳ?? ??checkbox ?ұ?ѡ?е? ????*/
function checkboxCount(arg_chkboxname)
{
	var v_count=0;    
	inputbox=document.all.tags("input"); 
	for(var i=0;i<inputbox.length;i++)
	{
		var chkbox = inputbox[i];
		if((chkbox.type == "checkbox")&&(chkbox.name == arg_chkboxname))
		{
			if(chkbox.checked == true)
			{
				v_count ++;
			}
		}
	}
	return v_count;
}
/*???? ĳ?? checkbox ??ֵ 
  checkbox?????? ?? û??ѡ??(checked=false)???? "" 
 */
function getCheckboxValue(arg_chkboxname)
{
	var inputbox=document.all.tags("input");
	var v_ret = "";
	for(var i=0;i<inputbox.length;i++)
	{
		var chkbox = inputbox[i];
		if((chkbox.type == "checkbox")&&(chkbox.name == arg_chkboxname))
		{
			if(chkbox.checked == true)
			{
				v_ret = chkbox.value;
				break;
			}
		}
	}
	return v_ret;
}

/* ????ĳ????checkbox??????һ?? checked=true ?????? true */
function hasOneChecked(arg_chkboxname)
{
	var flag=false;    
	inputbox = document.all.tags("input"); 
	for(var i=0;i<inputbox.length;i++)
	{
		var chkbox = inputbox[i];
		if((chkbox.type == "checkbox")&&(chkbox.name == arg_chkboxname))
		{
			if(chkbox.checked == true)  return true;
		}
	}
	return false;
}

//===========================????Ϊ???? radio ?ĺ???==============================
/*??checkbox??=arg_radboxname, value = arg_value ??radio ??Ϊѡ?? */
function setRadioChecked(arg_radboxname,arg_value)
{
	radlist = document.all.tags("input");
	for(i=0;i<radlist.length;i++){
		if((radlist[i].type=="radio")&(radlist[i].name==arg_radboxname)&radlist[i].value == arg_value)
		{
			radlist[i].checked = true;
			break;
		}
	}
}

/*???? ??Ϊarg_radboxname ??radio ??һ??checked=true ?????? true */
function judge_radio(arg_radboxname)    
{    
	radlist=document.all.tags("input");    
	for (i=0; i<radlist.length; i++)    
	{
		
		if((radlist[i].type=="radio")&(radlist[i].name==arg_radboxname)&(radlist[i].checked==true))    
    return true;
  }    
	return false;    
}

/*??ȡ ??Ϊarg_radboxname ?? radio ??ֵ????1????*/
function getRadioValue(arg_radboxname)    
{    
	var v_ret=null;    
	radlist=document.all.tags("input");    
	for (i=0; i<radlist.length; i++)    
	{    
		if((radlist[i].type=="radio")&(radlist[i].name==radboxname)&(radlist[i].checked==true))    
		{    
			v_ret=radlist[i].value;    
		}    
	}    
	return v_ret;    
}
