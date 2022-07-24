<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"  contentType="text/html; charset=UTF-8"%>
<%@ page import="mse.utils.DrawUtils"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<!--使ＩＥ７、ＩＥ８样式在浏览时显示一样的效果-->

<title>银行承兑汇票</title>
<link href="${pageContext.request.contextPath}/css/bill/css_picbill.css" type="text/css" rel="stylesheet">
<style type="text/css">

#bg1 { 
	position:absolute;
	z-index:1;
	width:800px;
	height:484px;
	top:0px;
	left:0px;
}
#page1 {
	position:absolute;
	z-index:3;
	width:800px;
	height:484px;
	top:0px;
	left:0px; 
	visibility: visible;
}
#apDiv1 {
	position:absolute;
	left:114px;
	top:123px;
	width:61px;
	height:15px;
	z-index:1;
}
#apDiv2 {
	position:absolute;
	left:192px;
	top:125px;
	width:37px;
	height:13px;
	z-index:2;
}
#apDiv3 {
	position:absolute;
	left:243px;
	top:127px;
	width:31px;
	height:10px;
	z-index:3;
}
#apDiv4 {
	position:absolute;
	left:632px;
	top:77px;
	width:132px;
	height:17px;
	z-index:4;
}
#apDiv5 {
	position:absolute;
	left:115px;
	top:123px;
	width:64px;
	height:16px;
	z-index:5;
}
#apDiv6 {
	position:absolute;
	left:190px;
	top:123px;
	width:45px;
	height:15px;
	z-index:6;
}
#apDiv7 {
	position:absolute;
	left:248px;
	top:123px;
	width:42px;
	height:15px;
	z-index:7;
}
#apDiv8 {
	position:absolute;
	left:696px;
	top:103px;
	width:24px;
	height:13px;
	z-index:8;
}
#apDiv9 {
	position:absolute;
	left:385px;
	top:137px;
	width:239px;
	height:15px;
	z-index:9;
}
#apDiv10 {
	position:absolute;
	left:662px;
	top:140px;
	width:65px;
	height:15px;
	z-index:10;
}
#apDiv11 {
	position:absolute;
	left:102px;
	top:176px;
	width:333px;
	height:15px;
	z-index:11;
}
#apDiv12 {
	position:absolute;
	left:509px;
	top:179px;
	width:216px;
	height:15px;
	z-index:12;
}
#apDiv13 {
	position:absolute;
	left:168px;
	top:212px;
	width:335px;
	height:15px;
	z-index:13;
}
#apDiv14 {
	position:absolute;
	left:190px;
	top:254px;
	width:348px;
	height:15px;
	z-index:14;
}
#apDiv15 {
	position:absolute;
	left:542px;
	top:264px;
	width:190px;
	height:15px;
	z-index:15;
}
#page2 {
	position:absolute;
	left:46px;
	top:286px;
	width:698px;
	height:184px;
	z-index:11;
	visibility: visible;
}
#apDiv16 {
	position:absolute;
	left:70px;
	top:5px;
	width:244px;
	height:15px;
	z-index:16;
}
#apDiv17 {
	position:absolute;
	left:434px;
	top:5px;
	width:244px;
	height:15px;
	z-index:17;
}
#apDiv18 {
	position:absolute;
	left:70px;
	top:30px;
	width:125px;
	height:15px;
	z-index:18;
}
#apDiv19 {
	position:absolute;
	left:249px;
	top:33px;
	width:89px;
	height:15px;
	z-index:19;
}
#apDiv20 {
	position:absolute;
	left:71px;
	top:57px;
	width:260px;
	height:15px;
	z-index:20;
}
#apDiv21 {
	position:absolute;
	left:68px;
	top:126px;
	width:50px;
	height:15px;
	z-index:21;
}
#apDiv22 {
	position:absolute;
	left:147px;
	top:126px;
	width:50px;
	height:15px;
	z-index:22;
}
#apDiv23 {
	position:absolute;
	left:531px;
	top:127px;
	width:50px;
	height:15px;
	z-index:23;
}
#apDiv24 {
	position:absolute;
	left:614px;
	top:126px;
	width:60px;
	height:15px;
	z-index:13;
}
#apDiv25 {
	position:absolute;
	left:72px;
	top:97px;
	width:143px;
	height:15px;
	z-index:7;
}
#page3 {
	position:absolute;
	left:45px;
	top:286px;
	width:691px;
	height:163px;
	z-index:5;
	visibility: visible;
}
#apDiv26 {
	position:absolute;
	left:69px;
	top:4px;
	width:247px;
	height:15px;
	z-index:25;
}
#apDiv27 {
	position:absolute;
	left:433px;
	top:7px;
	width:257px;
	height:15px;
	z-index:26;
}
#apDiv28 {
	position:absolute;
	left:69px;
	top:29px;
	width:147px;
	height:15px;
	z-index:27;
}
#apDiv29 {
	position:absolute;
	left:250px;
	top:31px;
	width:90px;
	height:15px;
	z-index:28;
}
#apDiv30 {
	position:absolute;
	left:69px;
	top:54px;
	width:275px;
	height:15px;
	z-index:29;
}
#apDiv31 {
	position:absolute;
	left:352px;
	top:42px;
	width:141px;
	height:15px;
	z-index:30;
}
#apDiv32 {
	position:absolute;
	left:561px;
	top:35px;
	width:128px;
	height:15px;
	z-index:31;
}
#apDiv33 {
	position:absolute;
	left:580px;
	top:56px;
	width:105px;
	height:15px;
	z-index:32;
}
#apDiv34 {
	position:absolute;
	left:559px;
	top:84px;
	width:40px;
	height:15px;
	z-index:33;
}
#apDiv35 {
	position:absolute;
	left:612px;
	top:84px;
	width:18px;
	height:15px;
	z-index:34;
}
#apDiv36 {
	position:absolute;
	left:646px;
	top:84px;
	width:18px;
	height:15px;
	z-index:35;
}
#apDiv37 {
	position:absolute;
	left:65px;
	top:99px;
	width:283px;
	height:15px;
	z-index:36;
}
#apDiv38 {
	position:absolute;
	left:80px;
	top:131px;
	width:267px;
	height:15px;
	z-index:37;
}
#apDiv39 {
	position:absolute;
	left:347px;
	top:123px;
	width:144px;
	height:15px;
	z-index:38;
}
#apDiv40 {
	position:absolute;
	left:529px;
	top:129px;
	width:54px;
	height:15px;
	z-index:39;
}
#apDiv41 {
	position:absolute;
	left:611px;
	top:129px;
	width:72px;
	height:15px;
	z-index:40;
}
#page4 {
	position:absolute;
	left:45px;
	top:286px;
	width:693px;
	height:179px;
	z-index:6;
	visibility: visible;
}
#apDiv42 {
	position:absolute;
	left:68px;
	top:5px;
	width:263px;
	height:15px;
	z-index:7;
}
#apDiv43 {
	position:absolute;
	left:432px;
	top:4px;
	width:254px;
	height:15px;
	z-index:8;
}
#apDiv44 {
	position:absolute;
	left:69px;
	top:29px;
	width:151px;
	height:15px;
	z-index:9;
}
#apDiv45 {
	position:absolute;
	left:252px;
	top:32px;
	width:85px;
	height:15px;
	z-index:10;
}
#apDiv46 {
	position:absolute;
	left:69px;
	top:54px;
	width:272px;
	height:15px;
	z-index:11;
}
#apDiv47 {
	position:absolute;
	left:67px;
	top:125px;
	width:52px;
	height:15px;
	z-index:12;
}
#apDiv48 {
	position:absolute;
	left:151px;
	top:125px;
	width:60px;
	height:15px;
	z-index:13;
}
#apDiv49 {
	position:absolute;
	left:568px;
	top:107px;
	width:52px;
	height:15px;
	z-index:14;
}
#apDiv50 {
	position:absolute;
	left:352px;
	top:43px;
	width:140px;
	height:15px;
	z-index:15;
}
#apDiv51 {
	position:absolute;
	left:350px;
	top:127px;
	width:142px;
	height:15px;
	z-index:16;
}
#apDiv52 {
	position:absolute;
	left:648px;
	top:109px;
	width:47px;
	height:15px;
	z-index:17;
}
#page5 {
	position:absolute;
	left:45px;
	top:286px;
	width:700px;
	height:195px;
	z-index:7;
	visibility: visible;
}
#apDiv54 {
	position:absolute;
	left:70px;
	top:3px;
	width:236px;
	height:15px;
	z-index:8;
}
#apDiv53 {
	position:absolute;
	left:434px;
	top:4px;
	width:262px;
	height:15px;
	z-index:9;
}
#apDiv55 {
	position:absolute;
	left:70px;
	top:29px;
	width:155px;
	height:15px;
	z-index:10;
}
#apDiv56 {
	position:absolute;
	left:254px;
	top:33px;
	width:86px;
	height:15px;
	z-index:11;
}
#apDiv57 {
	position:absolute;
	left:70px;
	top:55px;
	width:277px;
	height:15px;
	z-index:12;
}
#apDiv58 {
	position:absolute;
	left:149px;
	top:138px;
	width:55px;
	height:15px;
	z-index:13;
}
#apDiv59 {
	position:absolute;
	left:218px;
	top:138px;
	width:36px;
	height:15px;
	z-index:14;
}
#apDiv60 {
	position:absolute;
	left:267px;
	top:138px;
	width:35px;
	height:15px;
	z-index:15;
}
#apDiv61 {
	position:absolute;
	left:352px;
	top:44px;
	width:140px;
	height:15px;
	z-index:16;
}
#apDiv62 {
	position:absolute;
	left:350px;
	top:125px;
	width:142px;
	height:15px;
	z-index:17;
}
#apDiv63 {
	position:absolute;
	left:80px;
	top:129px;
	width:177px;
	height:15px;
	z-index:8;
}
#apDiv64 {
	position:absolute;
	left:531px;
	top:126px;
	width:52px;
	height:15px;
	z-index:9;
}
#apDiv65 {
	position:absolute;
	left:611px;
	top:126px;
	width:52px;
	height:15px;
	z-index:10;
}
#apDiv66 {
	position:absolute;
	left:648px;
	top:107px;
	width:43px;
	height:15px;
	z-index:8;
}
#LayerOut {
	position:relative;
	top:0;
	left:0;
	z-index:0;
	width:800px;
	height:484px;
}
#apDiv67 {
	position:absolute;
	left:68px;
	top:87px;
	width:40px;
	height:14px;
	z-index:1;
}
#Layer3 {
	position:absolute;
	z-index:50;
	left: 758px;
	width:33px;
	text-align:right;
	top:45px;
}
#bg2 { 

   	background-image:url(${pageContext.request.contextPath}/images/table/yhhp22_bm.jpg);
	position:absolute;
	z-index:3;
	width:800px;
	height:484px;
	top:0px;
	left:0px;
}
#page6 {
	
	position:absolute;
	z-index:3;
	width:800px;
	height:484px;
	top:0px;
	left:0px; 
	visibility: visible;
}
#apDiv68 {
	position:absolute;
	left:94px;
	top:56px;
	width:279px;
	height:25px;
	z-index:1;
}
#apDiv69 {
	position:absolute;
	left:444px;
	top:57px;
	width:326px;
	height:25px;
	z-index:2;
}
#apDiv70 {
	position:absolute;
	left:221px;
	top:332px;
	width:44px;
	height:16px;
	z-index:3;
}
#apDiv71 {
	position:absolute;
	left:283px;
	top:332px;
	width:27px;
	height:16px;
	z-index:4;
}
#apDiv72 {
	position:absolute;
	left:326px;
	top:332px;
	width:19px;
	height:16px;
	z-index:5;
}
#apDiv73 {
	position:absolute;
	left:630px;
	top:332px;
	width:35px;
	height:16px;
	z-index:6;
}
#apDiv74 {
	position:absolute;
	left:684px;
	top:332px;
	width:22px;
	height:16px;
	z-index:7;
}
#apDiv75 {
	position:absolute;
	left:724px;
	top:332px;
	width:21px;
	height:16px;
	z-index:8;
}
#apDiv76 {
	position:absolute;
	left:299px;
	top:379px;
	width:136px;
	height:16px;
	z-index:9;
}
#apDiv77 {
	position:absolute;
	left:496px;
	top:379px;
	width:269px;
	height:16px;
	z-index:10;
}
#apDiv78 {
	position:absolute;
	left:244px;
	top:406px;
	width:521px;
	height:25px;
	z-index:11;
}
#apDiv79 {
	position:absolute;
	width:224px;
	height:16px;
	z-index:16;
	left: 507px;
	top: 211px;
}

</style>

<script>
/////////////////////////////////////////////////////////
function zmFm_func(flag)//1表示 正面， 2表示 反面
{
 var page1 = document.getElementById("page1");
 var page3 = document.getElementById("page3");
 var page6 = document.getElementById("page6");
 var bg2 = document.getElementById("bg2");
	if(flag==1){
			page1.style.display="block";
			page3.style.display="block";
			page6.style.display="none";
			bg2.style.display="none";			
	}
    if(flag==2){
			page1.style.display="none";
			page3.style.display="none";
			page6.style.display="block";
			bg2.style.display="block";	
	}


	try{document.getElementsByName("drag_area")[0].value = (flag==1?"":2);}catch(ex){;};
	//-------------------------
	var pageNo = "<%=/*pageNo*/%>";
	var flag = flag;
	
	$("div[id^='gz'],div[id^='line']").each(function(i){//所有印章与画线
		$(this).css("display", "none");
		if( $(this).attr("pageNo") == pageNo){//是这一页上的印章或画线
			if(flag == 1 && $(this).attr("drag_area") == "default"){
				$(this).css("display", "block");
			}

			else if(flag == 2 && $(this).attr("drag_area") == "2"){
				$(this).css("display", "block");
			}
		}
	});
}
function beforeInitForm(fbox){
	
	zmFm_func(1);
}
</script>
<title>银行汇票</title>
</head>
<body>
<%DrawUtils bill=DrawUtils.getBillObject(request);
	bill.setPrjName(request.getContextPath());
%>
<%=bill.head3() %>
<%=bill.button1() %>

<%=bill.head2() %>
${setseals }
<form name="form1" action="" method="post">
  <input type="hidden" name="drag_area"/>
<div id="Layer3"><span style="text-align:center">
 
    <a control_layer="Layer1"  click_drag_area='1' onClick="zmFm_func(1)" href='Javascript:zmFm_func(1)'>正<br />
      面</a><br />
    <br />
    <a control_layer="Layer2"  click_drag_area='1' onClick="zmFm_func(1)" href='Javascript:zmFm_func(2)'>背<br />
      面</a>
  </span></div>
 
  <div id="LayerOut">
    <div id="bg1" style=" background:url(${pageContext.request.contextPath}/images/table/<%=bill.page("yhhp1.jpg","yhhp2.jpg","yhhp3.jpg","yhhp4.jpg")%>);"></div>
    <div id="page1" style="display:<%=bill.page("block","block","block","block")%>;">
      <div class="" id="apDiv67" innerinput="a70">
        <input tabindex="0" size="4" name="a70" billdatetype="t" style="text-align:right; font-size:12px; font-family:'宋体'; font-weight:100; letter-spacing:7px;text-align:left;line-height:18px !important">
      </div>
      <div class="" id="apDiv4" innerinput="a1">
        <input tabindex="0" size="4" name="a1" billdatetype="t" style="font-size:20px">
      </div>
      <div class="" id="apDiv5" innerinput="a2">
        <input tabindex="0" size="4" name="a2" billdatetype="t" style="text-align:right">
      </div>
      <div class="" id="apDiv6" innerinput="a3">
        <input tabindex="0" size="4" name="a3" billdatetype="t" style="text-align:right">
      </div>
      <div class="" id="apDiv7" innerinput="a4">
        <input tabindex="0" size="4" name="a4" billdatetype="t" style="text-align:right">
      </div>
      <div class="" id="apDiv8" innerinput="a5">
        <input tabindex="0" size="4" name="a5" billdatetype="t">
      </div>
      <div class="" id="apDiv9" innerinput="a6">
        <input tabindex="0" size="4" name="a6" billdatetype="t">
      </div>
      <div class="" id="apDiv10" innerinput="a7">
        <input class="isNumeric" tabindex="0" size="4" name="a7" billdatetype="n">
      </div>
      <div class="" id="apDiv11" innerinput="a8">
        <input tabindex="0" size="4" name="a8" billdatetype="t">
      </div>
      <div class="" id="apDiv12" innerinput="a9">
        <input class="isNumeric" tabindex="0" size="4" name="a9" billdatetype="n">
      </div>
      <div class="" id="apDiv13" innerinput="a10">
        <input tabindex="0" size="4" name="a10" billdatetype="t">
      </div>
      <div id="apDiv79"><input tabindex="0" size="4" name="a79" billdatetype="t" type="<%=bill.page("hidden","text","text","text")%>"></div>
      <div class="" id="apDiv14" innerinput="a11">
        <input tabindex="0" size="4" name="a11" billdatetype="t">
      </div>
      <div class="" id="apDiv15" innerinput="a12">
        <input class="isMoney" tabindex="0" size="4" name="a12" billdatetype="m" style="letter-spacing:12.3px">
      </div>
    </div>
    <div id="page2" style="display:<%=bill.page("block","none","none","none")%>;">
      <div class="" id="apDiv16" innerinput="a13">
        <input tabindex="0" size="4" name="a13" billdatetype="t" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv17" innerinput="a14">
        <input class="isNumeric" tabindex="0" size="4" name="a14" billdatetype="n" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv18" innerinput="a15">
        <input tabindex="0" size="4" name="a15" billdatetype="t" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv19" innerinput="a16">
        <input class="isNumeric" tabindex="0" size="4" name="a16" billdatetype="n" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv20" innerinput="a17">
        <input tabindex="0" size="4" name="a17" billdatetype="t" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv21" innerinput="a18">
        <input tabindex="0" size="4" name="a18" billdatetype="t" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv22" innerinput="a19">
        <input tabindex="0" size="4" name="a19" billdatetype="t" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv23" innerinput="a20">
        <input tabindex="0" size="4" name="a20" billdatetype="t" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv24" innerinput="a21">
        <input tabindex="0" size="4" name="a21" billdatetype="t" type="<%=bill.page("text","hidden","hidden","hidden")%>">
      </div>
    </div>
    <div id="page3" style="display:<%=bill.page("none","block","none","none")%>;">
      <div class="" id="apDiv25" innerinput="a22">
        <input tabindex="0" size="4" name="a22" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv26" innerinput="a23">
        <input tabindex="0" size="4" name="a23" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv27" innerinput="a24">
        <input class="isNumeric" tabindex="0" size="4" name="a24" billdatetype="n" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv28" innerinput="a25">
        <input tabindex="0" size="4" name="a25" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv29" innerinput="a26">
        <input class="isNumeric" tabindex="0" size="4" name="a26" billdatetype="n" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv30" innerinput="a27">
        <input tabindex="0" size="4" name="a27" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv31" innerinput="a28">
        <input tabindex="0" size="4" name="a28" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv32" innerinput="a29">
        <input tabindex="0" size="4" name="a29" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv33" innerinput="a30">
        <input tabindex="0" size="4" name="a30" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv34" innerinput="a31">
        <input class="isDate" tabindex="0" size="4" name="a31" billdatetype="d" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv35" innerinput="a32">
        <input class="isDate" tabindex="0" size="4" name="a32" billdatetype="d" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv36" innerinput="a33">
        <input class="isDate" tabindex="0" size="4" name="a33" billdatetype="d" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv39" innerinput="a34">
        <input class="isMoney" tabindex="0" size="4" name="a34"  style="letter-spacing:7.8px" billdatetype="m" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv63" innerinput="a55">
        <input tabindex="0" size="4" name="a55" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv64" innerinput="a56">
        <input tabindex="0" size="4" name="a56" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
      <div class="" id="apDiv65" innerinput="a57">
        <input tabindex="0" size="4" name="a57" billdatetype="t" type="<%=bill.page("hidden","text","hidden","hidden")%>">
      </div>
    </div>
    <div id="page4" style="display:<%=bill.page("none","none","block","none")%>;" >
      <div class="" id="apDiv51" innerinput="a44">
        <input class="isMoney" tabindex="0" size="4" name="a44" style="letter-spacing:7.8px"  billdatetype="m" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv50" innerinput="a43">
        <input tabindex="0" size="4" name="a43" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv49" innerinput="a40">
        <input tabindex="0" size="4" name="a40" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv48" innerinput="a42">
        <input tabindex="0" size="4" name="a42" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv47" innerinput="a41">
        <input tabindex="0" size="4" name="a41" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv46" innerinput="a66">
        <input tabindex="0" size="4" name="a66" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv45" innerinput="a38">
        <input class="isNumeric" tabindex="0" size="4" name="a38" billdatetype="n" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv44" innerinput="a37">
        <input tabindex="0" size="4" name="a37" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv43" innerinput="a36">
        <input class="isNumeric" tabindex="0" size="4" name="a36" billdatetype="n" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv42" innerinput="a35">
        <input tabindex="0" size="4" name="a35" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
      <div class="" id="apDiv66" innerinput="a58">
        <input tabindex="0" size="4" name="a58" billdatetype="t" type="<%=bill.page("hidden","hidden","text","hidden")%>">
      </div>
    </div>
    <div id="page5" style="display:<%=bill.page("none", "none", "none", "block")%>;">
      <div class="" id="apDiv54" innerinput="a45">
        <input tabindex="0" size="4" name="a45" billdatetype="t" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv53" innerinput="a46">
        <input class="isNumeric" tabindex="0" size="4" name="a46" billdatetype="n" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv55" innerinput="a47">
        <input tabindex="0" size="4" name="a47" billdatetype="t" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv56" innerinput="a48">
        <input class="isNumeric" tabindex="0" size="4" name="a48" billdatetype="n" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv57" innerinput="a49">
        <input tabindex="0" size="4" name="a49" billdatetype="t" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv58" innerinput="a51">
        <input class="isDate" tabindex="0" size="4" name="a51" billdatetype="d" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv59" innerinput="a52">
        <input class="isDate" tabindex="0" size="4" name="a52" billdatetype="d" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv60" innerinput="a53">
        <input class="isDate" tabindex="0" size="4" name="a53" billdatetype="d" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv61" innerinput="a50">
        <input tabindex="0" size="4" name="a50" billdatetype="t" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
      <div class="" id="apDiv62" innerinput="a54">
        <input class="isMoney" tabindex="0" size="4" name="a54" style="letter-spacing:7.8px" billdatetype="m" type="<%=bill.page("hidden","hidden","hidden","text")%>">
      </div>
    </div>
    <div id="bg2" style="display:none"></div>
    <div id="page6" style="display:none">
   	  <div id="apDiv68"><textarea rows="2" style="background:transparent!important;overflow:hidden" name="a61"></textarea></div>
        <div id="apDiv69"><textarea rows="2" style="background:transparent!important; overflow:hidden" name="a62"></textarea></div>
      <div id="apDiv70"><input name="a63"  size="4" class="isDate" /></div>
      <div id="apDiv71"><input name="a64"  size="4" class="isDate" /></div>
      <div id="apDiv72"><input name="a72"  size="4" class="isDate" /></div>
      <div id="apDiv73"><input name="a73"  size="4" class="isDate" /></div>
      <div id="apDiv74"><input name="a67"  size="4" class="isDate" /></div>
      <div id="apDiv75"><input name="a68"  size="4" class="isDate" /></div>
      <div id="apDiv76"><input name="a69"  size="4"/></div>
      <div id="apDiv77"><input name="a71"  size="4"/></div>
      <div id="apDiv78" align="right"><input name="a65"  size="4"  style="letter-spacing:22px;" class="isMoney"/></div>
    </div>
  </div>
  <table border="0"><tr><td height="10">&nbsp;</td></tr></table>
</form>
</body>
</html>