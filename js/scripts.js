$('#vic').on('click',function(){
	$('.containerShow1').css({
		display: 'block'
	}).animate({
		opacity: 1
	}, 1000)
	$('.containerShow').css({
		display: 'none'
	}).animate({
		opacity: 0
	}, 1000);
	$('.containerShow2').css({
		display: 'none'
	}).animate({
		opacity: 0
	}, 1000);
});

$('#ass').on('click',function(){
	$('.containerShow2').css({
		display: 'block'
	}).animate({
		opacity: 1
	}, 1000)
	$('.containerShow').css({
		display: 'none'
	}).animate({
		opacity: 0
	}, 1000);
	$('.containerShow1').css({
		display: 'none'
	}).animate({
		opacity: 0
	}, 1000);
});
$('#Dir').on('click',function(){
	$('.containerShow').css({
		display: 'block'
	}).animate({
		opacity: 1
	}, 1000)
	$('.containerShow2').css({
		display: 'none'
	}).animate({
		opacity: 0
	}, 1000);
	$('.containerShow1').css({
		display: 'none'
	}).animate({
		opacity: 0
	}, 1000);
});



   