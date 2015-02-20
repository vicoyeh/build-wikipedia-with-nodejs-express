$(document).ready(function(){
	//$('.glyphicon-ok').hide();

	$('.box').click(function(){
		$(this).find('.glyphicon').hide();
		$(this).tooltip('destroy');
	});

	$('.box').tooltip();

	$('#delete').click(function(){
		window.location.href="index.html";
	});

});