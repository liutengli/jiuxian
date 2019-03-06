$(function() {

	$(".footerOuter").load("html/footer.html");

	var obj = JSON.parse(getCookie("user"));
	var userid = obj["id"];
	$.get("http://47.104.244.134:8080/cartlist.do", {
		"token": userid
	}, function(data) {
		var str = '';
		for(var i = 0; i < data.length; i++) {
			if(data[i].count > 0) {
				str += `<div class="cartCan">
					<p class="id">${data[i].id}</p>
					<p class="gid">${data[i].gid}</p>
					<input type="checkbox" />
					<img src="${data[i].goods.picurl}" />
					<a href="#">${data[i].goods.name}</a>
					<span>￥${data[i].goods.price/100}</span>
					<span class="numBox">
						<i class="reduce">-</i>
						<em class="num">${data[i].count}</em>
						<i class="add">+</i>
					</span>
					<span class="money">￥${(data[i].goods.price/100)*data[i].count}</span>
					<span class="deleGoods">删除</span>
				</div>`;
			}
		}
		$(".cartCanBox").html(str);

		$(".reduce").click(function() {
			var count = $(this).parent().find(".num").text();
			count--;
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				"id": $(this).parent().parent().find(".id").text(),
				"gid": $(this).parent().parent().find(".gid").text(),
				"num": -1,
				"token": userid
			}, function(data) {
				window.location.reload();
			});
		})
		$(".add").click(function() {
			var count = $(this).parent().find(".num").text();
			count--;
			$.get("http://47.104.244.134:8080/cartupdate.do", {
				"id": $(this).parent().parent().find(".id").text(),
				"gid": $(this).parent().parent().find(".gid").text(),
				"num": +1,
				"token": userid
			}, function(data) {
				window.location.reload();
			});
		})

		//删除单个商品
		$(".deleGoods").click(function() {
			var _this = $(this);
			$(".cartHide").show();
			$(".cartHide .no,.cartHide span").click(function() {
				$(".cartHide").hide();
			})
			$(".cartHide .yes").click(function() {
				$.get("http://47.104.244.134:8080/cartupdate.do", {
					"id": _this.parent().find(".id").text(),
					"gid": _this.parent().find(".gid").text(),
					"num": 0,
					"token": userid
				}, function(data) {
					window.location.reload();
				})
			})

		})

		//获取全选的这个复选框
		var ckAll = $(".j_cbAll");
		//获取tbody中所有的小复选框
		var cks = $(".cartCanBox").find("input");
		//点击全选的这个复选框,获取他当前的状态,然后设置tbody中所有复选框的状态
		ckAll.click(function() {
			cks.prop("checked", this.checked)
			ckAll.prop("checked", this.checked);
			if(ckAll.prop("checked")) {
				$(".cartBtn a").css("background", "#c00");
			} else {
				$(".cartBtn a").css("background", "#d0d0d0");
			}

			total();
		});
		//获取tbody中所有的复选框,分别注册点击事件

		cks.click(function() {
			$(".cartBtn a").css("background", "#c00");
			//判断是否所有的复选框都选中
			if($(".cartCanBox").find("input:checked").length == $(".cartCanBox").find("input").length) {
				ckAll.prop("checked", true);
			} else {
				ckAll.prop("checked", false);
			}
			total();

		})

		function total() {
			var numSum = 0;
			var moneySum = 0;
			cks.each(function() {
				if($(this).is(':checked')) {
					var num = Number($(this).parent().find(".num").text());
					var money = $(this).parent().find(".money").text();
					money = parseFloat(money.substring(1));

					numSum += num;
					moneySum += money;
				}
			});
			$(".pieces em").html(numSum);
			$(".total em").html("￥" + moneySum.toFixed(2));

		}

		//删除所有
		$(" #delChecked").click(function() {
			cks.each(function() {
				if($(this).is(':checked')) {
					$(".cartHide").show();
				}
			})
			$(".cartHide .no,.cartHide span").click(function() {
				$(".cartHide").hide();
			})
			$(".cartHide .no,.cartHide span").click(function() {
				$(".cartHide").hide();
			})
			$(".cartHide .yes").click(function() {
				cks.each(function() {
					if($(this).is(':checked')) {
						$.get("http://47.104.244.134:8080/cartupdate.do", {
							"id": $(this).parent().find(".id").text(),
							"gid": $(this).parent().find(".gid").text(),
							"num": 0,
							"token": userid
						}, function(data) {
							window.location.reload();
						})
					}
				});
			})
		})

		//把购物车的所有商品的数量存放到cookie里方便首页调用
		var allCars = 0;
		cks.each(function() {
			var num = Number($(this).parent().find(".num").text());
			allCars += num;
		})
		setCookie("allCars", allCars, 1);

	})

	//登录注册的变换
	if(getCookie("user")) {
		var obj = JSON.parse(getCookie("user"));
		$(".loginNow").html(obj.name).attr("href", "#");
		$(".regNow").html("退出").attr("href", "#").click(function() {
			removeCookie("user");
			$("#indexLogin").html("请登录").attr("href", "login.html");
			$(this).html("免费注册");
			window.location.href = "index.html";
		});
	}
})