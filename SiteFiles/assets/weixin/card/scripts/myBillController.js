var controller={};controller.poweredBy="",controller.isLoading=!0,controller.isSuccess=!1,controller.isPoweredBy=!1,controller.exchangeProportion="",controller.userInfo={},controller.cardInfo={},controller.cardSNInfo={},controller.cardCashYearCountInfoList=[],controller.render=function(){utilService.render("controller",controller),$(".bill_nav a").click(function(){var r=$(".bill_nav a").index($(this));$(this).addClass("on").siblings().removeClass("on"),$(".bill_content").hide().eq(r).show()}),$("#loading").hide(),$("#main").show()},controller.main=function(){service.getCardCashLog(service.cardID,function(r){controller.isLoading=!1,r.isSuccess?(controller.isPoweredBy=r.isPoweredBy,controller.poweredBy=r.poweredBy,controller.userInfo=r.userInfo,controller.cardInfo=r.cardInfo,controller.cardSNInfo=r.cardSNInfo,controller.cardCashYearCountInfoList=r.cardCashYearCountInfoList,controller.render()):notifyService.error(r.errorMessage),document.title=r.cardInfo.title})},controller.main(),controller.getDateTime=function(r){return utilService.getDateTime(r)},controller.getAmount=function(r){return r+="",r.indexOf(".")==-1?r+=".00":1==r.substr(r.indexOf(".")+1).length&&(r+="0"),r};