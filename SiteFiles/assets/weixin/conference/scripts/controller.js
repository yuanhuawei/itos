function getMapLocation(e){var n=new BMap.Map("placecontainer"),o=new BMap.Point(116.331398,39.897445);n.centerAndZoom(o,12),n.enableScrollWheelZoom(!0),n.enableContinuousZoom();var r=new BMap.Geocoder;r.getPoint(""+e,function(e){e&&(n.centerAndZoom(e,16),n.addOverlay(new BMap.Marker(e)))},$("#mapPlace").html())}var controller={};controller.isLoading=!0,controller.conferenceID=utilService.getUrlVar("conferenceID"),controller.wxOpenID=utilService.getUrlVar("wxOpenID"),controller.isPoweredBy=!1,controller.poweredBy="",controller.conferenceInfo={},controller.isApplied=!1,controller.render=function(){$("body").css("background-image","url("+controller.conferenceInfo.backgroundImageUrl+")"),$("title").html(controller.conferenceInfo.conferenceName),utilService.render("controller",controller);var e=$("#mapWD").html();getMapLocation(e),$("#loading").hide(),$("#loading").hide(),$("#main").show()},controller.main=function(){service.getConferenceParameter(controller.conferenceID,controller.wxOpenID,function(e){if(controller.isLoading=!1,e.isSuccess)if(e.isEnd)controller.openEnd();else{controller.isPoweredBy=e.isPoweredBy,controller.poweredBy=e.poweredBy,controller.isApplied=e.isApplied,controller.conferenceInfo=e.conferenceInfo,controller.conferenceInfo.agendaList=JSON.parse(controller.conferenceInfo.agendaList),controller.conferenceInfo.guestList=JSON.parse(controller.conferenceInfo.guestList);for(var n=0;n<controller.conferenceInfo.guestList.length;n++){controller.conferenceInfo.guestList[n]}controller.render()}else notifyService.error(e.errorMessage);document.title=e.conferenceInfo.title})},controller.main(),controller.openApplication=function(){location.href="application.html?publishmentSystemID="+service.publishmentSystemID+"&conferenceID="+controller.conferenceID+"&wxOpenID="+controller.wxOpenID},controller.openEnd=function(){location.href="end.html?publishmentSystemID="+service.publishmentSystemID+"&conferenceID="+controller.conferenceID+"&wxOpenID="+controller.wxOpenID},controller.getDateTime=function(e){return utilService.getDateTime(e)};