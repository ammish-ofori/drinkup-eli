$(document).ready(function(){
	$('body').addClass('theme');
	$('div').children('div').hide();
	var clickNumber = 0;
	$('button').click(function(){
		if(clickNumber>3) clickNumber =0
		var $clickedDiv = $('div').children('div').eq(clickNumber);
		var className = ($('div ul').children('p').eq(clickNumber).html().toLowerCase());
		$clickedDiv.show(2000);
		$clickedDiv.siblings().hide();
		$('body').removeClass();		
		$('body').addClass(className);
		console.log(clickNumber,className);
		clickNumber ++;
	});
	
});