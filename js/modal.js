
$(document).ready(function(){
	$('#triggerModal').click(function(e){
		e.preventDefault();
		$('.modal').fadeIn(500);
	})
	$('close').click(function(e){
		e.preventDefault();
		$('.modal').fadeOut(900);
	});
	$(document).mouseup(function(e){
		var sub = $('.modal');
		if(e.target.id != sub.attr('id') && !sub.has(e.target).length) {
			sub.fadeOut(900);
		}	
	});
});