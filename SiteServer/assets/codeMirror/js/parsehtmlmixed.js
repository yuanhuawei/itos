var HTMLMixedParser=Editor.Parser=function(){function e(e){function n(){var e=a.next();return"<"==e.content?i=!0:"xml-tagname"==e.style&&i===!0?i=e.content.toLowerCase():">"==e.content&&("script"==i?u.next=r(JSParser,"</script"):"style"==i&&(u.next=r(CSSParser,"</style")),i=!1),e}function r(r,t){var i=a.indentation();return o=r.make(e,i+indentUnit),function(){if(e.lookAhead(t,!1,!1,!0))return o=null,u.next=n,n();var r=o.next(),a=r.value.lastIndexOf("<"),s=Math.min(r.value.length-a,t.length);if(a!=-1&&r.value.slice(a,a+s).toLowerCase()==t.slice(0,s)&&e.lookAhead(t.slice(s),!1,!1,!0)&&(e.push(r.value.slice(a)),r.value=r.value.slice(0,a)),r.indentation){var l=r.indentation;r.indentation=function(e){return"</"==e?i:l(e)}}return r}}function t(){var n=a.copy(),r=o&&o.copy(),t=u.next,s=i;return function(l){return e=l,a=n(l),o=r&&r(l),u.next=t,i=s,u}}var a=XMLParser.make(e),o=null,i=!1,u={next:n,copy:t};return u}if(!(CSSParser&&JSParser&&XMLParser))throw new Error("CSS, JS, and XML parsers must be loaded for HTML mixed mode to work.");return XMLParser.configure({useHTMLKludges:!0}),{make:e,electricChars:"{}/:"}}();