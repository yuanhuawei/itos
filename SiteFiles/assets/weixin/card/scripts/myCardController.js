var controller={};controller.poweredBy="",controller.isLoading=!0,controller.isSuccess=!1,controller.isPoweredBy=!1,controller.isBinding=!1,controller.isExchange=!1,controller.isSign=!1,controller.cardInfo={},controller.cardSNInfo={},controller.userInfo={},controller.render=function(){utilService.render("controller",controller),$(".my_card_box .vip_card").click(function(){1==$(this).data("id")?($(this).find(".front").addClass("front_on"),$(this).find(".back").addClass("back_on"),$(this).data("id",2)):($(this).find(".front").removeClass("front_on"),$(this).find(".back").removeClass("back_on"),$(this).data("id",1))}),$("#loading").hide(),$("#main").show()},controller.openUser=function(){location.href="user.html?publishmentSystemID="+service.publishmentSystemID+"&cardID="+service.cardID},controller.openBindCard=function(){location.href="bindCard.html?publishmentSystemID="+service.publishmentSystemID+"&cardID="+service.cardID},controller.openConsume=function(){location.href="consume.html?publishmentSystemID="+service.publishmentSystemID+"&cardID="+service.cardID},controller.openExchange=function(){location.href="exchange.html?publishmentSystemID="+service.publishmentSystemID+"&cardID="+service.cardID},controller.openMyBill=function(){location.href="myBill.html?publishmentSystemID="+service.publishmentSystemID+"&cardID="+service.cardID},controller.openSign=function(){location.href="sign.html?publishmentSystemID="+service.publishmentSystemID+"&cardID="+service.cardID},controller.main=function(){service.getCardParameter(service.cardID,function(e){controller.isLoading=!1,e.isSuccess?(controller.isPoweredBy=e.isPoweredBy,controller.poweredBy=e.poweredBy,controller.isBinding=e.isBinding,controller.isExchange=e.isExchange,controller.isSign=e.isSign,controller.cardInfo=e.cardInfo,controller.cardSNInfo=e.cardSNInfo,controller.userInfo=e.userInfo,controller.render()):notifyService.error(e.errorMessage),document.title=e.cardInfo.title})},controller.main(),controller.getAmount=function(e){return e+="",e.indexOf(".")==-1?e+=".00":1==e.substr(e.indexOf(".")+1).length&&(e+="0"),e};