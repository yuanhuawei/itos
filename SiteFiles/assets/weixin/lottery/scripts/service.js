var service={};service.baseUrl="/api/wx_lottery/",service.publishmentSystemID=utilService.getUrlVar("publishmentSystemID"),service.getUrl=function(e,t){return t?service.baseUrl+e+"/"+t+"?publishmentSystemID="+service.publishmentSystemID:service.baseUrl+e+"?publishmentSystemID="+service.publishmentSystemID},service.getLotteryParameter=function(e,t,r){$.getJSON(service.getUrl("GetLotteryParameter",e),{wxOpenID:t},r)},service.submitLottery=function(e,t,r){$.getJSON(service.getUrl("SubmitLottery",e),{wxOpenID:t},r)},service.submitApplication=function(e,t,r,i,s,n,c){$.getJSON(service.getUrl("SubmitApplication",e),{winnerID:t,realName:r,mobile:i,email:s,address:n},c)},service.submitAwardCode=function(e,t,r){$.getJSON(service.getUrl("SubmitAwardCode",e),{winnerID:t},r)};