"undefined"==typeof jwplayer&&(jwplayer=function(e){if(jwplayer.api)return jwplayer.api.selectPlayer(e)},jwplayer.version="6.3.3242",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(e){function t(e){return function(){return o(e)}}var n=document,r=window,i=navigator,a=e.utils=function(){};a.exists=function(e){switch(typeof e){case"string":return 0<e.length;case"object":return null!==e;case"undefined":return!1}return!0},a.styleDimension=function(e){return e+(0<e.toString().indexOf("%")?"":"px")},a.getAbsolutePath=function(e,t){if(a.exists(t)||(t=n.location.href),a.exists(e)){var r;if(a.exists(e)){r=e.indexOf("://");var i=e.indexOf("?");r=0<r&&(0>i||i>r)}else r=void 0;if(r)return e;r=t.substring(0,t.indexOf("://")+3);var o,i=t.substring(r.length,t.indexOf("/",r.length+1));0===e.indexOf("/")?o=e.split("/"):(o=t.split("?")[0],o=o.substring(r.length+i.length+1,o.lastIndexOf("/")),o=o.split("/").concat(e.split("/")));for(var l=[],s=0;s<o.length;s++)o[s]&&a.exists(o[s])&&"."!=o[s]&&(".."==o[s]?l.pop():l.push(o[s]));return r+i+"/"+l.join("/")}},a.extend=function(){var e=a.extend.arguments;if(1<e.length){for(var t=1;t<e.length;t++)for(var n in e[t])try{a.exists(e[t][n])&&(e[0][n]=e[t][n])}catch(e){}return e[0]}return null},a.log=function(e,t){"undefined"!=typeof console&&"undefined"!=typeof console.log&&(t?console.log(e,t):console.log(e))};var o=a.userAgentMatch=function(e){return null!==i.userAgent.toLowerCase().match(e)};a.isIE=t(/msie/i),a.isFF=t(/firefox/i),a.isChrome=t(/chrome/i),a.isIOS=t(/iP(hone|ad|od)/i),a.isIPod=t(/iP(hone|od)/i),a.isIPad=t(/iPad/i),a.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),a.isAndroid=function(e){return o(e?RegExp("android.*"+e,"i"):/android/i)},a.isMobile=function(){return a.isIOS()||a.isAndroid()},a.saveCookie=function(e,t){n.cookie="jwplayer."+e+"="+t+"; path=/"},a.getCookies=function(){for(var e={},t=n.cookie.split("; "),r=0;r<t.length;r++){var i=t[r].split("=");0==i[0].indexOf("jwplayer.")&&(e[i[0].substring(9,i[0].length)]=i[1])}return e},a.typeOf=function(e){var t=typeof e;return"object"===t?e?e instanceof Array?"array":t:"null":t},a.translateEventResponse=function(t,n){var r=a.extend({},n);t!=e.events.JWPLAYER_FULLSCREEN||r.fullscreen?"object"==typeof r.data?(r=a.extend(r,r.data),delete r.data):"object"==typeof r.metadata&&a.deepReplaceKeyName(r.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]):(r.fullscreen="true"==r.message,delete r.message);var i,o=["position","duration","offset"];for(i in o)r[o[i]]&&(r[o[i]]=Math.round(1e3*r[o[i]])/1e3);return r},a.flashVersion=function(){if(a.isAndroid())return 0;var e,t=i.plugins;try{if("undefined"!==t&&(e=t["Shockwave Flash"]))return parseInt(e.description.replace(/\D+(\d+)\..*/,"$1"))}catch(e){}if("undefined"!=typeof r.ActiveXObject)try{if(e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseInt(e.GetVariable("$version").split(" ")[1].split(",")[0])}catch(e){}return 0},a.getScriptPath=function(e){for(var t=n.getElementsByTagName("script"),r=0;r<t.length;r++){var i=t[r].src;if(i&&0<=i.indexOf(e))return i.substr(0,i.indexOf(e))}return""},a.deepReplaceKeyName=function(t,n,r){switch(e.utils.typeOf(t)){case"array":for(var i=0;i<t.length;i++)t[i]=e.utils.deepReplaceKeyName(t[i],n,r);break;case"object":for(var a in t){var o;if(n instanceof Array&&r instanceof Array){if(n.length!=r.length)continue;o=n}else o=[n];for(var l=a,i=0;i<o.length;i++)l=l.replace(RegExp(n[i],"g"),r[i]);t[l]=e.utils.deepReplaceKeyName(t[a],n,r),a!=l&&delete t[a]}}return t};var l=a.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};a.getPluginPathType=function(e){if("string"==typeof e){e=e.split("?")[0];var t=e.indexOf("://");if(0<t)return l.ABSOLUTE;var n=e.indexOf("/");return e=a.extension(e),!(0>t&&0>n)||e&&isNaN(e)?l.RELATIVE:l.CDN}},a.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},a.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},a.isYouTube=function(e){return-1<e.indexOf("youtube.com")||-1<e.indexOf("youtu.be")},a.isRtmp=function(e,t){return 0==e.indexOf("rtmp")||"rtmp"==t},a.foreach=function(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n)},a.isHTTPS=function(){return 0==r.location.href.indexOf("https")},a.repo=function(){var t="http://p.jwpcdn.com/"+e.version.split(/\W/).splice(0,2).join("/")+"/";try{a.isHTTPS()&&(t=t.replace("http://","https://ssl."))}catch(e){}return t}}(jwplayer),function(e){var t,n="video/",r={mp4:n+"mp4",vorbis:"audio/ogg",ogg:n+"ogg",webm:n+"webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},i={mp4:r.mp4,f4v:r.mp4,m4v:r.mp4,mov:r.mp4,m4a:r.aac,f4a:r.aac,aac:r.aac,mp3:r.mp3,ogv:r.ogg,ogg:r.vorbis,oga:r.vorbis,webm:r.webm,m3u8:r.hls,hls:r.hls},n="video",n={flv:n,f4v:n,mov:n,m4a:n,m4v:n,mp4:n,aac:n,f4a:n,mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},a=e.extensionmap={};for(t in i)a[t]={html5:i[t]};for(t in n)a[t]||(a[t]={}),a[t].flash=n[t];a.types=r,a.mimeType=function(e){for(var t in r)if(r[t]==e)return t},a.extType=function(e){return a.mimeType(i[e])}}(jwplayer.utils),function(e){var t=e.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},n=document;e.scriptloader=function(r){function i(){o=t.ERROR,s.sendEvent(l.ERROR)}function a(){o=t.COMPLETE,s.sendEvent(l.COMPLETE)}var o=t.NEW,l=jwplayer.events,s=new l.eventdispatcher;e.extend(this,s),this.load=function(){var s=e.scriptloader.loaders[r];if(!s||s.getStatus()!=t.NEW&&s.getStatus()!=t.LOADING){if(e.scriptloader.loaders[r]=this,o==t.NEW){o=t.LOADING;var u=n.createElement("script");u.addEventListener?(u.onload=a,u.onerror=i):u.readyState&&(u.onreadystatechange=function(){("loaded"==u.readyState||"complete"==u.readyState)&&a()}),n.getElementsByTagName("head")[0].appendChild(u),u.src=r}}else s.addEventListener(l.ERROR,i),s.addEventListener(l.COMPLETE,a)},this.getStatus=function(){return o}},e.scriptloader.loaders={}}(jwplayer.utils),function(e){e.trim=function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},e.pad=function(e,t,n){for(n||(n="0");e.length<t;)e=n+e;return e},e.xmlAttribute=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()==t.toLowerCase())return e.attributes[n].value.toString();return""},e.extension=function(e){return e&&"rtmp"!=e.substr(0,4)?(e=e.substring(e.lastIndexOf("/")+1,e.length).split("?")[0].split("#")[0],-1<e.lastIndexOf(".")?e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0):""},e.stringToColor=function(e){return e=e.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2"),3==e.length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)}}(jwplayer.utils),function(e){e.key=function(t){var n,r,i;this.edition=function(){return i&&i.getTime()<(new Date).getTime()?"invalid":n},this.token=function(){return r},e.exists(t)||(t="");try{t=e.tea.decrypt(t,"36QXq4W@GSBV^teR");var a=t.split("/");(n=a[0])||(n="free"),r=a[1],a[2]&&0<parseInt(a[2])&&(i=new Date,i.setTime(String(a[2])))}catch(e){n="invalid"}}}(jwplayer.utils),function(e){var t=e.tea={};t.encrypt=function(e,i){if(0==e.length)return"";var a=t.strToLongs(r.encode(e));1>=a.length&&(a[1]=0);for(var o,l=t.strToLongs(r.encode(i).slice(0,16)),s=a.length,u=a[s-1],c=a[0],d=Math.floor(6+52/s),f=0;0<d--;){f+=2654435769,o=f>>>2&3;for(var p=0;p<s;p++)c=a[(p+1)%s],u=(u>>>5^c<<2)+(c>>>3^u<<4)^(f^c)+(l[3&p^o]^u),u=a[p]+=u}return a=t.longsToStr(a),n.encode(a)},t.decrypt=function(e,i){if(0==e.length)return"";for(var a,o=t.strToLongs(n.decode(e)),l=t.strToLongs(r.encode(i).slice(0,16)),s=o.length,u=o[s-1],c=o[0],d=2654435769*Math.floor(6+52/s);0!=d;){a=d>>>2&3;for(var f=s-1;0<=f;f--)u=o[0<f?f-1:s-1],u=(u>>>5^c<<2)+(c>>>3^u<<4)^(d^c)+(l[3&f^a]^u),c=o[f]-=u;d-=2654435769}return o=t.longsToStr(o),o=o.replace(/\0+$/,""),r.decode(o)},t.strToLongs=function(e){for(var t=Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return t},t.longsToStr=function(e){for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")};var n={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e,t){var i,a,o,l,s,u,c=[],d="",f=n.code;if(u=("undefined"==typeof t?0:t)?r.encode(e):e,s=u.length%3,0<s)for(;3>s++;)d+="=",u+="\0";for(s=0;s<u.length;s+=3)i=u.charCodeAt(s),a=u.charCodeAt(s+1),o=u.charCodeAt(s+2),l=i<<16|a<<8|o,i=l>>18&63,a=l>>12&63,o=l>>6&63,l&=63,c[s/3]=f.charAt(i)+f.charAt(a)+f.charAt(o)+f.charAt(l);return c=c.join(""),c=c.slice(0,c.length-d.length)+d},decode:function(e,t){t="undefined"!=typeof t&&t;var i,a,o,l,s,u,c=[],d=n.code;u=t?r.decode(e):e;for(var f=0;f<u.length;f+=4)i=d.indexOf(u.charAt(f)),a=d.indexOf(u.charAt(f+1)),l=d.indexOf(u.charAt(f+2)),s=d.indexOf(u.charAt(f+3)),o=i<<18|a<<12|l<<6|s,i=o>>>16&255,a=o>>>8&255,o&=255,c[f/4]=String.fromCharCode(i,a,o),64==s&&(c[f/4]=String.fromCharCode(i,a)),64==l&&(c[f/4]=String.fromCharCode(i));return l=c.join(""),t?r.decode(l):l}},r={encode:function(e){return e=e.replace(/[\u0080-\u07ff]/g,function(e){return e=e.charCodeAt(0),String.fromCharCode(192|e>>6,128|63&e)}),e=e.replace(/[\u0800-\uffff]/g,function(e){return e=e.charCodeAt(0),String.fromCharCode(224|e>>12,128|e>>6&63,128|63&e)})},decode:function(e){return e=e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){return e=(15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2),String.fromCharCode(e)}),e=e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){return e=(31&e.charCodeAt(0))<<6|63&e.charCodeAt(1),String.fromCharCode(e)})}}}(jwplayer.utils),function(e){e.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}}(jwplayer),function(e){var t=jwplayer.utils;e.eventdispatcher=function(e,n){var r,i;this.resetEventListeners=function(){r={},i=[]},this.resetEventListeners(),this.addEventListener=function(e,n,i){try{t.exists(r[e])||(r[e]=[]),"string"==t.typeOf(n)&&(n=new Function("return "+n)()),r[e].push({listener:n,count:i})}catch(e){t.log("error",e)}return!1},this.removeEventListener=function(e,n){if(r[e]){try{for(var i=0;i<r[e].length;i++)if(r[e][i].listener.toString()==n.toString()){r[e].splice(i,1);break}}catch(e){t.log("error",e)}return!1}},this.addGlobalListener=function(e,n){try{"string"==t.typeOf(e)&&(e=new Function("return "+e)()),i.push({listener:e,count:n})}catch(e){t.log("error",e)}return!1},this.removeGlobalListener=function(e){if(e){try{for(var n=0;n<i.length;n++)if(i[n].listener.toString()==e.toString()){i.splice(n,1);break}}catch(e){t.log("error",e)}return!1}},this.sendEvent=function(a,o){if(t.exists(o)||(o={}),t.extend(o,{id:e,version:jwplayer.version,type:a}),n&&t.log(a,o),"undefined"!=t.typeOf(r[a]))for(var l=0;l<r[a].length;l++){try{r[a][l].listener(o)}catch(e){t.log("There was an error while handling a listener: "+e.toString(),r[a][l].listener)}r[a][l]&&(1===r[a][l].count?delete r[a][l]:0<r[a][l].count&&(r[a][l].count-=1))}for(l=0;l<i.length;l++){try{i[l].listener(o)}catch(e){t.log("There was an error while handling a listener: "+e.toString(),i[l].listener)}i[l]&&(1===i[l].count?delete i[l]:0<i[l].count&&(i[l].count-=1))}}}}(jwplayer.events),function(e){var t={},n={};e.plugins=function(){},e.plugins.loadPlugins=function(r,i){return n[r]=new e.plugins.pluginloader(new e.plugins.model(t),i),n[r]},e.plugins.registerPlugin=function(n,r,i,a){var o=e.utils.getPluginName(n);t[o]||(t[o]=new e.plugins.plugin(n)),t[o].registerPlugin(n,r,i,a)}}(jwplayer),function(e){e.plugins.model=function(t){this.addPlugin=function(n){var r=e.utils.getPluginName(n);return t[r]||(t[r]=new e.plugins.plugin(n)),t[r]},this.getPlugins=function(){return t}}}(jwplayer),function(e){var t=jwplayer.utils,n=jwplayer.events;e.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2},e.plugin=function(r){function i(){switch(t.getPluginPathType(r)){case t.pluginPathType.ABSOLUTE:return r;case t.pluginPathType.RELATIVE:return t.getAbsolutePath(r,window.location.href)}}function a(){c=setTimeout(function(){d=t.loaderstatus.COMPLETE,f.sendEvent(n.COMPLETE)},1e3)}function o(){d=t.loaderstatus.ERROR,f.sendEvent(n.ERROR)}var l,s,u,c,d=t.loaderstatus.NEW,f=new n.eventdispatcher;t.extend(this,f),this.load=function(){if(d==t.loaderstatus.NEW)if(0<r.lastIndexOf(".swf"))l=r,d=t.loaderstatus.COMPLETE,f.sendEvent(n.COMPLETE);else if(t.getPluginPathType(r)==t.pluginPathType.CDN)d=t.loaderstatus.COMPLETE,f.sendEvent(n.COMPLETE);else{d=t.loaderstatus.LOADING;var e=new t.scriptloader(i());e.addEventListener(n.COMPLETE,a),e.addEventListener(n.ERROR,o),e.load()}},this.registerPlugin=function(e,r,i,a){c&&(clearTimeout(c),c=void 0),u=r,i&&a?(l=a,s=i):"string"==typeof i?l=i:"function"==typeof i?s=i:!i&&!a&&(l=e),d=t.loaderstatus.COMPLETE,f.sendEvent(n.COMPLETE)},this.getStatus=function(){return d},this.getPluginName=function(){return t.getPluginName(r)},this.getFlashPath=function(){if(l)switch(t.getPluginPathType(l)){case t.pluginPathType.ABSOLUTE:return l;case t.pluginPathType.RELATIVE:return 0<r.lastIndexOf(".swf")?t.getAbsolutePath(l,window.location.href):t.getAbsolutePath(l,i())}return null},this.getJS=function(){return s},this.getTarget=function(){return u},this.getPluginmode=function(){return"undefined"!=typeof l&&"undefined"!=typeof s?e.pluginmodes.HYBRID:"undefined"!=typeof l?e.pluginmodes.FLASH:"undefined"!=typeof s?e.pluginmodes.JAVASCRIPT:void 0},this.getNewInstance=function(e,t,n){return new s(e,t,n)},this.getURL=function(){return r}}}(jwplayer.plugins),function(e){var t=e.utils,n=e.events;e.plugins.pluginloader=function(r,i){function a(){c?f.sendEvent(n.ERROR,{message:l}):u||(u=!0,s=t.loaderstatus.COMPLETE,f.sendEvent(n.COMPLETE))}function o(){if(d||a(),!u&&!c){var n,i=0,o=r.getPlugins();for(n in d){var s=t.getPluginName(n),f=o[s],s=f.getJS(),p=f.getTarget(),f=f.getStatus();f==t.loaderstatus.LOADING||f==t.loaderstatus.NEW?i++:s&&(!p||parseFloat(p)>parseFloat(e.version))&&(c=!0,l="Incompatible player version",a())}0==i&&a()}}var l,s=t.loaderstatus.NEW,u=!1,c=!1,d=i,f=new n.eventdispatcher;t.extend(this,f),this.setupPlugins=function(e,n,i){var a,o={length:0,plugins:{}},l=0,s={},u=r.getPlugins();for(a in n.plugins){var c=t.getPluginName(a),d=u[c],f=d.getFlashPath(),p=d.getJS(),g=d.getURL();f&&(o.plugins[f]=t.extend({},n.plugins[a]),o.plugins[f].pluginmode=d.getPluginmode(),o.length++);try{if(p&&n.plugins&&n.plugins[g]){var h=document.createElement("div");h.id=e.id+"_"+c,h.style.position="absolute",h.style.top=0,h.style.zIndex=l+10,s[c]=d.getNewInstance(e,t.extend({},n.plugins[g]),h),l++,e.onReady(i(s[c],h,!0)),e.onResize(i(s[c],h))}}catch(e){t.log("ERROR: Failed to load "+c+".")}}return e.plugins=s,o},this.load=function(){if(!t.exists(i)||"object"==t.typeOf(i)){s=t.loaderstatus.LOADING;for(var e in i)if(t.exists(e)){var a=r.addPlugin(e);a.addEventListener(n.COMPLETE,o),a.addEventListener(n.ERROR,p)}a=r.getPlugins();for(e in a)a[e].load()}o()};var p=this.pluginFailed=function(){c||(c=!0,l="File not found",a())};this.getStatus=function(){return s}}}(jwplayer),function(e){e.playlist=function(t){var n=[];if("array"==e.utils.typeOf(t))for(var r=0;r<t.length;r++)n.push(new e.playlist.item(t[r]));else n.push(new e.playlist.item(t));return n}}(jwplayer),function(e){var t=e.item=function(n){var r=jwplayer.utils,i=r.extend({},t.defaults,n);i.tracks=r.exists(n.tracks)?n.tracks:[],0==i.sources.length&&(i.sources=[new e.source(i)]);for(var a=0;a<i.sources.length;a++){var o=i.sources[a].default;i.sources[a].default=!!o&&"true"==o.toString(),i.sources[a]=new e.source(i.sources[a])}if(i.captions&&!r.exists(n.tracks)){for(n=0;n<i.captions.length;n++)i.tracks.push(i.captions[n]);delete i.captions}for(a=0;a<i.tracks.length;a++)i.tracks[a]=new e.track(i.tracks[a]);return i};t.defaults={description:"",image:"",mediaid:"",title:"",sources:[],tracks:[]}}(jwplayer.playlist),function(e){var t=jwplayer.utils,n={file:void 0,label:void 0,type:void 0,default:void 0};e.source=function(e){var r,i=t.extend({},n);for(r in n)t.exists(e[r])&&(i[r]=e[r],delete e[r]);return i.type&&0<i.type.indexOf("/")&&(i.type=t.extensionmap.mimeType(i.type)),"m3u8"==i.type&&(i.type="hls"),"smil"==i.type&&(i.type="rtmp"),i}}(jwplayer.playlist),function(e){var t=jwplayer.utils,n={file:void 0,label:void 0,kind:"captions",default:!1};e.track=function(e){var r=t.extend({},n);e||(e={});for(var i in n)t.exists(e[i])&&(r[i]=e[i],delete e[i]);return r}}(jwplayer.playlist),function(e){var t=e.utils,n=e.events,r=document,i=e.embed=function(a){function o(e){s(u,h+e.message)}function l(){s(u,h+"No playable sources found")}function s(e,n){if(f.fallback){var r=e.style;r.backgroundColor="#000",r.color="#FFF",r.width=t.styleDimension(f.width),r.height=t.styleDimension(f.height),r.display="table",r.opacity=1;var r=document.createElement("p"),i=r.style;i.verticalAlign="middle",i.textAlign="center",i.display="table-cell",i.font="15px/20px Arial, Helvetica, sans-serif",r.innerHTML=n.replace(":",":<br>"),e.innerHTML="",e.appendChild(r)}}var u,c,d,f=new i.config(a.config),p=f.width,g=f.height,h="Error loading player: ",y=e.plugins.loadPlugins(a.id,f.plugins);return f.fallbackDiv&&(d=f.fallbackDiv,delete f.fallbackDiv),f.id=a.id,c=r.getElementById(a.id),u=r.createElement("div"),u.id=c.id,u.style.width=0<p.toString().indexOf("%")?p:p+"px",u.style.height=0<g.toString().indexOf("%")?g:g+"px",c.parentNode.replaceChild(u,c),e.embed.errorScreen=s,y.addEventListener(n.COMPLETE,function(){if("array"==t.typeOf(f.playlist)&&2>f.playlist.length&&(0==f.playlist.length||!f.playlist[0].sources||0==f.playlist[0].sources.length))l();else if(y.getStatus()==t.loaderstatus.COMPLETE){for(var e=0;e<f.modes.length;e++)if(f.modes[e].type&&i[f.modes[e].type]){var r=t.extend({},f),s=new i[f.modes[e].type](u,f.modes[e],r,y,a);if(s.supportsConfig()){s.addEventListener(n.ERROR,o),s.embed(),e=a,r=r.events,s=void 0;for(s in r)"function"==typeof e[s]&&e[s].call(e,r[s]);return a}}f.fallback?(t.log("No suitable players found and fallback enabled"),new i.download(u,f,l)):(t.log("No suitable players found and fallback disabled"),u.parentNode.replaceChild(d,u))}}),y.addEventListener(n.ERROR,function(e){s(u,"Could not load plugins: "+e.message)}),y.load(),a}}(jwplayer),function(e){function t(e){if(e.playlist)for(var t=0;t<e.playlist.length;t++)e.playlist[t]=new i(e.playlist[t]);else{var r,t={};for(r in i.defaults)n(e,t,r);t.sources||(e.levels?(t.sources=e.levels,delete e.levels):(r={},n(e,r,"file"),n(e,r,"type"),t.sources=r.file?[r]:[])),e.playlist=[new i(t)]}}function n(e,t,n){r.exists(e[n])&&(t[n]=e[n],delete e[n])}var r=e.utils,i=e.playlist.item;(e.embed.config=function(n){var i={fallback:!0,height:270,primary:"html5",width:480,base:n.base?n.base:r.getScriptPath("jwplayer.js")};n=r.extend(i,e.defaults,n);var i={type:"html5",src:n.base+"jwplayer.html5.js"},a={type:"flash",src:n.base+"jwplayer.flash.swf"};return n.modes="flash"==n.primary?[a,i]:[i,a],n.listbar&&(n.playlistsize=n.listbar.size,n.playlistposition=n.listbar.position),n.flashplayer&&(a.src=n.flashplayer),n.html5player&&(i.src=n.html5player),t(n),n}).addConfig=function(e,n){return t(n),r.extend(e,n)}}(jwplayer),function(e){var t=e.utils,n=document;e.embed.download=function(e,r,i){function a(e,t){for(var r=n.querySelectorAll(e),i=0;i<r.length;i++)for(var a in t)r[i].style[a]=t[a]}function o(e,t,r){return e=n.createElement(e),t&&(e.className="jwdownload"+t),r&&r.appendChild(e),e}var l,s,u=t.extend({},r),c=u.width?u.width:480,d=u.height?u.height:320;r=r.logo?r.logo:{prefix:t.repo(),file:"logo.png",margin:10};var f,p;p=u.playlist;var g,h,u=["mp4","aac","mp3"];if(p&&p.length){for(g=p[0],h=g.sources,p=0;p<h.length;p++){var y=h[p],E=y.type?y.type:t.extensionmap.extType(t.extension(y.file));if(y.file)for(p in u)E==u[p]?(l=y.file,s=g.image):t.isYouTube(y.file)&&(f=y.file)}l?(i=l,e&&(l=o("a","display",e),o("div","icon",l),o("div","logo",l),i&&l.setAttribute("href",t.getAbsolutePath(i))),i="#"+e.id+" .jwdownload",e.style.width="",e.style.height="",a(i+"display",{width:t.styleDimension(Math.max(320,c)),height:t.styleDimension(Math.max(180,d)),background:"black center no-repeat "+(s?"url("+s+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),a(i+"display div",{position:"absolute",width:"100%",height:"100%"}),a(i+"logo",{top:r.margin+"px",right:r.margin+"px",background:"top right no-repeat url("+r.prefix+r.file+")"}),a(i+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):f?(r=f,e=o("embed","",e),e.src="http://www.youtube.com/v/"+/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i.exec(r).slice(1).join(""),e.type="application/x-shockwave-flash",e.width=c,e.height=d):i()}}}(jwplayer),function(e){var t=e.utils,n=e.events,r={};(e.embed.flash=function(i,a,o,l,s){function u(e,t,n){var r=document.createElement("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function c(e,t,n){return function(){try{n&&document.getElementById(s.id+"_wrapper").appendChild(t);var r=document.getElementById(s.id).getPluginConfig("display");"function"==typeof e.resize&&e.resize(r.width,r.height),t.style.left=r.x,t.style.top=r.h}catch(e){}}}function d(e){if(!e)return{};var n,r={},i=[];for(n in e){var a=t.getPluginName(n),o=e[n];i.push(n);for(var l in o)r[a+"."+l]=o[l]}return r.plugins=i.join(","),r}var f=new e.events.eventdispatcher,p=t.flashVersion();t.extend(this,f),this.embed=function(){if(o.id=s.id,10>p)return f.sendEvent(n.ERROR,{message:"Flash version must be 10.0 or greater"}),!1;var e,g=t.extend({},o);i.id+"_wrapper"==i.parentNode.id?document.getElementById(i.id+"_wrapper"):(e=document.createElement("div"),e.id=i.id+"_wrapper",e.style.position="relative",e.style.width=t.styleDimension(g.width),e.style.height=t.styleDimension(g.height),i.parentNode.replaceChild(e,i),e.appendChild(i)),e=l.setupPlugins(s,g,c),0<e.length?t.extend(g,d(e.plugins)):delete g.plugins,"undefined"!=typeof g["dock.position"]&&"false"==g["dock.position"].toString().toLowerCase()&&(g.dock=g["dock.position"],delete g["dock.position"]),e=g.wmode?g.wmode:g.height&&40>=g.height?"transparent":"opaque";for(var h="height width modes events primary base fallback volume".split(" "),y=0;y<h.length;y++)delete g[h[y]];var E,h=t.getCookies();for(E in h)"undefined"==typeof g[E]&&(g[E]=h[E]);E=window.location.pathname.split("/"),E.splice(E.length-1,1),E=E.join("/"),g.base=E+"/",r[i.id]=g,t.isIE()?(g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%" id="'+i.id+'" name="'+i.id+'" tabindex=0"">',g+='<param name="movie" value="'+a.src+'">',g+='<param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always">',g+='<param name="seamlesstabbing" value="true">',g+='<param name="wmode" value="'+e+'">',g+='<param name="bgcolor" value="#000000">',g+="</object>",i.outerHTML=g,g=document.getElementById(i.id)):(g=document.createElement("object"),g.setAttribute("type","application/x-shockwave-flash"),g.setAttribute("data",a.src),g.setAttribute("width","100%"),g.setAttribute("height","100%"),g.setAttribute("bgcolor","#000000"),g.setAttribute("id",i.id),g.setAttribute("name",i.id),g.setAttribute("tabindex",0),u(g,"allowfullscreen","true"),u(g,"allowscriptaccess","always"),u(g,"seamlesstabbing","true"),u(g,"wmode",e),i.parentNode.replaceChild(g,i)),s.container=g,s.setPlayer(g,"flash")},this.supportsConfig=function(){if(p){if(!o)return!0;if("string"==t.typeOf(o.playlist))return!0;try{var e=o.playlist[0].sources;if("undefined"==typeof e)return!0;for(var n=0;n<e.length;n++){var r;if(r=e[n].file){var i=e[n].file,a=e[n].type;if(t.isYouTube(i)||t.isRtmp(i,a)||"hls"==a)r=!0;else{var l=t.extensionmap[a?a:t.extension(i)];r=!!l&&!!l.flash}}if(r)return!0}}catch(e){}}return!1}}).getVars=function(e){return r[e]}}(jwplayer),function(e){var t=e.utils,n=t.extensionmap,r=e.events;e.embed.html5=function(i,a,o,l,s){function u(e,t,n){return function(){try{var r=document.querySelector("#"+i.id+" .jwmain");n&&r.appendChild(t),"function"==typeof e.resize&&(e.resize(r.clientWidth,r.clientHeight),setTimeout(function(){e.resize(r.clientWidth,r.clientHeight)},400)),t.left=r.style.left,t.top=r.style.top}catch(e){}}}function c(e){d.sendEvent(e.type,{message:"HTML5 player not found"})}var d=this,f=new r.eventdispatcher;t.extend(d,f),d.embed=function(){if(e.html5){l.setupPlugins(s,o,u),i.innerHTML="";var n=e.utils.extend({},o);delete n.volume,n=new e.html5.player(n),s.container=document.getElementById(s.id),s.setPlayer(n,"html5")}else n=new t.scriptloader(a.src),n.addEventListener(r.ERROR,c),n.addEventListener(r.COMPLETE,d.embed),n.load()},d.supportsConfig=function(){if(e.vid.canPlayType)try{if("string"==t.typeOf(o.playlist))return!0;for(var r=o.playlist[0].sources,i=0;i<r.length;i++){var a,l=r[i].file,s=r[i].type;if(null!==navigator.userAgent.match(/BlackBerry/i)||t.isAndroid()&&("m3u"==t.extension(l)||"m3u8"==t.extension(l))||t.isRtmp(l,s))a=!1;else{var u,c=n[s?s:t.extension(l)];if(!c||c.flash&&!c.html5)u=!1;else{var d=c.html5,f=e.vid;if(d)try{u=!!f.canPlayType(d)}catch(e){u=!1}else u=!0}a=u}if(a)return!0}}catch(e){}return!1}}}(jwplayer),function(e){var t=e.embed,n=e.utils,r=n.extend(function(r){var i=n.repo(),a=r.config,o=a.plugins,l=a.analytics,s=i+"jwpsrv.js",u=i+"sharing.js",c=i+"related.js",d=i+"gapro.js",f=new e.utils.key(e.key).edition(),o=o?o:{};return"ads"==f&&a.advertising&&(a.advertising.client.match(".js$|.swf$")?o[a.advertising.client]=a.advertising:o[i+a.advertising.client+("flash"==a.primary?".swf":".js")]=a.advertising),delete a.advertising,a.key=e.key,a.analytics&&a.analytics.client&&a.analytics.client.match(".js$|.swf$")&&(s=a.analytics.client),delete a.analytics,"free"!=f&&l&&!1===l.enabled||(o[s]=l?l:{}),delete o.sharing,delete o.related,"premium"!=f&&"ads"!=f||(a.sharing&&(a.sharing.client&&a.sharing.client.match(".js$|.swf$")&&(u=a.sharing.client),o[u]=a.sharing),a.related&&(a.related.client&&a.related.client.match(".js$|.swf$")&&(c=a.related.client),o[c]=a.related),a.ga&&(a.ga.client&&a.ga.client.match(".js$|.swf$")&&(d=a.ga.client),o[d]=a.ga),a.skin&&(a.skin=a.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,n.repo()+"skins/$1.xml").toLowerCase())),a.plugins=o,new t(r)},t);e.embed=r}(jwplayer),function(e){var t=[],n=e.utils,r=e.events,i=r.state,a=document,o=e.api=function(t){function l(e,t){return function(n){return t(e,n)}}function s(e,t){return g[e]||(g[e]=[],c(r.JWPLAYER_PLAYER_STATE,function(t){var n=t.newstate;if(t=t.oldstate,n==e){var r=g[n];if(r)for(var i=0;i<r.length;i++)"function"==typeof r[i]&&r[i].call(this,{oldstate:t,newstate:n})}})),g[e].push(t),f}function u(e,t){try{e.jwAddEventListener(t,'function(dat) { jwplayer("'+f.id+'").dispatchEvent("'+t+'", dat); }')}catch(e){n.log("Could not add internal listener")}}function c(e,t){return p[e]||(p[e]=[],h&&y&&u(h,e)),p[e].push(t),f}function d(){if(y){for(var e=arguments[0],t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);if("undefined"!=typeof h&&"function"==typeof h[e])switch(t.length){case 4:return h[e](t[0],t[1],t[2],t[3]);case 3:return h[e](t[0],t[1],t[2]);case 2:return h[e](t[0],t[1]);case 1:return h[e](t[0]);default:return h[e]()}return null}E.push(arguments)}var f=this,p={},g={},h=void 0,y=!1,E=[],m=void 0,v={},w={};f.container=t,f.id=t.id,f.getBuffer=function(){return d("jwGetBuffer")},f.getContainer=function(){return f.container},f.addButton=function(e,t,r,i){try{w[i]=r,d("jwDockAddButton",e,t,"jwplayer('"+f.id+"').callback('"+i+"')",i)}catch(e){n.log("Could not add dock button"+e.message)}},f.removeButton=function(e){d("jwDockRemoveButton",e)},f.callback=function(e){w[e]&&w[e]()},f.forceState=function(e){return d("jwForceState",e),f},f.releaseState=function(){return d("jwReleaseState")},f.getDuration=function(){return d("jwGetDuration")},f.getFullscreen=function(){return d("jwGetFullscreen")},f.getStretching=function(){return d("jwGetStretching")},f.getHeight=function(){return d("jwGetHeight")},f.getLockState=function(){return d("jwGetLockState")},f.getMeta=function(){return f.getItemMeta()},f.getMute=function(){return d("jwGetMute")},f.getPlaylist=function(){var e=d("jwGetPlaylist");return"flash"==f.renderingMode&&n.deepReplaceKeyName(e,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),e},f.getPlaylistItem=function(e){return n.exists(e)||(e=f.getCurrentItem()),f.getPlaylist()[e]},f.getPosition=function(){return d("jwGetPosition")},f.getRenderingMode=function(){return f.renderingMode},f.getState=function(){return d("jwGetState")},f.getVolume=function(){return d("jwGetVolume")},f.getWidth=function(){return d("jwGetWidth")},f.setFullscreen=function(e){return n.exists(e)?d("jwSetFullscreen",e):d("jwSetFullscreen",!d("jwGetFullscreen")),f},f.setStretching=function(e){return d("jwSetStretching",e),f},f.setMute=function(e){return n.exists(e)?d("jwSetMute",e):d("jwSetMute",!d("jwGetMute")),f},f.lock=function(){return f},f.unlock=function(){return f},f.load=function(e){return d("jwLoad",e),f},f.playlistItem=function(e){return d("jwPlaylistItem",parseInt(e)),f},f.playlistPrev=function(){return d("jwPlaylistPrev"),f},f.playlistNext=function(){return d("jwPlaylistNext"),f},f.resize=function(e,t){if("flash"!=f.renderingMode)d("jwResize",e,t);else{var r=a.getElementById(f.id+"_wrapper");r&&(r.style.width=n.styleDimension(e),r.style.height=n.styleDimension(t))}return f},f.play=function(e){return"undefined"==typeof e?(e=f.getState(),d(e==i.PLAYING||e==i.BUFFERING?"jwPause":"jwPlay")):d("jwPlay",e),f},f.pause=function(e){return"undefined"==typeof e?(e=f.getState(),d(e==i.PLAYING||e==i.BUFFERING?"jwPause":"jwPlay")):d("jwPause",e),f},f.stop=function(){return d("jwStop"),f},f.seek=function(e){return d("jwSeek",e),
f},f.setVolume=function(e){return d("jwSetVolume",e),f},f.loadInstream=function(e,t){return m=new o.instream(this,h,e,t)},f.getQualityLevels=function(){return d("jwGetQualityLevels")},f.getCurrentQuality=function(){return d("jwGetCurrentQuality")},f.setCurrentQuality=function(e){d("jwSetCurrentQuality",e)},f.getCaptionsList=function(){return d("jwGetCaptionsList")},f.getCurrentCaptions=function(){return d("jwGetCurrentCaptions")},f.setCurrentCaptions=function(e){d("jwSetCurrentCaptions",e)},f.getControls=function(){return d("jwGetControls")},f.getSafeRegion=function(){return d("jwGetSafeRegion")},f.setControls=function(e){d("jwSetControls",e)},f.destroyPlayer=function(){d("jwPlayerDestroy")};var A={onBufferChange:r.JWPLAYER_MEDIA_BUFFER,onBufferFull:r.JWPLAYER_MEDIA_BUFFER_FULL,onError:r.JWPLAYER_ERROR,onFullscreen:r.JWPLAYER_FULLSCREEN,onMeta:r.JWPLAYER_MEDIA_META,onMute:r.JWPLAYER_MEDIA_MUTE,onPlaylist:r.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:r.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:r.JWPLAYER_PLAYLIST_COMPLETE,onReady:r.API_READY,onResize:r.JWPLAYER_RESIZE,onComplete:r.JWPLAYER_MEDIA_COMPLETE,onSeek:r.JWPLAYER_MEDIA_SEEK,onTime:r.JWPLAYER_MEDIA_TIME,onVolume:r.JWPLAYER_MEDIA_VOLUME,onBeforePlay:r.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:r.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:r.JWPLAYER_DISPLAY_CLICK,onControls:r.JWPLAYER_CONTROLS,onQualityLevels:r.JWPLAYER_MEDIA_LEVELS,onQualityChange:r.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:r.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:r.JWPLAYER_CAPTIONS_CHANGED};n.foreach(A,function(e){f[e]=l(A[e],c)});var P={onBuffer:i.BUFFERING,onPause:i.PAUSED,onPlay:i.PLAYING,onIdle:i.IDLE};return n.foreach(P,function(e){f[e]=l(P[e],s)}),f.remove=function(){if(!y)throw"Cannot call remove() before player is ready";E=[],o.destroyPlayer(this.id)},f.setup=function(t){if(e.embed){var n=a.getElementById(f.id);return n&&(t.fallbackDiv=n),n=f,E=[],o.destroyPlayer(n.id),n=e(f.id),n.config=t,new e.embed(n)}return f},f.registerPlugin=function(t,n,r,i){e.plugins.registerPlugin(t,n,r,i)},f.setPlayer=function(e,t){h=e,f.renderingMode=t},f.detachMedia=function(){if("html5"==f.renderingMode)return d("jwDetachMedia")},f.attachMedia=function(e){if("html5"==f.renderingMode)return d("jwAttachMedia",e)},f.dispatchEvent=function(e,t){if(p[e])for(var r=n.translateEventResponse(e,t),i=0;i<p[e].length;i++)if("function"==typeof p[e][i])try{p[e][i].call(this,r)}catch(e){n.log("There was an error calling back an event handler")}},f.dispatchInstreamEvent=function(e){m&&m.dispatchEvent(e,arguments)},f.callInternal=d,f.playerReady=function(e){for(y=!0,h||f.setPlayer(a.getElementById(e.id)),f.container=a.getElementById(f.id),n.foreach(p,function(e){u(h,e)}),c(r.JWPLAYER_PLAYLIST_ITEM,function(){v={}}),c(r.JWPLAYER_MEDIA_META,function(e){n.extend(v,e.metadata)}),f.dispatchEvent(r.API_READY);0<E.length;)d.apply(this,E.shift())},f.getItemMeta=function(){return v},f.getCurrentItem=function(){return d("jwGetPlaylistIndex")},f};o.selectPlayer=function(e){var r;return n.exists(e)||(e=0),e.nodeType?r=e:"string"==typeof e&&(r=a.getElementById(e)),r?(e=o.playerById(r.id))?e:o.addPlayer(new o(r)):"number"==typeof e?t[e]:null},o.playerById=function(e){for(var n=0;n<t.length;n++)if(t[n].id==e)return t[n];return null},o.addPlayer=function(e){for(var n=0;n<t.length;n++)if(t[n]==e)return e;return t.push(e),e},o.destroyPlayer=function(e){for(var r,i=-1,o=0;o<t.length;o++)t[o].id==e&&(i=o,r=t[o]);return 0<=i&&(e=r.id,o=a.getElementById(e+("flash"==r.renderingMode?"_wrapper":"")),n.clearCss&&n.clearCss("#"+e),o&&("html5"==r.renderingMode&&r.destroyPlayer(),r=a.createElement("div"),r.id=e,o.parentNode.replaceChild(r,o)),t.splice(i,1)),null},e.playerReady=function(t){var n=e.api.playerById(t.id);n?n.playerReady(t):e.api.selectPlayer(t.id).playerReady(t)}}(jwplayer),function(e){e.api.instream=function(e,t,n,r){this.play=function(e){t.jwInstreamPlay(e)},this.pause=function(e){t.jwInstreamPause(e)},this.destroy=function(){t.jwInstreamDestroy()},e.callInternal("jwLoadInstream",n,r?r:{})}}(jwplayer),function(e){var t=e.api,n=t.selectPlayer;t.selectPlayer=function(t){return(t=n(t))?t:{registerPlugin:function(t,n,r){e.plugins.registerPlugin(t,n,r)}}}}(jwplayer));