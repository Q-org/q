/**
title:???б??Զ?У??????
desc:Ҫ????????????ʽ???д???,??ԭ???Ƕ??ı????????Զ?????????,?ٸ??????Խ???????????ʽ????
version: 1.0
author:Easydozer
Date:2003-9-13

Example:
<script language="JavaScript" src="checkForm.js"></script>
<form method="POST" name="form" onsubmit="return checkForm(this)">
  <p>EMAIL:<input type="text" name="T1" Isull="notnull" DataType="Email" Caption="?????ʼ?" size="20"></p>
  <p>PassWord:<input type="text" name="T1" ISNULL="" DataType="Password" MAXLEN="10" MINLEN="2" size="20" value="12"></p>
  <p>NUMBER:<input type="text" name="T1" ISNULL="" DataType="number(5,3)" size="20"></p>
  <p>Tel:<input type="text" name="T1" ISNULL="" DataType="Tel" size="20"></p>
  <p>CODE:<input type="text" name="T1" ISNULL="" DataType="POSTCODE" size="20"></p>
  <p>URL:<input type="text" name="T1" ISNULL="" DataType="URL" size="20"></p>
  <p>DATE:<input type="text" name="T1" DataType="date('yyyy-MM-dd')" size="20"></p>
  </p>ISNULL<SELECT NAME="" ISNULL="notnull"><option value=""></option><option value="1">1</option></SELECT>
  <P>MINLEN MAXLEN<TEXTAREA NAME="" ROWS="" COLS="" MINLEN="1" MAXLEN="20"></TEXTAREA></P>
  <p><input type="button" value="??ť" name="B1" onclick="CheckForm(form)"><input type="reset" value="ȫ????д" name="B2"></p>
  
  objname: alert ???пؼ?????
  <input type="text" name="T1" ISNULL="notnull" size="20"></p>
</form>

*/

/**
ISNULL  -- ?���????????(?Ƿ????зǿ?У??) 
    ֵ??NOTNULL??notnull --?���??????ֵ(???зǿ?У??)

MAXLEN --- ?���????????(???���??????????ֵ<һ?????ֵĳ???Ϊ2>)
MINLEN --- ?���????????(???���????С????ֵ<һ?????ֵĳ???Ϊ2>)

DataType --- ?���????????(?���??????????,?????к??????͵?У??)
	??????????:
	EMAIL --- ?????ʼ?
	PASSWORD --- ????
	TEL --- ?绰
	POSTCODE --- ????????
	URL --- ????????
	 --- ????
	NUMBER
	NUMBER()
	NUMBER(X)
	NUMBER(X,I)
	 --- ?޷???????(????????+-????)
	POSITIVE
	POSITIVE()
	POSITIVE(X)
	POSITIVE(X,I)
	 --- ????Ϊ????(????????С????)
	INTEGER
	INTEGER()
	INTEGER(X)

	 --- ????
	DATE('yyyyMM')
	DATE('yyyy/MM')
	DATE('yyyy-MM')
	DATE('yyyy??MM??')

	DATE('yyyyMMdd')
	DATE('yyyy/MM/dd')
	DATE('yyyy-MM-dd')
	DATE('yyyy??MM??dd??')

	DATE('yyyyMMddHHmm')
	DATE('yyyy/MM/dd HH:mm')
	DATE('yyyy-MM-dd HH:mm')
	DATE('yyyy??MM??dd?? HH:mm')

	DATE('yyyyMMddHHmmss')
	DATE('yyyy/MM/dd HH:mm:ss')
	DATE('yyyy-MM-dd HH:mm:ss')
	DATE('yyyy??MM??dd?? HH:mm:ss')

**/
function checkForm(fbox)
{
	fbox = (fbox) ? fbox : document.forms[0];
	
	var e = fbox.elements;
	for(var i=0;i<e.length;i++){
		var obj = e[i];
        
        var value = _MM_GetFieldBoxValue(obj);//ֵ
        var caption = obj.getAttribute("caption");//??ʾ????
        caption = (caption) ? caption : obj.getAttribute("objname");//??ǰ????
        caption = (caption) ? "\""+caption+"\"" : "";
        var level = obj.getAttribute("level");
        level = (level) ? level : "1";//??????1????ֹ??0??????
        
        var attribute = (obj)?obj.getAttribute("isnull"):null;
        if(attribute && /^NOTNULL$/i.test(attribute)){ //check null
			if(!__MM_checkNULL(value,caption,level)){
				__MM_Focus(obj);
				return false;
			}
		}

        var attribute = (obj)?obj.getAttribute("maxlen"):null;
		if(attribute && /^([1-9])([0-9])*$/.test(attribute)){ // check maxlen
			if(!__MM_checkMaxLen(attribute,value,caption,level)){
				__MM_Focus(obj);
				return false;
			}
		}

        var attribute = (obj)?obj.getAttribute("minlen"):null;
		if(attribute && /^([1-9])([0-9])*$/.test(attribute)){ // check minlen
			if(!__MM_checkMinLen(attribute,value,caption,level)){
				__MM_Focus(obj);
				return false;
			}
		}
		
        var datatype = (obj)?obj.getAttribute("datatype"):null; 
		if(__MM_trim(value) != "" && datatype){
			if(/^EMAIL$/i.test(datatype)){//check email
				if(!__MM_checkEmail(value,caption,level)){
					__MM_Focus(obj);
					return false;
				}
			}
			if(/^PASSWORD$/i.test(datatype)){//check password
				if(!__MM_checkPwd(value,caption,level)){
					__MM_Focus(obj);
					return false;
				}
			}
			if(/^TEL$/i.test(datatype)){//check tel
				if(!__MM_checkTel(value,caption,level)){
					__MM_Focus(obj);
					return false;
				}
			}

			if(/^POSTCODE$/i.test(datatype)){//check CODE
				if(!__MM_checkCode(value,caption,level)){
					__MM_Focus(obj);
					return false;
				}
			}

			if(/^URL$/i.test(datatype)){//check url
				if(!__MM_checkURL(value,caption,level)){
					__MM_Focus(obj);
					return false;
				}
			}

			if(/^DATE\(/i.test(datatype)){//check date
				try{
					if(!__MM_checkDate(datatype,value,caption,level)){
						__MM_Focus(obj);
						return false;
					}
				}
				catch(ex){}
			}

			if(/^__MM_NUMBER/i.test(datatype)){//check number
				try{
					if(!__MM_checkNumber(datatype,value,caption,level)){
						__MM_Focus(obj);
						return false;
					}
				}
				catch(ex){}
			}

			if(/^POSITIVE/i.test(datatype)){//check positive
				try{
					if(!__MM_checkPositive(datatype,value,caption,level)){
						__MM_Focus(obj);
						return false;
					}
				}
				catch(ex){}
			}

			if(/^INTEGER/i.test(datatype)){ //check integer
				try{
					if(!__MM_checkInteger(datatype,value,caption,level)){
						__MM_Focus(obj);
						return false;
					}
				}
				catch(ex){}
			}
		}
	}

	return true;
}

///////////////////////////////////////////////
function __MM_checkNULL(val,caption,level)
{
	if(!val || __MM_trim(val) == ""){
		return __MM_RaiseMsg(caption + "???벻??Ϊ??!",level);
	}
	return true;
}

function __MM_checkMaxLen(len,val,caption,level)
{
	val = (val) ? val : "";
	if(len){
		var t = val.replace(/[^\x00-\xff]/g,"AA");
		if(t.length > len){
			return __MM_RaiseMsg(caption + "???볤?Ȳ??ܳ???"+len+"\r\n\r\nĿǰ???????ĳ???Ϊ(һ??????ռ????????λ??):"+t.length,level);
		}
	}
	return true;
}

function __MM_checkMinLen(len,val,caption,level)
{
	if(!val) val = "";
	if(len){
		var t = val.replace(/[^\x00-\xff]/g,"AA");
		if(t.length < len){
			return __MM_RaiseMsg(caption + "???볤?Ȳ???С??"+len+"\r\n\r\nĿǰ???????ĳ???Ϊ(һ??????ռ????????λ??):"+t.length,level);
		}
	}
	return true;
}

function __MM_checkEmail(email,caption,level)
{
	var reg = new RegExp("^([\.a-zA-Z0-9_-]){3,}@([a-zA-Z0-9_-]){3,}(\.([a-zA-Z0-9]){2,4}){1,2}$");
	if(!reg.test(email)){
		return __MM_RaiseMsg(caption + "???Ϸ??ĵ????ʼ???ַ!",level);
	}
	return true;
}

function __MM_checkTel(tel,caption,level)
{
	if(!/^([0-9])*-?([0-9])*$/.test(tel)){
		return __MM_RaiseMsg(caption + "????????Ϊ???ֻ?-",level);
	}
	return true;
}

function __MM_checkCode(code,caption,level)
{
	if(!/^([0-9])*([0-9])*$/.test(code)){
		return __MM_RaiseMsg(caption + "????????Ϊ????",level);
	}	
	return true;
}

function __MM_checkURL(url,caption,level)
{
	if(!/^HTTP|HTTPS|FTP|MAILTO/i.test(url)){
		return __MM_RaiseMsg(caption + "????URL??????",level);
	}	
	return true;
}

function __MM_checkPwd(pwd,caption,level)
{
	if(!/^([a-zA-Z0-9])*([a-zA-Z0-9])*$/.test(pwd)){
		return __MM_RaiseMsg(caption + "????????Ϊ???ֻ???ĸ",level);
	}
	return true;
}

function __MM_checkNumber(datatype,value,caption,level)
{
	//????????ֵ?Ƿ??????е????Ż?˫????,?????????Ͳ????????´?????,???????ǲ??????е????Ż?˫???ŵ?
	if(/\'|\"/.test(value)){
		return __MM_RaiseMsg(caption + "?????Ƿ?,?????а????е????Ż?˫????!",level);
	}

	var fuc = datatype;
	fuc = (new String(__MM_trim(fuc))).toUpperCase();
    
    __MM_checkForm_debug(fuc);
	try{
		if(/^NUMBER$/i.test(fuc)){// number
			fuc = "__MM_NUMBER(-1,-1,'"+value+"','"+caption+"',"+level+")";
		}
		else if(/^NUMBER\(\)/.test(fuc)){ // number()
			fuc = "__MM_NUMBER(-1,-1,'"+value+"','"+caption+"',"+level+")";
		}
		else if(/^NUMBER\(([0-9])*\)/.test(fuc)){// number(5)
			fuc = "__MM_" + fuc.replace(")",",-1,'"+value+"','"+caption+"',"+level+")");
		}
		else{// number(5,2)
			fuc = "__MM_" + fuc.replace(")",",'"+value+"','"+caption+"',"+level+")");
		}
		if(!eval(fuc)){
			return false;
		}
        
	}
	catch(ex){}
	return true;
}

function __MM_checkPositive(datatype,value,caption,level)
{
	try{
		var val = value;
		if(/^(-|\+)+/.test(val)){
			return __MM_RaiseMsg(caption + "???벻?ܴ???????(+,-)???ţ???ֻ??????????",level);
		}
	}
	catch(ex){}
	datatype = (new String(datatype)).toUpperCase();
	datatype = datatype.replace("POSITIVE","NUMBER");
	return __MM_checkNumber(datatype,value,caption,level);
}

function __MM_checkInteger(datatype,value,caption,level)
{
	try{
		var val = value;
		if(/^(-|\+)+/.test(val)){
			return __MM_RaiseMsg(caption + "???벻?ܴ???????(+,-)???ţ?ֻ??????????!",level);
		}

		if(/(\.)+/.test(val)){
			return __MM_RaiseMsg(caption + "???벻?ܴ???С????(.)???ţ?ֻ????????!",level);
		}
	}
	catch(ex){}

	datatype = (new String(datatype)).toUpperCase();
	datatype = datatype.replace("INTEGER","NUMBER");
	return __MM_checkNumber(datatype,value,caption,level);
}

//??????L1???ȣ?L2С??λ??,Num???жϵ?????,caption˵??
function __MM_NUMBER(L1,L2,Num,caption,level)
{
	if(!/^(-|\+|([0-9]))([0-9])*\.?([0-9])*$/.test(Num)){
		return __MM_RaiseMsg(caption + "???뺬?в??????ֵ??ַ?!",level);
	}
	var Numstr = Num;
	Numstr = Numstr.replace("-","");
	Numstr = Numstr.replace("+","");
	
	if(/^00/.test(Numstr)){
		return __MM_RaiseMsg(caption + "???????ֲ????���",level);
	}

    if(L2 == 0 && /(\.)/.test(Num)){
        return __MM_RaiseMsg(caption + "???벻?ܴ???С????",level);
    }

	Numstr = Numstr.replace(".","");

	if(L1 > 0){
		if(Numstr.length > L1){
			return __MM_RaiseMsg(caption + "???ֵĳ???̫??,ֻ???���??Ϊ:"+L1,level);
		}
		else{
			if(L2 > 0){
				if(!/\./.test(Num)){
					if(Num.length > L1 - L2){
						return __MM_RaiseMsg(caption + "????????λ̫??,ֻ????"+(L1 - L2)+"λ.",level);
					}
				}
				else{
					var res = /\./.exec(Num);
					try{
						var pos = res.index;
						//alert("pos=" + pos);
						//alert(L1 - L2);
						if(pos > L1 - L2){
							return __MM_RaiseMsg(caption + "????????λ̫??,ֻ????"+(L1 - L2)+"λ.",level);
						}
						if(Numstr.length - pos > L2){
							return __MM_RaiseMsg(caption + "????С??λ̫??,ֻ????"+L2+"λС??",level);
						}
					}
					catch(ex){}
				}
			}
		}
	}
	return true;
}

/**
Pattern:
	yyyyMM
	yyyy/MM
	yyyy-MM
	yyyy??MM??

	yyyyMMdd
	yyyy/MM/dd
	yyyy-MM-dd
	yyyy??MM??dd??

	yyyyMMddHHmm
	yyyy/MM/dd HH:mm
	yyyy-MM-dd HH:mm
	yyyy??MM??dd?? HH:mm

	yyyyMMddHHmmss
	yyyy/MM/dd HH:mm:ss
	yyyy-MM-dd HH:mm:ss
	yyyy??MM??dd?? HH:mm:ss
*/
function __MM_checkDate(datatype,dateValue,caption,level)
{
	var array = new Array();
	array['yyyyMM'] = /^(\d\d\d\d)(\d\d)$/;
	array['yyyy/MM'] = /^(\d\d\d\d)\/(\d\d)$/;
	array['yyyy-MM'] = /^(\d\d\d\d)-(\d\d)$/;
	array['yyyy??MM??'] = /^(\d\d\d\d)??(\d\d)??$/;

	array['yyyyMMdd'] = /^(\d\d\d\d)(\d\d)(\d\d)$/;
	array['yyyy/MM/dd'] = /^(\d\d\d\d)\/(\d\d)\/(\d\d)$/;
	array['yyyy-MM-dd'] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
	array['yyyy??MM??dd??'] = /^(\d\d\d\d)??(\d\d)??(\d\d)??$/;

	array['yyyyMMddHHmm'] = /^(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;
	array['yyyy/MM/dd HH:mm'] = /^(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):(\d\d)$/;
	array['yyyy-MM-dd HH:mm'] = /^(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d)$/;
	array['yyyy??MM??dd?? HH:mm'] = /^(\d\d\d\d)??(\d\d)??(\d\d)?? (\d\d):(\d\d)$/;

	array['yyyyMMddHHmmss'] = /^(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;
	array['yyyy/MM/dd HH:mm:ss'] = /^(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):(\d\d):(\d\d)$/;
	array['yyyy-MM-dd HH:mm:ss'] = /^(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)$/;
	array['yyyy??MM??dd?? HH:mm:ss'] = /^(\d\d\d\d)??(\d\d)??(\d\d)?? (\d\d):(\d\d):(\d\d)$/;
	
	var Par = datatype
	var Val = dateValue;
	
	var ary2 = Par.split("'");
	var Pattern = ary2[1];
	var reg = array[Pattern];
	//alert(Val);
	//alert(reg);
	if(!reg || !reg.test(Val)){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ,ӦΪ"+Pattern,level);
	}

	var dateAry = Val.match(reg); 
	if(dateAry == null ){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ,ӦΪ"+Pattern,level);
	}

	dateAry[2] = dateAry[2]-1;
	if(!dateAry[1]) dateAry[1] = "2000";
	if(!dateAry[2]) dateAry[2] = "01";
	if(!dateAry[3]) dateAry[3] = "01";
	if(!dateAry[4]) dateAry[4] = "00";
	if(!dateAry[5]) dateAry[5] = "00";
	if(!dateAry[6]) dateAry[6] = "00";

	var myDate = new Date(dateAry[1],dateAry[2],dateAry[3],dateAry[4],dateAry[5],dateAry[6]); 
	if(myDate.getFullYear() != dateAry[1]){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ(??),ӦΪ"+Pattern,level);
	}
	if(myDate.getMonth() != dateAry[2]){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ(??),ӦΪ"+Pattern,level);
	}
	if(myDate.getDate() != dateAry[3]){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ(ʱ),ӦΪ"+Pattern,level);
	}

	if(myDate.getHours() != dateAry[4]){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ(??),ӦΪ"+Pattern,level);
	}
	if(myDate.getMinutes() != dateAry[5]){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ(??),ӦΪ"+Pattern,level);
	}
	if(myDate.getSeconds() != dateAry[6]){
		return __MM_RaiseMsg(caption + "???????ڸ?ʽ????ȷ,ӦΪ"+Pattern,level);
	}

	return true;
}

//ȡ?ñ���??????ֵ
//?���??????
function _MM_GetFieldBoxValue(fieldBox)
{
    if(!fieldBox){
        return null;
    }

    if(fieldBox.type == 'radio'){
        var form = fieldBox.form;
        var formName = (form) ? form.name : "";
        var fieldName = fieldBox.name;
        var value = null;

        radlist=document.all.tags("input");    
        
        for (var i=0; i<radlist.length; i++){    
            var radioBox = radlist[i];
            if(!radioBox) continue;
            var radioBoxForm = radioBox.form;
            var radioBoxFormName = (radioBoxForm) ? radioBoxForm.name : "";
            if(radioBox.type == "radio" &&  
                    radioBox.name == fieldName &&  
                    radioBoxFormName == formName &&  
                    radioBox.checked){    
                value = radioBox.value;
                break;
            }    
        }    
        return value;    
    }
    else if(fieldBox.type == 'checkbox'){//???���ѡ??
        if(fieldBox.checked){
            return fieldBox.value;
        }
        else{
            return null;
        }
    }
    else{
        return fieldBox.value;
    }
}


function __MM_trim(val){
	if(!val) return val;
	return val.replace(/(^\s*)|(\s*$)/g,"");
}

//????level??ʾ??Ϣ??level=0???ѣ?1??ֹ
function __MM_RaiseMsg(msg,level)
{
    if(level==1){
        alert(msg);
        return false;
    }
    if(level==0){
        return window.confirm(msg+"\r\n\r\n?Ƿ???????\r\n");
    }
    return false;
}

function __MM_Focus(obj)
{
	try{
		obj.select();
	}
	catch(ex){
		try{
			obj.focus();
		}
		catch(ex2){}
	}
}

function __MM_checkForm_debug(msg)
{
    //alert(msg);
}
