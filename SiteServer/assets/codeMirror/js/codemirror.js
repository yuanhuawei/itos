var CodeMirrorConfig=window.CodeMirrorConfig||{},CodeMirror=function(){function e(e,t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function t(e,t){for(var n=0;n<e.length;n++)t(e[n])}function n(e){return function(t,n){var i=document.createElement("DIV"),o=document.createElement("DIV"),r=document.createElement("DIV");if(n&&(i.id=n),i.style.position="relative",o.style.position="absolute",o.style.height="100%",o.style.setExpression)try{o.style.setExpression("height","this.previousSibling.offsetHeight + 'px'")}catch(e){}o.style.top="0px",o.style.overflow="hidden",e(i),i.appendChild(t),i.appendChild(o),r.className="CodeMirror-line-numbers",o.appendChild(r)}}function i(e){function t(){r.offsetWidth!=a&&(a=r.offsetWidth,r.style.left="-"+(e.parentNode.style.marginLeft=a+"px"))}function n(){for(var t=20+Math.max(o.body.offsetHeight,e.offsetHeight)-s.offsetHeight,n=Math.ceil(t/10);n>0;n--){var i=document.createElement("DIV");i.appendChild(document.createTextNode(l++)),s.appendChild(i)}r.scrollTop=o.body.scrollTop||o.documentElement.scrollTop||0}var i=e.contentWindow,o=i.document,r=e.nextSibling,s=r.firstChild,l=1,a=null;t(),n(),i.addEventHandler(i,"scroll",n),setInterval(t,500)}function o(i,o){o.dumbTabs?o.tabMode="spaces":o.normalTab&&(o.tabMode="default"),this.options=o=o||{},e(o,CodeMirrorConfig);var r=this.frame=document.createElement("IFRAME");if(o.iframeClass&&(r.className=o.iframeClass),r.frameBorder=0,r.src="javascript:false;",r.style.border="0",r.style.width=o.width,r.style.height=o.height,r.style.display="block",i.appendChild){var s=i;i=function(e){s.appendChild(e)}}o.lineNumbers&&(i=n(i)),i(r,o.containerID),r.CodeMirror=this,this.win=r.contentWindow,"string"==typeof o.parserfile&&(o.parserfile=[o.parserfile]),"string"==typeof o.stylesheet&&(o.stylesheet=[o.stylesheet]);var l=['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head>'];t(o.stylesheet,function(e){l.push('<link rel="stylesheet" type="text/css" href="'+e+'"/>')}),t(o.basefiles.concat(o.parserfile),function(e){l.push('<script type="text/javascript" src="'+o.path+e+'"></script>')}),l.push('</head><body style="border-width: 0;" class="editbox" spellcheck="'+(o.disableSpellcheck?"false":"true")+'"></body></html>');var a=this.win.document;a.open(),a.write(l.join("")),a.close()}return e(CodeMirrorConfig,{stylesheet:"",path:"",parserfile:[],basefiles:["util.js","stringstream.js","select.js","undo.js","editor.js","tokenize.js"],iframeClass:null,passDelay:200,passTime:50,continuousScanning:!1,saveFunction:null,onChange:null,undoDepth:50,undoDelay:800,disableSpellcheck:!0,textWrapping:!0,readOnly:!1,width:"100%",height:"300px",autoMatchParens:!1,parserConfig:null,tabMode:"indent",reindentOnLoad:!1,activeTokens:null,cursorActivity:null,lineNumbers:!1,indentUnit:2}),o.prototype={init:function(){this.options.initCallback&&this.options.initCallback(this),this.options.lineNumbers&&i(this.frame),this.options.reindentOnLoad&&this.reindent()},toggleWrapping:function(){this.editor.toggleWrapping()},getCode:function(){return this.editor.getCode()},setCode:function(e){this.editor.importCode(e)},selection:function(){return this.editor.selectedText()},reindent:function(){this.editor.reindent()},reindentSelection:function(){this.editor.reindentSelection(null)},focus:function(){this.win.focus(),this.editor.selectionSnapshot&&this.win.select.selectCoords(this.win,this.editor.selectionSnapshot)},replaceSelection:function(e){return this.focus(),this.editor.replaceSelection(e),!0},replaceChars:function(e,t,n){this.editor.replaceChars(e,t,n)},getSearchCursor:function(e,t){return this.editor.getSearchCursor(e,t)},undo:function(){this.editor.history.undo()},redo:function(){this.editor.history.redo()},historySize:function(){return this.editor.history.historySize()},clearHistory:function(){this.editor.history.clear()},grabKeys:function(e,t){this.editor.grabKeys(e,t)},ungrabKeys:function(){this.editor.ungrabKeys()},setParser:function(e){this.editor.setParser(e)},cursorPosition:function(e){return this.win.select.ie_selection&&this.focus(),this.editor.cursorPosition(e)},firstLine:function(){return this.editor.firstLine()},lastLine:function(){return this.editor.lastLine()},nextLine:function(e){return this.editor.nextLine(e)},prevLine:function(e){return this.editor.prevLine(e)},lineContent:function(e){return this.editor.lineContent(e)},setLineContent:function(e,t){this.editor.setLineContent(e,t)},insertIntoLine:function(e,t,n){this.editor.insertIntoLine(e,t,n)},selectLines:function(e,t,n,i){this.win.focus(),this.editor.selectLines(e,t,n,i)},nthLine:function(e){for(var t=this.firstLine();e>1&&t!==!1;e--)t=this.nextLine(t);return t},lineNumber:function(e){for(var t=0;e!==!1;)t++,e=this.prevLine(e);return t},jumpToLine:function(e){this.selectLines(this.nthLine(e),0),this.win.focus()},currentLine:function(){return this.lineNumber(this.cursorPosition().line)}},o.InvalidLineHandle={toString:function(){return"CodeMirror.InvalidLineHandle"}},o.replace=function(e){return"string"==typeof e&&(e=document.getElementById(e)),function(t){e.parentNode.replaceChild(t,e)}},o.fromTextArea=function(e,t){function n(){e.value=r.getCode()}function i(t){e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}"string"==typeof e&&(e=document.getElementById(e)),t=t||{},e.style.width&&null==t.width&&(t.width=e.style.width),e.style.height&&null==t.height&&(t.height=e.style.height),null==t.content&&(t.content=e.value),e.form&&("function"==typeof e.form.addEventListener?e.form.addEventListener("submit",n,!1):e.form.attachEvent("onsubmit",n)),e.style.display="none";var r=new o(i,t);return r},o.isProbablySupported=function(){var e;return window.opera?Number(window.opera.version())>=9.52:/Apple Computers, Inc/.test(navigator.vendor)&&(e=navigator.userAgent.match(/Version\/(\d+(?:\.\d+)?)\./))?Number(e[1])>=3:document.selection&&window.ActiveXObject&&(e=navigator.userAgent.match(/MSIE (\d+(?:\.\d*)?)\b/))?Number(e[1])>=6:(e=navigator.userAgent.match(/gecko\/(\d{8})/i))?Number(e[1])>=20050901:(e=navigator.userAgent.match(/AppleWebKit\/(\d+)/))?Number(e[1])>=525:null},o}();