function isPc(){for(var r=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,n=0;n<e.length;n++)if(r.indexOf(e[n])>0){o=!1;break}return o}var controller={};controller.isLoading=!0,controller.lotteryID=utilService.getUrlVar("lotteryID"),controller.wxOpenID=utilService.getUrlVar("wxOpenID"),controller.uniqueID=utilService.getUrlVar("uniqueID"),controller.from=utilService.getUrlVar("from"),controller.openLottery=function(){location.href="scratch.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID},controller.openApplication=function(){location.href="application.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID+"&lotteryType=scratch"},controller.openCheck=function(){location.href="check.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID+"&lotteryType=scratch"},controller.openEnd=function(){location.href="end.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID},controller.isSuccess=!1,controller.errorMessage="",controller.isPoweredBy=!1,controller.poweredBy="",controller.lotteryInfo={},controller.awardInfoList=[],controller.awardInfo=null,controller.winnerInfo=null,controller.render=function(){utilService.render("controller",controller),controller.isSuccess?$(".ggk").wScratchPad({bg:controller.winnerInfo?"imgScratch/bg-success.png":"imgScratch/bg-failure.png",fg:"imgScratch/fg.png",cursor:'url("imgScratch/coin.png") 5 5, default',scratchMove:function(r,e){controller.winnerInfo&&e>20&&null!=controller.awardInfo&&null!=controller.winnerInfo&&($(".ggk").wScratchPad("clear"),$.layer({area:["auto","auto"],title:"中奖了",dialog:{msg:"恭喜你，中奖了！<br />您抽中了"+controller.awardInfo.awardName+"：<br />"+controller.awardInfo.title,btns:1,type:6,btn:["确定"],yes:function(){controller.openApplication()}}}))}}):($(".ggk").hide(),layer.msg(controller.errorMessage,2,5)),$("#loading").hide(),$("#main").show()},controller.main=function(){""!=controller.from&&controller.openLottery(),controller.uniqueID||(controller.wxOpenID=controller.uniqueID),service.getLotteryParameter(controller.lotteryID,controller.wxOpenID,function(r){if(controller.isLoading=!1,r.isEnd)controller.openEnd();else{if(controller.isSuccess=r.isSuccess,controller.errorMessage=r.errorMessage,controller.isPoweredBy=r.isPoweredBy,controller.poweredBy=r.poweredBy,controller.lotteryInfo=r.lotteryInfo,controller.awardInfoList=r.awardInfoList,controller.awardInfo=r.awardInfo,controller.winnerInfo=r.winnerInfo,null!=controller.winnerInfo&&("Applied"==controller.winnerInfo.status||"Cashed"==controller.winnerInfo.status))return void controller.openCheck();controller.render()}document.title=r.lotteryInfo.title})},controller.main();