var controller={};controller.poweredBy="",controller.isLoading=!0,controller.isSuccess=!1,controller.isPoweredBy=!1,controller.userInfo={},controller.userContactInfo={},controller.render=function(){utilService.render("controller",controller),new YMDselect("year","month","day"),$("#province").ProvinceCity(),$("#province select").attr("class","fl form-control input-sm"),controller.userContactInfo&&($("#gender").val(controller.userContactInfo.gender),$("#year").val(controller.userContactInfo.birthday.split(",")[0]),$("#month").append('<option value="'+controller.userContactInfo.birthday.split(",")[1]+'" selected="selected">'+controller.userContactInfo.birthday.split(",")[1]+"月</option>"),$("#day").append('<option value="'+controller.userContactInfo.birthday.split(",")[2]+'" selected="selected">'+controller.userContactInfo.birthday.split(",")[2]+"日</option>"),$("#province select").eq(0).val(controller.userContactInfo.position.split(",")[0]),$("#province select").eq(1).append('<option value="'+controller.userContactInfo.position.split(",")[1]+'" selected="selected">'+controller.userContactInfo.position.split(",")[1]+"</option>"),$("#province select").eq(2).append('<option value="'+controller.userContactInfo.position.split(",")[2]+'" selected="selected">'+controller.userContactInfo.position.split(",")[2]+"</option>"),$("#address").val(controller.userContactInfo.address)),$("#btnSubmit").click(function(){controller.editUser()}),$("#loading").hide(),$("#main").show()},controller.editUser=function(){var e=$("#displayName").val(),o=$("#mobile").val(),r=$("#gender").val(),t=$("#year").val()+","+$("#month").val()+","+$("#day").val(),n=$("#province select").eq(0).val()+","+$("#province select").eq(1).val()+","+$("#province select").eq(2).val(),l=$("#address").val();service.editUser(e,o,r,t,n,l,function(e){controller.isSuccess=e.isSuccess,controller.isSuccess?service.openMyCard():notifyService.error(e.errorMessage)})},controller.main=function(){service.getUser(function(e){controller.isLoading=!1,e.isSuccess?(controller.isPoweredBy=e.isPoweredBy,controller.poweredBy=e.poweredBy,controller.userInfo=e.userInfo,controller.userContactInfo=e.userContactInfo,controller.render()):notifyService.error(e.errorMessage)})},controller.main();