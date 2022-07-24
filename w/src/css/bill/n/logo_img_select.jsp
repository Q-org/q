



<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>????LogoͼƬѡ??????</title>
<style>
body{font-size:12px;}
p{font-size:12px;}
</style>
</head>

<body>
<div id="right">
<p>??ѡ??ͼƬ</p>
<form action="do" method="post">
<table width="100%" style="border-collapse:collapse;" border=1>

<tr>
	<td>
		<img src="bill_common/logo_img/logo_img_jkb_0.gif" onClick="document.getElementById('input_1').click()"/>
		<input id="input_1" type="radio" name="img_src" value=logo_img_jkb_0.gif  >
	</td>
</tr>

<tr>
	<td>
		<img src="bill_common/logo_img/logo_img_jkb_1.gif" onClick="document.getElementById('input_2').click()"/>
		<input id="input_2" type="radio" name="img_src" value=logo_img_jkb_1.gif  >
	</td>
</tr>

<tr>
	<td>
		<img src="bill_common/logo_img/logo_img_jkb_2.gif" onClick="document.getElementById('input_3').click()"/>
		<input id="input_3" type="radio" name="img_src" value=logo_img_jkb_2.gif  >
	</td>
</tr>


</table>
<div align="center">
??͸????<input type="text" name="opacity" value="" size="8">
</div>
<div align="center">
<input type="button" id="btn_yes" value=" ȷ  ?? " onClick="doSubmit(this.form)">
<input type="button" value=" ????Logo " onClick="doClearLogo(this.form)">
<input type="button" value=" ??  ?? " onClick="self.close()">
</div>
</form>
</div>
</body>
<script type="text/javascript">
var show_img = null;
try{
	show_img = new Image(); 
}catch(ex){;}
var retu = new Object();

function doSubmit(fbox){
	var src = null;
	var boxs = document.getElementsByName("img_src");
	for(var i=0,len=boxs.length;i<len;i++){
		if(!boxs[i].checked) continue;		
		src = boxs[i].value;
		break;		
	}
	if(!src){
		alert("??ѡ??һ??ͼƬ??");
		return;
	}
	retu.src = src;
	retu.opacity = fbox.opacity.value;
	//ȡ??ͼ??Ĭ?Ͽ???
	if(show_img){
		show_img.src = "bill_common/logo_img/" + src;
	}
	window.setTimeout("windowClose()", 1000 * 0.1);
}

function windowClose(){
	if(show_img){
		retu.width  = show_img.width;
		retu.height = show_img.height;
	}	
	window.returnValue = retu;
	window.close();
}

//????
function doClearLogo(fbox){
	if(!confirm("ȷʵҪ?????????õ?LogoͼƬ????")) return;
	retu.isClear = true;
	window.returnValue = retu;
	window.close();
}

</script>
</html>
