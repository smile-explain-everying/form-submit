$(function(){

	$('.nav_list .nav_item').on('click','a',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.nav_none>ul:eq('+$(this).parent().index()+')').show().siblings().hide();	
		return false;
	})
}) 