function isPc(){for(var o=navigator.userAgent,r=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],e=!0,n=0;n<r.length;n++)if(o.indexOf(r[n])>0){e=!1;break}return e}var controller={};controller.isLoading=!0,controller.actID=utilService.getUrlVar("actID"),controller.wxOpenID=utilService.getUrlVar("wxOpenID"),controller.snID=0,controller.uniqueID=utilService.getUrlVar("uniqueID"),controller.render=function(){utilService.render("controller",controller),$("#loading").hide(),$("#main").show()},controller.openCheck=function(){location.href="index.html?snID="+controller.snID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID},controller.Auth=function(){var o="WeixinMob",r=location.href,e="http://gexia.com/home/authlogin.html?isWeixin=true&loginType="+o+"&returnUrl="+r;location.href=e},controller.isSuccess=!1,controller.isPoweredBy=!1,controller.poweredBy="",controller.conponActInfo={},controller.couponSNInfo=null,controller.main=function(){return""!=controller.uniqueID||isPc()?(controller.wxOpenID=controller.uniqueID,void service.getCouponParameterInfo(controller.actID,controller.wxOpenID,function(o){controller.isSuccess=o.isSuccess,controller.isPoweredBy=o.isPoweredBy,controller.poweredBy=o.poweredBy,controller.conponActInfo=o.conponActInfo,controller.conponActInfo.isFormRealName||controller.conponActInfo.isFormMobile||controller.conponActInfo.isFormEmail||controller.conponActInfo.isFormAddress||controller.submitApplication(0),o.couponSNInfo?(controller.snID=o.couponSNInfo.id,controller.openCheck()):controller.render(),document.title=o.conponActInfo.title})):void controller.Auth()},controller.submitApplication=function(o){var r="",e="",n="",l="";if(1==o){var r=$("#realName").val(),e=$("#mobile").val(),n=$("#email").val(),l=$("#address").val();if($("#myForm").validator("validate"),$("#myForm").children().hasClass("has-error"))return!1}$("#loading").show(),$("#main").hide(),service.submitApplication(controller.actID,r,e,n,l,function(o){o.isSuccess?(controller.snID=o.snid,controller.openCheck()):(controller.render(),$("#alertMessage").html(o.errorMessage),$("#alertTitle").html("提示信息"),$("#divBtn").hide(),notifyService.error(o.errorMessage))})},controller.main();