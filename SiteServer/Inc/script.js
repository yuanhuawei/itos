function isNull(e){return"undefined"==typeof e||(void 0==e||null==e)}function chkSelect(e){var e=e||event,t=this;if(t.getElementsByTagName("input")&&t.getElementsByTagName("input").length>0){if($(t).hasClass("thead"))return;t.className="success"==t.className?"":"success",t.getElementsByTagName("input")[0].checked="success"==t.className}}function loopRows(e,t){if(e){t=t||function(){};for(var c=e.rows,n=0,o=c.length,l=n<o;l?n<o:n>o;){var i=c[n];try{t(i,n)}catch(e){if("break"==e)break}l?n++:n--}}}function selectRows(e,t){for(var c=0;c<e.childNodes.length;c++)if(e.childNodes[c].childNodes.length>0)selectRows(e.childNodes[c],t);else if("checkbox"==e.childNodes[c].type){e.childNodes[c].checked=t;var n=$(e.childNodes[c]),o=n.closest("tr");o.hasClass("thead")||(n.is(":checked")?o.addClass("success"):o.removeClass("success"))}}function showImage(e,t,c,n){if(""==e.value)return document.getElementById(t).setAttribute("href","../assets/icon/empty.gif"),!1;if(e.value.search(/\.bmp|\.jpg|\.jpeg|\.gif|\.png$/i)!=-1){var o=e.value;o&&("~"==o.charAt(0)?o=o.replace("~",c):"@"==o.charAt(0)&&(o=o.replace("@",n))),o&&"//"==o.substr(0,2)&&(o=o.replace("//","/")),document.getElementById(t).setAttribute("href",o)}}function DeleteAttachment(e){document.getElementById(e).value=""}function SelectAttachment(e,t,c){document.getElementById(e).value=t}function _toggleVisible(e,t,c,n){target=_get(e);try{$("#"+e).toggle()}catch(e){"none"==target.style.display?target.style.display="":target.style.display="none"}return _isNull(n)||""==n||("none"==target.style.display?t.src=n:t.src=c),!1}function _toggleTab(e,t){$("#tab"+e).addClass("active"),$("#column"+e).show();for(var c=1;c<=t;c++)c!=e&&($("#tab"+c).removeClass("active"),$("#column"+c).hide())}function _checkCol(e,t,c){for(var n=$("#"+e+" ."+t),o=0;o<n.length;o++)_checkAll(n[o],c)}function _checkFormAll(e){$(":checkbox").each(function(){$(this).attr("checked",e),$(this)[0].checked=e})}function _checkAll(e,t){for(var c=0;c<e.childNodes.length;c++)e.childNodes[c].childNodes.length>0?_checkAll(e.childNodes[c],t):"checkbox"==e.childNodes[c].type&&(e.childNodes[c].checked=t)}function _getCheckBoxCollectionValue(e){var t="";if(e)if(e.length){for(var c=!1,n=0;n<e.length;n++)e[n].checked&&(c=!0,t+=encodeURI(e[n].value)+",");c&&(t=t.substring(0,t.length-1))}else e.checked&&(t=encodeURI(e.value)+"");return t}function _alertCheckBoxCollection(e,t){var c=_getCheckBoxCollectionValue(e);return 0==c.length&&(alert(t),!0)}function _refresh(){window.location.reload(!1)}function _setCookie(e,t,c){var n="";if(void 0!=c){var o=new Date;o.setTime(o.getTime()+36e5*parseFloat(c)),n="; expires="+o.toGMTString()}window.document.cookie=e+"="+escape(t)+n+";path=/"}function _getCookie(e){var t=""+window.document.cookie,c=e+"=";return t.length>0&&(offset=t.indexOf(c),offset!=-1)?(offset+=c.length,end=t.indexOf(";",offset),end==-1&&(end=t.length),unescape(t.substring(offset,end))):null}var _get=function(e){return document.getElementById(e)},_goto=function(e){window.location.href=e};$(function(){$("[rel=tooltip]").tooltip&&$("[rel=tooltip]").tooltip(),$(".left-table tr[treeitemlevel=1]").css("font-size","14px"),$("html").click(function(){window.top&&window.top.hideMenu&&window.top.hideMenu()})});