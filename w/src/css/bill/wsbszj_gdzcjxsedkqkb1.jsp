<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"  contentType="text/html; charset=UTF-8"%>
<%@ page import="mse.utils.DrawUtils"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<link href="${pageContext.request.contextPath}/css/bill/css_picbillForPrint.css" type="text/css" rel="stylesheet">
<title>固定资产进项税额抵扣情况表</title>
<style>
.title {
	font-size: 18px;
	color:#000000;
	text-decoration: none;
	font-weight: bold;
	border: 1px none #CCCCCC;
	font-family: "宋体";

}
.title1 {
font-family: "宋体";
font-size: 16px;
font-weight: bold;
text-align: right;
background:none;
letter-spacing: 0px;
word-spacing: normal;
border: 1px none #CCCCCC;
 color:#000000;
}	
}
#b7,#a15{
	text-decoration: none;
	letter-spacing: 7px;
	border: 0px none #CCCCCC;
	text-align: right;
	background:;
	font-family: Verdana;
	font-size:12px;
} 
/*字体颜色*/
.titlebill {
	font-family: "宋体";
	font-size: 18px;
	font-weight: bold;
	color:#000000;
	text-decoration: none;
	text-align:right;
}

/*边框*/
TABLE.thickbordertable{
border: 1px solid #000000;		    
}

/*黑色表格样式*/
TABLE.billtable {
   width:100%;
   font-family: Tahoma;
   font-size: 12px;
   color:#151071;
   white-space:nowrap ;
	border-top: 1px solid #CCC;		    
    border-left: 0px;	 
    border-right: 1px solid #CCC;    
    border-bottom: 0px;  
}
.billtable TD {  
    border-top: 0px;    
    border-left: 1px solid #CCC;
    border-right: 0px;    
    border-bottom: 1px solid #CCC;   
    
}  

/*****************仿真表单表格定义样式*********************************/
TABLE.outtable{
font-family: Tahoma;
font-size: 12px;
color:#151071;
}


TABLE.outtable TD.billtitle{
    font-family: "宋体";
	font-size: 14.7px; 
	color:#151071;
	text-decoration: none;

}
#Layer1 {
	position:absolute;
	left:212px;
	top:27px;
	width:130px;
	height:130px;
	z-index:-1;
	background-image: url(pageContext.request.contextPath}/images/table/kjdz_syqyzyfp_syqyzyfp/tyfpswzv1.1[120X120].gif);
	background-repeat: no-repeat;
}
#Layer2 {
    position:relative;
	top:0;
	left:0;
	z-index:0;
}

#tmp_table {
  background-color:#D7EBFF;
}
.line_height{line-height:17px;}
* html .line_height{line-height:14px;}
#LayerOut {
	position:relative;
	top:0;
	left:0;
	z-index:0;
	width:750px;
	height:280px;
}
#paperBg {
	position:absolute;
	top:0;
	left:0;
	z-index:1;
	width:750px;
	height:280px;
	}
#LayerBill  {
	position:absolute;
	top:0;
	left:0;
	z-index:2;
	width:750px;
	height:280px;
}

</style>
</head>
<body>
<%DrawUtils bill=DrawUtils.getBillObject(request);
	bill.setPrjName(request.getContextPath());
%>
<%=bill.head3() %>
<%=bill.button1() %>

<%=bill.head2() %>
${setseals }
<form id="v_dto" name="form1" method="post" action="">
<div id="LayerOut">
<div id="paperBg"></div>
<div id="LayerBill">
  <table width="750"  border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#E7ECE8">
    <tr>
      <td ><br /><table width="700" border="0" align="center" cellpadding="0" cellspacing="0" class="outtable">
        <tr>
          <td height="25" colspan="2"><table width="700" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center"  style=" font-size:20px; font-weight:bold; color:#151071">固定资产进项税额抵扣情况表</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td style="color:#151071">纳税人识别号:<input name="a33" style="width:180px"  />纳税人名称:<input name="a37" style="width:250px" /></td>
            </tr>
            <tr>
              <td style="color:#151071">所属时期:<input name="a35"  style="width:90px" />至&nbsp;&nbsp;<input name="a36" style="width:90px"/>                &nbsp;填表日期:<input name="a34" style="width:250px" sbsj_input='1'/>金额单位:元(列至角分)</td>
            </tr>
          </table></td>
          </tr>
        <tr>
          <td colspan="2"><table width="650" border="0" align="center" cellpadding="0" cellspacing="0" class="billtable">
            <tr>
              <td width="250" height="30"  bgcolor="#D8DAD7"><div align="center">项 目</div></td>
              <td width="200" bgcolor="#D8DAD7"><div align="center">当期申报抵扣的<br />
                固定资产进项税额</div></td>
              <td width="200" bgcolor="#D8DAD7"><div align="center">当期申报抵扣的<br />
                固定资产进项税额累计</div></td>
            </tr>
            <tr>
              <td height="25" align="center" bgcolor="#D8DAD7">增值税专用发票</td>
              <td bgcolor="#E7ECE8"><input name="b2"    style="background-color:#FFF; text-align:right;border-bottom:1px solid #000000;width:97%" /></td>
              <td bgcolor="#E7ECE8"><input name="b3"  style="text-align:right;;border-bottom:1px solid #000000;width:97%" /></td>
            </tr><tr>
              <td height="25" align="center" bgcolor="#D8DAD7">海关进口增值税专用缴款书</td>
              <td bgcolor="#E7ECE8"><input name="b2"   style="background-color:#FFF;;border-bottom:1px solid #000000;text-align:right;width:97%" /></td>
              <td bgcolor="#E7ECE8"><input name="b3" style="text-align:right;;border-bottom:1px solid #000000;width:97%" /></td>
            </tr>
            <tr>
              <td height="25" bgcolor="#D8DAD7" ><div align="center">合 计</div></td>
              <td bgcolor="#E7ECE8"><input name="a22"  style="background-color:#FFF;;border-bottom:1px solid #000000;text-align:right;width:97%" /></td>
              <td bgcolor="#E7ECE8"><input name="a23" style="text-align:right;;border-bottom:1px solid #000000;width:97%"   /></td>
            </tr>
          </table></td>
        </tr>
        <tr>
          <td colspan="2">&nbsp;</td>
        </tr>
      </table>
        <br />
</td>
    </tr>
  </table>
  </div>
 
</div>
</form>
</body>
</html>
