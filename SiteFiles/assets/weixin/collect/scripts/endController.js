var controller={};controller.isLoading=!0,controller.voteID=utilService.getUrlVar("voteID"),controller.wxOpenID=utilService.getUrlVar("wxOpenID"),controller.isPoweredBy=!1,controller.poweredBy="",controller.isVoted=!1,controller.totalVoteNum=0,controller.voteInfo={},controller.itemList=[],controller.itemIDCollection="",controller.render=function(){utilService.render("controller",controller),$("#loading").hide(),$("#main").show()},controller.main=function(){service.getVoteParameter(controller.voteID,controller.wxOpenID,function(o){if(controller.isLoading=!1,o.isSuccess){for(controller.isPoweredBy=o.isPoweredBy,controller.poweredBy=o.poweredBy,controller.isVoted=o.isVoted,controller.voteInfo=o.voteInfo,controller.itemList=o.itemList,controller.totalVoteNum=0,i=0;i<controller.itemList.length;i++){var e=controller.itemList[i];controller.totalVoteNum+=e.voteNum}controller.render()}else notifyService.error(o.errorMessage)})},controller.main(),controller.getPercentage=function(o){return 0==controller.totalVoteNum&&(controller.totalVoteNum=1),Math.round(o/controller.totalVoteNum*100)+"%"},controller.isItem=function(o){if(controller.itemIDCollection){var e=JSON.parse("["+controller.itemIDCollection+"]");if(e&&e.indexOf(o)!=-1)return!0}return!1};