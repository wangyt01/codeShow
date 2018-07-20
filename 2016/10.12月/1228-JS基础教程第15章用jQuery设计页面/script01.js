$(document).ready(function() {
	$("#bodyText").hide();

	$("#textToggle").click(
		function() {
			$("#bodyText").toggle("highlight", {}, 2000);
			return false;
		}
	);
});
