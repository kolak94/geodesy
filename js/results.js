
$(document).ready(function(){
	$(window).scroll(function(){
		$('.count').each(function(i){
			var bottomBox = $(this).offset().top + $(this).outerHeight();
			var bottomWindow = $(window).scrollTop() + $(window).height();
			if(bottomWindow > bottomBox) {
				$(this).countTo();
				
				
			}
		})
	});
});