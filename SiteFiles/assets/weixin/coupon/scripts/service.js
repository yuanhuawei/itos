var service={};service.baseUrl="/api/wx_coupon/",service.publishmentSystemID=utilService.getUrlVar("publishmentSystemID"),service.getUrl=function(e,t){return t?service.baseUrl+e+"/"+t+"?publishmentSystemID="+service.publishmentSystemID:service.baseUrl+e+"?publishmentSystemID="+service.publishmentSystemID},service.getCouponParameter=function(e,t,r){$.getJSON(service.getUrl("GetCouponParameter",e),{wxOpenID:t},r)},service.getCouponParameterInfo=function(e,t,r){$.getJSON(service.getUrl("GetCouponParameterInfo",e),{wxOpenID:t},r)},service.submitApplication=function(e,t,r,i,s,n,c){$.getJSON(service.getUrl("submitApplication",e),{realName:t,mobile:r,email:i,address:s},n)},service.submitAwardCode=function(e,t){$.getJSON(service.getUrl("SubmitAwardCode",e),{},t)};