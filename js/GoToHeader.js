$(function(){
	// 幫 a.abgne_gotoheader 加上 click 事件
	$('a.abgne_gotoheader').click(function(){
		// 讓捲軸用動畫的方式移動到 #header 的 top 位置
		// 並加入動畫效果
		// 感謝網友 sam 修正 Opera 問題
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#header').offset().top
		}, 2000, 'easeOutBounce');
 
		return false;
	});
});