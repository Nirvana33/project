// 瀑布流
$(function(){
	var box=$('.advert_img .box');
	var boxHeight=box.height();
		for(var i=0;i<box.length;i++){
			var num=i%4;
			switch(num){
				case 0: box.eq(i).css('left','0');	
				break;
				case 1: box.eq(i).css('left','310px');		
				break;
				case 2: box.eq(i).css('left','618px');
				break;
				case 3: box.eq(i).css('left','925px');
				break;
			}
			var num2=Math.floor(i/4);
			if(num2==0){box.eq(i).css('top',0)}else{
				var acount=0;
				for(var j=0;j<num2;j++){
					acount+=boxHeight+35;
					box.eq(i).css('top',acount);
				}
			}
		}
		$('.advert_img').height(boxHeight*Math.ceil(box.length/4)+30*(Math.ceil(box.length/4)));
		
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
	    if($(window).scrollTop()>240){$('.logo_fixed').show()}else{$('.logo_fixed').hide()}
	})
})