$(function() {

	/*con*/

	$("#save").click(function() {
		//看用户名是否可用，调用接口
		$.get("http://47.104.244.134:8080/username.do", {
			"username": $("#userName").val()
		}, function(data) {
			if(data.msg == "失败") {
				$.get("http://47.104.244.134:8080/useremail.do", {
					"email": $("#email").val()
				}, function(data) {
					if(data.msg == "失败") {
						//注册接口
						$.post("http://47.104.244.134:8080/usersave.do", {
							"username": $("#userName").val(),
							"password": $("#password").val(),
							"email": $("#email").val(),
							"sex": "男"
						}, function(data) {
							$(window).attr('location', 'login.html');
						});
					} else {
						$("#email").parent().find(".mistakeTip").show().html("此邮箱已存在！")
					}
				})
			} else {
				$("#userName").parent().find(".mistakeTip").show().html("此用户名已存在！");
			}
		});
	})

	$(".judgeDel").click(function() {
		$(this).parent().parent().find(".text").val("");
	})
})