$(function(){
	//产品搜索
	$('.pro-search td a').click(function(){
		$(this).addClass('pro-cur').siblings('a').removeClass('pro-cur');
	})
	$('.paixu a').click(function(){
		$(this).addClass('pai-cur').siblings('a').removeClass('pai-cur');
	})
	//指定购房
	$('.zhiding').click(function(){
		$('.bg100').show();
		$('.zhidgf').fadeIn();
	})
	$('.close').click(function(){
		$('.bg100').hide();
		$('.zhidgf').fadeOut();
	})
	//关注的房源
	$('.guanzhulist:first').fadeIn('slow');
	$('.guanzhueq li').click(function(){
		$(this).addClass('guanzhueqcur').siblings('li').removeClass('guanzhueqcur');
		var guan=$(this).index();
		$('.guanzhulist').eq(guan).fadeIn().siblings('.guanzhulist').hide();
	})
})