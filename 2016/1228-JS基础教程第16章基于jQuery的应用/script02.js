$.getJSON(
	"http://api.flickr.com/services/feeds/photoset.gne?nsid=23922109@N00&set=72157600976524175&format=json&jsoncallback=?",
	function(data) {
		createPage(data);
	}
);

function createPage(imgData) {
	var imgs = "";
	$("#head").html(imgData.title);
	$("#subhead").html(imgData.description);

	$.each(imgData.items, function(i, item) {
		imgs += "<li class='ui-state-default'><a href='" + item.link + "'><img src='";
		imgs += item.media.m.replace(/_m/g,"_q") + "' alt='" + item.title + "'></a></li>";
	});

	$("#sortable").append(imgs);
	$("#sortable").sortable().disableSelection();
}
