$(function(){
	$(".navli").mouseover(function(){
		$(this).children(".subNav").show();
	})
	$(".navli").mouseout(function(){
		$(this).children(".subNav").hide();
	})
})