var controller={};controller.isSingle=utilService.getUrlVar("isSingle"),controller.appointmentID=utilService.getUrlVar("appointmentID"),controller.render=function(){utilService.render("controller",controller),$("#loading").hide(),$("#main").show()},controller.appointmentInfo={},controller.configExtendInfoList=[],controller.submitApplication=function(){var e=$("#realName").val(),n=$("#mobile").val(),r=$("#email").val(),o="";$("#SettingsXML").children(".form-group").each(function(){var e='"'+$(this).children("input").val()+'"',n='"'+$(this).children("label").html().replace("：","")+'"',r=n+":"+e+",";o+=r});var t=o.length;return o="{"+o.substring(0,t-1)+"}",$("#myForm").validator("validate"),!$("#myForm").children().hasClass("has-error")&&($("#loading").show(),$("#main").hide(),void service.submitApplication(e,n,r,o,function(e){e.isSuccess?(layer.msg("预约提交成功",2,1),setTimeout(function(){"true"==controller.isSingle?service.openItem():service.openResult()},1e3)):notifyService.error(e.errorMessage)}))},controller.main=function(){service.getAppointmentParameter(controller.appointmentID,function(e){controller.appointmentInfo=e.appointmentInfo,controller.configExtendInfoList=e.configExtendInfoList,controller.render(),document.title=e.appointmentInfo.title})},controller.main();