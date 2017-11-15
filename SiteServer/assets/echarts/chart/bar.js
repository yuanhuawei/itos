define("echarts/chart/bar",["require","./base","zrender/shape/Rectangle","../component/axis","../component/grid","../component/dataZoom","../config","../util/ecData","zrender/tool/util","zrender/tool/color","../chart"],function(e){function t(e,t,r,a,o){i.call(this,e,t,r,a,o),this.refresh(a)}var i=e("./base"),r=e("zrender/shape/Rectangle");e("../component/axis"),e("../component/grid"),e("../component/dataZoom");var a=e("../config");a.bar={zlevel:0,z:2,clickable:!0,legendHoverLink:!0,xAxisIndex:0,yAxisIndex:0,barMinHeight:0,barGap:"30%",barCategoryGap:"20%",itemStyle:{normal:{barBorderColor:"#fff",barBorderRadius:0,barBorderWidth:0,label:{show:!1}},emphasis:{barBorderColor:"#fff",barBorderRadius:0,barBorderWidth:0,label:{show:!1}}}};var o=e("../util/ecData"),s=e("zrender/tool/util"),n=e("zrender/tool/color");return t.prototype={type:a.CHART_TYPE_BAR,_buildShape:function(){this._buildPosition()},_buildNormal:function(e,t,i,o,s){for(var n,h,l,d,x,g,p,m,c,u,y,b,f=this.series,I=i[0][0],A=f[I],v="horizontal"==s,C=this.component.xAxis,M=this.component.yAxis,B=v?C.getAxis(A.xAxisIndex):M.getAxis(A.yAxisIndex),_=this._mapSize(B,i),W=_.gap,N=_.barGap,z=_.barWidthMap,S=_.barMaxWidthMap,T=_.barWidth,Y=_.barMinHeightMap,G=_.interval,L=this.deepQuery([this.ecTheme,a],"island.r"),k=0,F=t;F>k&&null!=B.getNameByIndex(k);k++){v?d=B.getCoordByIndex(k)-W/2:x=B.getCoordByIndex(k)+W/2;for(var X=0,w=i.length;w>X;X++){var H=f[i[X][0]].yAxisIndex||0,E=f[i[X][0]].xAxisIndex||0;n=v?M.getAxis(H):C.getAxis(E),p=g=c=m=n.getCoord(0);for(var R=0,V=i[X].length;V>R;R++)I=i[X][R],A=f[I],y=A.data[k],b=this.getDataFromOption(y,"-"),o[I]=o[I]||{min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY,sum:0,counter:0,average:0},l=Math.min(S[I]||Number.MAX_VALUE,z[I]||T),"-"!==b&&(b>0?(h=R>0?n.getCoordSize(b):v?p-n.getCoord(b):n.getCoord(b)-p,1===V&&Y[I]>h&&(h=Y[I]),v?(g-=h,x=g):(d=g,g+=h)):0>b?(h=R>0?n.getCoordSize(b):v?n.getCoord(b)-c:c-n.getCoord(b),1===V&&Y[I]>h&&(h=Y[I]),v?(x=m,m+=h):(m-=h,d=m)):(h=0,v?(g-=h,x=g):(d=g,g+=h)),o[I][k]=v?d+l/2:x-l/2,o[I].min>b&&(o[I].min=b,v?(o[I].minY=x,o[I].minX=o[I][k]):(o[I].minX=d+h,o[I].minY=o[I][k])),o[I].max<b&&(o[I].max=b,v?(o[I].maxY=x,o[I].maxX=o[I][k]):(o[I].maxX=d+h,o[I].maxY=o[I][k])),o[I].sum+=b,o[I].counter++,k%G===0&&(u=this._getBarItem(I,k,B.getNameByIndex(k),d,x-(v?0:l),v?l:h,v?h:l,v?"vertical":"horizontal"),this.shapeList.push(new r(u))));for(var R=0,V=i[X].length;V>R;R++)I=i[X][R],A=f[I],y=A.data[k],b=this.getDataFromOption(y,"-"),l=Math.min(S[I]||Number.MAX_VALUE,z[I]||T),"-"==b&&this.deepQuery([y,A,this.option],"calculable")&&(v?(g-=L,x=g):(d=g,g+=L),u=this._getBarItem(I,k,B.getNameByIndex(k),d,x-(v?0:l),v?l:L,v?L:l,v?"vertical":"horizontal"),u.hoverable=!1,u.draggable=!1,u.style.lineWidth=1,u.style.brushType="stroke",u.style.strokeColor=A.calculableHolderColor||this.ecTheme.calculableHolderColor||a.calculableHolderColor,this.shapeList.push(new r(u)));v?d+=l+N:x-=l+N}}this._calculMarkMapXY(o,i,v?"y":"x")},_buildHorizontal:function(e,t,i,r){return this._buildNormal(e,t,i,r,"horizontal")},_buildVertical:function(e,t,i,r){return this._buildNormal(e,t,i,r,"vertical")},_buildOther:function(e,t,i,a){for(var o=this.series,s=0,n=i.length;n>s;s++)for(var h=0,l=i[s].length;l>h;h++){var d=i[s][h],x=o[d],g=x.xAxisIndex||0,p=this.component.xAxis.getAxis(g),m=p.getCoord(0),c=x.yAxisIndex||0,u=this.component.yAxis.getAxis(c),y=u.getCoord(0);a[d]=a[d]||{min0:Number.POSITIVE_INFINITY,min1:Number.POSITIVE_INFINITY,max0:Number.NEGATIVE_INFINITY,max1:Number.NEGATIVE_INFINITY,sum0:0,sum1:0,counter0:0,counter1:0,average0:0,average1:0};for(var b=0,f=x.data.length;f>b;b++){var I=x.data[b],A=this.getDataFromOption(I,"-");if(A instanceof Array){var v,C,M=p.getCoord(A[0]),B=u.getCoord(A[1]),_=[I,x],W=this.deepQuery(_,"barWidth")||10,N=this.deepQuery(_,"barHeight");null!=N?(v="horizontal",A[0]>0?(W=M-m,M-=W):W=A[0]<0?m-M:0,C=this._getBarItem(d,b,A[0],M,B-N/2,W,N,v)):(v="vertical",A[1]>0?N=y-B:A[1]<0?(N=B-y,B-=N):N=0,C=this._getBarItem(d,b,A[0],M-W/2,B,W,N,v)),this.shapeList.push(new r(C)),M=p.getCoord(A[0]),B=u.getCoord(A[1]),a[d].min0>A[0]&&(a[d].min0=A[0],a[d].minY0=B,a[d].minX0=M),a[d].max0<A[0]&&(a[d].max0=A[0],a[d].maxY0=B,a[d].maxX0=M),a[d].sum0+=A[0],a[d].counter0++,a[d].min1>A[1]&&(a[d].min1=A[1],a[d].minY1=B,a[d].minX1=M),a[d].max1<A[1]&&(a[d].max1=A[1],a[d].maxY1=B,a[d].maxX1=M),a[d].sum1+=A[1],a[d].counter1++}}}this._calculMarkMapXY(a,i,"xy")},_mapSize:function(e,t,i){var r,a,o=this._findSpecialBarSzie(t,i),s=o.barWidthMap,n=o.barMaxWidthMap,h=o.barMinHeightMap,l=o.sBarWidthCounter,d=o.sBarWidthTotal,x=o.barGap,g=o.barCategoryGap,p=1;if(t.length!=l){if(i)r=e.getGap(),x=0,a=+(r/t.length).toFixed(2),0>=a&&(p=Math.floor(t.length/r),a=1);else if(r="string"==typeof g&&g.match(/%$/)?(e.getGap()*(100-parseFloat(g))/100).toFixed(2)-0:e.getGap()-g,"string"==typeof x&&x.match(/%$/)?(x=parseFloat(x)/100,a=+((r-d)/((t.length-1)*x+t.length-l)).toFixed(2),x*=a):(x=parseFloat(x),a=+((r-d-x*(t.length-1))/(t.length-l)).toFixed(2)),0>=a)return this._mapSize(e,t,!0)}else if(r=l>1?"string"==typeof g&&g.match(/%$/)?+(e.getGap()*(100-parseFloat(g))/100).toFixed(2):e.getGap()-g:d,a=0,x=l>1?+((r-d)/(l-1)).toFixed(2):0,0>x)return this._mapSize(e,t,!0);return this._recheckBarMaxWidth(t,s,n,h,r,a,x,p)},_findSpecialBarSzie:function(e,t){for(var i,r,a,o,s=this.series,n={},h={},l={},d=0,x=0,g=0,p=e.length;p>g;g++)for(var m={barWidth:!1,barMaxWidth:!1},c=0,u=e[g].length;u>c;c++){var y=e[g][c],b=s[y];if(!t){if(m.barWidth)n[y]=i;else if(i=this.query(b,"barWidth"),null!=i){n[y]=i,x+=i,d++,m.barWidth=!0;for(var f=0,I=c;I>f;f++){var A=e[g][f];n[A]=i}}if(m.barMaxWidth)h[y]=r;else if(r=this.query(b,"barMaxWidth"),null!=r){h[y]=r,m.barMaxWidth=!0;for(var f=0,I=c;I>f;f++){var A=e[g][f];h[A]=r}}}l[y]=this.query(b,"barMinHeight"),a=null!=a?a:this.query(b,"barGap"),o=null!=o?o:this.query(b,"barCategoryGap")}return{barWidthMap:n,barMaxWidthMap:h,barMinHeightMap:l,sBarWidth:i,sBarMaxWidth:r,sBarWidthCounter:d,sBarWidthTotal:x,barGap:a,barCategoryGap:o}},_recheckBarMaxWidth:function(e,t,i,r,a,o,s,n){for(var h=0,l=e.length;l>h;h++){var d=e[h][0];i[d]&&i[d]<o&&(a-=o-i[d])}return{barWidthMap:t,barMaxWidthMap:i,barMinHeightMap:r,gap:a,barWidth:o,barGap:s,interval:n}},_getBarItem:function(e,t,i,r,a,s,h,l){var d,x=this.series,g=x[e],p=g.data[t],m=this._sIndex2ColorMap[e],c=[p,g],u=this.deepMerge(c,"itemStyle.normal"),y=this.deepMerge(c,"itemStyle.emphasis"),b=u.barBorderWidth;d={zlevel:g.zlevel,z:g.z,clickable:this.deepQuery(c,"clickable"),style:{x:r,y:a,width:s,height:h,brushType:"both",color:this.getItemStyleColor(this.deepQuery(c,"itemStyle.normal.color")||m,e,t,p),radius:u.barBorderRadius,lineWidth:b,strokeColor:u.barBorderColor},highlightStyle:{color:this.getItemStyleColor(this.deepQuery(c,"itemStyle.emphasis.color"),e,t,p),radius:y.barBorderRadius,lineWidth:y.barBorderWidth,strokeColor:y.barBorderColor},_orient:l};var f=d.style;d.highlightStyle.color=d.highlightStyle.color||("string"==typeof f.color?n.lift(f.color,-.3):f.color),f.x=Math.floor(f.x),f.y=Math.floor(f.y),f.height=Math.ceil(f.height),f.width=Math.ceil(f.width),b>0&&f.height>b&&f.width>b?(f.y+=b/2,f.height-=b,f.x+=b/2,f.width-=b):f.brushType="fill",d.highlightStyle.textColor=d.highlightStyle.color,d=this.addLabel(d,g,p,i,l);for(var I=[f,d.highlightStyle],A=0,v=I.length;v>A;A++){var C=I[A].textPosition;if("insideLeft"===C||"insideRight"===C||"insideTop"===C||"insideBottom"===C){var M=5;switch(C){case"insideLeft":I[A].textX=f.x+M,I[A].textY=f.y+f.height/2,I[A].textAlign="left",I[A].textBaseline="middle";break;case"insideRight":I[A].textX=f.x+f.width-M,I[A].textY=f.y+f.height/2,I[A].textAlign="right",I[A].textBaseline="middle";break;case"insideTop":I[A].textX=f.x+f.width/2,I[A].textY=f.y+M/2,I[A].textAlign="center",I[A].textBaseline="top";break;case"insideBottom":I[A].textX=f.x+f.width/2,I[A].textY=f.y+f.height-M/2,I[A].textAlign="center",I[A].textBaseline="bottom"}I[A].textPosition="specific",I[A].textColor=I[A].textColor||"#fff"}}return this.deepQuery([p,g,this.option],"calculable")&&(this.setCalculable(d),d.draggable=!0),o.pack(d,x[e],e,x[e].data[t],t,i),d},getMarkCoord:function(e,t){var i,r,a=this.series[e],o=this.xMarkMap[e],s=this.component.xAxis.getAxis(a.xAxisIndex),n=this.component.yAxis.getAxis(a.yAxisIndex);if(!t.type||"max"!==t.type&&"min"!==t.type&&"average"!==t.type)if(o.isHorizontal){i="string"==typeof t.xAxis&&s.getIndexByName?s.getIndexByName(t.xAxis):t.xAxis||0;var h=o[i];h=null!=h?h:"string"!=typeof t.xAxis&&s.getCoordByIndex?s.getCoordByIndex(t.xAxis||0):s.getCoord(t.xAxis||0),r=[h,n.getCoord(t.yAxis||0)]}else{i="string"==typeof t.yAxis&&n.getIndexByName?n.getIndexByName(t.yAxis):t.yAxis||0;var l=o[i];l=null!=l?l:"string"!=typeof t.yAxis&&n.getCoordByIndex?n.getCoordByIndex(t.yAxis||0):n.getCoord(t.yAxis||0),r=[s.getCoord(t.xAxis||0),l]}else{var d=null!=t.valueIndex?t.valueIndex:null!=o.maxX0?"1":"";r=[o[t.type+"X"+d],o[t.type+"Y"+d],o[t.type+"Line"+d],o[t.type+d]]}return r},refresh:function(e){e&&(this.option=e,this.series=e.series),this.backupShapeList(),this._buildShape()},addDataAnimation:function(e,t){function i(){c--,0===c&&t&&t()}for(var r=this.series,a={},s=0,n=e.length;n>s;s++)a[e[s][0]]=e[s];for(var h,l,d,x,g,p,m,c=0,s=this.shapeList.length-1;s>=0;s--)if(p=o.get(this.shapeList[s],"seriesIndex"),a[p]&&!a[p][3]&&"rectangle"===this.shapeList[s].type){if(m=o.get(this.shapeList[s],"dataIndex"),g=r[p],a[p][2]&&m===g.data.length-1){this.zr.delShape(this.shapeList[s].id);continue}if(!a[p][2]&&0===m){this.zr.delShape(this.shapeList[s].id);continue}"horizontal"===this.shapeList[s]._orient?(x=this.component.yAxis.getAxis(g.yAxisIndex||0).getGap(),d=a[p][2]?-x:x,h=0):(l=this.component.xAxis.getAxis(g.xAxisIndex||0).getGap(),h=a[p][2]?l:-l,d=0),this.shapeList[s].position=[0,0],c++,this.zr.animate(this.shapeList[s].id,"").when(this.query(this.option,"animationDurationUpdate"),{position:[h,d]}).done(i).start()}c||t&&t()}},s.inherits(t,i),e("../chart").define("bar",t),t});