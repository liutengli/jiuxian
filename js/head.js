$(function() {
	function myHover(ele1, eleHide) {
		$(ele1).hover(function() {
			$(ele1).css("background", "#fff");
			$(eleHide).show();
		}, function() {
			$(eleHide).hover(function() {
				$(eleHide).show()
			}, function() {
				$(eleHide).hide();
				$(ele1).css("background", "0");
			})
			$(eleHide).hide();
		})
	}
	//我的酒仙
	myHover(".myWind", ".myWindHide")

	//二维码显示
	$(".phone").hover(function() {
		$(".phoneErweima").show();
	}, function() {
		$(".phoneErweima").hide();
	})

	//网站导航
	myHover(".webNav", ".webNavHide")

	//客户服务
	myHover(".cusService", ".cusServiceHide")

})