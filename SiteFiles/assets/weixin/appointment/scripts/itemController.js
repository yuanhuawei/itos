var controller={};controller.contentID=utilService.getUrlVar("contentID"),controller.isLoading=!0,controller.isPoweredBy=!1,controller.poweredBy="",controller.appointmentInfo={},controller.appointmentItemInfo={},controller.appointmentContentInfo={},controller.appointmentItemInfoList=[],controller.appointmentContentInfoList=[],controller.isEnd=!1,controller.render=function(){utilService.render("controller",controller),$("#loading").hide(),$("#main").show(),$(".modal-body").height($(window).height()-200);var o={autoResize:!0,container:$("#photoList"),offset:2,itemWidth:144},e=$("#photoList li");e.wookmark(o),window.setTimeout(function(){e.wookmark(o)},500)},controller.getDateTime=function(o){return utilService.getDateTime(o)},controller.main=function(){service.getAppointmentItemParameter(controller.contentID,function(o){controller.isLoading=!1,o.isSuccess?(controller.isPoweredBy=o.isPoweredBy,controller.poweredBy=o.poweredBy,controller.appointmentInfo=o.appointmentInfo,controller.appointmentItemInfo=o.appointmentItemInfo,controller.appointmentContentInfo=o.appointmentContentInfo,controller.isEnd=o.isEnd,controller.isEnd?service.openEnd():controller.render()):notifyService.error(o.errorMessage),document.title=o.appointmentInfo.title})},controller.main();