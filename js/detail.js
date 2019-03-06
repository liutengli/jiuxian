$(function() {

	$(".topOuter").load("html/head.html", function() {
		$.getScript("js/index.js")
	});
	$(".footerOuter").load("html/footer.html");

	var midArea = $("#middleArea");
	var midImg = midArea.children();
	var bigArea = $("#bigArea");
	var bigImg = bigArea.children();
	var glass = $("#glass");
	var smallArea = $("#smallArea");
	var smallImg = smallArea.find("li");
	//鼠标点击小图，放大小盒子里的图片
	smallImg.mouseover(function() {
		$(this).addClass("current").siblings().removeClass("current");
		var index = $(this).index();
		midImg.eq(index).show().siblings().hide();
		bigArea.children().attr("src", "");
		bigArea.children().attr("src", midImg.eq(index).attr("src"));
	})

	midArea.hover(function() {
		glass.show();
		bigArea.show().children().show();
	}, function() {
		glass.hide();
		bigArea.hide().children().hide();
	})

	var mw = midArea.innerWidth();
	var mh = midArea.innerHeight();

	midArea.mousemove(function(e) {
		var evt = e || event;

		var gw = glass.innerWidth();
		var gh = glass.innerHeight();

		var _left = evt.pageX - midArea.offset().left - gw / 2;
		var _top = evt.pageY - midArea.offset().top - gh / 2;
		_left = _left <= 0 ? 0 : _left >= mw - gw ? mw - gw : _left;
		_top = _top <= 0 ? 0 : _top >= mh - gh ? mh - gh : _top;

		glass.css("left", _left + "px");
		glass.css("top", _top + "px");

		bigImg.css("left", -_left / mw * bigImg.innerWidth() + "px");
		bigImg.css("top", -_top / mh * bigImg.innerHeight() + "px");
	})

	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
		if(r != null) return unescape(r[2]);
		return null;
	}

	// 调用方法
	//console.log(GetQueryString("id"));

	$.get("http://47.104.244.134:8080/goodsbyid.do", {
		"id": GetQueryString("id")
	}, function(data) {
		var str = '';
		$("#middleArea img").attr("src", data.picurl);
		$("#bigArea img").attr("src", data.picurl);

		str += `<h1>${data.name}</h1>
					<p class="haiwai">${data.info}</p>
					<div class="money">
						<p><span>酒仙价</span><del>￥${data.price}</del></p>
						<p><span>促销价</span><em>￥${data.price/100}</em></p>
						<b>加入购物车</b>
					</div>`;

		$(".detailMainRigth").html(str);

		//加入购物车
		$(".money b").click(function() {
			if(getCookie("user")) { //JSON.parse() 将json格式的字符串转成js对象
				var obj = JSON.parse(getCookie("user"));
				var userid = obj["id"];
				$.get("http://47.104.244.134:8080/cartsave.do", {
					"gid": GetQueryString("id"),
					"token": userid
				}, function(data) {
					$(".cartHide").show();
					$(".cartHide span").click(function() {
						$(".cartHide").hide();
					})
				})
			} else {
				$(window).attr('location', 'login.html');
			}
		})
	});

})