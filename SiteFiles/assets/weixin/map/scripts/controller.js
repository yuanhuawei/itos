function getMapLocation(e){var o=new BMap.Map("allmap"),n=new BMap.Point(116.331398,39.897445);o.centerAndZoom(n,12),o.enableScrollWheelZoom(!0),o.enableContinuousZoom();var r=new BMap.Geocoder;r.getPoint(""+e,function(e){e&&(o.centerAndZoom(e,16),o.addOverlay(new BMap.Marker(e)))},"北京市")}function request(e){var o=location.href,n=o.substring(o.indexOf("?")+1,o.length).split("&"),r={};for(i=0;j=n[i];i++)r[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length);var t=r[e.toLowerCase()];return"undefined"==typeof t?"":t}var controller={};controller.isLoading=!0,controller.isPoweredBy=!0,controller.poweredBy="",controller.render=function(){$("#loading").hide(),$("#main").show(),$("#allmap").height($(window).height()-85);var e=request("mapWD");e=decodeURIComponent(e),getMapLocation(e),$("#mapTitle").html(e.substring(0,14)),utilService.render("controller",controller)},controller.render();