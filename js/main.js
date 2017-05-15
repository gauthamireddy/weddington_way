$(document).ready(function(){
	$('.perfect-pair-dresses-display>div, .now-neutrals-dresses-display>div, .gold-rush-dresses-display>div').on('click', function(){
		$(this).toggleClass('changed');
	});

	setInterval(function(){
	   $('.main_bg').toggleClass('changedonce changedtwice');
	}, 2000);

	$('.now-neutrals-dresses > button, .perfect-pair-dresses > button, .gold-rush-dresses > button').click(function(){
		$(this).text('Saved');
	});

});