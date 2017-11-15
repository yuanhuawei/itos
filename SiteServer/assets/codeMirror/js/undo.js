function History(t,i,e,o,r){this.container=t,this.maxDepth=i,this.commitDelay=e,this.editor=o,this.parent=o.parent,this.onChange=r;var n={text:"",from:null,to:null};this.first=n,this.last=n,this.firstTouched=!1,this.history=[],this.redoHistory=[],this.touched=[]}History.prototype={scheduleCommit:function(){var t=this;this.parent.clearTimeout(this.commitTimeout),this.commitTimeout=this.parent.setTimeout(function(){t.tryCommit()},this.commitDelay)},touch:function(t){this.setTouched(t),this.scheduleCommit()},undo:function(){if(this.commit(),this.history.length){var t=this.history.pop();return this.redoHistory.push(this.updateTo(t,"applyChain")),this.onChange&&this.onChange(),this.chainNode(t)}},redo:function(){if(this.commit(),this.redoHistory.length){var t=this.redoHistory.pop();return this.addUndoLevel(this.updateTo(t,"applyChain")),this.onChange&&this.onChange(),this.chainNode(t)}},clear:function(){this.history=[],this.redoHistory=[]},historySize:function(){return{undo:this.history.length,redo:this.redoHistory.length}},push:function(t,i,e){for(var o=[],r=0;r<e.length;r++){var n=r==e.length-1?i:this.container.ownerDocument.createElement("BR");o.push({from:t,to:n,text:cleanText(e[r])}),t=n}this.pushChains([o],null==t&&null==i)},pushChains:function(t,i){this.commit(i),this.addUndoLevel(this.updateTo(t,"applyChain")),this.redoHistory=[]},chainNode:function(t){for(var i=0;i<t.length;i++){var e=t[i][0],o=e&&(e.from||e.to);if(o)return o}},reset:function(){this.history=[],this.redoHistory=[]},textAfter:function(t){return this.after(t).text},nodeAfter:function(t){return this.after(t).to},nodeBefore:function(t){return this.before(t).from},tryCommit:function(){window.History&&(this.editor.highlightDirty()?this.commit():this.scheduleCommit())},commit:function(t){this.parent.clearTimeout(this.commitTimeout),t||this.editor.highlightDirty(!0);var i=this.touchedChains();i.length&&(this.addUndoLevel(this.updateTo(i,"linkChain")),this.redoHistory=[],this.onChange&&this.onChange())},updateTo:function(t,i){for(var e=[],o=[],r=0;r<t.length;r++)e.push(this.shadowChain(t[r])),o.push(this[i](t[r]));return"applyChain"==i&&this.notifyDirty(o),e},notifyDirty:function(t){forEach(t,method(this.editor,"addDirtyNode")),this.editor.scheduleHighlight()},linkChain:function(t){for(var i=0;i<t.length;i++){var e=t[i];e.from?e.from.historyAfter=e:this.first=e,e.to?e.to.historyBefore=e:this.last=e}},after:function(t){return t?t.historyAfter:this.first},before:function(t){return t?t.historyBefore:this.last},setTouched:function(t){t?t.historyTouched||(this.touched.push(t),t.historyTouched=!0):this.firstTouched=!0},addUndoLevel:function(t){this.history.push(t),this.history.length>this.maxDepth&&this.history.shift()},touchedChains:function(){function t(t){return t?t.historyTemp:n}function i(t,i){t?t.historyTemp=i:n=i}function e(t){for(var i=[],e=t?t.nextSibling:r.container.firstChild;e&&"BR"!=e.nodeName;e=e.nextSibling)e.currentText&&i.push(e.currentText);return{from:t,to:e,text:cleanText(i.join(""))}}function o(t,i){for(var e=i+"Sibling",o=t[e];o&&"BR"!=o.nodeName;)o=o[e];return o}var r=this,n=null,h=[];r.firstTouched&&r.touched.push(null),forEach(r.touched,function(t){if(!t||t.parentNode==r.container){t?t.historyTouched=!1:r.firstTouched=!1;var o=e(t),n=r.after(t);n&&n.text==o.text&&n.to==o.to||(h.push(o),i(t,o))}});var s=[];return r.touched=[],forEach(h,function(n){if(t(n.from)){for(var h=[],a=n.from,f=!0;;){var u=t(a);if(!u){if(f)break;u=e(a)}if(h.unshift(u),i(a,null),!a)break;f=r.after(a),a=o(a,"previous")}for(a=n.to,f=r.before(n.from);;){if(!a)break;var u=t(a);if(!u){if(f)break;u=e(a)}h.push(u),i(a,null),f=r.before(a),a=o(a,"next")}s.push(h)}}),s},shadowChain:function(t){for(var i=[],e=this.after(t[0].from),o=t[t.length-1].to;;){i.push(e);var r=e.to;if(!r||r==o)break;e=r.historyAfter||this.before(o)}return i},applyChain:function(t){function i(t,i){for(var e=t?t.nextSibling:o.container.firstChild;e!=i;){var r=e.nextSibling;removeElement(e),e=r}}var e=select.cursorPos(this.container,!1),o=this,r=t[0].from,n=t[t.length-1].to;i(r,n);for(var h=0;h<t.length;h++){var s=t[h];h>0&&o.container.insertBefore(s.from,n);var a=makePartSpan(fixSpaces(s.text),this.container.ownerDocument);if(o.container.insertBefore(a,n),e&&e.node==s.from){var f=0,u=this.after(s.from);if(u&&h==t.length-1){for(var c=0;c<e.offset&&s.text.charAt(c)==u.text.charAt(c);c++);e.offset>c&&(f=s.text.length-u.text.length)}select.setCursorPos(this.container,{node:s.from,offset:Math.max(0,e.offset+f)})}else e&&h==t.length-1&&e.node&&e.node.parentNode!=this.container&&select.setCursorPos(this.container,{node:s.from,offset:s.text.length})}return this.linkChain(t),r}};