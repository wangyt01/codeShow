$(document).ready(function() {
	$("a").click(function(evt) {
		$("#colorMe").css({
			"color": $(this).attr("id")
		});
		evt.preventDefault();
	});
});
