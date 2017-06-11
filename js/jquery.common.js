// 瀑布流
$(function(){
	var box=$('.advert_img .box');
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
		$('.advert_img').height(boxHeight*Math.ceil(box.length/3)+30*(Math.ceil(box.length/3)-1));
		
})
// 二维码
$(function(){
	$('#right_nav li:last-child').hover(function(){
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
//顶部固定
$(function(){
	$(window).scroll(function(){
		$('.login').slideUp(1);
		$('.logo').animate({top:0},1);
		if($(window).scrollTop()==0){$('.login').slideDown(1);$('.logo').animate({top:'42px'},1)}
	})
})
//列表
$(function(){
	$('.item_list li>a').click(function(){
		$(this).parent('li').addClass('current').siblings('li').removeClass('current');
	})
	$('#item_list1 li.current>a,.item_option .first').click(function(){
		$('.item_option').hide();
		$('#item_list2').hide();
	})
	$('#item_list1 li').not('.item_list li:first-child').children('a').click(function(){
		var txt=$(this).text();
		$('.item_option').show();
		$('.item_option .first').show().html(txt+'<i></i>');
		$('#item_list2').show();
	})
	$('#item_list2 li,#item_list3 li').not('.item_list li:first-child').children('a').click(function(){
		var txt=$(this).text();
		if($('.item_option').css('display','inline-block')){
			$('.item_option .second').show().html(txt+'<i></i>');
		}
	})
	$('.item_option .second').click(function(){
		$(this).hide();
	})
	$('.look-more').click(function(){
		var now=$(this).text();
		if(now=='更多'){$(this).addClass('up').html('<i></i>'+'收起')}else{
			$(this).removeClass('up').html('<i></i>'+'更多')
		}
	})
	$('#item_list3 .look-more').click(function(){
		$('#item_list3').toggleClass('item_list3');
	})
})
