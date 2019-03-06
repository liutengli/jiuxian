$(function() {
	$(".topHelpIcon").hover(function() {
		$(this).next().show();
	}, function() {
		$(".topHelpHide").hover(function() {
			$(this).show()
		}, function() {
			$(this).hide();
		})
		$(this).next().hide();
	})

	//正则验证

	function testInput(input) {
		input.blur(function() {
			if($(this).val()) {
				$(this).parent().find(".judgeDel").show();
			} else {
				$(this).parent().find(".judge").show();
				$(this).next().show();
			}
		})

	}
	testInput($("#userName"));
	testInput($("#password"));
	testInput($("#password2"));
	testInput($("#email"));

	//d点击登录
	$("#login").click(function() {

		//看用户名是否可用，调用接口
		$.get("http://47.104.244.134:8080/username.do", {
			"username": $("#userName").val()
		}, function(data) {
			if(data.msg == "成功") {
				//登录接口
				$.post("http://47.104.244.134:8080/userlogin.do", {
					"name": $("#userName").val(),
					"password": $("#password").val()
				}, function(data) {
					//console.log(data)
					if(getCookie("user")) {
						//JSON.parse() 将json格式的字符串转成js对象
						var obj = JSON.parse(getCookie("user"));
					} else {
						//定义一个空数组，点击i时用来存放对应i的id和id对应的数值
						var obj = {};
					}
					var id = data.data.token;
					var name = $("#userName").val()
					if(obj["id"] == undefined) {
						obj["id"] = id;
						obj["name"] = name;
						$(window).attr('location', 'index.html');
					} else {
						alert("您已登陆,请直接浏览商品吧！");
						$(window).attr('location', 'index.html');
					}
					var objStr = JSON.stringify(obj);
					setCookie("user", objStr, 1);
				});
			} else {
				$("#userName").parent().find(".mistakeTip").show().html("此用户名不存在！");
				//alert("此用户名不存在");
			}

		});
	})
	$(".judgeDel").click(function() {
		$(this).parent().parent().find(".text").val("");
	})

})