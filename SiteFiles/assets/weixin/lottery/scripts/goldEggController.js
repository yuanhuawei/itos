function isPc(){for(var e=navigator.userAgent,r=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,n=0;n<r.length;n++)if(e.indexOf(r[n])>0){o=!1;break}return o}var controller={};controller.isLoading=!0,controller.lotteryID=utilService.getUrlVar("lotteryID"),controller.wxOpenID=utilService.getUrlVar("wxOpenID"),controller.uniqueID=utilService.getUrlVar("uniqueID"),controller.from=utilService.getUrlVar("from"),controller.openLottery=function(){location.href="goldEgg.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID},controller.openApplication=function(){location.href="application.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID+"&lotteryType=goldEgg"},controller.openCheck=function(){location.href="check.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID+"&lotteryType=goldEgg"},controller.openEnd=function(){location.href="end.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID},controller.isEnd=!1,controller.isSuccess=!1,controller.isPoweredBy=!1,controller.poweredBy="",controller.errorMessage="",controller.lotteryInfo={},controller.awardInfoList=[],controller.awardInfo=null,controller.winnerInfo=null,controller.success=function(){$.layer({area:["auto","auto"],title:"中奖了",dialog:{msg:"恭喜你，中奖了！<br />您砸中了"+controller.awardInfo.awardName+"：<br />"+controller.awardInfo.title,btns:1,type:6,btn:["确定"],yes:function(){controller.openApplication()}}})},controller.failure=function(){layer.msg("很遗憾，您没有中奖哦！<br/>再来一次！！",2,5)},controller.render=function(){utilService.render("controller",controller),$(".egg_btn").click(function(e){var r=$(this).attr("id");$(".cuizi").css("left",e.pageX-5),$(".cuizi").css("top",e.pageY-1.5*$(".cuizi").height()),$(".cuizi").show().addClass("cuizi_on"),setTimeout(function(){$(".egg_box_inner img").hide(),"egg1_btn"==r?$(".egg_box_inner .img1").fadeIn(500):"egg2_btn"==r?$(".egg_box_inner .img2").fadeIn(500):"egg3_btn"==r&&$(".egg_box_inner .img3").fadeIn(500),$(".cuizi").show().removeClass("cuizi_on"),controller.submitLottery()},1e3)}),$("#loading").hide(),$("#main").show()},controller.submitLottery=function(){service.submitLottery(controller.lotteryID,controller.wxOpenID,function(e){controller.isSuccess=e.isSuccess,controller.errorMessage=e.errorMessage,controller.awardInfo=e.awardInfo,controller.winnerInfo=e.winnerInfo,controller.isSuccess?null!=controller.awardInfo&&null!=controller.winnerInfo?controller.success():controller.failure():layer.msg(controller.errorMessage,2,5)})},controller.main=function(){""!=controller.from&&controller.openLottery(),controller.uniqueID||(controller.wxOpenID=controller.uniqueID),service.getLotteryParameter(controller.lotteryID,controller.wxOpenID,function(e){if(controller.isLoading=!1,controller.isEnd=e.isEnd,controller.isSuccess=e.isSuccess,controller.errorMessage=e.errorMessage,controller.isPoweredBy=e.isPoweredBy,controller.poweredBy=e.poweredBy,controller.lotteryInfo=e.lotteryInfo,controller.awardInfoList=e.awardInfoList,controller.awardInfo=e.awardInfo,controller.winnerInfo=e.winnerInfo,null!=controller.winnerInfo){if("Won"==controller.winnerInfo.status&&controller.winnerInfo.cashSN.length<=0)return void controller.openApplication();if("Applied"==controller.winnerInfo.status||"Cashed"==controller.winnerInfo.status)return void controller.openCheck()}1==controller.isEnd?location.href="end.html?lotteryID="+controller.lotteryID+"&publishmentSystemID="+service.publishmentSystemID+"&wxOpenID="+controller.wxOpenID:controller.render(),document.title=e.lotteryInfo.title})},controller.main();