function jQuery1(data) {
	data = data.resultList;
	var str = "";
	var oUl = $(".searchHide").children();
	if(data==undefined) {
		oUl.html('');
	} else {
		for(var i = 0; i < data.length; i++) {
			str += "<li><a href='" + data[i].url + "'>" + data[i].word + "</a><span>约" + data[i].count + "件商品</span></li>"
		}
		str += "<li class='lastLi'><span>x</span></li>"
		oUl.html(str);
	}

	$(".lastLi span").click(function() {
		$(".searchHide").hide();
	})
}
$(function() {
	//搜索接口
	var txt = $("#txt");
	txt.on("input propertychange", function() {
		var oScrip = document.createElement("script");
		oScrip.src = "http://list.jiuxian.com/assKeyWords.htm?t=1551357602415&callback=jQuery1&wd=" + $(this).val() + "&area=11&searchUserKey=02e522fb-e291-1b0f-87f4-1ae001688dca&randomTest=0.048082342015210555&_=1551357589963";
		document.body.append(oScrip);

	})

	//图片数据
	function dataTest(num1, num2) {
		var data = [{
			imgSrc: "img/a8aa081133ae4871ab26071d716a31102.jpg",
			title: "53°汾酒集团青瓷一坛香1500ml（双瓶装）",
			price: "￥1399"
		}, {
			imgSrc: "img/04ac75b9351341978bcd4d9e910feabf2.jpg",
			title: "47°五粮液股份公司华表-典藏级",
			price: "￥1949"
		}, {
			imgSrc: "img/4c9c7fc2fcf247e283b14637fe1862992.jpg",
			title: "53°汾酒集团青瓷一坛香1500ml（双瓶装）",
			price: "￥1014"
		}, {
			imgSrc: "img/4c914546f761470c87667597d39a4d892.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥1999"
		}, {
			imgSrc: "img/8b7448b5c69c4ec98bb34bb63d9c03ed2.jpg",
			title: "53°汾酒集团青瓷一坛香1500ml（双瓶装）",
			price: "￥1399"
		}, {
			imgSrc: "img/70d9ee9a39744b1da7d72580e0a3c7162.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥1949"
		}, {
			imgSrc: "img/78c0b66acb7a4707aedb70de47000a812.jpg",
			title: "53°汾酒集团青瓷一坛香1500ml（双瓶装）",
			price: "￥1014"
		}, {
			imgSrc: "img/217f5c4647c6463081c99ab36707eb072.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥1999"
		}, {
			imgSrc: "img/9715bc90ea774107be306c25872760e62.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥199"
		}, {
			imgSrc: "img/37790b1613d6461dbf9f970ad2e07c1c2.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥1999"
		}, {
			imgSrc: "img/cc113aa8ab974024a08bdf65121d660a2.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥199"
		}, {
			imgSrc: "img/c6bdbab51b654fe29dd9a1a2d570be932.jpg",
			title: "53°汾酒集团青瓷一坛香1500ml（双瓶装）",
			price: "￥1399"
		}, {
			imgSrc: "img/fc979c1278c5468a95150ec47723a1b22.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥1949"
		}, {
			imgSrc: "img/78c0b66acb7a4707aedb70de47000a812.jpg",
			title: "53°汾酒集团青瓷一坛香1500ml（双瓶装）",
			price: "￥1014"
		}, {
			imgSrc: "img/ccb9a3a3f90b4d0db213413775822edf2.jpg",
			title: "52°五粮液股份公司华表-典藏级",
			price: "￥1999"
		}, {
			imgSrc: "img/4fdb6b300ff54b2ca0f118df312e87fb2.jpg",
			title: "42°杏花村汾酒（优级）（黄盖玻璃）",
			price: "￥199"
		}];
		var str = '';
		for(var i = num1; i < num2; i++) {
			str += `<dl>
					<dt>
						<a href="list.html"><img src="${data[i].imgSrc}"/></a>
					</dt>
					<dd>
						<a href="#">${data[i].title}</a>
						<p>${data[i].price}</p>
					</dd>
				</dl>`;
		}
		return str;
	}
	$(".MaoTaiNavLeft .MaoTaiNavLeftCan").html(dataTest(0, 10));
	$(".recommendList1 .MaoTaiNavLeftCan").html(dataTest(4, 10));
	$(".recommendList2 .MaoTaiNavLeftCan").html(dataTest(10, 16));
	$(".recommendList3 .MaoTaiNavLeftCan").html(dataTest(3, 9));
	$(".floorFirst .MaoTaiNavLeftCan").html(dataTest(1, 11));
	$(".floorSecond .MaoTaiNavLeftCan").html(dataTest(3, 13));
	$(".floorThree .MaoTaiNavLeftCan").html(dataTest(0, 10));
	$(".floorFour .MaoTaiNavLeftCan").html(dataTest(5, 15));
	$(".floorFive .MaoTaiNavLeftCan").html(dataTest(2, 12));

	$(".MaoTaiNavLeft li").mouseover(function() {
		$(this).addClass("MaoTaiNavCur").siblings().removeClass("MaoTaiNavCur");
		$(".MaoTaiNavLeft .MaoTaiNavLeftCan").html(dataTest($(this).index(), $(this).index() + 10));
	})
	$(".MaoTaiNavRight1 li").mouseover(function() {
		$(this).addClass("MaoTaiNavCur").siblings().removeClass("MaoTaiNavCur");
	})

	//登录注册的变换
	if(getCookie("user")) {
		var obj = JSON.parse(getCookie("user"));
		$("#indexLogin,.indexLogin").html(obj.name).attr("href", "#");
		$("#indexRegist").html("退出").attr("href", "#").click(function() {
			removeCookie("user");
			removeCookie("allCars");
			$("#indexLogin").html("请登录").attr("href", "login.html");
			$(this).html("免费注册");
			window.location.href = "index.html";
		});
		$("#allCargoods").html(getCookie("allCars"));
	}

	//让隐藏的盒子显示的方法
	function myHover(ele1, eleHide) {
		$(ele1).hover(function() {
			$(ele1).css("background", "#fff");
			$(eleHide).show();
		}, function() {
			$(eleHide).hover(function() {
				$(eleHide).show();
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

	//全部商品分类
	$(".goodsDetails li").hover(function() {
		$(".goodsBox").show();
	}, function() {
		$(".goodsBox").hover(function() {
			$(this).show()
		}, function() {
			$(this).hide();
		})
		$(".goodsBox").hide();
	})

	//大轮播图
	var count = 0;
	var timer = null;

	function imgChang(count) {
		$(".banImg li").eq(count).fadeIn(1000).siblings().fadeOut(1000);
		$(".banBtn i").eq(count).addClass("select").siblings().removeClass("select");
	}
	//移动函数
	function move() {
		timer = setInterval(function() {
			count++;
			if(count == $(".banImg li").length) {
				count = 0;
			}
			imgChang(count);
		}, 3000);
	}
	move();
	//鼠标经过图片，停止动画，移开执行动画
	$(".banImg").hover(function() {
		clearInterval(timer);
	}, function() {
		move();
	});
	//图片与下标对应
	$(".banBtn i").hover(function() {
		clearInterval(timer);
		var index = $(this).index();
		count = index;
		imgChang(count);
	}, function() {
		move();
	})

	//小轮播图
	function myAnimate(target, className, timer) {
		//设置全局变量
		var cur = 0; //当前的图片序号
		var timer1 = null; //设置定时定时器的名字，方便后面关闭
		var liList = $(target).find("li")
		var imgLen = liList.length; //获取图片的数量
		var btnIndex = $(target).find("i");

		clearInterval(timer1);
		//封装图片自动播放函数
		function changeImg() {
			timer1 = setInterval(function() {
				cur++;
				if(cur == imgLen) {
					$(target).find("ul").css({
						"left": 0
					});
					cur = 1;
				}
				if(cur == imgLen - 1) {
					btnIndex.eq(0).addClass(className).siblings().removeClass(className);
				} else {
					btnIndex.eq(cur).addClass(className).siblings().removeClass(className);
				}
				$(target).find("ul").animate({
					"left": -cur * liList.innerWidth()
				});
			}, timer);
		}

		//调用函数
		changeImg();
		//当鼠标移到图片上关闭定时器，离开时则重置定时器
		$(target).hover(function() {
			clearInterval(timer1);
		}, function() {
			changeImg();
		});

		//为下方的圆点按钮绑定事件
		btnIndex.hover(function() {
			clearInterval(timer1);
			var index = $(this).index();
			cur = index;
			btnIndex.eq(cur).addClass(className).siblings().removeClass(className);
			$(target).find("ul").animate({
				"left": -cur * liList.innerWidth()
			});
		}, function() {
			changeImg();
		});

	}

	myAnimate(".MaoTaiNavRightLunbo1", 'on', 2500);
	myAnimate(".MaoTaiNavRightLunbo2", 'on', 4000);
	myAnimate(".floorFirst .floorDetailsTopLeft", "on2", 2000);
	myAnimate(".floorSecond .floorDetailsTopLeft", "on2", 3000);
	myAnimate(".floorThree .floorDetailsTopLeft", "on2", 2000);
	myAnimate(".floorFour .floorDetailsTopLeft", "on2", 3000);
	myAnimate(".floorFive .floorDetailsTopLeft", "on2", 2000);

	//优惠推荐
	$(".cheapTilRigth span").click(function() {
		$(this).addClass("on2").siblings().removeClass("on2");
		var index = $(this).index();
		$(".allRecommend").animate({
			"left": -index * 1188 + "px"
		}, 1000);
	})
	//右按钮
	$(".rightBtn").click(function() {
		var _left = Math.abs($(".allRecommend").offset().left);
		var x = parseInt(_left / 900);
		if(x == 2) {
			_left = _left;
		} else {
			x++;
		}
		$(".cheapTilRigth span").eq(x).addClass("on2").siblings().removeClass("on2");
		$(".allRecommend").animate({
			"left": -x * 1188 + "px"
		}, 1000);
	})
	//左按钮
	$(".leftBtn").click(function() {
		var _left = Math.abs($(".allRecommend").offset().left);
		var x = parseInt(_left / 900);
		if(x == 0) {
			_left = _left;
		} else {
			x--;
		}
		$(".cheapTilRigth span").eq(x).addClass("on2").siblings().removeClass("on2");
		$(".allRecommend").animate({
			"left": -x * 1188 + "px"
		}, 1000);
	})

	//楼梯
	$(".floorNav span").hide();
	$(".floorNav li:not(:last)").hover(function() {
		$(this).find("p").fadeIn(500).siblings().hide(300);
	}, function() {
		$(this).find("p").fadeOut(500).siblings().show(300);
	})

	//楼梯内容
	//做个标志（让鼠标点击那一个只显示哪一个，不会依次显示）
	var flag = true;
	var flag1 = true;
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if(scrollTop > 600 && flag1) {
			$(".ad").fadeIn(300);
			$(".ad i").click(function() {
				$(".ad").hide();
				flag1 = false;
			})
		} else {
			$(".ad").fadeOut(300);
		}

		if(scrollTop > 1355) {
			$(".floorNav").show();
		} else {
			$(".floorNav").hide();
		}

		if(flag) {
			var index = Math.floor((scrollTop - 1400) / 700);
			$(".floorNav li").eq(index).find("span").show(500).parent().siblings()
				.hide(300);

			$(".floorNav li").eq(index).siblings().find("span").hide().parent()
				.parent().find("i").show();
		}

		$(".floorNav li:not(:last)").click(function() {
			var _index = $(this).index();
			flag = false;
			//console.log($(".floorCen>.floorBox").eq(_index).offset().top);
			$("body,html").stop().animate({
				"scrollTop": $(".floorCen>.floorBox").eq(_index).offset().top
			}, 1000);
			$(this).find("span").show(500).parent().siblings().hide(300)
				.parent().siblings().find("span").hide().parent().find("a").show(300)
				.parent().find("i").show();
		})

		$(".floorNav li:last").click(function() {
			$("body,html").stop().animate({
				"scrollTop": 0
			}, 1000);
			$(".floorNav li").find("span").hide().parent().find("a").show(300)
				.parent().find("i").show();
		})
	})

	//底部官方推荐
	$(".officialRecommendTil li").mouseenter(function() {
		var index = $(this).index();
		$(".officialRecommendTilSlider").stop().animate({
			"left": index * 105 + "px"
		}, 300);
	})

	$(".logoAllCan li").hover(function() {
		$(this).find("img").animate({
			"marginLeft": "-100px"
		}, 500)
	}, function() {
		$(this).find("img").animate({
			"marginLeft": 0
		}, 500)
	})

	//底部微信
	$(".weixin .weixinText").mouseenter(function() {
		$(this).next().show(200);
	})
	$(".weixin img").mouseleave(function() {
		$(this).hide(200);
	})

	//右侧导航
	$(".rsItemName").hover(function() {
		$(this).next().show();
	}, function() {
		$(".rsItemCon").hover(function() {
			$(this).show()
		}, function() {
			$(this).hide();
		})
		$(this).next().hide();
	})

	$(".backTop").click(function() {
		$("body,html").stop().animate({
			"scrollTop": 0
		}, 1000);
	})

	//拖拽
	//三要素（事件名） mousedown mousemove mouseup
	var oBox = $(".sidebarOnline");
	$(".onlineTil").mousedown(function(e) {
		var evt = e || event;
		//鼠标距离oBox的上、左的距离
		var x = evt.offsetX;
		var y = evt.offsetY;
		//可是区域的宽高 
		var cw = $(window).width();
		var ch = $(window).height();
		//oBox的宽高
		var bw = oBox.innerWidth();
		var bh = oBox.innerHeight();
		$(document).on("mousemove", function(e) {
			var evt = e || event;
			var _left = evt.clientX - x;
			var _top = evt.clientY - y;

			_left = _left <= 0 ? 0 : _left >= cw - bw ? cw - bw : _left;
			_top = _top <= 0 ? 0 : _top >= ch - bh ? ch - bh : _top;

			oBox.css("left", _left + "px");
			oBox.css("top", _top + "px");
		})
		$(document).mouseup(function(e) {
			$(document).off("mousemove");
		})

	})

	//发送信息
	var content = $(".sendContent");
	var txt = $(".content");
	var btn = $("#btn");
	var str = '';

	function msg() {
		var val = txt.val();
		str += "<span>" + val + "</span><br><br>"
		content.html(str);
		txt.val("");
		content.scrollTop(content[0].scrollHeight - 145); //box向上卷曲的高度等于box的实际的高度-200
	}
	btn.click(function() {
		msg();
	});

	$(document).keydown(function(e) {
		var evt = e || event;
		if(evt.ctrlKey && evt.keyCode == 13 || evt.keyCode == 13) {
			msg();
		}
	})

	$(".onlineService .rsItemName").click(function() {
		$(".sidebarOnline").show();
	})

	$(".onlineSent em,.sidebarOnlineHide").click(function() {
		$(".sidebarOnline").hide();
	})

})