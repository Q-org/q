

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>???ݶ?̬?ı????ô???</title>
<style>
body{font-size:12px;}
p{font-size:12px;}
</style>
<script language="JavaScript" src="bill_common/jquery-1.3.1.min.js"></script>
</head>

<script type="text/javascript">
$(document).ready(function(){
	var value = '';
	if(value=="n1") document.getElementsByName("bold")[0].checked=true;
	$(":radio").each(function(){
		if($(this).attr("value")==''){
			$(this).attr("checked",true);
		}
	})
});
</script>
<body>
<div id="right">
<p>?ı?????????</p>
<form action="do" method="post">
<table width="100%" style="border-collapse:collapse;" border=1>
<tr><td align="center">????:</td><td><input type="text" name="content" value=""></td></tr>
<tr><td align="center">???ִ?С:</td><td><input type="text" name="size" value=""></td></tr>
<tr><td align="center">??????ɫ:</td><td><input type="text" name="color" value=""></td></tr>
<tr><td align="center">????λ??:</td><td><input type="radio" name="pos" value="left" checked>????  <input type="radio" name="pos" value="center">????  <input type="radio" name="pos" value="right">????</td></tr>
<tr><td align="center">?Ƿ??Ӵ?:</td><td><input type="checkbox" name="bold"></td></tr>
</table>
<div align="center">
<input type="button" id="btn_yes" value=" ȷ  ?? " onClick="doSubmit(this.form)">
<input type="button" value="ɾ???ı?" onClick="doClearText(this.form)">
<input type="button" value=" ??  ?? " onClick="self.close()">
</div>
</form>
</div>
</body>
<script type="text/javascript">
function doSubmit(fbox){
	var retu = new Object();
	var checkboxobj = document.getElementsByName("bold");
	if(checkboxobj[0].checked) retu.bolder="n1";
	else retu.bolder="n2";
	var radioobj = document.getElementsByName("pos");
	for(var i=0;i<radioobj.length;i++){
		if(radioobj[i].checked)	retu.pos=radioobj[i].value;
	}
	retu.content = fbox.content.value;
	retu.size = fbox.size.value;
	retu.color = fbox.color.value;
	window.returnValue = retu;
	window.close();
}

function doClearText(fbox){
	var retu = new Object();
	retu.clear = "1";
	window.returnValue = retu;
	window.close();
}
</script>
</html>
