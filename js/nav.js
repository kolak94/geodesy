$(document).ready(function(){
	$('.toggle-nav').click(function(){
		$this = $(this);
		$nav =  $('.topNav');
		
		$nav.toggleClass('open');
	});

});