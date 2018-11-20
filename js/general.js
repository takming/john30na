$(document).ready(function() { 
	$('.block').css('height',$(window).height());
	$('.block').css('width',$(window).width());

	$('.words').css('width',$(window).width()/3);
	$('.words').css('height',$(window).height());
	$('.words').css('left', - $(window).width()/3);

	$('.l-half').css('width',$(window).width()/2);
	$('.l-half').css('height',$(window).height());
	$('.l-half').css('left', - $(window).width()/2);

	$('.r-half').css('width',$(window).width()/2);
	$('.r-half').css('height',$(window).height());
	$('.r-half').css('right', - $(window).width()/2);

	$('.block14').css('height',$(window).height()/2);
	$('.block14').css('width',$(window).width());
	$('.block14').css('left', - $(window).width());


	$('.block15').css('height',$(window).height()/2);
	$('.block15').css('width',$(window).width());
	$('.block15').css('right', - $(window).width());

	$('.block27').css('height',$(window).height());
	$('.block27').css('width',$(window).width());
	$('.block27').css('left', - $(window).width());

	
	$('.block28').css('height',$(window).height());
	$('.block28').css('width',$(window).width());
	$('.block28').css('right', - $(window).width());
	


});



$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var bottom_of_window = $(window).scrollTop() + $(window).height();


	if ( bottom_of_window > 2* $(window).height() && bottom_of_window <3* $(window).height())
		 $('.block3').css('left',(($(window).scrollTop()- 2*$(window).height())/$(window).height()) *$(window).width()/3);

	if ( bottom_of_window > 5* $(window).height() && bottom_of_window <6* $(window).height())
		 $('.block7').css('left',(($(window).scrollTop()- 5*$(window).height())/$(window).height()) *$(window).width()/2);
	if ( bottom_of_window > 5* $(window).height() && bottom_of_window <6* $(window).height())
	 	$('.block8').css('right',(($(window).scrollTop()- 5*$(window).height())/$(window).height()) *$(window).width()/2);

	 if ( bottom_of_window > 11* $(window).height() && bottom_of_window <12* $(window).height())
		 $('.block14').css('left',(($(window).scrollTop()- 11*$(window).height())/$(window).height()) *$(window).width());
	if ( bottom_of_window > 11* $(window).height() && bottom_of_window <12* $(window).height())
	 	$('.block15').css('right',(($(window).scrollTop()- 11*$(window).height())/$(window).height()) *$(window).width());

	 if ( bottom_of_window > 23* $(window).height() && bottom_of_window <24* $(window).height())
		 $('.block27').css('left',(($(window).scrollTop()- 23*$(window).height())/$(window).height()) *$(window).width());
	if ( bottom_of_window > 24* $(window).height() && bottom_of_window <25* $(window).height())
	 	$('.block28').css('right',(($(window).scrollTop()- 24*$(window).height())/$(window).height()) *$(window).width());

});