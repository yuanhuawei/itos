var controller={};controller.isLoading=!0,controller.isPoweredBy=!1,controller.poweredBy="",controller.appointmentInfo={},controller.appointmentItemInfoList=[],controller.appointmentContentInfoList=[],controller.render=function(){utilService.render("controller",controller),$("#loading").hide(),$("#main").show()},controller.main=function(){service.getAppointmentContentParameter(function(e){controller.isLoading=!1,e.isSuccess?(controller.isPoweredBy=e.isPoweredBy,controller.poweredBy=e.poweredBy,controller.appointmentInfo=e.appointmentInfo,controller.appointmentItemInfoList=e.appointmentItemInfoList,controller.appointmentContentInfoList=e.appointmentContentInfoList,controller.render()):notifyService.error(e.errorMessage),document.title=e.appointmentInfo.title})},controller.main(),controller.showMessage=function(e,o){$.layer({area:["260","260"],title:"预约信息",dialog:{msg:o,btns:0,type:-1,btn:["关闭"],yes:function(){}}})},controller.getDateTime=function(e){return utilService.getDateTime(e)};