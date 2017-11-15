<%@ Page Language="C#" Inherits="SiteServer.BackgroundPages.Wcm.ModalGovPublicCategoryAdd" %>
<%@ Register TagPrefix="bairong" Namespace="SiteServer.BackgroundPages.Controls" Assembly="SiteServer.BackgroundPages" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<!--#include file="../inc/header.aspx"-->
</head>

<body>
<!--#include file="../inc/openWindow.html"-->
<form class="form-inline" runat="server">
<asp:Button id="btnSubmit" useSubmitBehavior="false" OnClick="Submit_OnClick" runat="server" style="display:none" />
<bairong:alerts runat="server"></bairong:alerts>

  <table class="table table-noborder table-hover">
	<tr>
	  <td width="120">节点名称：</td>
	  <td><asp:TextBox Columns="25" MaxLength="50" id="CategoryName" runat="server" />
		<asp:RequiredFieldValidator ControlToValidate="CategoryName" errorMessage=" *" foreColor="red" display="Dynamic" runat="server" />
		<asp:RegularExpressionValidator runat="server" ControlToValidate="CategoryName" ValidationExpression="[^']+" errorMessage=" *" foreColor="red" display="Dynamic" /></td>
	</tr>
    <tr>
	  <td>节点代码：</td>
	  <td><asp:TextBox Columns="25" MaxLength="50" id="CategoryCode" runat="server" />
		<asp:RequiredFieldValidator ControlToValidate="CategoryCode" errorMessage=" *" foreColor="red" display="Dynamic" runat="server" />
		<asp:RegularExpressionValidator runat="server" ControlToValidate="CategoryCode" ValidationExpression="[^']+" errorMessage=" *" foreColor="red" display="Dynamic" /></td>
	</tr>
    <asp:PlaceHolder ID="phParentID" runat="server">
	<tr>
	  <td>上级节点：</td>
	  <td><asp:DropDownList ID="ParentID" runat="server"> </asp:DropDownList></td>
	</tr>
    </asp:PlaceHolder>
	<tr>
	  <td>简介：</td>
	  <td><asp:TextBox Columns="60" style="height:60px;" TextMode="MultiLine" id="Summary" runat="server" /></td>
	</tr>
  </table>

</form>
</body>
</html>
