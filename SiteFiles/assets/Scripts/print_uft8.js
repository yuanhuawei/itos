var forSPrint=new Object;forSPrint.data={artiBodyId:"artibody",titleId:"artibodyTitle",pageLogoId:"pagelogo",pageWayId:"lo_links",pageLogoHtml:"",titleHtml:"",artiBodyHtml:"",pageWayHtml:"",iconUrl:"/sitefiles/assets/print",curPageNum:1,pageUrl:new Array},forSPrint.GetPageInitInfo=function(){var t,n,i,e=new Array,r=new Array;if(r[0]=window.location.href,i=1,null!=document.getElementById("_function_code_page")){var o=document.getElementById("_function_code_page").innerHTML;if(n=/　(<a href=\".*?\">){0,1}\[\d+\](<\/a>){0,1}/gi,e=o.match(n))for(var a=0;a<e.length;a++){var t=new RegExp('<a href="(.*?)">[[0-9]+]</a>',"i");t.exec(e[a])?r[a]=RegExp.$1:(r[a]=window.location.href,i=a+1)}}forSPrint.data.pageUrl=r,forSPrint.data.curPageNum=i,""!=forSPrint.data.pageWayId&&null!=document.getElementById(forSPrint.data.pageWayId)&&(forSPrint.data.pageWayHtml=document.getElementById(forSPrint.data.pageWayId).innerHTML),""!=forSPrint.data.titleId&&null!=document.getElementById(forSPrint.data.titleId)&&(forSPrint.data.titleHtml=document.getElementById(forSPrint.data.titleId).innerHTML),""!=forSPrint.data.artiBodyId&&null!=document.getElementById(forSPrint.data.artiBodyId)&&(forSPrint.data.artiBodyHtml=document.getElementById(forSPrint.data.artiBodyId).innerHTML),""!=forSPrint.data.pageLogoId&&null!=document.getElementById(forSPrint.data.pageLogoId)&&(forSPrint.data.pageLogoHtml=document.getElementById(forSPrint.data.pageLogoId).innerHTML)},forSPrint.Print=function(){forSPrint.GetPageInitInfo();var t='<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />\n<title></title>\n<meta name="Keywords" content="," />\n<meta name="Description" content="" />\n<style type="text/css" media="screen">\n*{margin:0;padding:0; font-family:"宋体";}\nbody {background: #FFF;color:#000; font-size:12px;}\nul,li{list-style:none;}\nul,p,ol{line-height:20px;}\nselect,input{vertical-align:middle;}\nimg{border:0;}\n.f12{font-size:12px; line-height:20px;}\n.f14{font-size:14px;}\nh1{font-size:22px;margin: 0px;border-bottom:1px #7D8388 solid;}\n.from_info{ font-size:12px; text-align:center; color:#000;font-weight:normal}\n#PriCon{font-size:14px;width:560px; text-align:left;}\n#PriCon p{ line-height:23px;margin:15px 0;}\n#PriCon img{border:1px #000 solid;}\n#PriCon.noImg img{display:none;}\n.medialogo{float:right; height:18px;}\n.linkRed01 {text-decoration:underline;color:#000;}\n.linkRed01 a{text-decoration:underline;color:#000;}\na{text-decoration: underline;color: #000; }\na:hover{color: #f00;}\n.selFZ{padding:0 2px; background:#999; border:1px #6f6f6f solid; text-decoration:none; cursor:default; color:#fff;}\n.NselFZ{text-decoration:underlinel; cursor:pointer; padding:0 5px;\n.selFZ,.NselFZ{padding-top:2px;}\n.yqin {display:inline; height:0px; width:0px; position:absolute; text-align:left;}\n.linkRed02 a{text-decoration:none;color:#000;}\n.linkRed02 a:hover{color:#f00;}\n</style>\n<!--[if IE]>\n<style type="text/css" media="screen">\n#printDialog { filter:progid:DXImageTransform.Microsoft.Alpha(opacity=100); filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3, OffY=3,Color="#e0e0e0", Positive="true");}\n</style>\n<![endif]-->\n<style type="text/css" media="print">\n*{margin:0;padding:0; font-family:"宋体";}\nbody {background: #FFF;color:#000; font-size:12px;}\nul,li{list-style:none;}\nul,p,ol{line-height:20px;}\nselect,input{vertical-align:middle;}\nimg{border:0;}\nh1{font-size:22px;margin: 0px;border-bottom:1px #7D8388 solid;}\n.f12{font-size:12px; line-height:20px;}\n.f14{font-size:14px;}\na{text-decoration: underline;color: #000}\na:hover{color: #f00;}\n.selFZ{padding:0 2px; background:#999; border:1px #6f6f6f solid; text-decoration:none; cursor:default; color:#fff;}\n.NselFZ{text-decoration:underlinel; cursor:pointer; padding:0 5px;}\n.selFZ,.NselFZ{padding-top:2px;}\n#PriCon{font-size:14px;width:560px;text-align:left;}\n#PriCon p{line-height:23px;margin:15px 0;}\n#PriCon img{border:1px #000 solid;}\n#PriCon.noImg img{display:none;}\n.medialogo{float:right; height:18px;}\n.linkRed01 {text-decoration:underline;color:#000;}\n.linkRed01 a{text-decoration:underline;color:#000;}\n.yqin {display:inline; height:0px; width:0px; position:absolute; text-align:left;}\n.from_info{ font-size:12px; text-align:center; color:#000;font-weight:normal}\n.linkRed02 a{text-decoration:none;color:#000;}\n.linkRed02 a:hover{color:#f00;}\n#NoPrinter1,#NoPrinter2,#NoPrinter3,#NoPrinter4{display:none;}\n#printDialog { display:none; visibility:hidden;}\n#allIframe { display:none;}\n</style>\n<script language="JavaScript" type="text/javascript">\n<!--//--><![CDATA[//><!--\nvar sPrint = new Object();\nsPrint.data ={\n\tartiBodyId \t: "'+forSPrint.data.artiBodyId+'",\t//页面内主要内容 node id\t\n\ttitleId    \t: "'+forSPrint.data.titleId+'",\t\t//页面标题部分node id\t\n\tpageLogoId \t: "'+forSPrint.data.pageLogoId+'",\t//页面logo容器的id\n\tpageWayId\t: "'+forSPrint.data.pageWayId+'",\t\t//页面路点容器的id\n\t\n\tpageLogoHtml: "'+escape(forSPrint.data.pageLogoHtml)+'",\t//初始显示的   logo html\n\ttitleHtml\t: "'+escape(forSPrint.data.titleHtml)+'",\t\t//初始显示的标题html\n\tartiBodyHtml: "'+escape(forSPrint.data.artiBodyHtml)+'",\t//初始显示的主要内容html\n\tpageWayHtml : "'+escape(forSPrint.data.pageWayHtml)+'",\t//初始页面路点html\n\t\n\ticonUrl\t\t: "'+escape(forSPrint.data.iconUrl)+'",\t//icon地址\n\t\n\tcurPageNum \t: '+forSPrint.data.curPageNum+",\t\t\t\t//当前页码\n\t//相关页的url 从第1页开始\n\tpageUrl    \t: new Array(\n",n=forSPrint.data.pageUrl.length;if(1==n)t+='\t"'+forSPrint.data.pageUrl[0]+'"\n';else{if(!(n>1))throw new Error("forSPrint.data.pageUrl.length < 1");for(var i=0;i<n-1;i++)t+='\t"'+forSPrint.data.pageUrl[i]+'",\n';t+='\t"'+forSPrint.data.pageUrl[n-1]+'"\n'}t+='\t)\n}; \n//--><!]]>\n</script>\n<script language="JavaScript" type="text/javascript">\n<!--//--><![CDATA[//><!--\nvar flag=false;\nfunction DrawImage(ImgD){\n\tvar image=new Image();\n\tvar iwidth = 999;\n\tvar iheight = 21;\n\timage.src=ImgD.src;\n\tif(image.width>0 && image.height>0){\n\t\tflag=true;\n\t\tif(image.width/image.height>= iwidth/iheight){\n\t\t\tif(image.width>iwidth){\n\t\t\t\tImgD.width=iwidth;\n\t\t\t\tImgD.height=(image.height*iwidth)/image.width;\n\t\t\t}else{\n\t\t\t\tImgD.width=image.width;\n\t\t\t\tImgD.height=image.height;\n\t\t\t}\n\t\t}else{\n\t\t\tif(image.height>iheight){\n\t\t\t\tImgD.height=iheight;\n\t\t\t\tImgD.width=(image.width*iheight)/image.height;\n\t\t\t}else{\n\t\t\t\tImgD.width=image.width;\n\t\t\t\tImgD.height=image.height;\n\t\t\t}\n\t\t}\n\t}\n}\n//--><!]]>\n</script>\n</head>\n<body>\n<center>\n  <table width="600" cellspacing="0" id="NoPrinter1" style="border-bottom:1px #DDD9D3 solid;">\n    <tr align="left" valign="middle">\n      <td width="4" height="36"></td>\n      <td class="f14" style="padding-top:2px;">此页面为打印预览页<input name="printImgCheckbox" id="printImgCheckbox" type="checkbox" value="checkbox" checked onClick="sPrint.printImgCboxChg(this);" style="margin: 0px 2px 4px 10px;">打印图片</td>\n      <td width="70" class="f14" style="padding-top:2px;">选择字号：</td>\n      <td width="115" class="f14" valign="top"><table cellspacing="0" class="f14" style="margin-top:8px;">\n          <tr align="left" valign="middle">\n            <td class="NselFZ" id="topadmenu_0" onClick="sPrint.doPriZoom(20);sPrint.ChgFz(0);" height="20">超大</td>\n            <td class="NselFZ" id="topadmenu_1" onClick="sPrint.doPriZoom(16);sPrint.ChgFz(1);">大</td>\n            <td class="selFZ" id="topadmenu_2" onClick="sPrint.doPriZoom(14);sPrint.ChgFz(2);">中</td>\n            <td class="NselFZ" id="topadmenu_3" onClick="sPrint.doPriZoom(12);sPrint.ChgFz(3);">小</td>\n          </tr>\n        </table></td>\n      <td width="90"><a href="javascript:sPrint.Print();"><img src="'+forSPrint.data.iconUrl+'/print.gif" width="80" height="20" alt="打印此页面"/></a></td>\n      <td width="65"><a href="javascript:sPrint.GoBack()"><img src="'+forSPrint.data.iconUrl+'/return.gif" width="64" height="20" alt="返回正文页"/></a></td>\n    </tr>\n  </table>\n  <table width="600" cellspacing="0">\n    <tr align="center">\n      <td width="1" style="background:#DDD9D3;" id="NoPrinter3"></td>\n      <td width="598" valign="top"><table width="560" cellspacing="0" style="margin-top:7px;">\n          <tr valign="top">\n            <td width="181" align="left" id="pagelogo"></td>\n            <td style="padding-top:12px; line-height:21px;" class="f12" id="lo_links"></td>\n          </tr>\n        </table>\n        <table cellspacing="0">\n          <tr>\n            <td height="34"></td>\n          </tr>\n        </table>\n        <table cellspacing="0" width="560">\n          <tr align="center">\n            <td style="font-size:22px; font-weight:bold; line-height:40px;" id="artibodyTitle"></td>\n          </tr>\n        </table>\n        <div id="PriCon"></div>\n\t\t<div id="WzLy" style="font-size:12px; margin:30px 0 40px 0; padding:0 15px; text-align:left; line-height:18px;"> 文章来源：<span id="artiPath"></span></div>\n\t  </td>\n      <td width="1" style="background:#DDD9D3;" id="NoPrinter4"></td>\n    </tr>\n  </table>\n  <table width="600" cellspacing="0" id="NoPrinter2" style="border-top:1px #DDD9D3 solid;">\n    <tr align="left" valign="middle">\n      <td width="4" height="36"></td>\n      <td class="f14" style="padding-top:2px;">此页面为打印预览页<input name="printImgCheckbox2" id="printImgCheckbox2" type="checkbox" value="checkbox" checked onClick="sPrint.printImgCboxChg(this);" style="margin: 0px 2px 4px 10px;">打印图片</td>\n      <td width="70" class="f14" style="padding-top:2px;">选择字号：</td>\n      <td width="115" class="f14" valign="top"><table cellspacing="0" class="f14" style="margin-top:8px;">\n          <tr align="left" valign="middle">\n            <td class="NselFZ" id="topadmenu2_0" onClick="sPrint.doPriZoom(20);sPrint.ChgFz2(0);" height="20">超大</td>\n            <td class="NselFZ" id="topadmenu2_1" onClick="sPrint.doPriZoom(16);sPrint.ChgFz2(1);">大</td>\n            <td class="selFZ" id="topadmenu2_2" onClick="sPrint.doPriZoom(14);sPrint.ChgFz2(2);">中</td>\n            <td class="NselFZ" id="topadmenu2_3" onClick="sPrint.doPriZoom(12);sPrint.ChgFz2(3);">小</td>\n          </tr>\n        </table></td>\n      <td width="90"><a href="javascript:sPrint.Print();"><img src="'+forSPrint.data.iconUrl+'/print.gif" width="80" height="20" alt="打印此页面"/></a></td>\n      <td width="65"><a href="javascript:sPrint.GoBack()"><img src="'+forSPrint.data.iconUrl+'/return.gif" width="64" height="20" alt="返回正文页"/></a></td>\n    </tr>\n  </table>\n</center>\n<!-- print dialog start -->\n<div id="printDialog" style="width:250px; display:none; text-align:center; padding:15px 10px 10px 10px; background:#ecebea; border:1px solid #ddd9d3; position:absolute; right:10px; top:30px;">\n\t<div id="pageTotalInfo" style="padding:0 0 10px 0"></div>\n\t<div id="printBtnSelect"><input type="button" value="打印全部页" onClick="sPrint.PrintAllPage();" />&nbsp;&nbsp;<input type="button" value="打印当前页" onClick="sPrint.PrintCurPage();" /></div>\n\t<div id="onloadInfo" style="padding:5px 0 0 10px;"></div>\n\t<div id="startPrintDiv" style="display:none; padding:10px 0 0 0;"><input type="button" value="&nbsp;打印&nbsp;" onClick=" sPrint.StartPrintAllPage();" />&nbsp;&nbsp;<input type="button" value="取消打印" onClick="sPrint.CancelPrintAllPage();" /></div>\n\t<div style="position:absolute; top:5px; right:3px; width:20px; height:15px; cursor:pointer;" onClick="javascript:sPrint.ClosePrintDialog();"><span onMouseOver="this.style.fontWeight = \'bold\'" onMouseOut="this.style.fontWeight=\'normal\'">×</span></div>\n</div>\n<!-- print dialog end -->\n<!-- iframe start -->\n<div id="allIframe"></div>\n<!-- iframe end -->\n<script language="JavaScript" type="text/javascript">\nsPrint.$ = function(objId){\n\tif(document.getElementById){\n\t\treturn eval(\'document.getElementById("\' + objId + \'")\');\n\t}else if(document.layers){\n\t\treturn eval("document.layers[\'" + objId +"\']");\n\t}else{\n\t\treturn eval(\'document.all.\' + objId);\n\t}\n }\n \n//============================= 选择字号 start =====================\nsPrint.doPriZoom = function(size){\n\tvar PriCon = sPrint.$("PriCon");\n\tif(!PriCon){\n\t\treturn;\n\t}\n\tvar PriConChild = PriCon.childNodes;\n\tPriCon.style.fontSize = size + "px";\n\tfor(var i = 0; i < PriConChild.length; i++){\n\t\tif(PriConChild[i].nodeType == 1){\n\t\t\tPriConChild[i].style.fontSize = size + "px";\n\t\t\tPriConChild[i].style.lineHeight = size + size + "px";\n\t\t}\n\t}\n\t//如果加载完毕 更新需要纸张数\n\tif(sPrint.startPrint){\n\t\tsPrint.onloadInfoNode.innerHTML = \'共\' + sPrint.pageTotal +\'页，全部加载完毕，大约需要\' + sPrint.GetNeedPageTotal() + \'页纸\';\n\t}\n}\nsPrint.ChgFz = function(FZBtn_num){\n\tfor(var i=0;i<4;i++){sPrint.$("topadmenu_"+i).className="NselFZ";}\n\tsPrint.$("topadmenu_"+FZBtn_num).className="selFZ";\n\tfor(var i=0;i<4;i++){sPrint.$("topadmenu2_"+i).className="NselFZ";}\n\tsPrint.$("topadmenu2_"+FZBtn_num).className="selFZ";\n}\nsPrint.ChgFz2 = function(FZBtn_num2){\n\tfor(var i=0;i<4;i++){\n\t\tsPrint.$("topadmenu2_"+i).className="NselFZ";\n\t}\n\tsPrint.$("topadmenu2_"+FZBtn_num2).className="selFZ";\n\tfor(var i=0;i<4;i++){\n\t\tsPrint.$("topadmenu_"+i).className="NselFZ";\n\t}\n\tsPrint.$("topadmenu_"+FZBtn_num2).className="selFZ";\n}\n//============================= 选择字号 end =====================\n\n//print dialog 滚动\nsPrint.Scroll = function(o){\n\tvar initTop = parseInt(o.style.top);\n\twindow.onscroll = function(){\n\t\to.style.top = initTop + document.body.scrollTop + "px";\t\t\n   } \n}\n\n//返回断行处理string\nsPrint.BreakWord = function(str,intLen){\n\tvar strTemp = "";\n\tif(str.length > intLen){//考虑换行对其\n\t\tstrTemp = "<br />";\n\t}\n\twhile(str.length > intLen){\n\t\tstrTemp += str.substr(0,intLen)+"<br />";\n\t\tstr = str.substr(intLen,str.length);\n\t}\n\treturn strTemp += str;\n}\n\n\n//打印所需数据信息 对象\nsPrint.pagelogoNode \t= sPrint.$("pagelogo");\t\t\t\t//文章logo node\nsPrint.artibodyTitleNode= sPrint.$("artibodyTitle"); \t//文章标题 node\nsPrint.loLinksNode \t\t= sPrint.$("lo_links");\t\t\t//页面路点 node\nsPrint.priConNode \t\t= sPrint.$("PriCon");\t\t\t//正文node\nsPrint.artiPathNode \t= sPrint.$("artiPath");\t\t\t//文章来源 node\nsPrint.pageTotal \t\t= sPrint.data.pageUrl.length;\t\t//页码总数\nsPrint.printDialog \t\t= sPrint.$("printDialog");\t\t//打印对话框\nsPrint.onloadInfoNode\t= sPrint.$("onloadInfo"); \t\t//加载信息显示 node\nsPrint.allIframeNode\t= sPrint.$("allIframe");\t\t//加载所有页面的 node\nsPrint.onloadNum \t\t= 0;\t\t\t\t\t\t\t//当前开始加载页的索引序列值\nsPrint.startPrint \t\t= false;\t\t\t\t\t\t//当前是否已经将所有内容写入此页中 并准备打印  适用月多页打印情况\nsPrint.heightPerPage \t= 800; \t\t\t\t\t\t\t//每页纸可以打印的高度\nsPrint.pageTotalInfoNode = sPrint.$("pageTotalInfo");\t//页面总数信息\nsPrint.printBtnSelectNode = sPrint.$("printBtnSelect");\t//是否打印选择node\nsPrint.printImgCheckbox\t = sPrint.$("printImgCheckbox");\t//是否打印图片 checkbox\nsPrint.printImgCheckbox2 = sPrint.$("printImgCheckbox2");\t//是否打印图片 checkbox 底部\nsPrint.printImgOk \t\t= true;\t//默认是否打印图片\nsPrint.imgMaxHeight\t\t= 900;\t//图片限制最大高度\n\n//打印主函数\nsPrint.Print = function(){\n\t//如果单页数\n\tif(sPrint.pageTotal == 1){\n\t\twindow.print();\n\t}else if(sPrint.pageTotal > 1){//如果多页数\n\t\tif(sPrint.onloadNum == 0){\t//还未加载其他页 提示多页打印否？\n\t\t\t//显示共多少页需要打印\n\t\t\tsPrint.pageTotalInfoNode.innerHTML = \'<p>本文共有\' + sPrint.pageTotal + \'页，您是否全部打印？</p>\';\n\t\t\t//打开多页打印dialog\n\t\t\tsPrint.OpenPrintDialog();\n\t\t}else if(sPrint.onloadNum < sPrint.pageTotal){\t//如果正在加载页 则提示等待\n\t\t\t//alert("请耐心等待，所有页还未加载完毕.\\n单击确定继续加载");\n\t\t\t//打开多页打印dialog\n\t\t\tsPrint.OpenPrintDialog();\n\t\t\treturn;\n\t\t}else if(sPrint.startPrint){//如果多页已经加载完毕 则直接打印后退出\n\t\t\twindow.print();\n\t\t\treturn;\n\t\t}\t\t\n\t}\n}\n\n//仅打印当前页\nsPrint.PrintCurPage = function(){\n\t//关闭打印dialog\n\tsPrint.ClosePrintDialog();\t\n\t//打印当前页\n\twindow.print();\n}\n\n//全部打印\nsPrint.PrintAllPage = function(){\n\t//隐藏打印2个按钮\n\tsPrint.printBtnSelectNode.style.display = "none";\n\t//更改显示页面总数信息\n\tsPrint.pageTotalInfoNode.innerHTML = \'<p>本文共有\' + sPrint.pageTotal + \'页需要加载，请您耐心等待</p>\';\n\t\n\t//加载第一个页面 并显示加载信息\nsPrint.allIframeNode.innerHTML = \'<iframe id="iframeForData" name="iframeForData" src="\'+sPrint.data.pageUrl[0]+ \'?t=\' + new Date().getTime() + \'" width="0" marginwidth="0" height="0" marginheight="0"  scrolling="no" frameborder="0" onload="sPrint.OnloadBack();" onerror="return true;"></iframe>\';\n\tsPrint.onloadNum = 1;\n\tsPrint.onloadInfoNode.innerHTML = \'第1页正在加载...\';\n}\n\n//开始打印所有页面\nsPrint.StartPrintAllPage = function(){\t\n\tsPrint.ClosePrintDialog();\t//关闭dialog\t\n\twindow.print();\t//打印\n}\n\n//取消全部打印\nsPrint.CancelPrintAllPage = function(){\t\n\tsPrint.ClosePrintDialog(); //关闭dialog\n}\n\n//返回到正文页\nsPrint.GoBack = function (){\n\tvar steps = -1;\n\tif(sPrint.onloadNum == 0){\n\tsteps = -1;\n\t}else{\n\t\tsteps = (sPrint.onloadNum) * (-1);\n\t}\n\thistory.go(steps);\n}\n\n//所有加载页面的回调函数\nsPrint.OnloadBack = function(){\n\t//如果第一个载入后需要做很多 因为多页情况 合起来打印时 需要使用第一页的document.title、标题、 文章来源等信息\n\tif(sPrint.onloadNum == 1){\n\t\t//更新document.title\n\t\t//document.title = frames[\'iframeForData\'].document.title;\n\t\t//更新标题\n\t\tsPrint.artibodyTitleNode.innerHTML = frames["iframeForData"].document.getElementById(sPrint.data.titleId).innerHTML;\n\t\t//更新文章来源信息 滤掉参数\n\t\tsPrint.artiPathNode.innerHTML = sPrint.BreakWord(frames["iframeForData"].location.href.replace(/\\?.*/gi,\'\'),90);\n\t\t//清空当前页内容 准备按页陆续载入\n\t\tsPrint.priConNode.innerHTML = "";\n\t}\n\n\t//alert(frames[\'iframeForData\'].location +"///"+sPrint.onloadNum);\t\n\t//将该内容插入到页面前进行过滤\n\tsPrint.priConNode.innerHTML += sPrint.HandlerBodyHtml(frames[\'iframeForData\'].document.getElementById(sPrint.data.artiBodyId).innerHTML);//iframe 页里也有GetObj 函数\n\t//输出加载完毕信息\n\tsPrint.onloadInfoNode.innerHTML = \'第\' + sPrint.onloadNum + \'页加载完毕\';\n\t//检测是否还有页面需要加载\n\tif(sPrint.onloadNum < sPrint.pageTotal){//加载下一页 并显示加载信息\n\t\tsPrint.onloadNum++;\n\t\tframes["iframeForData"].location.href = sPrint.data.pageUrl[sPrint.onloadNum - 1] + \'?t=\' + new Date().getTime();\n\t\tsPrint.onloadInfoNode.innerHTML = \'第\'+(sPrint.onloadNum)+\'页正在加载...\';\t\t\n\t}else{//加载完毕 显示加载完毕信息\n\t\t//隐藏 页面总数信息\n\t\tsPrint.pageTotalInfoNode.style.display = "none";\n\t\tsPrint.onloadInfoNode.innerHTML = \'共\' + sPrint.pageTotal +\'页，全部加载完毕，大约需要\' + sPrint.GetNeedPageTotal() + \'页纸\';\n\t\t//显示开始打印按钮\n\t\tsPrint.$("startPrintDiv").style.display = "block";\n\t\t//标记已经写入完毕\n\t\tsPrint.startPrint = true;\n\t}\n}\n\n//处理正文html\nsPrint.HandlerBodyHtml = function(str){\n\tvar strTmp = str;\n\t//滤掉 正文内部文字导航\n\tstrTmp = strTmp.replace(/<!--\\s+正文内部文字导航\\s+:\\s+begin -->[\\s\\S]*<!--\\s+正文内部文字导航\\s+:\\s+end\\s+-->/,"");\n\t//去除 artibody内打印容器以及以后的所有html内容\n\tstrTmp = strTmp.replace(/<span\\s+id=["\']?_function_code_page["\']?>[\\s\\S]*/i, "");\n\t//过滤掉iask关键字的html标记\n\tstrTmp = strTmp.replace(/<span\\s+class=.?yqlink.?>[\\s\\S]*?class=.?akey.?\\s+title=[\\s\\S]*?>([\\s\\S]*?)<\\/a><\\/span>/gi, "$1");\n\t//绑定img onload\n\tstrTmp = strTmp.replace(/<img/gi,"<img onload=\\"sPrint.ResizeImg(this);\\"");\n\treturn strTmp;\n}\n\n//重新定义超高图片高度\nsPrint.ResizeImg = function(obj){\n\tif(obj.height > sPrint.imgMaxHeight){\n\t\tobj.height = sPrint.imgMaxHeight;\n\t\tobj.style.pageBreakAfter = "always";\n\t}\n}\n\n//打开打印dialog\nsPrint.OpenPrintDialog = function(){\n\tsPrint.printDialog.style.display = "block";\n}\n//关闭打印dialog\nsPrint.ClosePrintDialog = function(){\n\tsPrint.printDialog.style.display = "none";\n}\n\n//返回打印机需要纸张数\nsPrint.GetNeedPageTotal = function(){\n\tvar needPageTotal;\n\treturn needPageTotal = Math.round(sPrint.priConNode.offsetHeight/sPrint.heightPerPage);\n}\n\n//是否打印图片\nsPrint.printImgCboxChg = function(obj){\n\tif(obj.checked == true){\t\t\n\t\tsPrint.DisplayBodyImg(true);\n\t}else{\n\t\tsPrint.DisplayBodyImg(false);\n\t}\n}\n\n//是否显示正文图片\nsPrint.DisplayBodyImg = function(bol){\n\tif(bol){\n\t\tsPrint.printImgCheckbox.checked = true;\n\t\tsPrint.printImgCheckbox2.checked = true;\n\t\tsPrint.priConNode.className = "";\n\t\t\n\t\t//显示打印图片前遍历图片 重定义超高图片高度\n\t\tvar imgs = sPrint.priConNode.getElementsByTagName("img");\n\t\tfor(var i = 0; i < imgs.length; i++){\n\t\t\tsPrint.ResizeImg(imgs[i]);\n\t\t}\n\t}else{\n\t\tsPrint.printImgCheckbox.checked = false;\n\t\tsPrint.printImgCheckbox2.checked = false;\n\t\tsPrint.priConNode.className = "noImg";\n\t}\n\t//如果加载完毕 重新计算打印页数\n\tif(sPrint.startPrint){\n\t\tsPrint.onloadInfoNode.innerHTML = \'共\' + sPrint.pageTotal +\'页，全部加载完毕，大约需要\' + sPrint.GetNeedPageTotal() + \'页纸\';\t\n\t}\t\n}\n\n\n//初始化\nsPrint.Init = function(){\n\tdocument.title = "";\t//设置当前页title 以免打印出\t\t\n\tsPrint.pagelogoNode.innerHTML \t= unescape(sPrint.data.pageLogoHtml);\t//显示页面logo\n\tsPrint.loLinksNode.innerHTML \t= unescape(sPrint.data.pageWayHtml).replace(/#000099/g,"#000000");\t//显示页面路点 并使用黑色\n\tsPrint.artibodyTitleNode.innerHTML = unescape(sPrint.data.titleHtml);\t//显示页面标题\n\tsPrint.priConNode.innerHTML \t= sPrint.HandlerBodyHtml(unescape(sPrint.data.artiBodyHtml));\t//显示当前页内容\n\tsPrint.artiPathNode.innerHTML \t= sPrint.BreakWord(location.href,92);\t//显示文章来源url 未考虑断行\n\tsPrint.Scroll(sPrint.printDialog);\t\t//printDialog 滚动\t\n\t//定位printDialog的初始位置\n\t//由css定位\n}\nsPrint.Init();\n//根据sPrint.printImgOk 初始化checkbox 解决ie里刷新后记录当前checkbox状态的bug\nwindow.onload=function(){\n\tif(sPrint.printImgOk){\n\t\tsPrint.DisplayBodyImg(true);\n\t}else{\n\t\tsPrint.DisplayBodyImg(false);\n\t}\n}\n</script>\n</body>\n</html>',document.write(t),document.close()};