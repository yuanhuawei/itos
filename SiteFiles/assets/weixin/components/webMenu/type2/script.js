function displayit(e){var t=document.getElementById("top_menu").getElementsByTagName("ul").length;for(i=0;i<t;i++)i==e?"none"==document.getElementById("top_menu").getElementsByTagName("ul").item(e).style.display?(document.getElementById("top_menu").getElementsByTagName("ul").item(e).style.display="",document.getElementById("plug-wrap").style.display=""):(document.getElementById("top_menu").getElementsByTagName("ul").item(e).style.display="none",document.getElementById("plug-wrap").style.display="none"):document.getElementById("top_menu").getElementsByTagName("ul").item(i).style.display="none"}function closeall(){var e=document.getElementById("top_menu").getElementsByTagName("ul").length;for(i=0;i<e;i++)document.getElementById("top_menu").getElementsByTagName("ul").item(i).style.display="none";document.getElementById("plug-wrap").style.display="none"}$(function(){var e=$("#top_menu").children().length;for(i=0;i<e;i++)0==$("#top_menu").children().eq(i).find("ul li").length&&$("#top_menu").children().eq(i).find("ul").remove()}),document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideToolbar")});