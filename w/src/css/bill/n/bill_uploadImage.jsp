

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>?ϴ?????ͼƬ</title>
</head>

<body style="margin-left:20px;margin-top:0px;">
<div id="right">
<form action="" method="post" enctype="multipart/form-data" target="saveWin">
<p style="font-size:12px;font-weight:bold;">???ϴ???ͼƬ</p>
<input type="file" name="blob" style="width:100%">
<div align="center">
<input type="button" id="btn_yes" value=" ȷ  ?? " onClick="doSubmit(this.form)">
<input type="button" value=" ??  ?? " onClick="self.close()">
</div>
</form>
<iframe width=0 height=0 name="saveWin"></iframe>
</div>
</body>
<script type="text/javascript">
function doSubmit(fbox){
	//Ҫ??Ҫ?жϴ?С?أ?
	var fileName = fbox.blob.value;
	if(!fileName){
		alert("??ѡ???Զ??????ļ???");
		return;
	}
	//?ļ???
	var temp = fileName.replace(/\\/ig,"/");	
	//??ȡ??չ??
	var ext = fileName.substr(fileName.lastIndexOf(".")+1);
	ext = ext.toLowerCase();	
	
	var action = "do?action=&start=query_img_save&operationId=&img_no=";
	action += "&img_name=" + temp.substr(temp.lastIndexOf("/")+1);
	action += "&img_ext=" + ext;
	
	fbox.action = action;
	
	//ֻ????ͼƬŶ
	var exts = ",jpg,gif,png,bmp,";
	if(exts.indexOf(','+ext+',') < 0){
		alert("ֻ??????չΪΪ" + exts + "???ļ???");
		return;
	}
	
	document.getElementById("btn_yes").disabled = true;
	fbox.submit();
}

//?رմ???
function closeWindow(){
	window.returnValue = 1;
	window.close();
}

function resetButton(){
	document.getElementById("btn_yes").disabled = false;
}

function imgDblClick(src){
	open(src);
}

</script>
</html>
