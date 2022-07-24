<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"
	contentType="text/html; charset=UTF-8"%>
<%@ page import="mse.utils.DrawUtils"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>收汇贷记通知书</title>
<style type="text/css">
#LayerOut {
	position:relative;
	top:0;
	left:0;
	z-index:0;
	width:650px;
	height:520px;
	margin-left:10px;
}
#paperBg {
	position:absolute;
	top:0;
	left:0;
	z-index:1;
	width:650px;
	height:520px;
	margin-left:10px;
	}
#LayerBill  {
	position:absolute;
	padding:0 0 0 20px;
	top:2px;
	left:0;
	z-index:2;
	width:650px;
	height:520px;
	margin-left:10px;
}
/*C表单主要表格*/
.billtable {
   width:100%;
   font-family: Tahoma;
   font-size: 12px;
   color:#000;
   white-space:nowrap ;
	border-top: 1px solid #000;		    
    border-left: 0px;	 
    border-right: 1px solid #000;    
    border-bottom: 0px;  
}
.billtable TD {  
    border-top: 0px;    
    border-left: 1px solid #000;    
    border-right: 0px;    
    border-bottom: 1px solid #000;   
    
} 

input.isNumeric {
	font-family:"宋体";
	font-size: 12px;
	font-style:oblique;
	line-height:14px;
	background: none;
}

/*小写金额 代号：m */
input.isMoney {
	font-family:"宋体";
	font-size: 12px;
	font-style:oblique;
	line-height:12px;
	text-align:right;
	letter-spacing:7px
} 
</style>
<link href="${pageContext.request.contextPath}/css/bill/css_tablebill.css" rel="stylesheet" type="text/css" /><!--引用外部样式-->
<link href="${pageContext.request.contextPath}/css/bill/css_black.css" rel="stylesheet" type="text/css" />
</head>
<%DrawUtils bill=DrawUtils.getBillObject(request);
	bill.setPrjName(request.getContextPath());
%>
<%=bill.head3() %>
<%=bill.button1() %>

<%=bill.head2() %>
${setseals }
<body>
<form name="form1" method="post" action="">
<div id="LayerOut">
<div id="paperBg"><img src="${pageContext.request.contextPath}/images/table/paperBg.jpg" width="680px" height="520px"/></div>
<div id="LayerBill">
<br><br><br>
<table width="650" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><br />
      <table width="631" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td width="107">&nbsp;</td>
        <td width="337" >
		<div align="center" style="border-bottom:2px solid #000000"><input name="a11" style="width:100px;font-size:23px; text-align:right; line-height:30px; font-family:'宋体'"/><font size="5">银行</font><input name="a12" style="width:80px;font-size:23px;text-align:right;line-height:30px; font-family:'宋体'" class="title_input"/><font size="5">市分行</font>
		</div>
		</td>
        <td width="170">&nbsp;</td>
        <td width="17">&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td><div align="center">
          <input name="a13"  style='width:80px;font-size:18px;text-align:right'/>
          <font size="3">收汇贷记通知书</font></div></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td><font size="3">NO:</font><input name="a14" class="small_title_input1; isNumeric"  style='width:120px;font-size:16px;'/></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="3">业务编号：<input name='a34' style="width:378px" class="isNumeric"/></td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan="3"><table width="602" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td><table width="602" border="0" cellpadding="0" cellspacing="0" class="billtable">
              <tr>
                <td width='70' height="25"> 收 款 人：</td>
            <td width="221"><input name='a50' style="width:221px"/></td>
            <td width="90" align="center">日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 期：
              </td>
            <td width="221"><input name='a33' style="width:221px" class="isNumeric"/></td>
          </tr>
              <tr>
                <td height="25"> 账&nbsp;&nbsp;&nbsp; 号：</td>
            <td><input name='a16' style="width:220px" class="isNumeric"/></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
              <tr>
                <td height="25"> 开 户 行：</td>
            <td><input name='a17' style="width:220px"/></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
              <tr>
                <td colspan="4"></td>
            </tr>
              <tr>
                <td colspan="2" height="25" width="301">入 账 金 额：
                  <input name='a18' style="width:200px; text-align:right" class="isNumeric"/></td>
            <td colspan="2" width="301">核 销 单 号：
              <input name='a40' style="width:200px" class="isNumeric"/></td>
            </tr>
              <tr>
                <td colspan="2" height="25">收 汇 金 额：
                  <input name='a20' style="width:200px; text-align:right" class="isNumeric"/></td>
            <td colspan="2">申 报 单:
              <input name='a19' style="width:210px"/></td>
            </tr>
              <tr>
                <td colspan="2" height="25">发 票 金 额：
                  <input name='a23' style="width:200px" class="isNumeric"/></td>
            <td colspan="2">付 款 人：
              <input name='a22' style="width:210px"/></td>
            </tr>
              <tr>
                <td colspan="2" height="25">发 票 号 码：
                  <input name='a21' style="width:200px" class="isNumeric"/></td>
            <td colspan="2">付款人国别/地区：
              <input name='a24' style="width:200px"/></td>
            </tr>
              <tr>
                <td colspan="4"><table width="600" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="320" style="border-left:0px;" height="25">费用：/费用承担方：
                      <input name='a25'style="width:165px"/></td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="border-left:0px;" height="25">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/手续费：
                      <input name='a26' style="width:220px; text-align:right" class="isNumeric"/></td>
                    <td colspan="2" width="280">/邮电费：
                      <input name='a27' style="width:200px; text-align:right" class="isNumeric"/></td>
                    </tr>
                  <tr>
                    <td style="border-left:0px;border-bottom:0px;" height="25">国外银行扣费：
                      <input name='a28' style="width:200px; text-align:right" class="isNumeric"/></td>
                    <td colspan="2" style="border-bottom:0px;">备 注：
                      <input name='a90' style="width:210px"/></td>
                    </tr>
                </table></td>
                </tr>
           
              </table></td>
    </tr>
  </table></td>
        <td><%=bill.page("第一联<br>核销专用联","第二联<br>客户回单")%></td>
      </tr>
      <tr>
        <td colspan="3" height="25">经 办： 
          <input name='a29' style="width:88px"/>
          复 核：
          <input name='a30' style="width:88px"/></td>
        <td>&nbsp;</td>
      </tr>
    </table>
      <br /></td>
  </tr>
</table></div></div>
</form>
</body>
</html>



