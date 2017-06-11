// 瀑布流
$(function(){
	var index=[$('.product_advert'),$('.product_ppt'),$('.product_taobao'),$('.product_background'),$('.product_video')];
	for(var m=0;m<index.length;m++){
	var box=index[m].find('.box');
	var boxHeight=box.height();
		for(var i=0;i<box.length;i++){
			var num=i%3;
			switch(num){
				case 0: box.eq(i).css('left','0');	
				break;
				case 1: box.eq(i).css('left','407px');		
				break;
				case 2: box.eq(i).css('left','814px');
				break;
			}
			var num2=Math.floor(i/3);
			if(num2==0){box.eq(i).css('top',0)}else{
				var acount=0;
				for(var j=0;j<num2;j++){
					acount+=boxHeight+30;
					box.eq(i).css('top',acount);
				}
			}
		}
		var a=index[m].find('.advert_img').height(boxHeight*box.length/3+30*(box.length/3-1));
		
	};
})
// PPT流动
$(function(){
	var div1=$("<a href=''></a>"),div2=$("<a href=''></div>");
	div1.addClass('PPT_top');
	div2.addClass('PPT_bottom');
	div1.appendTo($('.PPT .box'));
	div2.appendTo($('.PPT .box'));
	var timeId=null;
		$('.PPT .PPT_bottom').hover(function(){
			var now=$(this).siblings('img');
			timeId=setInterval(function(){
			now.css('top','-='+1+'px');
			if(parseInt(now.css('top'))<=$('.PPT .box').height()-now.height()){
				now.css('top',$('.PPT .box').height()-now.height())}
		},1)
	},function(){
		clearInterval(timeId)
	})
	$('.PPT_top').hover(function(){
			var now=$(this).siblings('img');
			timeId=setInterval(function(){
				if(parseInt(now.css('top'))>=0){now.css('top',0)}else{
				now.css('top','+='+1+'px')}
			},1)
		},function(){
			clearInterval(timeId)
		})		
})
// 导航
$(function(){
	$('.left_nav li').hover(function(){
		$(this).addClass('current').siblings().removeClass('current');
	},function(){
		$(this).removeClass('current')
	})
	$(document).scroll(function(){
		var t=$(this).scrollTop();var li=$('.left_nav li');
		if(t<700){$('.left_nav').css('display','none')}else
		if(t>=700&&t<2700){$('.left_nav').css('display','block');li.eq(1).addClass('sc_color').siblings().removeClass('sc_color')}
		if(t>=2700&&t<4750){li.eq(2).addClass('sc_color').siblings().removeClass('sc_color')}else 
		if(t>=4750&&t<6200){li.eq(3).addClass('sc_color').siblings().removeClass('sc_color')}else
		if(t>=6200&&t<7600){li.eq(4).addClass('sc_color').siblings().removeClass('sc_color')}else
		if(t>=7600){li.eq(5).addClass('sc_color').siblings().removeClass('sc_color')}
	})

	$('.left_nav li').not('.left_nav .back_top').click(function(){
		var textname=$(this).children('a').text();
		var ptop=$("div[name="+textname+"]").offset().top;
		$('body').animate({scrollTop:ptop+"px"},500)
	})
	$('.back_top').click(function(){
		$('body').animate({scrollTop:0+'px'},500)
	})

	$(window).scroll(function(){
		if($(window).scrollTop()>280){$('#right_nav .back_top').show()}else{$('#right_nav .back_top').hide()}
	})
})
// 二维码
$(function(){
	$('#right_nav li:nth-child(5)').hover(function(){
		$('#er_code').show();
	},function(){
		$('#er_code').hide()
	})
})
//弹框
$(function(){
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	var popWidth=$('.pop').outerWidth(true);
	var popHeight=$('.pop').outerHeight(true);
	var popLeft=(winWidth-popWidth)/2;
	var popTop=(winHeight-popHeight)/2;

	var popDiv=$('<div class="div1"></div>');
	var divWidth=$(document).width();
	var divHeight=$(document).height();
		
	$('.login-right .right_1 a').click(function(){
		$('.pop').fadeIn(20).addClass("animated bounceIn");
		$('body').prepend(popDiv);
		$('.div1').width(divWidth).height(divHeight);
	})

	$('.pop .close_pop').click(function(){
		$('.pop').hide();
		$('.div1').remove()
	})
	$(window).resize(function(){
		winWidth=$(window).width();
	    winHeight=$(window).height();
	    popLeft=(winWidth-popWidth)/2;
	    popTop=(winHeight-popHeight)/2;
	    $('.pop').animate({'left':popLeft+'px','top':popTop+'px'},10)
	}).dequeue();
})
