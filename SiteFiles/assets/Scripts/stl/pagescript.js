function stlInit(e,t,n){stl_url_ss=e,stl_site_id=t,stl_site_url=n}function stlRefresh(){window.location.reload(!1)}function _random(){for(var e="",t=0;t<10;t++)e+=Math.floor(10*Math.random());return e}function getStlInputParameters(e){var t=document.getElementById(e);if(null!=t){var n=t.getElementsByTagName("input"),s=new Hash;if(null!=n&&n.length>0)for(var a=0;a<n.length;a++){var l=n[a].getAttribute("name");if(null!=l&&l.length>0){var o="";if("radio"==n[a].type||"checkbox"==n[a].type)n[a].checked&&(null!=s.get(l)?(o=s.get(l),o=o+","+n[a].value):o=n[a].value,s.set(l,o.replace(/</g,"_lessthan_")));else if("file"==n[a].type);else if("hidden"==n[a].type){var r=document.getElementById("eWebEditor_"+l);o=r?window.frames("eWebEditor_"+l).window.frames("eWebEditor").document.getElementsByTagName("body")[0].innerHTML:n[a].value,s.set(l,o.replace(/</g,"_lessthan_"))}else o=n[a].value,s.set(l,o.replace(/</g,"_lessthan_"))}}var i=t.getElementsByTagName("textarea");if(null!=i&&i.length>0)for(var a=0;a<i.length;a++){var l=i[a].getAttribute("name");if(null!=l&&l.length>0){s.set(l,i[a].value.replace(/</g,"_lessthan_"));try{var u=FCKeditorAPI.GetInstance(l);void 0!=u&&s.set(l,u.GetXHTML().replace(/</g,"_lessthan_"))}catch(e){}}}var c=t.getElementsByTagName("select");if(null!=c&&c.length>0)for(var a=0;a<c.length;a++){var l=c[a].getAttribute("name");if(null!=l&&l.length>0){var o="";try{for(var d=0;d<c[a].options.length;d++)c[a].options[d].selected&&(o=""!=o?o+","+c[a].options[d].value:c[a].options[d].value);s.set(l,o.replace(/</g,"_lessthan_"))}catch(e){}}}return s}}function stlInputSubmit(resultsPageUrl,ajaxDivID,isSuccessHide,isSuccessReload,successTemplate,failureTemplate,successCallback,successArgument){if($("inputSuccess").style.display="none",$("inputFailure").style.display="none",$("inputTemplate").style.display="none",0!=checkFormValueById(ajaxDivID)){var myhash=getStlInputParameters(ajaxDivID);myhash.set("successTemplate",successTemplate),myhash.set("failureTemplate",failureTemplate);var option={method:"post",parameters:myhash,evalScripts:!0,onSuccess:function(transport){var obj=eval("("+transport.responseText+")");if(obj)if("false"==obj.isSuccess)obj.template.length>0?($("inputTemplate").style.display="",$("inputTemplate").innerHTML=obj.template):($("inputFailure").style.display="",$("inputFailure").innerHTML=obj.message);else if(obj.template.length>0?($("inputTemplate").style.display="",$("inputTemplate").innerHTML=obj.template):($("inputSuccess").style.display="",$("inputSuccess").innerHTML=obj.message),isSuccessHide&&($("inputContainer").style.display="none"),isSuccessReload)setTimeout("stlRefresh()",2e3);else try{successCallback&&eval(successCallback+"("+successArgument+")")}catch(e){}}};new Ajax.Request(resultsPageUrl,option)}}function stlInputReplaceTextarea(e,t,n,s){var a=new FCKeditor(e);a.BasePath=t,a.Config.CustomConfigurationsPath=t+"/my.config.js",a.ToolbarSet="MyToolbarSet",n>0?a.Height=n:a.Height=360,s>0?a.Width=s:a.Width=550,a.ReplaceTextarea()}function stlGetQueryString(e){var t=document.location.search;return null==t||t.length<=1?"":e?"&"+decodeURI(decodeURI(t.substring(1))):decodeURI(decodeURI(t.substring(1)))}function stlGetCrossDomainQueryString(e){var t="",n=document.location.search;return null==n||n.length<=1?"":(t=e?"&"+decodeURI(decodeURI(n.substring(1))):decodeURI(decodeURI(n.substring(1))),t=t.replace("=","%3d"),t=t.replace("&","%26"))}function stlGetQueryStringHash(){var e=document.location.search;return null==e||e.length<=1?null:$H(e.toQueryParams())}function stlGetQueryStringValue(sParam){var sBase=window.location.search,re=eval("/"+sParam+"=([^&]*)/");return re.test(sBase)?RegExp.$1:""}function stlRedirectPage(e,t){var n=stlGetQueryStringHash();n||(n=new Hash),n.set("pageNum",t),window.location.href=e+n.toQueryString()}function stlGetXmlDocumentElement(e){var t;if(document.implementation.createDocument){var n=new DOMParser;t=n.parseFromString(e,"text/xml")}else window.ActiveXObject&&(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e));return t.documentElement}function stlLoadValues(e){var t=$(e);if(t.elements)for(var n=0;n<t.elements.length;n++)if(""!=t.elements[n].name){var s=stlGetQueryStringValue(t.elements[n].name);s&&s.length>0&&(t.elements[n].value=decodeURIComponent(decodeURIComponent(s)))}}function getCookie(e){var t=e+"=",n=document.cookie.indexOf(t);if(n!=-1){n+=t.length;var s=document.cookie.indexOf(";",n);return s==-1&&(s=document.cookie.length),unescape(document.cookie.substring(n,s))}return""}function setCookie(e,t,n){var s=new Date((new Date).getTime()+36e5*n);document.cookie=e+"="+escape(t)+"; path=/; expires="+s.toGMTString()}function delCookie(e){var t=new Date((new Date).getTime());document.cookie=e+"= ; path=/; expires="+t.toGMTString()}function stlRedirect(e,t){t?window.open(e):window.location.href=e}function stlGetTextContent(e){return document.all?e.text:e.textContent}function stlGetNodeText(e){for(var t="",n=0;n<e.childNodes.length;n++)t+=e.childNodes[n].hasChildNodes()?getText(e.childNodes[n]):e.childNodes[n].nodeValue;return t}var stl_url_ss="",stl_site_id="",stl_site_url="";