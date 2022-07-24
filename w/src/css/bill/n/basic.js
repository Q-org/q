//???????Ӻ?????ǰ???ӱ?ɫ?Ӵ?
var _bill_preLinkObject = null;
function _bill_playSignLink(link)
{
    if(!link) link = event.srcElement;
    if(_bill_preLinkObject){
        //_bill_preLinkObject.style.color = "blue";
        _bill_preLinkObject.style.fontStyle = 'normal'
        _bill_preLinkObject.style.fontWeight = "normal";
    }
    _bill_preLinkObject= link;
    //_bill_preLinkObject.style.color = "red";
    _bill_preLinkObject.style.fontStyle = 'italic'
    _bill_preLinkObject.style.fontWeight = "bold";
}


/////////////////////////////////////////////////////////////////////////////
///////////////////////////////???ϱ?˰ר??//////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/*
??˰????????
nsje?? Ҫ?????Ľ???????(##a1##+##a2##-##b1[1]##)Ϊ(a1+a2-b1[1]) 
?? ?ֶ?Ϊ ##?ֶ???##
*/

function regInputOperateformula(formula){//???ؼ??㹫ʽ ??????input ??????˰?걨?????????ַ?sum(),????sum(b1)+a1[0]
	return formula.match(/(sum\()*\w+(\[\d+])*(\))*/ig);
}

function regOperateMatchinput(inputname){
	 if(/\w+\[\d+]/ig.test(inputname)){//Ϊ????һ??index??Ҫ??ֵ ????b1[0]
	 	var currIndex=inputname.match(/\[\d+/ig)[0].substring(1);//??ǰ????ֵindex  [0]?е?0
		var currInput=inputname.match(/\w+\[/ig)[0];//??ǰinput???? ????b1
		currInput= currInput.substring(0,currInput.length-1);
	    return new operateInputIndex(currInput,currIndex)
	 }else{
	 	return new operateInputIndex(inputname,0);
	 }
}

function operateInputIndex(name,index){//???????????洢input??name??????ֵ
    this.name=name;
	this.index=index;
	
	if($("input[name="+name+"]").eq(index)){
	var inputValue=$.trim($("input[name="+name+"]").eq(index).val());
	this.value=(isNaN(inputValue)||inputValue=="")?"0":inputValue;
	}else{
		 this.value="0";
    }
}

function regInputOperateValue(obj){//????????????????
	this.replaceFormula ="";
	this.replaceValue=0;
	
	if(/sum\(\w+\)/ig.test(obj)){//?????Ǻ???sum???͵?,???????????е?????ֵ????
		var inputCol=obj.match(/\w+/ig);//
		 if(inputCol&&inputCol!=null){//???ؼ???input????
			var inputColName= inputCol[1];
			var sumInputCol=0;
			 $("input[name="+inputColName+"]").each(function(){
				var inputVal =( isNaN($.trim($(this).val()))||$.trim($(this).val())=="")?"0":$.trim($(this).val());
				sumInputCol+=inputVal-0;
			});
			 this.replaceFormula="sum\\("+inputColName+"\\)";
		    this.replaceValue=sumInputCol;
		}
	 }else{
		var inputObj = regOperateMatchinput(obj);
		if(/\w+\[\d+]/ig.test(obj))
		this.replaceFormula = inputObj.name+"\\["+inputObj.index+"]";
		else
		this.replaceFormula = inputObj.name;
		
		this.replaceValue=inputObj.value;
	}
 }
 
function JEGS_Eval()
{
	if(document.forms[0].nsje){//??ѯ?Ƿ?????˰????input?ؼ?
		var obj =  document.forms[0].nsje;
		var formula=$("input[name=nsje]").attr("evalResult").replaceAll("##","");
		if(formula!=""){
		var Operateformula = regInputOperateformula(formula);
 	 
		for(var i=0;i<Operateformula.length;i++){
		   var OperateValue =new regInputOperateValue(Operateformula[i]);
		 //  alert(OperateValue.replaceFormula+"#"+OperateValue.replaceValue)
		   formula=formula.replaceAll(OperateValue.replaceFormula,OperateValue.replaceValue);//?滻??value
		 }
		// alert(formula)
		obj.value = (eval(formula)-0<=0)?"0.00": eval(formula);
		 } 
	}
	/*if(document.forms[0].nsje){
	var obj =  document.forms[0].nsje;
	var jegsStr = obj.getAttribute("evalResult");
	var jegsStrObj= jegsStr.split('##');
	var evalStr ="";
	for(var i=0;i<jegsStrObj.length;i++)
	{
		if((jegsStrObj[i].indexOf('a')!=-1))
		{
			 
		    if(document.getElementsByName(jegsStrObj[i])[0]){
		    	
				if(document.getElementsByName(jegsStrObj[i])[0].value!="")
		    	evalStr+=document.getElementsByName(jegsStrObj[i])[0].value ;
		    	else
		    	evalStr+='0'
		    }else{
		      	evalStr+='0'
		     }
		 }
		 else if((jegsStrObj[i].indexOf('b')!=-1))
		{
			 var objB= jegsStrObj[i].split('[');
			 if(document.getElementsByName(objB[0])[objB[1].split(']')[0]])
			 {
			 	if(document.getElementsByName(objB[0])[objB[1].split(']')[0]].value!="")
		     		evalStr+=document.getElementsByName(objB[0])[objB[1].split(']')[0]].value ;
		    	 else
		     		evalStr+='0'
		     }else{
		      	evalStr+='0'
		     }
		     
		 }
		 else
		 evalStr+=jegsStrObj[i]
	}
	
	 obj.value = (eval(evalStr)-0<=0)?"0.00": eval(evalStr);
	}*/
}


function sbnrResult(){
	var obj= document.forms[0].sbnr;
	if(!obj) return;
	
	var sbnr = obj.value;

	//??ȡ?????õ??Ľ???
	var nsjesb = (document.getElementsByName("nsje")[0]) ? 
			document.getElementsByName("nsje")[0].value:"0";

	if(sbnr == ""){
		sbnr = "?걨?ɹ?!?????????????˻??п۽?˰??[:nsje]Ԫ??????ͨ??????˰?걨??ִ??ѯ???鿴??" ;
	}

	//????sbnr?а?????nsje????????ֵ?滻
	if(sbnr.indexOf("[:nsje]") >= 0){
		sbnr = sbnr.replace(/\[:nsje\]/,nsjesb);
	}

	obj.value = sbnr;
	
}



