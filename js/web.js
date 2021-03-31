$(function(){
			$('.slide').each(function(index){
		$(this).css({left:index*1200});
	});
	
	setInterval(function(){
		$('.slide').each(function(index){
			var nowLeft=parseInt($(this).css("left"));
			var moveLeft=nowLeft-1200;
			$(this).animate({left:moveLeft},1000,function(){
				if(moveLeft<=-3600){
					$(this).css({left:1200});
				}
			});
		});
	},3000);
			
			$(".close a").click(function(){
				$("#popUp").hide();
			});
			
			$(".headlogo").click(function(){
				$("#popUp").show();
			}); //popUp
	
		$("#room .jq").mouseenter(function(){
			$(this).animate({left:"240px"},1000);
			});
			$("#room .jq").mouseleave(function(){
			$(this).animate({left:"180px"},1000);
		});	//room mouseenter
		
		$(".icon1,#gnb").mouseenter(function(){
			$("#gnb").stop().slideDown();
		});
		$(".icon1,#gnb").mouseleave(function(){
			$("#gnb").stop().slideUp();
		});	//icon mouseenter
		
		$("#last span").mouseenter(function(){
			$("#last span").animate({"top":"-20px"},2000);
			});
			$("#last span").mouseleave(function(){
			$("#last span").animate({"top":"260px"},2000);
			});	//
			
	
});

	
