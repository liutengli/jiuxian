$(function() {

	$(".topOuter").load("html/head.html", function() {
		$.getScript("js/index.js")
	});
	$(".footerOuter").load("html/footer.html");

	//列表数据封装函数
	function page(pageNum, limitNum) {
		$.get("http://47.104.244.134:8080/goodsbytid.do", {
			"tid": 13,
			"page": pageNum,
			"limit": limitNum
		}, function(data) {
			var str = '';
			var data = data.data;
			
			for(var i = 0; i < data.length; i++) {
				if(data[i].picurl) {
					str += `<dl>
					<dt><a href="detail.html?id=${data[i].id}"></a><img src="${data[i].picurl}"/></a></dt>
					<dd>
						<p>￥${data[i].price/100}</p>
						<h3><a href="#">${data[i].name}</a></h3>
						<span><i>${data[i].star}</i>颗星</span>
						<a class="listCart" href="detail.html?id=${data[i].id}">商品详情</a>
					</dd>
				</dl>`;
				}
			}
			$(".listMainCen").html(str);
		});
	}
	//初始化
	page(1, 50);

	var pages = $(".page em").html();
	//下一页
	$(".page .pre").click(function() {
		pages++;
		page(pages, 100);
		$(".page em").html(pages)
	})
	//上一页
	$(".page .next").click(function() {
		if(pages == 1) {
			pages = 1;
		} else {
			pages--;
		}
		page(pages, 100);
		$(".page em").html(pages)
	})

	
})