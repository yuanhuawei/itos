var service={};service.baseUrl="/api/wx_store/",service.publishmentSystemID=utilService.getUrlVar("publishmentSystemID"),service.getUrl=function(e,t){return t?service.baseUrl+e+"/"+t+"?publishmentSystemID="+service.publishmentSystemID:service.baseUrl+e+"?publishmentSystemID="+service.publishmentSystemID},service.getStoreCategory=function(e,t,r,s){$.getJSON(service.getUrl("GetStoreCategory",e),{wxOpenID:t,parentID:r},s)},service.getStoreItemList=function(e,t,r,s){$.getJSON(service.getUrl("GetStoreItemList",e),{categoryID:t,wxOpenID:r},s)},service.getStoreItemInfo=function(e,t,r,s){$.getJSON(service.getUrl("GetStoreItemInfo",e),{storeItemID:t,wxOpenID:r},s)};